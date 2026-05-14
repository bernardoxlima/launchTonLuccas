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

## Process — 3 etapas sequenciais

### Etapa 1: Legendar componentes (16 arquivos)

Ver secao "Legendas" abaixo. Gera `_legendado/` dentro de cada pasta de `03-video/`.

### Etapa 2: Acelerar componentes legendados (1.15x)

Velocidade padrao: **1.15x**. Aplicar ANTES do concat (16 speed-ups reusados vs 90).

```bash
# Por componente:
ffmpeg -y -i componente_legendado.mp4 \
  -filter_complex "[0:v]setpts=PTS/1.15[v];[0:a]atempo=1.15[a]" \
  -map "[v]" -map "[a]" \
  -c:v libx264 -preset fast -crf 18 -c:a aac -b:a 128k \
  componente_pronto.mp4
```

Resultado: 16 componentes prontos (legendados + acelerados) em `_pronto/`.

### Etapa 3: Concat (90 combos)

Usa componentes prontos da etapa 2.

**UM criativo:**
```bash
ffmpeg -i _pronto/hooks/NC5-most-aware/h01.mp4 \
  -i _pronto/body/NC5-most-aware/b01.mp4 \
  -i _pronto/ctas/cta1.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" NC5-most-aware/NC5_h01_b01_cta01.mp4
```

**TODOS de um NC (exhaustive):**
```bash
NC="NC5-most-aware"
NC_NUM="${NC%%-*}"

for hook in _pronto/hooks/$NC/*.mp4; do
  h_id=$(basename "$hook" .mp4)
  for body in _pronto/body/$NC/*.mp4; do
    b_id=$(basename "$body" .mp4)
    for cta in _pronto/ctas/*.mp4; do
      cta_id=$(basename "$cta" .mp4)
      cta_num=$(echo "$cta_id" | grep -o '[0-9]*')
      cta_fmt=$(printf "cta%02d" "$cta_num")
      out="${NC_NUM}_${h_id}_${b_id}_${cta_fmt}.mp4"

      ffmpeg -i "$hook" -i "$body" -i "$cta" \
        -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
        -map "[outv]" -map "[outa]" "$NC/$out"
    done
  done
done
```

**TODOS NCs:**
```bash
for nc_dir in _pronto/hooks/NC*; do
  NC=$(basename "$nc_dir")
  # mesmo loop de cima
done
```

Body loop usa `_pronto/body/$NC/` (mesmo NC do hook, nao `*`).

## Config de exportacao

| Parametro | Valor | Motivo |
|-----------|-------|--------|
| Velocidade | **1.15x** | Ritmo mais dinamico, validado no prototipo |
| Codec video | libx264, preset fast, crf 18 | Qualidade alta, encode rapido |
| Codec audio | aac, 128kbps | Padrao Meta Ads |
| Resolucao | 1080x1920 (9:16) | Reels/Stories |
| FPS | 25 (herda do HeyGen) | Padrao |

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

## Legendas

Estilo: amarelo `#F5C527`, outline black 3px, Arial Bold 72px, streaming (3 palavras por vez), bottom center.

### Fonte dos timestamps

**Produção nova** (áudios gerados com `subtitle_enable: true`):
- MiniMax retorna `data.subtitle_file` (JSON com word timestamps em ms)
- Arquivo salvo como `.subtitle.json` ao lado do `.mp3` em `02-audio/`
- Texto fonte: `.md` de `01-scripts/` (texto exato, nao transcricao)

**Áudios legados** (gerados sem `subtitle_enable`):
- Whisper com `--word_timestamps True` no `.mp3` existente → extrai timings
- Texto: usar `.md` de `01-scripts/` (nao a transcricao do Whisper)
- Alinhar word timestamps do Whisper com texto do .md

### Pipeline de legendas (por componente)

```
1. Obter timestamps (MiniMax .subtitle.json OU Whisper)
2. Obter texto (01-scripts/*.md — corpo sem frontmatter)
3. Gerar .ass com estilo customizado (3 palavras por grupo)
4. Burn: ffmpeg -i componente.mp4 -vf "ass=componente.ass" -c:v libx264 -preset fast -crf 18 -c:a copy legendado.mp4
```

Legendar os **16 componentes** (nao os 90 finais). Cada componente legendado eh reusado em N combos.

### Estilo .ass (template)

```
[V4+ Styles]
Style: Default,Arial,72,&H0027C5F5,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,0,2,40,40,120,1
```

Cores ASS (formato &H00BBGGRR): `&H0027C5F5` = amarelo #F5C527. Outline: `&H00000000` = black. Thickness: 3.

## Regras

- **NC do output = NC do hook.** Decoder em `_config/reference/nomenclature.md`.
- **ID no nome do arquivo = ID no Meta Ads.** Filtrar por NC/hook/body/CTA.
- **Exhaustive dentro do NC.** Sem manifesto. Dado decide (Hormozi).
- **04-finais/ eh gitignored.** Re-rodar montagem eh barato vs storage.
- **Legendar componentes, nao finais.** 16 burns em vez de 90.
