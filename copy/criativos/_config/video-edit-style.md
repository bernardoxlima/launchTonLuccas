# Video Edit Style — Padrão de Edição dos Finais (Stage 4)

Padrão de edição aprovado para os criativos full em `04-finais/full/`. Define como transformar o avatar bruto (`03-video/full/f{XX}.mp4`) no final editado, sobrescrevendo `04-finais/full/f{XX}.mp4`.

Usado pela skill `video-use`. Aprovado em 2026-06-05 (piloto: f01, L2).

> **Implementação canônica executável:** `_config/video-edit-build.py` — encoda EXATAMENTE esta receita. Toda edição de final deve rodar por ele, não reimplementar à mão.
> ```bash
> python3 _config/video-edit-build.py f01                 # um
> python3 _config/video-edit-build.py f01 f02 f04 f08     # lote
> python3 _config/video-edit-build.py --all               # f01..f10
> python3 _config/video-edit-build.py f01 --profile agressivo
> ```
> Pré-requisito por id: `03-video/full/<id>.mp4` + `02-audio/full/<id>.subtitle.json`. Sobrescreve `04-finais/full/<id>.mp4`. Este `.md` é a spec descritiva; o `.py` é a fonte da verdade.

---

## Quando aplicar

- Stage 4 (montagem) dos **full scripts** (f01–f10).
- Fonte = avatar HeyGen + voz TTS MiniMax (plano único contínuo, ~30–50s, 1080×1920, 25fps).
- Saída = sobrescreve o arquivo existente em `04-finais/full/f{XX}.mp4`. A fonte em `03-video/full/` fica intacta.

## Fonte de timestamps

- **Primária:** `02-audio/full/f{XX}.subtitle.json` (MiniMax) — timestamps por palavra em ms, verbatim do TTS, alinhamento 1:1 com o vídeo (lead-in ~0ms). Não precisa de ASR.
- **Fallback:** ElevenLabs Scribe via helper `transcribe.py` (word-level). Só se o subtitle.json do MiniMax não existir. ⚠️ Invalidar cache antigo antes (o helper cacheia por nome de arquivo; vídeo regerado mantém nome).

## 1. Corte de pausas — perfil "Equilibrado" (padrão)

- Detectar silêncios reais: `silencedetect=noise=-30dB:d=0.15`.
- Cortar toda pausa **≥ 0,30s**, deixando **~120ms de respiro** residual em cada (não colar 100%).
- Falas ficam intactas. Cortes caem em região de silêncio (= word boundary por definição).
- Resultado típico: ~12–15 cortes, vídeo encolhe ~12% (ex: 50,4s → ~44s).

**Perfis alternativos** (trocar só se o user pedir):
| Perfil | Threshold | Respiro residual | Feel |
|--------|-----------|------------------|------|
| Suave | ≥0,45s | ~150ms | quase imperceptível, fala calma |
| **Equilibrado (padrão)** | **≥0,30s** | **~120ms** | vivo mas natural |
| Agressivo/snappy | ≥0,18s | ~80ms | TikTok, energia alta, ~25+ cortes |

## 2. Jump cuts — Punch-in alternado (padrão)

Plano único do avatar sem b-roll → cada corte é um jump cut. Disfarçar com punch-in:

- Alternar escala por segmento: **100% → 104% → 100% → 104%…** (centralizado, crop de volta pra 1080×1920).
- Disfarça o "pulo" do avatar e dá leve movimento.
- Aplicado no extract por-segmento (re-encode uma vez só, junto com o fade de áudio).

## 3. Áudio

