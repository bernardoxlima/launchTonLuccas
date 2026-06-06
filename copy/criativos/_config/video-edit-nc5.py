#!/usr/bin/env python3
"""
Edição dos finais NC5 modulares (hook+body+cta) — MESMO padrão dos full.
Spec: _config/video-edit-style.md  |  Recipe base: _config/video-edit-build.py

Diferença vs full: a fonte não é um arquivo único — remonta os componentes
LIMPOS (sem legenda) de 03-video/ e tira o texto+timing dos .ass já existentes
em 04-finais/_legendado/ (de onde veio a legenda amarela), combinando com offset
= duração acumulada. SEM Scribe. Resto idêntico ao padrão dos full: corte
equilibrado + punch-in alternado + legenda BRANCA (re-chunk ~6 palavras,
ASS PlayRes 1080x1920) + fades 30ms + burn por último.

Uso:
  python3 _config/video-edit-nc5.py NC5_h01_b02_cta02
  python3 _config/video-edit-nc5.py NC5_h01_b02_cta02 NC5_h02_b01_cta02 ...

Pré-req: 03-video/hooks|body/NC5-most-aware/*.mp4 + 03-video/ctas/cta*.mp4 (limpos)
         04-finais/_legendado/{hooks,body,ctas}/.../*.ass (texto+timing por componente)
Saída: SOBRESCREVE 04-finais/NC5-most-aware/<id>.mp4
"""
import subprocess, re, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROFILE = {"thresh": 0.30, "keep": 0.12}   # equilibrado (padrão)
WORDS_PER_CUE = 6
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


def dur(p):
    return float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration",
        "-of","csv=p=0",p],capture_output=True,text=True).stdout.strip())


def parts(wid):
    """id -> (video_limpo, ass_legendado) por componente."""
    m = re.match(r"NC5_h(\d+)_b(\d+)_cta(\d+)", wid)
    assert m, f"id inválido: {wid}"
    h, b, c = m.group(1), m.group(2), int(m.group(3))
    return [
        (f"{BASE}/03-video/hooks/NC5-most-aware/h{h}.mp4",
         f"{BASE}/04-finais/_legendado/hooks/NC5-most-aware/h{h}.ass"),
        (f"{BASE}/03-video/body/NC5-most-aware/b{b}.mp4",
         f"{BASE}/04-finais/_legendado/body/NC5-most-aware/b{b}.ass"),
        (f"{BASE}/03-video/ctas/cta{c}.mp4",
         f"{BASE}/04-finais/_legendado/ctas/cta{c}.ass"),
    ]


def ass_time(t):
    h, m, s = t.split(":")
    return int(h)*3600 + int(m)*60 + float(s)


def read_ass_cues(path):
    """Lê cues (start, end, text) de um .ass de componente."""
    cues = []
    for l in open(path):
        if l.startswith("Dialogue:"):
            p = l.split(",", 9)
            cues.append((ass_time(p[1]), ass_time(p[2]), p[9].strip()))
    return cues


def detect_silences(src):
    out = subprocess.run(["ffmpeg","-hide_banner","-nostats","-i",src,
        "-af","silencedetect=noise=-30dB:d=0.15","-f","null","-"],
        capture_output=True,text=True).stderr
    sil, cur = [], {}
    for m in re.finditer(r"silence_(start|end): ([\d.]+)", out):
        k, v = m.group(1), float(m.group(2))
        if k == "start": cur = {"start": v}
        else: cur["end"] = v; sil.append(cur); cur = {}
    return sil


def keep_segments(src, total):
    pad = PROFILE["keep"] / 2
    cuts = []
    for s in detect_silences(src):
        if s["end"] - s["start"] >= PROFILE["thresh"]:
            cf, ct = s["start"] + pad, s["end"] - pad
            if ct > cf: cuts.append((round(cf,3), round(ct,3)))
    segs, prev = [], 0.0
    for cf, ct in cuts:
        if cf > prev: segs.append((round(prev,3), round(cf,3)))
        prev = ct
    if prev < total: segs.append((round(prev,3), round(total,3)))
    return [(s,e) for s,e in segs if e-s >= 0.15]


