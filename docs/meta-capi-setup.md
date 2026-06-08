# Meta Conversions API (CAPI) — Setup Completo

Documentação do tracking server-side Meta Ads integrado com Eduzz via Vercel Functions.

## Visão geral

```
Landing page (tonluccas.com.br)
  ├─ Browser: Meta Pixel → fbq('track', 'PageView')
  └─ Browser: sendBeacon → Vercel Function → Meta CAPI (PageView)

Eduzz checkout (webhook v3)
  └─ Eduzz POST → Vercel Function → Meta CAPI (InitiateCheckout / Purchase)
```

O Meta deduplica eventos browser + servidor pelo `event_id` compartilhado.

## Stack

- **Site:** Astro 5 (static) na Vercel
- **Pixel ID:** 1264597782386113
- **Checkout:** Eduzz (webhook v3 — payload JSON + assinatura HMAC `x-signature`)
- **Serverless Functions:** Vercel (Node.js, Fluid Compute)
- **Graph API:** v21.0

## Arquivos

| Arquivo | Função |
|---|---|
| `src/layouts/Base.astro` | Meta Pixel (browser) + sendBeacon pro CAPI + meta tag de verificação de domínio |
| `api/meta-capi.ts` | Vercel Function — recebe PageView do browser e envia pro Meta Graph API |
| `api/sale-webhook.ts` | Vercel Function — recebe webhooks da Eduzz e envia eventos pro Meta Graph API |
| `src/lib/tracking.ts` | Helpers de tracking (dataLayer para GA4) |

## Env vars na Vercel

| Variável | Tipo | Onde usar |
|---|---|---|
| `PUBLIC_META_PIXEL_ID` | Public | Browser (Astro build) + Functions |
| `META_CAPI_TOKEN` | Secret | Apenas Functions (nunca expor no browser) |
| `CHECKOUT_WEBHOOK_SECRET` | Secret | Apenas na Function do webhook (secret de assinatura HMAC da Eduzz) |
| `META_CAPI_TEST_CODE` | Secret (temporária) | Só durante testes — remover depois |

## Eventos configurados

| Ponto do funil | Evento Meta | Origem | Trigger |
|---|---|---|---|
| Visita na landing page | `PageView` | Browser + Servidor | Carregamento da página |
| PIX/Boleto gerado (aguardando pgto) | `InitiateCheckout` | Servidor | Webhook Eduzz (`myeduzz.invoice_waiting_payment`) |
| Pagamento confirmado | `Purchase` | Servidor | Webhook Eduzz (`myeduzz.invoice_paid`) |

## Como foi configurado — passo a passo

### 1. Meta Pixel (browser)

1. Criar pixel no Gerenciador de Eventos do Meta Business
2. Copiar o Pixel ID
3. Setar `PUBLIC_META_PIXEL_ID` na Vercel:
   ```bash
   echo "PIXEL_ID_AQUI" | npx vercel env add PUBLIC_META_PIXEL_ID production --yes
   ```
4. O `Base.astro` já carrega o script do pixel quando `PUBLIC_GTM_ID` está vazio (modo direto, sem GTM)

### 2. Verificação de domínio

1. No Meta Business → Configurações do Negócio → Segurança da Marca → Domínios
2. Copiar a meta tag fornecida
3. Adicionar no `<head>` do `Base.astro`:
   ```html
   <meta name="facebook-domain-verification" content="SEU_CODIGO" />
   ```
4. Deploy e clicar "Verificar domínio" no Meta

### 3. Conversions API — PageView (server-side)

1. No Gerenciador de Eventos → pixel → Configurações → Conversions API → Gerar token de acesso
2. Setar na Vercel:
   ```bash
   echo "TOKEN_AQUI" | npx vercel env add META_CAPI_TOKEN production --yes
   ```
3. A Vercel Function `api/meta-capi.ts` recebe o PageView via `sendBeacon` do browser e envia pro Meta Graph API com:
   - `event_id` compartilhado com o pixel (deduplicação)
   - `client_ip_address` e `client_user_agent` dos headers do request
   - Cookies `_fbc` (Facebook click ID) e `_fbp` (Facebook browser ID)

### 4. Conversions API — Eventos de checkout (Eduzz webhook v3)

1. No console de desenvolvedor da Eduzz → Webhook → Segurança: gerar uma
   **chave de assinatura** (a Eduzz usa pra assinar cada request via HMAC).
   Copiar o valor gerado.
2. Setar na Vercel (valor = a chave copiada da Eduzz):
   ```bash
   echo "CHAVE_DA_EDUZZ" | npx vercel env add CHECKOUT_WEBHOOK_SECRET production --yes
   ```
   Remover a var antiga da Kirvano (agora morta):
   ```bash
   npx vercel env rm KIRVANO_WEBHOOK_SECRET production --yes
   ```
3. No console da Eduzz → Webhook → Adicionar:
   - **URL:** `https://www.tonluccas.com.br/api/sale-webhook`
   - **Eventos:** `Fatura Paga` (invoice_paid) + `Fatura Aguardando Pagamento` (invoice_waiting_payment)
   - **Chave de assinatura:** a mesma chave setada no passo 2
4. A Vercel Function `api/sale-webhook.ts`:
   - Lê o **raw body** (bytes crus) e valida a assinatura `x-signature` via
     HMAC-SHA256 com `CHECKOUT_WEBHOOK_SECRET` (se a var não estiver setada,
     processa sem verificar — útil durante a transição)
   - Normaliza o evento Eduzz (`myeduzz.invoice_paid` → `invoice_paid`) e mapeia
     pro evento Meta standard
   - Hasheia PII com SHA-256 (email, telefone, nome, CPF)
   - Envia pro Meta Graph API com `event_id` baseado em `data.id` da fatura
     (idempotente em retries da Eduzz)