- **Fade de 30ms** em cada boundary de segmento: `afade=t=in:st=0:d=0.03,afade=t=out:st={dur-0.03}:d=0.03`. Evita clicks.
- ⚠️ **GOTCHA CRÍTICO — extração tem que usar INPUT-SEEK.** Extrair cada segmento com `-ss {start} -i SRC -t {dur}` (`-ss` ANTES do `-i`). Usar output-seek (`-i SRC -ss {start} -to {end}`, `-ss` depois do `-i`) **silencia o áudio de todos os segmentos após o primeiro** (-91dB) — o vídeo corta certo mas o áudio some. Sempre forçar `-ac 2 -ar 48000` no encode do segmento.
- Conferir o resultado com `volumedetect` (lembrar: precisa de loglevel ≥ info; `-v error` suprime o output do filtro). Mean esperado ≈ o da fonte (~-29dB).

## 4. Legenda — replica o padrão antigo dos finais

- Branca, semibold, centralizada, **terço inferior**.
- **Chunks rolantes de ~6 palavras** (1–2 linhas, wrap natural), primeira letra de cada cue maiúscula (estilo CapCut). Quebra por janela de palavras + fim de sentença, não só por sentença.
- **Reconstruir palavras do MiniMax com offset GLOBAL.** Os `word_begin`/`word_end` (e `text_begin` da sentença) são índices de char no texto INTEIRO, não por sentença. Para cada token: `c0 = sentenca.text_begin + offset_local`. Esquecer isso → só a 1ª sentença reconstrói (~21 palavras em vez de ~155).
- Mapear cada palavra source→output **remapeado pra timeline cortada** (output-timeline offsets — senão desalinha após os cortes).
- Limpar pontuação solta no início do cue; capitalizar a 1ª letra.
- **Aplicada por ÚLTIMO**, sobre o vídeo já cortado e com punch-in.

### ⚠️ Usar ASS com PlayRes explícito, NÃO srt+force_style

O filtro `subtitles` (SRT) usa PlayResY default (~288), então `FontSize=18` é escalado pra ~120px num vídeo 1920 de altura → **legenda gigante**. Gerar `.ass` com PlayRes 1080×1920 e tamanho absoluto:

```
[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2.5,2,2,120,120,320,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.04,0:00:01.59,Cap,,0,0,0,,Imagine você abrir o Instagram e
```

⚠️ **O Events `Format:` PRECISA incluir o campo `Name`** (10 campos: Layer, Start, End, Style, **Name**, MarginL, MarginR, MarginV, Effect, Text). As linhas `Dialogue` têm o Name vazio (`Cap,,0,0,0,,texto`). Se o Format omitir `Name` (9 campos), o libass conta errado e o **texto começa um campo cedo — pega a vírgula do Effect e renderiza `,texto`** com vírgula no início de toda frase.

- **Fontsize 52**, branco, outline preto 2.5, shadow suave, Alignment=2 (bottom-center), MarginV=320, margens L/R 120. Validado contra o final antigo (casa o tamanho/posição).
- Burn: `ffmpeg -i concat.mp4 -vf "ass={WORK}/fXX.ass" -c:v libx264 -crf 18 -c:a copy OUT` (áudio com `-c:a copy` — já está correto no concat).

## 5. Grade

- **Nenhum.** Fiel ao original ("simplesmente legendados"). Não adicionar grade sem o user pedir.

## 6. Saída

- 1080×1920 @ 25fps, h264, AAC. Sobrescreve `04-finais/full/f{XX}.mp4`.

---

## Hard rules herdadas da skill video-use (não-negociáveis)

1. Legenda é aplicada por ÚLTIMO na filter chain (senão overlay esconde caption).
2. Extract por-segmento → concat lossless `-c copy` (não filtergraph single-pass — evita re-encode duplo).
3. Fade de áudio 30ms em todo boundary.
4. Master SRT usa output-timeline offsets: `output_time = word.start - segment_start + segment_offset`.
5. Nunca cortar no meio de uma palavra — snap pra word boundary.
6. Padding de 30–200ms em cada borda de corte.

## Fluxo de lote (f01–f10)

Acertar 1 piloto, user aprova, aplicar a mesma receita nos demais via timestamps MiniMax. Cada final sobrescreve seu `04-finais/full/f{XX}.mp4`.
