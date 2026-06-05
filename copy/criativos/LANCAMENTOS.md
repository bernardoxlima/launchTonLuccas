# Lançamentos — Ledger de Criativos

Registro de qual leva de criativos pertence a qual lançamento, e o estado de geração (áudio/vídeo) de cada um. **Ler isto antes de usar qualquer `.mp4` em `03-video/`** — alguns vídeos antigos ainda têm data hardcoded e não servem pro lançamento atual.

---

## Lançamento 1 (L1) — concluído

- **Primeiro lançamento.** Os criativos full (f01–f10) foram escritos COM data fixa ("23 e 24 de maio", "começa sábado", "faltam poucos dias").
- Rodaram no Meta Ads em **maio/2026**. Análise de performance em `05-analise/`.
- Vídeos originais L1 (com data) renderizados em `03-video/full/f01–f10.mp4` (May 20).
- **Esses vídeos L1 queimaram** quando o workshop de maio passou — a data neles é do passado.

## Lançamento 2 (L2) — EM ANDAMENTO (início: 2026-06-03)

Segundo lançamento. Estratégia: **reaproveitar os criativos vencedores do L1, removendo as datas** pra virarem evergreen (usáveis em qualquer lançamento). Mantida a escassez ("últimos ingressos", "vagas acabando") porque todo lançamento tem lote final.

### Scripts adaptados (datas removidas) — 2026-06-03

Todos os 10 full scripts em `01-scripts/full/` tiveram a data removida e estão `status: audio-ok`.
f02 e f03 foram **reconstruídos do zero** (existiam só como vídeo/áudio no L1, sem `.md` no repo).

### Áudio L2 — ✅ COMPLETO (10/10)

`02-audio/full/f01–f10.mp3` — regerados sem data via MiniMax (voz `ton-luccas-v3`, `emotion: angry`). Todos com legenda word-level.

### Vídeo L2 — ✅ COMPLETO (10/10)

Gerados em 2 levas (saldo). Todos os `.mp4` em `03-video/full/` são versão L2 **sem data** (avatar_v 1080p 9:16).

| Full | Vendas L1 | Vídeo L2 (sem data) | Gerado |
|------|-----------|---------------------|--------|
| f01  | 5         | ✅ `03-video/full/f01.mp4` | 2026-06-03 |
| f02  | 2         | ✅ `03-video/full/f02.mp4` | 2026-06-03 |
| f04  | 2         | ✅ `03-video/full/f04.mp4` | 2026-06-03 |
| f05  | 1         | ✅ `03-video/full/f05.mp4` | 2026-06-03 |
| f06  | 1         | ✅ `03-video/full/f06.mp4` | 2026-06-03 |
| f08  | 2         | ✅ `03-video/full/f08.mp4` | 2026-06-03 |
| f03  | —         | ✅ `03-video/full/f03.mp4` | 2026-06-05 |
| f07  | 1         | ✅ `03-video/full/f07.mp4` | 2026-06-05 |
| f09  | —         | ✅ `03-video/full/f09.mp4` | 2026-06-05 |
| f10  | —         | ✅ `03-video/full/f10.mp4` | 2026-06-05 |

> Todos os vídeos L1 com data foram sobrescritos. A pasta `03-video/full/` agora só tem versões evergreen sem data.

### Pendências L2

- [ ] Conferir os 10 vídeos (lip-sync, qualidade) antes de subir no Meta.
- [ ] Round 2 de teste no Meta Ads — ver `05-analise/matriz-de-testes.md`.

---

## Como gerar os vídeos pendentes (quando tiver saldo)

Ler `_config/heygen-api-workflow.md` (REST v3, avatar_v, NUNCA MCP). Áudios fonte em `02-audio/full/f{XX}.mp3`. Destino `03-video/full/f{XX}.mp4` (sobrescreve o L1 com data).
