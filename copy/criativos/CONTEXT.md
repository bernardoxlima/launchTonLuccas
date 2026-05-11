# Criativos — Pipeline de Producao de Video

Pipeline: Texto -> Voz (MiniMax API) -> Avatar (HeyGen API) -> Montagem (ffmpeg).
30 hooks x 3 meats x 2 CTAs = 30 criativos finais a partir de 35 takes unicos.

## Estagios

| # | Pasta | Entra | Sai | Quem executa |
|---|-------|-------|-----|--------------|
| 1 | `01-scripts/` | Briefing + copy-anti-ai.md | .md com status `aprovado` | Claude + humano |
| 2 | `02-audio/` | Texto aprovado + _config/minimax.json | .mp3 por componente | MiniMax API |
| 3 | `03-video/` | Audio .mp3 + _config/heygen.json | .mp4 por componente | HeyGen API |
| 4 | `04-finais/` | Videos .mp4 + combinacoes.json | Criativos montados | ffmpeg |

Estagio 1 committed no git. Estagios 2-4 gitignored (binarios pesados).

## Routing

| Task | Leia | Edite |
|------|------|-------|
| Escrever/editar copy | `01-scripts/` + `rules/copy-anti-ai.md` | `01-scripts/*.md` |
| Gerar audio | `01-scripts/*.md` (texto) + `_config/minimax.json` | `02-audio/` |
| Gerar video | `02-audio/*.mp3` + `_config/heygen.json` | `03-video/` |
| Montar criativos | `03-video/*.mp4` + `combinacoes.json` | `04-finais/` |
| Adicionar combinacao | `combinacoes.json` | `combinacoes.json` |
| Adicionar abordagem | `01-scripts/hooks/{awareness}/` | criar subpasta + hooks + atualizar combinacoes.json |
| Adicionar awareness | `01-scripts/hooks/` | criar pasta + subpastas + hooks + atualizar combinacoes.json |

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

O nome carrega: abordagem emocional, numero do hook, meat e CTA.
Awareness level fica no folder, nao no ID (eh derivavel pela abordagem).

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
| `injustica-h01_diag_esc` | Angulo injustica, hook 1, meat diagnostico, CTA escassez |
| `espelho-h05_metodo_ancor` | Angulo espelho, hook 5, meat metodo, CTA ancoragem |
| `urgencia-h08_prova_esc` | Angulo urgencia, hook 8, meat prova social, CTA escassez |

### Para mensuracao (Meta Ads)

O ID do criativo vai no nome do anuncio. Para filtrar performance:

- Por angulo: `injustica-*` vs `espelho-*` vs `urgencia-*`
- Por meat: `*_diag_*` vs `*_metodo_*` vs `*_prova_*`
- Por CTA: `*_esc` vs `*_ancor`
- Por combo meat+cta: `*_diag_esc` vs `*_metodo_ancor`
- Por hook: comparar hooks dentro do mesmo angulo

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

## Status dos scripts

Frontmatter de cada .md em 01-scripts/:

`rascunho` -> `aprovado` -> `audio-ok` -> `video-ok`

## Matriz de compatibilidade

```
                        MEATS
          ┌──────────┬──────────┬──────────┐
          │   diag   │  metodo  │  prova   │
          ├──────────┼──────────┼──────────┤
injustica │   +++    │    +     │    ++    │
espelho   │   +++    │    ++    │    +     │
urgencia  │    +     │   +++    │    ++    │
          └──────────┴──────────┴──────────┘

                        CTAS
          ┌──────────┬──────────┐
          │   esc    │  ancor   │
          ├──────────┼──────────┤
diag      │   +++    │    ++    │
metodo    │    ++    │   +++    │
prova     │   +++    │    +     │
          └──────────┴──────────┘

+++ = combo principal    ++ = alternativo    + = funciona mas nao eh obvio
```

## Framework de referencia (Hormozi — $100M GOATed Ads)

Terminologia e classificacoes baseadas no framework de Alex Hormozi.
Serve como referencia pra criar novos hooks, classificar os existentes e analisar performance.

### Estrutura de um ad (Hormozi)

Hook -> Meat -> CTA

- **Hook**: "Whatever people see and/or hear first." 80% do esforço criativo vai aqui.
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
| `conditional` | Se voce [condição], entao... | "Se voce posta ha 2 anos e continua anonimo..." |
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
- diagnostico → `education` (explainer do problema)
- metodo → `education` (explainer da solucao)
- prova-social → `testimonial` (casos reais)

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

### Mapeamento: nossos termos → Hormozi

| Nosso termo | Termo Hormozi | Nota |
|-------------|---------------|------|
| hook | Hook | Identico |
| meat | Meat | Identico |
| CTA | CTA | Identico |
| abordagem emocional | Nao existe como termo unico | Combinacao de awareness level + angulo criativo |
| awareness level (folder) | "Buckets" por awareness | Organizacao primaria dos hooks |
| combinacoes.json | "Ad Assembly Process" | Montagem modular hook+meat+CTA |
| variacao: true | Parte do 20% emerging | Combos alternativos pra teste |

## Como adicionar

### Novo hook
1. Crie `01-scripts/hooks/{awareness}/{abordagem}/h{XX}.md` com frontmatter
2. Adicione combinacao em `combinacoes.json`
3. Rode pipeline (estagios 2-4)

### Nova combinacao (remix)
1. Adicione linha em `combinacoes.json`
2. Rode so estagio 4 (ffmpeg) — takes ja existem

### Nova abordagem emocional (dentro de awareness existente)
1. Crie subpasta `01-scripts/hooks/{awareness}/{nome-da-abordagem}/`
2. Crie hooks com frontmatter
3. Adicione combinacoes em `combinacoes.json`

### Novo awareness level
1. Crie pasta `01-scripts/hooks/{awareness-level}/`
2. Crie subpastas de abordagem dentro
3. Crie hooks com frontmatter
4. Adicione combinacoes em `combinacoes.json`

### Novo meat ou CTA
1. Crie .md em `01-scripts/meats/` ou `01-scripts/ctas/`
2. Gere audio + video (estagios 2-3)
3. Adicione combinacoes em `combinacoes.json`