def build(wid):
    work = f"{BASE}/03-video/full/edit/_{wid}_build"
    os.makedirs(work, exist_ok=True)
    out = f"{BASE}/04-finais/NC5-most-aware/{wid}.mp4"
    comps = parts(wid)
    for v, a in comps:
        assert os.path.exists(v), f"falta vídeo {v}"
        assert os.path.exists(a), f"falta .ass {a}"

    # 1. montar componentes LIMPOS -> montage (concat demuxer, copy)
    with open(f"{work}/comps.txt","w") as f:
        for v, _ in comps: f.write(f"file '{v}'\n")
    montage = f"{work}/montage.mp4"
    subprocess.run(["ffmpeg","-y","-hide_banner","-loglevel","error",
        "-f","concat","-safe","0","-i",f"{work}/comps.txt","-c","copy",montage],check=True)
    total = dur(montage)

    # 2. cues source = .ass dos componentes, offset = duração acumulada
    raw, off = [], 0.0
    for v, a in comps:
        for s, e, txt in read_ass_cues(a):
            raw.append((s+off, e+off, txt))
        off += dur(v)

    # 3. re-chunk pra ~6 palavras (merge de cues consecutivos, quebra em fim de frase)
    merged, cur = [], None
    for s, e, txt in raw:
        if cur is None:
            cur = [s, e, txt]
        else:
            cur[1] = e; cur[2] = (cur[2] + " " + txt).strip()
        wc = len(cur[2].split())
        if wc >= WORDS_PER_CUE or cur[2].rstrip()[-1:] in ".!?":
            merged.append(tuple(cur)); cur = None
    if cur: merged.append(tuple(cur))

    # 4. cortes (equilibrado) na montage + remap pra timeline cortada
    segs = keep_segments(montage, total)
    offs, acc = [], 0.0
    for s,e in segs: offs.append(acc); acc += (e-s)
    def s2o(t):
        for (s,e),o in zip(segs,offs):
            if s<=t<=e: return o+(t-s)
        best=0.0
        for (s,e),o in zip(segs,offs):
            if t<s: return o
            if t>e: best=o+(e-s)
        return best

    # 5. ASS branca
    def afmt(t):
        h=int(t//3600); m=int((t%3600)//60); s=t%60
        return f"{h:d}:{m:02d}:{s:05.2f}"
    lines=[ASS_HEADER]
    for s, e, txt in merged:
        o0, o1 = s2o(s), s2o(e)
        if o1<=o0: o1=o0+0.4
        txt = txt.strip().lstrip(" ,.;:")
        if txt: txt = txt[0].upper()+txt[1:]
        lines.append(f"Dialogue: 0,{afmt(o0)},{afmt(o1)},Cap,,0,0,0,,{txt}")
    open(f"{work}/{wid}.ass","w").write("\n".join(lines))
    final_dur=sum(e-s for s,e in segs)
    print(f"[{wid}] {len(segs)} segs, {total:.1f}s->{final_dur:.1f}s, {len(raw)} cues-src -> {len(merged)} cues")

    # 6. extract por-segmento: INPUT-SEEK + punch-in alternado + fades 30ms
    with open(f"{work}/concat.txt","w") as lf:
        for i,(s,e) in enumerate(segs):
            d=e-s; seg=f"{work}/seg{i:02d}.mp4"
            vf=("scale=trunc(iw*1.04/2)*2:trunc(ih*1.04/2)*2,crop=1080:1920,setsar=1"
                if i%2==1 else "scale=1080:1920,setsar=1")
            af=f"afade=t=in:st=0:d=0.03,afade=t=out:st={max(0,d-0.03):.3f}:d=0.03"
            subprocess.run(["ffmpeg","-y","-hide_banner","-loglevel","error",
                "-ss",f"{s:.3f}","-i",montage,"-t",f"{d:.3f}","-vf",vf,"-af",af,
                "-r","25","-c:v","libx264","-crf","18","-preset","medium","-pix_fmt","yuv420p",
                "-c:a","aac","-b:a","160k","-ar","48000","-ac","2",seg],check=True)
            lf.write(f"file '{seg}'\n")
    subprocess.run(["ffmpeg","-y","-hide_banner","-loglevel","error","-f","concat","-safe","0",
        "-i",f"{work}/concat.txt","-c","copy",f"{work}/concat.mp4"],check=True)

    # 7. burn ASS por último
    subprocess.run(["ffmpeg","-y","-hide_banner","-loglevel","error","-i",f"{work}/concat.mp4",
        "-vf",f"ass={work}/{wid}.ass","-c:v","libx264","-crf","18","-preset","medium",
        "-pix_fmt","yuv420p","-c:a","copy",out],check=True)
    print(f"[{wid}] ✅ {out}")


if __name__ == "__main__":
    ids = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not ids: print(__doc__); sys.exit(1)
    for wid in ids: build(wid)
