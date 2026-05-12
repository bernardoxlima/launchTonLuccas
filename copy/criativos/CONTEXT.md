# Criativos — Pipeline de Producao de Video

Pipeline: Texto -> Voz (MiniMax API) -> Avatar (HeyGen API) -> Montagem (ffmpeg).
30 hooks x 3 meats x 3 CTAs = ate 270 criativos possiveis a partir de 36 takes unicos.
Nao pre-definimos combinacoes. Produzimos, testamos, e o dado decide o que funciona.

## Estagios

| # | Pasta | Entra | Sai | Quem executa |
|---|-------|-------|-----|--------------|
| 1 | `01-scripts/` | Briefing + copy-anti-ai.md | .md com status `aprovado` | Claude + humano |
| 2 | `02-audio/` | Texto aprovado + _config/minimax.json | .mp3 por componente | MiniMax API |
| 3 | `03-video/` | Audio .mp3 + _config/heygen.json | .mp4 por componente | HeyGen API |
| 4 | `04-finais/` | Videos .mp4 de 03-video/ | Criativos montados | ffmpeg (parametrizado) |

Estagio 1 committed no git. Estagios 2-4 gitignored (binarios pesados).

## Routing

| Task | Leia | Edite |
|------|------|-------|
| Escrever/editar copy | `01-scripts/` + `rules/copy-anti-ai.md` | `01-scripts/*.md` |
| Gerar audio | `01-scripts/*.md` (texto) + `_config/minimax.json` | `02-audio/` |
| Gerar video | `02-audio/*.mp3` + `_config/heygen.json` | `03-video/` |
| Montar criativos | `03-video/*.mp4` | `04-finais/` |
| Adicionar abordagem | `01-scripts/hooks/{awareness}/` | criar subpasta + hooks |
| Adicionar awareness | `01-scripts/hooks/` | criar pasta + subpastas + hooks |

## Organizacao dos hooks

Dois niveis: **awareness level** (estrategia) > **abordagem emocional** (criativo).

```
01-scripts/hooks/
├── problem-aware/           <- pain-driven hooks
│   ├── injustica/           <- cutuca status/injustica do mercado
│   │   └── h01..h10.md
│   └── espelho/             <- descreve a cena exata do prospect
│       └── h01..h10.md
└── solution-aware/          <- promise-driven hooks
    └── urgencia/            <- custo concreto de nao agir
        └── h01..h10.md
```

Awareness level = **pra quem** (audiencia/targeting no Meta Ads).
Abordagem emocional = **como** (angulo criativo do hook).

Awareness levels disponiveis (Schwartz via Hormozi):

| Awareness level | Hook driver | Status |
|-----------------|-------------|--------|
| `problem-aware` | pain-driven | Ativo (injustica, espelho) |
| `solution-aware` | promise-driven | Ativo (urgencia) |
| `product-aware` | proof-driven | Futuro |
| `most-aware` | offer-driven | Futuro |
| `unaware` | curiosity-driven | Futuro |

## Nomenclatura

### ID do criativo

`{abordagem}-h{XX}_{meat}_{cta}`

O nome **eh** a combinacao. Nao precisa de manifesto ou JSON externo.
Dado o ID, voce sabe exatamente quais 3 videos concatenar:

```
injustica-h01_diag_tempo  →  03-video/injustica-h01.mp4
                              03-video/meat-diag.mp4
                              03-video/cta-tempo.mp4
```

### Decoder (meats e CTAs)

| Codigo | Componente | Significado |
|--------|------------|-------------|
| `diag` | Meat | Diagnostico — "o que esta errado" |
| `metodo` | Meat | Metodo — "como funciona o workshop" |
| `prova` | Meat | Prova Social — "quem ja fez e resultou" |
| `esc` | CTA | Escassez — "lote 1 a X%, vai virar lote 2" |
| `ancor` | CTA | Ancoragem — "R$ 60k vs R$ 47" |
| `tempo` | CTA | Urgencia Temporal — "data fixa + custo de continuar igual" |

### Abordagens emocionais por awareness level

