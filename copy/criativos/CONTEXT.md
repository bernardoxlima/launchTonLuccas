# Criativos — Pipeline de Producao de Video

Workspace ICM-aligned. Texto -> Voz (MiniMax) -> Avatar (HeyGen) -> Montagem (ffmpeg).
30 hooks x 5 bodies x 3 CTAs = ate 450 criativos a partir de 38 takes unicos.
Filosofia Hormozi: produz tudo, testa no Meta Ads, dado decide.

## Stages (numeracao = ordem de execucao)

| # | Pasta | Funcao | Quem executa |
|---|-------|--------|--------------|
| 0 | `setup/` | Configurar a fabrica (voice clone, avatar pick) — roda 1x | Humano + APIs |
| 1 | `01-scripts/` | Escrever copy (hooks/bodies/CTAs) | Claude + humano |
| 2 | `02-audio/` | T2A com voz clonada | MiniMax API |
| 3 | `03-video/` | Avatar gera video do audio | HeyGen API |
| 4 | `04-finais/` | Concat ffmpeg dos componentes | ffmpeg local |

Stages 2-4 sao gitignored (binarios). Stage 1 + docs sobem no git.

## Routing — onde olhar pra cada task

| Pedido | Leia |
|--------|------|
| "configurar workspace pra outro cliente" | `setup/CONTEXT.md` → `questionnaire.md` |
| "voz expirou / re-clonar voz" | `setup/01-voice-clone.md` |
| "trocar avatar HeyGen" | `setup/02-avatar-pick.md` |
| "escrever/editar hook/body/CTA" | `01-scripts/CONTEXT.md` |
| "gerar audio do <id>" | `02-audio/CONTEXT.md` |
| "gerar video do <id>" | `03-video/CONTEXT.md` |
| "montar criativo NC<X>_h<XX>_b<XX>_c<XX>" | `04-finais/CONTEXT.md` |
| "qual o proximo numero de hook/body/CTA" | `_config/reference/nomenclature.md` |
| "framework Hormozi (hook types, body formats)" | `_config/reference/hormozi.md` |
| "niveis de consciencia (NC)" | `_config/reference/taxonomy.md` |
| "regras de microcopy" | `_config/reference/copy-anti-ai.md` |

## Layer 3 — material de referencia (estavel entre runs)

```
_config/
├── minimax.json          ← T2A config (voice_id, speed, emotion)
├── heygen.json           ← avatar_id, quality, aspect_ratio
└── reference/
    ├── hormozi.md        ← framework de ads (Hook/Body/CTA, 70-20-10)
    ├── nomenclature.md   ← ID format + decoder + regra de crescimento
    ├── taxonomy.md       ← NC levels + organizacao por consciencia
    └── copy-anti-ai.md   ← regras de microcopy
```

## Layer 4 — artefatos por run (mudam por execucao)

```
01-scripts/<tipo>/NC<X>-<awareness>/*.md
02-audio/   (mesma hierarquia, .mp3)
03-video/   (mesma hierarquia, .mp4)
04-finais/NC<X>-<awareness>/NC<X>_h<XX>_b<XX>_c<XX>.mp4
```

## Lifecycle do .md fonte

Frontmatter `status` avanca conforme stages downstream completam:

```
rascunho → aprovado → audio-ok → video-ok
```

Cada stage atualiza o status ao concluir o componente.

## Filosofia

- **Folder numbering = execution order.** Pasta eh o orchestrator (ICM).
- **80% do esforco em hooks.** Bodies estaveis, CTAs estaveis, hooks variam.
- **Sem manifesto de combinacoes.** Stage 4 monta na hora a partir dos componentes existentes.
- **Numeros nunca sao reusados.** Componente queimado mantem numero.
- **Awareness vem do folder, nao do numero.** Pasta `NC2-problem-aware/` define o NC.

## Future directions (out of scope agora)

Anotado pra retomar quando aparecer a dor:
- **Provenance markers** — embedar git sha do CONTEXT.md + config usado em cada .mp3/.mp4 (rastrear winners/losers no Meta)
- **Verify sections nos stage contracts** — checar timing drift, lip-sync, pronunciation_dict aplicado
- **Edit-source feedback loop** — trackear edicoes recorrentes pra sugerir refactor pros references
