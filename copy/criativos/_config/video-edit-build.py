#!/usr/bin/env python3
"""
Padrão CANÔNICO de edição dos finais (Stage 4) — fonte única da verdade.
Aprovado 2026-06-05 (piloto f01, L2). Spec descritiva: _config/video-edit-style.md

Aplica EXATAMENTE a receita:
  - corta pausas (perfil equilibrado: silêncio >=0.30s -> deixa ~120ms)
  - punch-in alternado 100%/104% pra disfarçar jump cuts
  - fade de áudio 30ms em cada boundary
  - legenda ASS (PlayRes 1080x1920, Fontsize 52, estilo do final antigo)
  - extração com INPUT-SEEK (senão áudio some) + concat lossless + burn por último

Uso:
  python3 _config/video-edit-build.py f01
  python3 _config/video-edit-build.py f01 f02 f04 f05 f06 f08   # lote
  python3 _config/video-edit-build.py --all                      # f01..f10
  python3 _config/video-edit-build.py f01 --profile agressivo    # suave|equilibrado|agressivo

Pré-requisito por id: 03-video/full/<id>.mp4  +  02-audio/full/<id>.subtitle.json
Saída: sobrescreve 04-finais/full/<id>.mp4
"""
import json, subprocess, re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # .../copy/criativos

# ---- perfis de corte (equilibrado = padrão) ----
PROFILES = {
    "suave":       {"thresh": 0.45, "keep": 0.15},
    "equilibrado": {"thresh": 0.30, "keep": 0.12},
    "agressivo":   {"thresh": 0.18, "keep": 0.08},
}

# ---- legenda (estilo fixo, casa com os finais antigos) ----
ASS_HEADER = """[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2.5,2,2,120,120,320,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text"""
WORDS_PER_CUE = 6
SILENCE_DB = 30          # silencedetect noise=-30dB
SILENCE_MIN = 0.15       # d=0.15


def detect_silences(src):
    out = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", src,
         "-af", f"silencedetect=noise=-{SILENCE_DB}dB:d={SILENCE_MIN}", "-f", "null", "-"],
        capture_output=True, text=True).stderr
    sil, cur = [], {}
    for m in re.finditer(r"silence_(start|end): ([\d.]+)", out):
        k, v = m.group(1), float(m.group(2))
        if k == "start":
            cur = {"start": v}
        else:
            cur["end"] = v
            sil.append(cur)
            cur = {}
    return sil


def keep_segments(src, dur, prof):
    sil = detect_silences(src)
    pad = prof["keep"] / 2
    cuts = []
    for s in sil:
        if s["end"] - s["start"] >= prof["thresh"]:
            cf, ct = s["start"] + pad, s["end"] - pad
            if ct > cf:
                cuts.append((round(cf, 3), round(ct, 3)))
    segs, prev = [], 0.0
    for cf, ct in cuts:
        if cf > prev:
            segs.append((round(prev, 3), round(cf, 3)))
        prev = ct
    if prev < dur:
        segs.append((round(prev, 3), round(dur, 3)))
    return [(s, e) for s, e in segs if e - s >= 0.15]  # dropa slivers


def reconstruct_words(sub_json):
    """Words com offset GLOBAL (word_begin/end são char idx no texto inteiro)."""
    mm = json.load(open(sub_json))
    words = []
    for sent in mm:
        base, txt, units = sent["text_begin"], sent["text"], sent["timestamped_words"]
        for m in re.finditer(r"\S+", txt):
            c0, c1 = base + m.start(), base + m.end()
            ov = [u for u in units if not (u["word_end"] <= c0 or u["word_begin"] >= c1)]
            if not ov:
                continue
            words.append([m.group(0),
                          min(u["time_begin"] for u in ov) / 1000.0,
                          max(u["time_end"] for u in ov) / 1000.0])
    sent_ends, i = set(), 0
    for sent in mm:
        i += len(re.findall(r"\S+", sent["text"]))
        sent_ends.add(i - 1)
    return words, sent_ends


