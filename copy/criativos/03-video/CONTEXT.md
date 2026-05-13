# Stage 3 — Video (HeyGen avatar)

Le `.mp3` de `02-audio/` + avatar HeyGen e gera `.mp4` espelhando estrutura.

## Inputs

| Layer | Path | Quando ler |
|-------|------|-----------|
| 4 (working) | `../02-audio/**/*.mp3` | Audio fonte |
| 3 (config) | `../_config/heygen.json` | avatar_id + quality + aspect_ratio |

## Pre-condicoes (setup)

`avatar_id` precisa estar preenchido em `../_config/heygen.json`. Se nao tem, rodar `../setup/02-avatar-pick.md`.

## Process

1. **Perguntar ao user qual avatar usar** via AskUserQuestion (descricoes visuais em `../_config/heygen.json`).
2. Enviar `.mp3` + `avatar_id` pra HeyGen API.
3. Aguardar render (HeyGen retorna `video_id`, depois polling no status).
4. Baixar `.mp4`.
5. Atualizar `status: audio-ok` → `status: video-ok` no `.md` fonte em `01-scripts/`.

Documentacao completa da API HeyGen: preencher quando integrar de fato.

## Outputs

Mesma hierarquia, extensao `.mp4`:

```
03-video/hooks/NC<X>-<awareness>/h<XX>.mp4
03-video/body/NC<X>-<awareness>/b<XX>.mp4
03-video/ctas/c<XX>.mp4
```

## Config

| Parametro | Valor padrao | Notas |
|-----------|--------------|-------|
| `quality` | `high` | Manter |
| `aspect_ratio` | `9:16` | Reels/Stories. Mudar pra `16:9` se precisar horizontal. |
| `avatar_id` | (definido em setup) | Visual descriptions em `_config/heygen.json` |
