# Setup — Factory Configuration

Roda **1x** na criacao do workspace. Apos rodar, `01-scripts/` em diante produz N criativos com a fabrica configurada (voz clonada + avatar HeyGen escolhido).

> **Filosofia ICM:** configure a fabrica, nao o produto. Setup eh a fabrica. Stages 01-04 produzem.

## Quando rodar

| Cenario | Acao |
|---------|------|
| Workspace novo (primeiro cliente) | Rodar tudo (01 → 02 → questionnaire) |
| Voz `ton-luccas-v1` expirou (>7 dias sem uso) | So `01-voice-clone.md` |
| Trocar avatar HeyGen | So `02-avatar-pick.md` |
| Adaptar workspace pra OUTRO cliente | `questionnaire.md` primeiro, depois 01 + 02 |

## Ordem dos passos

1. **`questionnaire.md`** — perguntas pra adaptar workspace pra novo cliente (so se NAO eh Tom Luccas)
2. **`01-voice-clone.md`** — clona a voz no MiniMax, grava `voice_id` em `_config/minimax.json`
3. **`02-avatar-pick.md`** — escolhe avatar no HeyGen, grava `avatar_id` em `_config/heygen.json`

Apos os 3 passos, abrir `../CONTEXT.md` e iniciar producao.

## Outputs do setup

| Arquivo modificado | Campo |
|---|---|
| `../_config/minimax.json` | `voice_setting.voice_id`, `voice_clone.source_audio` |
| `../_config/heygen.json` | `avatar_id` |
| `../_config/reference/copy-anti-ai.md` | (so se questionnaire indicar regras de microcopy diferentes) |

## Por que setup eh separado

Antes: voice clone, avatar pick, e T2A producao estavam no mesmo CONTEXT.md.
Resultado: cada vez que um agente ia gerar audio, carregava instrucoes de voice clone (que so rodam 1x).

Agora: stages 02/03 assumem fabrica configurada e falham fast se nao estiver. Re-setup eh ato consciente.