| Awareness | Abordagem | O que ataca |
|-----------|-----------|-------------|
| Problem-Aware | `injustica` | Competentes ficando pra tras enquanto menos preparados crescem |
| Problem-Aware | `espelho` | Descreve a cena exata que o prospect vive |
| Solution-Aware | `urgencia` | Custo concreto de nao agir agora |

### Exemplos

| ID | Leitura |
|----|---------|
| `injustica-h01_diag_tempo` | Abordagem injustica, hook 1, meat diagnostico, CTA urgencia temporal |
| `espelho-h05_metodo_ancor` | Abordagem espelho, hook 5, meat metodo, CTA ancoragem |
| `urgencia-h08_prova_esc` | Abordagem urgencia, hook 8, meat prova social, CTA escassez |

### Para mensuracao (Meta Ads)

O ID do criativo vai no nome do anuncio. Para filtrar performance:

- Por abordagem: `injustica-*` vs `espelho-*` vs `urgencia-*`
- Por meat: `*_diag_*` vs `*_metodo_*` vs `*_prova_*`
- Por CTA: `*_esc` vs `*_ancor` vs `*_tempo`
- Por combo meat+cta: `*_diag_esc` vs `*_metodo_ancor` etc
- Por hook individual: comparar hooks dentro da mesma abordagem

## Naming dos arquivos gerados (estagios 2-4)

Flat, sem subpastas. O nome carrega a identidade:

```
02-audio/injustica-h01.mp3     <- hook
02-audio/meat-diag.mp3         <- meat
02-audio/cta-esc.mp3           <- CTA

03-video/injustica-h01.mp4     <- hook
03-video/meat-diag.mp4         <- meat
03-video/cta-esc.mp4           <- CTA

04-finais/injustica-h01_diag_esc.mp4   <- criativo montado
```

## Montagem (estagio 4) — parametrizada

Sem manifesto pre-definido. A combinacao eh definida no momento da montagem.

**Montar um criativo especifico:**
```bash
ffmpeg -i 03-video/injustica-h01.mp4 -i 03-video/meat-diag.mp4 -i 03-video/cta-tempo.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" 04-finais/injustica-h01_diag_tempo.mp4
```

**Montar um lote (todos hooks de uma abordagem x todos meats x todos CTAs):**
```bash
for hook in 03-video/injustica-*.mp4; do
  for meat in 03-video/meat-*.mp4; do
    for cta in 03-video/cta-*.mp4; do
      # extrair IDs dos nomes dos arquivos → montar nome do output
      ffmpeg -i "$hook" -i "$meat" -i "$cta" ...
    done
  done
done
```

**Montar tudo (270 combinacoes):**
Mesmo loop, mas iterando sobre todos os hooks de 03-video/.

Filosofia: produz tudo, testa no Meta Ads, dado decide o que funciona (Hormozi).

## Status dos scripts

Frontmatter de cada .md em 01-scripts/:

`rascunho` -> `aprovado` -> `audio-ok` -> `video-ok`

## API — Estagio 2: Geracao de audio (MiniMax)

Config: `_config/minimax.json`
Env: `MINIMAX_API_KEY` em `.env` (raiz do projeto)

### ANTES de gerar audio: verificar se a voz clonada existe

Vozes clonadas **expiram apos 7 dias sem uso**. Sempre verificar antes de gerar.

```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/get_voice" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"voice_type": "voice_cloning"}'
```

Procurar `ton-luccas-v1` no array `voice_cloning` da resposta.
- **Encontrou** → voz ativa, seguir direto pra geracao de audio (T2A)
- **Nao encontrou** → voz expirou, rodar o fluxo de re-clonagem abaixo

### Fluxo de voice clone (rodar SO se a verificacao acima falhar)

**Passo 1 — Upload do audio fonte:**
```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/files/upload" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -F "purpose=voice_clone" \
  -F "file=@/caminho/para/audio-do-ton.mp3"
```
Retorna `file_id` (int64). Audio fonte: mp3/m4a/wav, 10s-5min, max 20MB.

