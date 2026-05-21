# HeyGen API Workflow — Video Generation via REST v3

## Contexto

O MCP do HeyGen (OAuth) **nao funciona** pra gerar videos neste projeto. O billing type da conta eh `wallet` (prepaid via API key), e o MCP usa OAuth com billing path diferente — resulta em `AVATAR_IV_VIDEO_GENERATION_OUT_OF_CREDIT` mesmo com saldo disponivel.

**Solucao:** usar a REST API v3 diretamente via curl com a API key do `.env`.

## Custo medio por video

~$2.00 USD por video de ~30 segundos com Avatar V em 1080p 9:16. Verificar saldo antes de gerar em lote.

---

## Fluxo de trabalho (4 passos)

### Passo 1 — Upload do audio

```bash
source .env && curl -s -X POST "https://api.heygen.com/v3/assets" \
  -H "x-api-key: $HEYGEN_API_KEY" \
  -F "file=@/caminho/para/audio.mp3"
```

**Resposta:**
```json
{
  "data": {
    "asset_id": "xxx",
    "mime_type": "audio/mpeg",
    "size_bytes": 736173,
    "url": "https://resource2.heygen.ai/audio/xxx/original.mp3"
  }
}
```

Guardar o `asset_id` para o passo 2.

### Passo 2 — Gerar video

Endpoint: `POST https://api.heygen.com/v3/videos`

```bash
source .env && curl -s -X POST "https://api.heygen.com/v3/videos" \
  -H "x-api-key: $HEYGEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "avatar",
    "avatar_id": "8f027b074c8843cbb782edd3f2e1baeb",
    "audio_asset_id": "ASSET_ID_DO_PASSO_1",
    "title": "f03 - Full Script (avatar_v)",
    "resolution": "1080p",
    "aspect_ratio": "9:16",
    "engine": {"type": "avatar_v"}
  }'
```

**Resposta:**
```json
{
  "data": {
    "video_id": "xxx",
    "status": "waiting",
    "output_format": "mp4"
  }
}
```

### Passo 3 — Monitorar status

```bash
source .env && curl -s -X GET "https://api.heygen.com/v3/videos/VIDEO_ID" \
  -H "x-api-key: $HEYGEN_API_KEY"
```

**Status possiveis:** `waiting` → `processing` → `completed` (ou `failed`)

Tempo tipico de renderizacao: **3 a 6 minutos** por video. Pollar a cada 2 minutos.

Quando `completed`, a resposta inclui `video_url` dentro de `data`.

**Extrair video_url:**
```bash
source .env && curl -s -X GET "https://api.heygen.com/v3/videos/VIDEO_ID" \
  -H "x-api-key: $HEYGEN_API_KEY" \
  | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; print(d.get('video_url',''))"
```

### Passo 4 — Baixar video e salvar no lugar certo

**Destino por tipo de video:**

| Tipo | Audio source | Destino | Naming |
|---|---|---|---|
| Full script | `02-audio/full/f{XX}.mp3` | `03-video/full/f{XX}.mp4` | `f{XX}.mp4` |
| Hook | `02-audio/hooks/...` | `03-video/hooks/...` | segue nomenclatura NC |
| Body | `02-audio/body/...` | `03-video/body/...` | segue nomenclatura NC |
| CTA | `02-audio/ctas/...` | `03-video/ctas/...` | `cta{X}.mp4` |

```bash
curl -s -L "VIDEO_URL_DO_PASSO_3" \
  -o /Users/bernardoxlima/Desktop/tonluccas_launchOS/copy/criativos/03-video/full/f{XX}.mp4
```

Verificar tamanho apos download (`ls -lh`) — videos tipicos com Avatar V tem ~17-38MB dependendo da duracao.

**Regra:** o nome do .mp4 SEMPRE espelha o nome do .mp3 fonte. `f03.mp3` → `f03.mp4`.

---

## Payload obrigatorio (copiar e ajustar apenas audio_asset_id e title)

```json
{
  "type": "avatar",
  "avatar_id": "8f027b074c8843cbb782edd3f2e1baeb",
  "audio_asset_id": "<<SUBSTITUIR>>",
  "title": "<<SUBSTITUIR>>",
  "resolution": "1080p",
  "aspect_ratio": "9:16",
  "engine": {"type": "avatar_v"}
}
```

