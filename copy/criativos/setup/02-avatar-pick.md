# Setup 02 — Avatar Pick (HeyGen)

Escolhe o avatar HeyGen que vai falar nos videos. Roda **uma vez por cliente** ou quando o cliente quer trocar.

## Pre-condicoes

- `HEYGEN_API_KEY` em `.env` (raiz do projeto)
- Cliente decidiu qual estilo quer (talking head com video real do cliente, avatar fotorealista, avatar animado, etc)

## Passo 1 — Listar avatares disponiveis

```bash
source .env && curl -s -X GET "https://api.heygen.com/v2/avatars" \
  -H "X-Api-Key: $HEYGEN_API_KEY"
```

Retorna array de avatares com `avatar_id`, `avatar_name`, `preview_image_url`, `preview_video_url`, `gender`.

## Passo 2 — Apresentar opcoes ao user

Perguntar via AskUserQuestion qual avatar usar. Mostrar:
- Nome
- Genero
- Link do preview video
- Descricao visual (1 frase: "homem branco, cabelo curto, camisa azul, fundo escritorio")

**Se o cliente quer usar o proprio rosto** (instant avatar / custom avatar):
1. Apontar pra docs HeyGen: https://docs.heygen.com/docs/instant-avatar
2. Cliente faz o upload no app HeyGen
3. Pegar o `avatar_id` do dashboard apos training completar
4. Voltar aqui pro passo 3

## Passo 3 — Gravar em `_config/heygen.json`

Editar `../_config/heygen.json`:

```json
{
  "provider": "heygen",
  "purpose": "audio-to-video com avatar do cliente",
  "avatar_id": "ID_DO_AVATAR_ESCOLHIDO",
  "quality": "high",
  "aspect_ratio": "9:16",
  "avatar_description": "homem branco, cabelo curto, camisa azul"
}
```

## Passo 4 — Smoke test (opcional)

Gerar 1 video curto de teste pra validar que o avatar + voice clone batem.
Usar 1 hook curto qualquer de `01-scripts/hooks/` + audio correspondente em `02-audio/hooks/`.

## Resultado

Avatar configurado. Setup completo desse passo. `03-video/CONTEXT.md` pode rodar producao.