> **Nota — fbp/fbc:** a Eduzz **não** repassa os cookies `_fbp`/`_fbclid` do
> Facebook no payload (a Kirvano repassava). O match server-side fica baseado em
> email + telefone + CPF hasheados (forte). Pra recuperar fbp/fbc no futuro,
> repassar via tracker codes da Eduzz (`cod1`/`cod2` no link de checkout) — a
> Function já lê `data.tracker.code1/2/3` quando tiverem cara de `fb.*`.

### 5. Modo de teste

Para testar sem afetar dados de produção:

1. No Gerenciador de Eventos → aba Eventos de teste → copiar o código de teste
2. Setar na Vercel:
   ```bash
   echo "TEST12345" | npx vercel env add META_CAPI_TEST_CODE production --yes
   ```
3. Acessar o site e verificar na aba Eventos de teste se os eventos aparecem
4. Testar webhook com curl. Com `CHECKOUT_WEBHOOK_SECRET` **não setado** (ou
   durante a transição), a Function processa sem checar assinatura:
   ```bash
   BODY='{"event":"myeduzz.invoice_paid","data":{"id":"TEST-001","status":"paid","sentDate":"2026-06-08T12:00:00-03:00","buyer":{"name":"Teste Silva","email":"teste@test.com","document":"00000000000","cellphone":"5511999999999"},"paid":{"value":47,"currency":"BRL"},"items":[{"productId":"produto-id","name":"Produto"}],"offer":{"name":"Workshop MPD"}}}'
   curl -X POST "https://www.tonluccas.com.br/api/sale-webhook" \
     -H "Content-Type: application/json" \
     -d "$BODY"
   ```
   Com o secret setado, calcular a assinatura HMAC e mandar no header:
   ```bash
   SIG=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "SEU_SECRET" | sed 's/^.* //')
   curl -X POST "https://www.tonluccas.com.br/api/sale-webhook" \
     -H "Content-Type: application/json" \
     -H "x-signature: $SIG" \
     -d "$BODY"
   ```
5. Após validar, remover o código de teste:
   ```bash
   npx vercel env rm META_CAPI_TEST_CODE production --yes
   npx vercel deploy --prod --yes
   ```

## Dados enviados ao Meta por evento

### PageView (landing page)

| Campo | Origem |
|---|---|
| `event_id` | Gerado no browser (`pv.{timestamp}.{random}`) |
| `client_ip_address` | Header `x-forwarded-for` na Vercel Function |
| `client_user_agent` | Header `user-agent` na Vercel Function |
| `fbc` | Cookie `_fbc` do browser |
| `fbp` | Cookie `_fbp` do browser |

### InitiateCheckout / Purchase (Eduzz webhook v3)

| Campo | Origem |
|---|---|
| `event_id` | `ez.{data.id}.{evento}` (idempotente) |
| `em` (email) | `data.buyer.email` — SHA-256 |
| `ph` (telefone) | `data.buyer.cellphone` (fallback `phone`/`phone2`) — SHA-256 |
| `fn` (primeiro nome) | `data.buyer.name` primeiro token — SHA-256 |
| `ln` (sobrenome) | `data.buyer.name` último token — SHA-256 |
| `external_id` | `data.buyer.document` (CPF) — SHA-256 |
| `country` | `br` — SHA-256 |
| `client_ip_address` | `data.ip` / `ip` (se presente) |
| `fbp` / `fbc` | `data.tracker.code1/2/3` (só se vierem como `fb.*`; ver nota acima) |
| `value` | `data.paid.value` |
| `currency` | `data.paid.currency` (fallback `BRL`) |
| `content_ids` | `data.items[].productId` |
| `content_name` | `data.items[0].name` (fallback `data.offer.name`) |

## Segurança

- `META_CAPI_TOKEN` nunca é exposto no browser (sem prefixo `PUBLIC_`)
- Webhook autenticado via assinatura HMAC-SHA256 (`x-signature`) sobre o raw body
- PII sempre hasheado com SHA-256 antes de enviar ao Meta
- Eventos idempotentes via `event_id` baseado em `data.id` (fatura) — retries da Eduzz não duplicam

## Troubleshooting

**Pixel não carrega:** verificar se `PUBLIC_GTM_ID` está vazio (se tiver valor, o pixel direto não carrega — assumindo que GTM gerencia)

**CAPI retorna 504:** a Vercel Function pode estar usando formato Web API (`Request`/`Response`) — usar `VercelRequest`/`VercelResponse` do `@vercel/node`

**Eventos de teste não aparecem:** verificar se `META_CAPI_TEST_CODE` está setado e se a aba "Eventos de teste" está aberta no Gerenciador de Eventos durante o teste

**Webhook retorna 401:** a assinatura `x-signature` não bateu — conferir se a chave na Eduzz é exatamente a mesma de `CHECKOUT_WEBHOOK_SECRET` na Vercel. (Sem a var setada, a Function não checa assinatura e não dá 401.)

**Webhook retorna 400:** body não é JSON válido / raw body vazio — conferir o `Content-Type: application/json` e o payload.

**Evento não mapeado:** a function retorna `200 { skipped: "EVENT_NAME" }` para eventos Eduzz não mapeados (ex: `myeduzz.invoice_refunded`, `myeduzz.invoice_canceled`)