Nao adicionar nenhum outro campo alem desses 6. O payload acima eh o que produz a melhor qualidade confirmada.

## Campos obrigatorios — explicacao

| Campo | Valor | Por que |
|---|---|---|
| `type` | `"avatar"` | Tipo de video (Digital Twin) |
| `avatar_id` | `8f027b074c8843cbb782edd3f2e1baeb` | Look do Ton - V1 |
| `engine` | `{"type": "avatar_v"}` | **OBRIGATORIO** — eh um OBJETO, nao string. Sem ele, default eh avatar_iv (qualidade muito inferior e custo similar) |
| `aspect_ratio` | `"9:16"` | Formato vertical (Reels/Stories) |
| `resolution` | `"1080p"` | Full HD |
| `audio_asset_id` | (do passo 1) | ID do asset uploadado. Mutually exclusive com `script` + `voice_id` |

## O que NAO fazer

- **NAO usar o MCP do HeyGen pra gerar videos** — billing OAuth vs wallet causa falha de creditos
- **NAO usar endpoint v2** (`/v2/video/generate`) — qualidade de renderizacao inferior ao v3, mesmo passando avatar_v. Os videos f05-f10 gerados via v2 ficaram visivelmente piores que f01-f04 via v3
- **NAO omitir `engine: {"type": "avatar_v"}`** — sem ele, renderiza com avatar_iv (qualidade inferior, custo similar)
- **NAO passar engine como string** (`"engine": "avatar_v"`) — na v3 eh obrigatoriamente um objeto `{"type": "avatar_v"}`
- **NAO usar `audio_url`** — sempre fazer upload primeiro e usar `audio_asset_id`
- **NAO incluir `motion_prompt` ou `expressiveness`** — sao Avatar IV only, causam erro de validacao no Avatar V
- **NAO incluir `dimension`** — campo da v2, na v3 usar `resolution` em vez disso
- **NAO incluir campos extras** como `test`, `video_inputs`, `voice`, `avatar_style` — sao da v2 e causam erro ou sao ignorados na v3

## Geracao em lote

Para gerar multiplos videos, disparar todos em paralelo (cada um com seu asset_id) e monitorar status em batch:

```bash
source .env && for vid in "f05:ASSET_ID_1" "f06:ASSET_ID_2"; do
  name="${vid%%:*}"; asset="${vid##*:}"
  curl -s -X POST "https://api.heygen.com/v3/videos" \
    -H "x-api-key: $HEYGEN_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"type\": \"avatar\",
      \"avatar_id\": \"8f027b074c8843cbb782edd3f2e1baeb\",
      \"audio_asset_id\": \"$asset\",
      \"title\": \"$name - Full Script (avatar_v)\",
      \"resolution\": \"1080p\",
      \"aspect_ratio\": \"9:16\",
      \"engine\": {\"type\": \"avatar_v\"}
    }"
  echo ""
done
```

Monitorar todos de uma vez:
```bash
source .env && for vid in "f05:VIDEO_ID_1" "f06:VIDEO_ID_2"; do
  name="${vid%%:*}"; id="${vid##*:}"
  st=$(curl -s -X GET "https://api.heygen.com/v3/videos/$id" \
    -H "x-api-key: $HEYGEN_API_KEY" \
    | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; print(d.get('status','unknown'))")
  echo "$name: $st"
done
```

## Verificar saldo

```bash
source .env && curl -s -X GET "https://api.heygen.com/v3/users/me" \
  -H "x-api-key: $HEYGEN_API_KEY" \
  | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; print(f\"Saldo: \${d['wallet']['remaining_balance']:.2f} USD\")"
```

## Referencia

- Avatar group (identity): `5bd7498f68a04508a7ad59e9de84ce35`
- Avatar look (avatar_id): `8f027b074c8843cbb782edd3f2e1baeb`
- Engine: `{"type": "avatar_v"}` (SEMPRE, como objeto, NUNCA como string)
- API key: `.env` → `HEYGEN_API_KEY`
- Conta: `assinaturas@versocreative.com.br` (billing_type: wallet)
- Todos os endpoints: v3 (`/v3/assets`, `/v3/videos`, `/v3/videos/{id}`, `/v3/users/me`)
- Custo medio: ~$2.00 USD por video de ~30s
