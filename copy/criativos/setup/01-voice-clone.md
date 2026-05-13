# Setup 01 — Voice Clone (MiniMax)

Clona uma voz no MiniMax pra usar em T2A. Roda **uma vez por cliente** ou quando a voz expira (>7 dias sem uso).

## Pre-condicoes

- `MINIMAX_API_KEY` em `.env` (raiz do projeto)
- Audio fonte: mp3/m4a/wav, **10s a 5min**, **max 20MB**, audio limpo do cliente falando

## Quando rodar

Antes de rodar T2A, sempre verificar se a voz existe (`02-audio/CONTEXT.md` faz isso). So executar este fluxo se a verificacao retornar 404.

```bash
# Verificacao
source .env && curl -s -X POST "https://api.minimax.io/v1/get_voice" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"voice_type": "voice_cloning"}'
```

Procurar `ton-luccas-v1` (ou o voice_id do cliente) no array `voice_cloning`.
- **Encontrou** → nao rodar setup, ir direto pra producao
- **Nao encontrou** → seguir abaixo

## Passo 1 — Upload do audio fonte

```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/files/upload" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -F "purpose=voice_clone" \
  -F "file=@/caminho/para/audio-do-cliente.mp3"
```

Retorna `file_id` (int64).

## Passo 2 — Clonar a voz

```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/voice_clone" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": FILE_ID_DO_PASSO_1,
    "voice_id": "ton-luccas-v1",
    "model": "speech-2.8-hd",
    "text": "Texto de preview pra testar a voz clonada.",
    "language_boost": "Portuguese",
    "need_noise_reduction": true
  }'
```

**Regras do voice_id:**
- 8-256 chars
- comeca com letra
- alfanumerico + `-` e `_`

## Passo 3 — Atualizar `_config/minimax.json`

Gravar:
- `voice_setting.voice_id`: o voice_id clonado
- `voice_clone.source_audio`: path absoluto do .mp3 fonte
- `voice_clone.cloned_at`: data ISO de hoje
- `voice_clone.ttl`: "7 dias sem uso — verificar via get_voice antes de gerar"

## Resultado

Voz disponivel pra T2A em `02-audio/`. Setup completo desse passo.
