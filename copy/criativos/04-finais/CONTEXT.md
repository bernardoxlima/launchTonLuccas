# Stage 4 — Finais (montagem ffmpeg)

Concatena `.mp4` de `03-video/` em criativos finais (`NC<X>_h<XX>_b<XX>_c<XX>.mp4`).
Sem manifesto. Combinacoes definidas na hora da montagem.

## Inputs

| Layer | Path | Quando ler |
|-------|------|-----------|
| 4 (working) | `../03-video/hooks/**/*.mp4` | Hooks renderizados |
| 4 (working) | `../03-video/body/**/*.mp4` | Bodies renderizados |
| 4 (working) | `../03-video/ctas/*.mp4` | CTAs renderizados |
| 3 (referencia) | `../_config/reference/nomenclature.md` | ID format + decoder |

## Process

### Montar UM criativo especifico

```bash
ffmpeg -i ../03-video/hooks/NC2-problem-aware/injustica/h01.mp4 \
  -i ../03-video/body/NC2-problem-aware/b02.mp4 \
  -i ../03-video/ctas/c03.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" NC2-problem-aware/NC2_h01_b02_c03.mp4
```

### Montar um LOTE (todos hooks de uma abordagem x todos bodies x todos CTAs)

```bash
for hook in ../03-video/hooks/NC2-problem-aware/injustica/*.mp4; do
  for body in ../03-video/body/*/*.mp4; do
    for cta in ../03-video/ctas/*.mp4; do
      # extrair IDs dos nomes → montar NC{X}_h{XX}_b{XX}_c{XX}
      ffmpeg -i "$hook" -i "$body" -i "$cta" ...
    done
  done
done
```

### Montar TUDO (ate 450 combinacoes)

Mesmo loop iterando sobre todos os hooks em `../03-video/hooks/*/*/`.

## Outputs

Organizados por NC do **hook** (dimensao de targeting):

```
04-finais/
├── NC1-completely-unaware/
├── NC2-problem-aware/
│   └── NC2_h<XX>_b<XX>_c<XX>.mp4
├── NC3-solution-aware/
├── NC4-product-aware/
└── NC5-most-aware/
```

## Regras

- **NC do output = NC do hook**, nao do body. Decoder em `_config/reference/nomenclature.md`.
- **ID no nome do arquivo** = ID no Meta Ads. Permite filtragem por NC/hook/body/CTA.
- **Sem manifesto** (no combinacoes.json). Filosofia Hormozi: produz tudo, testa no Meta Ads, dado decide.
- **04-finais/ eh gitignored** (binarios pesados). Re-rodar montagem eh barato vs storage.