**Passo 2 — Clonar a voz:**
```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/voice_clone" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": FILE_ID_DO_PASSO_1,
    "voice_id": "ton-luccas-v1",
    "model": "speech-2.8-hd",
    "text": "Texto de preview pra testar a voz clonada.",
    "language_boost": "auto",
    "need_noise_reduction": true
  }'
```
Regras do voice_id: 8-256 chars, comeca com letra, alfanumerico + `-` e `_`.
Resposta inclui `demo_audio` (URL valida 24h) se `text` foi fornecido.

### Geracao de audio (T2A) — o que roda pra cada hook/meat/CTA

**Endpoint:** `POST https://api.minimax.io/v1/t2a_v2`

**Request:**
```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/t2a_v2" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "speech-2.8-hd",
    "text": "TEXTO DO HOOK/MEAT/CTA AQUI",
    "output_format": "hex",
    "language_boost": "auto",
    "audio_setting": {
      "format": "mp3",
      "sample_rate": 32000,
      "bitrate": 128000
    },
    "voice_setting": {
      "voice_id": "ton-luccas-v1",
      "speed": 1.0,
      "vol": 5,
      "pitch": 0
    }
  }'
```

**Resposta:** audio em hex. Converter pra MP3:
```python
audio_bytes = bytes.fromhex(response["data"]["audio"])
with open("02-audio/injustica-h01.mp3", "wb") as f:
    f.write(audio_bytes)
```

**Controles de voz disponiveis:**

| Parametro | Range | Default | O que faz |
|-----------|-------|---------|-----------|
| `speed` | 0.5-2.0 | 1.0 | Velocidade da fala |
| `vol` | 0-10 | 5 | Volume |
| `pitch` | -12 a 12 | 0 | Tom (negativo=grave, positivo=agudo) |
| `emotion` | ver lista | auto | Emocao da fala |

Emocoes disponiveis: `happy`, `sad`, `angry`, `fearful`, `disgusted`, `surprised`, `calm`, `fluent`, `whisper`

**Textos acima de 3000 chars:** usar `"stream": true`.

### Erros comuns

| Codigo | Significado |
|--------|-------------|
| 0 | Sucesso |
| 1002 | Rate limit |
| 1004 | Autenticacao falhou — checar MINIMAX_API_KEY |
| 1008 | Saldo insuficiente — recarregar na plataforma |
| 2013 | Parametros invalidos |

## API — Estagio 3: Geracao de video (HeyGen)

Config: `_config/heygen.json`
Env: `HEYGEN_API_KEY` em `.env` (raiz do projeto)

Fluxo: enviar audio .mp3 do estagio 2 + avatar_id → receber video .mp4.
Ao gerar, perguntar ao user qual avatar usar via AskUserQuestion.

Avatares disponiveis em `_config/heygen.json` com descricao visual de cada um.
Sugestao de match: l1/l2 (casual) pra espelho/injustica, l3/l4 (producao alta) pra urgencia/prova.

Documentacao da API HeyGen: preencher quando integrar.

## Framework de referencia (Hormozi — $100M GOATed Ads)

Terminologia e classificacoes baseadas no framework de Alex Hormozi.
Serve como referencia pra criar novos hooks, classificar os existentes e analisar performance.

### Estrutura de um ad (Hormozi)

Hook -> Meat -> CTA

- **Hook**: "Whatever people see and/or hear first." 80% do esforco criativo vai aqui.
- **Meat**: "The part of the ad that fulfills your hook." Rotaciona menos porque menos gente ve.
- **CTA**: "Tell them exactly what to do next. S-P-E-L-L it out." 1-2 que funcionam, manter.

### Awareness levels (Schwartz via Hormozi)

Cada nivel tem um hook driver — o que move a atencao:

| Awareness | Hook driver | Exemplo |
|-----------|-------------|---------|
| Most Aware | offer-driven | "50% off no produto X" |
| Product-Aware | proof-driven | "10.000 pessoas escolheram X" |
| Solution-Aware | promise-driven | "O jeito mais rapido de [resultado]" |
| Problem-Aware | pain-driven | "Cansado de [problema]? Tem jeito." |
| Completely Unaware | curiosity-driven | "O perigo escondido na sua rotina" |

