#!/usr/bin/env python3
"""
Aplica o banner lead<N>.png (full-frame 1080x1920 RGBA, alpha) em cima dos
10 fulls JÁ EDITADOS (04-finais/full/f01..f10.mp4 — cortados + legendados).

O banner é um overlay de tela cheia estático (papel rasgado vermelho no topo
com a headline do lead; resto transparente), aplicado pela DURAÇÃO INTEIRA.
Não conflita com a legenda branca (que fica no terço inferior).

Uso:
  python3 _config/video-overlay-lead.py 1            # lead1 em f01..f10
  python3 _config/video-overlay-lead.py 1 2 3 4      # todos

Pré-req: 04-finais/_assets/lead<N>.png + 04-finais/full/f<XX>.mp4
Saída: SOBRESCREVE 04-finais/video+image/lead<N>/f<XX>_lead<N>.mp4
"""
import subprocess, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def build(lead):
    img = f"{BASE}/04-finais/_assets/lead{lead}.png"
    outdir = f"{BASE}/04-finais/video+image/lead{lead}"
    os.makedirs(outdir, exist_ok=True)
    assert os.path.exists(img), f"falta {img}"
    print(f"[lead{lead}]")
    for n in range(1, 11):
        fid = f"f{n:02d}"
        src = f"{BASE}/04-finais/full/{fid}.mp4"
        if not os.path.exists(src):
            print(f"  pular {fid} (sem fonte)"); continue
        out = f"{outdir}/{fid}_lead{lead}.mp4"
        subprocess.run(["ffmpeg", "-nostdin", "-y", "-hide_banner", "-loglevel", "error",
            "-i", src, "-i", img, "-filter_complex", "overlay=0:0",
            "-c:v", "libx264", "-crf", "18", "-preset", "medium", "-pix_fmt", "yuv420p",
            "-c:a", "copy", out], check=True)
        print(f"  ✅ {fid}_lead{lead}")


if __name__ == "__main__":
    leads = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not leads:
        print(__doc__); sys.exit(1)
    for l in leads:
        build(l)
