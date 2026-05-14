# Stage 2 — Audio (MiniMax T2A)

Le texto aprovado de `01-scripts/` e gera `.mp3` espelhando a estrutura de pastas.

## Inputs

| Layer | Path | Quando ler |
|-------|------|-----------|
| 4 (working) | `../01-scripts/**/*.md` com `status: aprovado` | Texto fonte |
| 3 (config) | `../_config/minimax.json` | Config fixa de T2A |
| 3 (referencia) | `../_config/reference/nomenclature.md` | Mapping path 01-scripts → 02-audio |

## Pre-condicoes (setup)

Voz `ton-luccas-v1` precisa existir. Se nao existir, rodar `../setup/01-voice-clone.md` ANTES.

## Process

### 1. Verificar voz (vozes clonadas expiram apos 7 dias sem uso)

```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/get_voice" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"voice_type": "voice_cloning"}'
```

Procurar `ton-luccas-v1` no array `voice_cloning`.
- **Encontrou** → seguir pro passo 2
- **Nao encontrou** → rodar `../setup/01-voice-clone.md`

### 2. T2A (text-to-audio)

**Endpoint:** `POST https://api.minimax.io/v1/t2a_v2`
**Alternativo (menor latencia):** `POST https://api-uw.minimax.io/v1/t2a_v2`

Todos os defaults estao em `../_config/minimax.json`. Ler o JSON e montar request.

```bash
source .env && curl -s -X POST "https://api.minimax.io/v1/t2a_v2" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "speech-2.8-hd",
    "text": "TEXTO DO HOOK/BODY/CTA AQUI",
    "output_format": "url",
    "subtitle_enable": true,
    "subtitle_type": "word",
    "language_boost": "Portuguese",
    "audio_setting": {
      "format": "mp3",
      "sample_rate": 32000,
      "bitrate": 128000,
      "channel": 1
    },
    "voice_setting": {
      "voice_id": "ton-luccas-v1",
      "speed": 1.1,
      "vol": 1,
      "pitch": 0,
      "emotion": "angry",
      "text_normalization": true
    },
    "pronunciation_dict": {
      "tone": ["Vorus/Vórus", "Ton/Tón"]
    }
  }'
```

### 3. Baixar audio + legendas

Resposta contem `data.audio` (URL mp3, valida 24h) e `data.subtitle_file` (URL JSON com word timestamps em ms).

```bash
audio_url=$(echo $response | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['audio'])")
sub_url=$(echo $response | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['subtitle_file'])")

curl -sL -o "hooks/NC5-most-aware/h01.mp3" "$audio_url"
curl -sL -o "hooks/NC5-most-aware/h01.subtitle.json" "$sub_url"
```

O `.subtitle.json` contem timestamps por palavra em milissegundos. Usado em `04-finais/` pra gerar legendas `.ass` com estilo customizado.

### 4. Atualizar status do .md fonte

Promover `status: aprovado` → `status: audio-ok` no frontmatter do .md em `01-scripts/`.

## Outputs

Mesma hierarquia de `01-scripts/`, com `.mp3` + `.subtitle.json`:

```
02-audio/hooks/NC<X>-<awareness>/h<XX>.mp3
02-audio/hooks/NC<X>-<awareness>/h<XX>.subtitle.json
02-audio/body/NC<X>-<awareness>/b<XX>.mp3
02-audio/body/NC<X>-<awareness>/b<XX>.subtitle.json
02-audio/ctas/cta<XX>.mp3
02-audio/ctas/cta<XX>.subtitle.json
```

## Controles de texto (perguntar ao user antes de usar)

**Pausas customizadas** — inserir respiracao natural entre frases:
```
Texto antes <#1.5#> texto depois da pausa de 1.5 segundos.
```
Range: 0.01-99.99 segundos.

**Interjeicoes** — tags que criam sons naturais (speech-2.8-hd):
`(laughs)`, `(chuckle)`, `(coughs)`, `(clear-throat)`, `(groans)`, `(breath)`,
`(pant)`, `(inhale)`, `(exhale)`, `(gasps)`, `(sniffs)`, `(sighs)`, `(snorts)`,
`(burps)`, `(lip-smacking)`, `(humming)`, `(hissing)`, `(emm)`, `(sneezes)`

**Antes de inserir pausas ou interjeicoes:** perguntar ao user via AskUserQuestion.

## Pronuncia customizada

Registrada em `../_config/minimax.json` no campo `pronunciation_dict.tone`.
Formato: `"original/como pronunciar"`.
Valores atuais: `Vorus/Vórus`, `Ton/Tón`.

**Ao encontrar nomes proprios novos:** perguntar ao user se quer adicionar pronuncia.

## Config fixa (nao mexer sem pedir ao user)

| Parametro | Valor | Motivo |
|-----------|-------|--------|
| `model` | `speech-2.8-hd` | Melhor resultado pra voz do Ton |
| `speed` | 1.1 | Ritmo natural do Ton |
| `emotion` | `angry` | Funciona melhor de forma geral |
| `text_normalization` | true | Ler valores (R$ 47, 60 mil) corretamente |
| `output_format` | `url` | Retorna link direto, sem converter hex |

**Textos acima de 3000 chars:** usar `"stream": true`.

## Erros comuns

| Codigo | Significado |
|--------|-------------|
| 0 | Sucesso |
| 1002 | Rate limit |
| 1004 | Autenticacao falhou — checar MINIMAX_API_KEY |
| 1008 | Saldo insuficiente — recarregar na plataforma |
| 2013 | Parametros invalidos |
