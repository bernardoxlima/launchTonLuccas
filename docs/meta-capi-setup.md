# Meta Conversions API (CAPI) — Setup Completo

Documentação do tracking server-side Meta Ads integrado com Kirvano via Vercel Functions.

## Visão geral

```
Landing page (tonluccas.com.br)
  ├─ Browser: Meta Pixel → fbq('track', 'PageView')
  └─ Browser: sendBeacon → Vercel Function → Meta CAPI (PageView)

Kirvano checkout (webhook)
  └─ Kirvano POST → Vercel Function → Meta CAPI (InitiateCheckout / Purchase)
```

O Meta deduplica eventos browser + servidor pelo `event_id` compartilhado.

## Stack

- **Site:** Astro 5 (static) na Vercel
- **Pixel ID:** 1264597782386113
- **Checkout:** Kirvano (webhook)
- **Serverless Functions:** Vercel (Node.js, Fluid Compute)
- **Graph API:** v21.0

## Arquivos

| Arquivo | Função |
|---|---|
| `src/layouts/Base.astro` | Meta Pixel (browser) + sendBeacon pro CAPI + meta tag de verificação de domínio |
| `api/meta-capi.ts` | Vercel Function — recebe PageView do browser e envia pro Meta Graph API |
| `api/kirvano-webhook.ts` | Vercel Function — recebe webhooks da Kirvano e envia eventos pro Meta Graph API |
| `src/lib/tracking.ts` | Helpers de tracking (dataLayer para GA4) |

## Env vars na Vercel

| Variável | Tipo | Onde usar |
|---|---|---|
| `PUBLIC_META_PIXEL_ID` | Public | Browser (Astro build) + Functions |
| `META_CAPI_TOKEN` | Secret | Apenas Functions (nunca expor no browser) |
| `KIRVANO_WEBHOOK_SECRET` | Secret | Apenas na Function do webhook |
| `META_CAPI_TEST_CODE` | Secret (temporária) | Só durante testes — remover depois |

## Eventos configurados

| Ponto do funil | Evento Meta | Origem | Trigger |
|---|---|---|---|
| Visita na landing page | `PageView` | Browser + Servidor | Carregamento da página |
| Gera PIX no checkout | `InitiateCheckout` | Servidor | Webhook Kirvano (`PIX_GENERATED`) |
| Gera Boleto no checkout | `InitiateCheckout` | Servidor | Webhook Kirvano (`BOLETO_GENERATED`) |
| Gera PicPay no checkout | `InitiateCheckout` | Servidor | Webhook Kirvano (`PICPAY_GENERATED`) |
| Pagamento confirmado | `Purchase` | Servidor | Webhook Kirvano (`SALE_APPROVED`) |

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

### 4. Conversions API — Eventos de checkout (Kirvano webhook)

1. Gerar um webhook secret:
   ```bash
   openssl rand -hex 16
   ```
2. Setar na Vercel:
   ```bash
   echo "SECRET_AQUI" | npx vercel env add KIRVANO_WEBHOOK_SECRET production --yes
   ```
3. No painel Kirvano → Integrações → Webhooks → Adicionar integração:
   - **Nome:** Facebook C-API
   - **URL:** `https://www.tonluccas.com.br/api/kirvano-webhook`
   - **Token:** o secret gerado acima
   - **Produto:** Workshop Marca Pessoal Definitiva
   - **Eventos:** Boleto gerado, PicPay gerado, PIX gerado, Compra aprovada
4. A Vercel Function `api/kirvano-webhook.ts`:
   - Valida o token via header
   - Mapeia evento Kirvano → evento Meta standard
   - Hasheia PII com SHA-256 (email, telefone, nome, CPF)
   - Constrói `fbc` a partir do `fbclid` do cookie da Kirvano
   - Envia pro Meta Graph API com `event_id` baseado em `sale_id` (idempotente em retries)

### 5. Modo de teste

Para testar sem afetar dados de produção:

1. No Gerenciador de Eventos → aba Eventos de teste → copiar o código de teste
2. Setar na Vercel:
   ```bash
   echo "TEST12345" | npx vercel env add META_CAPI_TEST_CODE production --yes
   ```
3. Acessar o site e verificar na aba Eventos de teste se os eventos aparecem
4. Testar webhook com curl:
   ```bash
   curl -X POST "https://www.tonluccas.com.br/api/kirvano-webhook" \
     -H "Content-Type: application/json" \
     -H "token: SEU_SECRET" \
     -d '{"event":"SALE_APPROVED","sale_id":"TEST-001","status":"APPROVED","created_at":"2026-05-11 12:00:00","cookies":{"fbclid":"test123"},"customer":{"name":"Teste","email":"teste@test.com","document":"00000000000","phone_number":"5511999999999"},"products":[{"id":"produto-id","name":"Produto"}],"fiscal":{"total_value":47}}'
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

### InitiateCheckout / Purchase (Kirvano webhook)

| Campo | Origem |
|---|---|
| `event_id` | `kv.{sale_id}.{evento}` (idempotente) |
| `em` (email) | `customer.email` — SHA-256 |
| `ph` (telefone) | `customer.phone_number` — SHA-256 |
| `fn` (primeiro nome) | `customer.name` primeiro token — SHA-256 |
| `ln` (sobrenome) | `customer.name` último token — SHA-256 |
| `external_id` | `customer.document` (CPF) — SHA-256 |
| `country` | `br` — SHA-256 |
| `client_ip_address` | `ip` do payload Kirvano |
| `fbc` | Construído: `fb.1.{timestamp}.{cookies.fbclid}` |
| `fbp` | `cookies.fbp` direto do payload |
| `value` | `fiscal.total_value` |
| `currency` | `BRL` |
| `content_ids` | `products[].id` |
| `content_name` | `products[0].name` |

## Segurança

- `META_CAPI_TOKEN` nunca é exposto no browser (sem prefixo `PUBLIC_`)
- Webhook autenticado via token no header (não na URL)
- PII sempre hasheado com SHA-256 antes de enviar ao Meta
- Eventos idempotentes via `event_id` baseado em `sale_id` — retries da Kirvano não duplicam

## Troubleshooting

**Pixel não carrega:** verificar se `PUBLIC_GTM_ID` está vazio (se tiver valor, o pixel direto não carrega — assumindo que GTM gerencia)

**CAPI retorna 504:** a Vercel Function pode estar usando formato Web API (`Request`/`Response`) — usar `VercelRequest`/`VercelResponse` do `@vercel/node`

**Eventos de teste não aparecem:** verificar se `META_CAPI_TEST_CODE` está setado e se a aba "Eventos de teste" está aberta no Gerenciador de Eventos durante o teste

**Webhook retorna 401:** verificar se o token no header da Kirvano bate com `KIRVANO_WEBHOOK_SECRET` na Vercel

**Evento não mapeado:** a function retorna `200 { skipped: "EVENT_NAME" }` para eventos Kirvano não mapeados (ex: `REFUND`, `CHARGEBACK`)
