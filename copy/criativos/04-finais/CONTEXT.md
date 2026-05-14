# Stage 4 — Finais (montagem ffmpeg)

Concatena hook + body + CTA em criativos finais.

## Regra de montagem

**Mesmo NC = compativel. CTAs sao universais.**

- Hook e Body precisam ser do **mesmo NC** (mesma pasta NC<X>-<awareness>)
- CTA pode combinar com **qualquer** hook+body, independente de NC
- Dentro do mesmo NC, criar **todas** as combinacoes possiveis (exhaustive)

```
Para cada NC com hooks:
  hooks desse NC  ×  bodies desse NC  ×  TODOS CTAs  =  criativos
```

### Matriz atual (NC5-most-aware)

| Componente | Qtd | Exemplos |
|------------|-----|----------|
| Hooks NC5 | 10 | h01 (ancoragem), h02 (oferta-direta), ..., h10 (convite) |
| Bodies NC5 | 3 | b01 (guia pratico), b02 (deal-driven), b03 (urgencia) |
| CTAs | 3 | cta1 (escassez), cta2 (ancoragem), cta3 (urgencia temporal) |
| **Total** | **90** | 10 × 3 × 3 = 90 criativos |

### Como a matriz cresce

Novo hook NC5 (h11): +3 bodies × 3 CTAs = **+9 criativos**.
Novo body NC5 (b04): +10 hooks × 3 CTAs = **+30 criativos**.
Novo CTA (cta4): +10 hooks × 3 bodies = **+30 criativos**.
Novo NC inteiro (ex: NC2 com 5 hooks + 2 bodies): 5 × 2 × 3 = **+30 criativos**.

### `casa_com` no frontmatter

Hooks e bodies tem `casa_com` indicando afinidade tematica (ex: b01 → "hooks de novidade, oferta-direta, convite, comando"). Isso eh **informativo pra priorizacao**, nao exclusao. Dentro do mesmo NC, tudo combina — o `casa_com` ajuda a decidir quais combos testar primeiro no Meta Ads.

## Nomenclatura do criativo final

```
NC{X}_h{XX}_b{XX}_cta{XX}.mp4
```

Exemplos:
```
NC5_h01_b01_cta01.mp4  →  NC5, Hook 1, Body 1, CTA escassez
NC5_h03_b02_cta03.mp4  →  NC5, Hook 3, Body 2, CTA urgencia temporal
NC5_h10_b03_cta02.mp4  →  NC5, Hook 10, Body 3, CTA ancoragem
```

NC do output = NC do hook (dimensao de targeting no Meta Ads).

## Inputs

| Layer | Path | Quando ler |
|-------|------|-----------|
| 4 (working) | `../03-video/hooks/NC<X>-<awareness>/*.mp4` | Hooks renderizados |
| 4 (working) | `../03-video/body/NC<X>-<awareness>/*.mp4` | Bodies renderizados |
| 4 (working) | `../03-video/ctas/*.mp4` | CTAs renderizados |
| 3 (referencia) | `../_config/reference/nomenclature.md` | ID format |

## Process

### Montar UM criativo especifico

```bash
ffmpeg -i ../03-video/hooks/NC5-most-aware/h01.mp4 \
  -i ../03-video/body/NC5-most-aware/b01.mp4 \
  -i ../03-video/ctas/cta1.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" NC5-most-aware/NC5_h01_b01_cta01.mp4
```

### Montar TODOS de um NC (exhaustive)

```bash
NC="NC5-most-aware"
NC_NUM="${NC%%-*}"  # extrai "NC5"

for hook in ../03-video/hooks/$NC/*.mp4; do
  h_id=$(basename "$hook" .mp4)                    # h01
  for body in ../03-video/body/$NC/*.mp4; do
    b_id=$(basename "$body" .mp4)                  # b01
    for cta in ../03-video/ctas/*.mp4; do
      cta_id=$(basename "$cta" .mp4)               # cta1
      cta_num=$(echo "$cta_id" | grep -o '[0-9]*') # 1
      cta_fmt=$(printf "cta%02d" "$cta_num")       # cta01
      out="${NC_NUM}_${h_id}_${b_id}_${cta_fmt}.mp4"

      ffmpeg -i "$hook" -i "$body" -i "$cta" \
        -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
        -map "[outv]" -map "[outa]" "$NC/$out"
    done
  done
done
```

### Montar TUDO (todos NCs)

```bash
for nc_dir in ../03-video/hooks/NC*; do
  NC=$(basename "$nc_dir")
  # mesmo loop de cima, aplicado a cada NC
done
```

A chave: body loop usa `../03-video/body/$NC/` (mesmo NC do hook, nao `*`).

## Outputs

```
04-finais/
├── NC5-most-aware/
│   ├── NC5_h01_b01_cta01.mp4
│   ├── NC5_h01_b01_cta02.mp4
│   ├── NC5_h01_b01_cta03.mp4
│   ├── NC5_h01_b02_cta01.mp4
│   ├── ...
│   └── NC5_h10_b03_cta03.mp4  (90 criativos)
├── NC2-problem-aware/  (quando houver hooks NC2)
└── ...
```

## Regras

- **NC do output = NC do hook.** Decoder em `_config/reference/nomenclature.md`.
- **ID no nome do arquivo = ID no Meta Ads.** Filtrar por NC/hook/body/CTA.
- **Exhaustive dentro do NC.** Sem manifesto. Dado decide (Hormozi).
- **04-finais/ eh gitignored.** Re-rodar montagem eh barato vs storage.