Nossas abordagens atuais: injustica e espelho sao **pain-driven** (problem-aware/),
urgencia eh **promise-driven** (solution-aware/).

### Hook types (tipos verbais — Hormozi)

| Tipo | O que faz | Exemplo |
|------|-----------|---------|
| `statement` | Afirmacao direta | "A coisa mais inteligente que voce pode fazer hoje..." |
| `question` | Pergunta sim/nao ou aberta | "Ja aconteceu de voce gravar um video e..." |
| `conditional` | Se voce [condicao], entao... | "Se voce posta ha 2 anos e continua anonimo..." |
| `label` | Rotula o publico | "Especialistas que faturam menos do que deveriam" |
| `command` | Ordem direta | "Para de tentar copiar o jeito dos outros" |
| `narrative` | Historia/anedota | "Eu ja vi especialistas brilhantes ficarem invisiveis..." |
| `list` | Lista de passos/itens | "As 3 coisas que separam marca pessoal de presenca" |
| `exclamation` | Emocao forte | Surpresa, indignacao, choque |
| `ridiculous-result` | Resultado bizarro/raro | Resultado improvavel que gera curiosidade |

### Meat formats (formatos de corpo — Hormozi)

| Formato | Descricao |
|---------|-----------|
| `demonstration` | Uso ao vivo, comparacoes, antes/depois |
| `testimonial` | UGC, direct-to-camera, walk-n-talk, podcast style |
| `education` | Explainer, how-to, whiteboard, conteudo organico |
| `story` | Storytelling, lifestyle, documentario, skits |
| `faceless` | Screenshots, texto, slides, animacoes |

Nossos meats atuais:
- diagnostico -> `education` (explainer do problema)
- metodo -> `education` (explainer da solucao)
- prova-social -> `testimonial` (casos reais)

### Regra 70-20-10 (inovacao criativa — Hormozi via Google)

| Tier | % budget | O que eh |
|------|----------|----------|
| `core` | 70% | Winners comprovados reusados — baseline de performance |
| `emerging` | 20% | Modelados de outros nichos — winner-adjacent |
| `experimental` | 10% | Conceitos novos — risco alto, potencial alto |

Se experimental vence, vira core. Se perde, documenta e segue.

### Volume de producao (benchmark Hormozi)

- 50 hooks x 3-5 meats x 1-3 CTAs = 150-750 ads/semana
- 80% do esforco criativo em hooks, 20% em meats, ~0% em CTAs
- "I record 10 or so hooks for every 1 piece of ad content. Yes, 10x."
- Hooks devem ser distribuidos entre awareness levels ("spread across buckets")

### Mapeamento: nossos termos -> Hormozi

| Nosso termo | Termo Hormozi | Nota |
|-------------|---------------|------|
| hook | Hook | Identico |
| meat | Meat | Identico |
| CTA | CTA | Identico |
| abordagem emocional | Nao existe como termo unico | Combinacao de awareness level + angulo criativo |
| awareness level (folder) | "Buckets" por awareness | Organizacao primaria dos hooks |
| montagem parametrizada | "Ad Assembly Process" | Combinatorial: todo hook x todo meat x todo CTA |

## Como adicionar

### Novo hook
1. Crie `01-scripts/hooks/{awareness}/{abordagem}/h{XX}.md` com frontmatter
2. Gere audio (estagio 2) e video (estagio 3)
3. Monte criativos (estagio 4) com os meats e CTAs que quiser

### Nova abordagem emocional (dentro de awareness existente)
1. Crie subpasta `01-scripts/hooks/{awareness}/{nome-da-abordagem}/`
2. Crie hooks com frontmatter
3. Rode pipeline (estagios 2-4)

### Novo awareness level
1. Crie pasta `01-scripts/hooks/{awareness-level}/`
2. Crie subpastas de abordagem dentro
3. Crie hooks com frontmatter
4. Rode pipeline (estagios 2-4)

### Novo meat ou CTA
1. Crie .md em `01-scripts/meats/` ou `01-scripts/ctas/`
2. Gere audio + video (estagios 2-3)
3. Monte criativos (estagio 4) — o novo componente fica disponivel pra qualquer combinacao