def build_ass(words, sent_ends, segs, ass_path):
    offs, acc = [], 0.0
    for s, e in segs:
        offs.append(acc); acc += (e - s)

    def s2o(t):
        for (s, e), o in zip(segs, offs):
            if s <= t <= e:
                return o + (t - s)
        best = 0.0
        for (s, e), o in zip(segs, offs):
            if t < s:
                return o
            if t > e:
                best = o + (e - s)
        return best

    cues, cur = [], []
    for idx, (tok, t0, t1) in enumerate(words):
        cur.append((tok, t0, t1))
        if len(cur) >= WORDS_PER_CUE or idx in sent_ends:
            cues.append(cur); cur = []
    if cur:
        cues.append(cur)

    def afmt(t):
        h = int(t // 3600); m = int((t % 3600) // 60); s = t % 60
        return f"{h:d}:{m:02d}:{s:05.2f}"

    lines = [ASS_HEADER]
    for c in cues:
        o0, o1 = s2o(c[0][1]), s2o(c[-1][2])
        if o1 <= o0:
            o1 = o0 + 0.4
        text = " ".join(w for w, _, _ in c).lstrip(" ,.;:")
        if text:
            text = text[0].upper() + text[1:]
        lines.append(f"Dialogue: 0,{afmt(o0)},{afmt(o1)},Cap,,0,0,0,,{text}")
    open(ass_path, "w").write("\n".join(lines))
    return len(cues)


def build(fid, profile="equilibrado"):
    src = f"{BASE}/03-video/full/{fid}.mp4"
    sub = f"{BASE}/02-audio/full/{fid}.subtitle.json"
    out = f"{BASE}/04-finais/full/{fid}.mp4"
    work = f"{BASE}/03-video/full/edit/_{fid}_build"
    os.makedirs(work, exist_ok=True)
    assert os.path.exists(src), f"falta {src}"
    assert os.path.exists(sub), f"falta {sub}"
    prof = PROFILES[profile]

    dur = float(subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", src], capture_output=True, text=True).stdout.strip())

    segs = keep_segments(src, dur, prof)
    words, sent_ends = reconstruct_words(sub)
    ncues = build_ass(words, sent_ends, segs, f"{work}/{fid}.ass")
    final_dur = sum(e - s for s, e in segs)
    print(f"[{fid}] {profile}: {len(segs)} segs, {dur:.1f}s -> {final_dur:.1f}s, "
          f"{len(words)} palavras, {ncues} cues")

    # extract por-segmento: INPUT-SEEK + punch-in alternado + fades 30ms
    with open(f"{work}/concat.txt", "w") as lf:
        for i, (s, e) in enumerate(segs):
            d = e - s
            seg = f"{work}/seg{i:02d}.mp4"
            vf = ("scale=trunc(iw*1.04/2)*2:trunc(ih*1.04/2)*2,crop=1080:1920,setsar=1"
                  if i % 2 == 1 else "scale=1080:1920,setsar=1")
            af = f"afade=t=in:st=0:d=0.03,afade=t=out:st={max(0, d-0.03):.3f}:d=0.03"
            subprocess.run(
                ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
                 "-ss", f"{s:.3f}", "-i", src, "-t", f"{d:.3f}",
                 "-vf", vf, "-af", af,
                 "-r", "25", "-c:v", "libx264", "-crf", "18", "-preset", "medium",
                 "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k",
                 "-ar", "48000", "-ac", "2", seg], check=True)
            lf.write(f"file '{seg}'\n")

    subprocess.run(["ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
                    "-f", "concat", "-safe", "0", "-i", f"{work}/concat.txt",
                    "-c", "copy", f"{work}/concat.mp4"], check=True)

    # burn ASS POR ÚLTIMO (áudio copy)
    subprocess.run(["ffmpeg", "-y", "-hide_banner", "-loglevel", "error",
                    "-i", f"{work}/concat.mp4", "-vf", f"ass={work}/{fid}.ass",
                    "-c:v", "libx264", "-crf", "18", "-preset", "medium",
                    "-pix_fmt", "yuv420p", "-c:a", "copy", out], check=True)
    print(f"[{fid}] ✅ {out}")


if __name__ == "__main__":
    args = sys.argv[1:]
    profile = "equilibrado"
    if "--profile" in args:
        i = args.index("--profile")
        profile = args[i + 1]; del args[i:i + 2]
    if "--all" in args:
        ids = [f"f{n:02d}" for n in range(1, 11)]
    else:
        ids = [a for a in args if not a.startswith("--")]
    if not ids:
        print(__doc__); sys.exit(1)
    for fid in ids:
        build(fid, profile)
