import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash, createHmac, timingSafeEqual } from 'crypto';

const GRAPH_API = 'https://graph.facebook.com/v21.0';

// Evento Eduzz v3 (sem o prefixo "myeduzz.") → evento Meta standard.
// invoice_waiting_payment = PIX/boleto gerado, aguardando pagamento.
// invoice_paid            = pagamento confirmado.
const EVENT_MAP: Record<string, string> = {
  invoice_waiting_payment: 'InitiateCheckout',
  invoice_paid: 'Purchase',
};

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

// HMAC precisa dos BYTES CRUS do body. O @vercel/node parseia req.body
// automaticamente, então lemos o stream do IncomingMessage e NUNCA tocamos
// em req.body (que consumiria/alteraria o conteúdo).
async function readRawBody(req: VercelRequest): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf8');
}

// Eduzz assina: x-signature = hmac('sha256', secret, raw_body) em hex.
function verifySignature(rawBody: string, header: string, secret: string): boolean {
  const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
  const received = header.replace(/^sha256=/i, '').trim().toLowerCase();
  const a = Buffer.from(expected);
  const b = Buffer.from(received);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return res.status(500).end();

  // Raw body PRIMEIRO (HMAC precisa dos bytes crus). Se o runtime já tiver
  // consumido o stream, cai pro req.body parseado — assim o webhook NUNCA
  // quebra; só abre mão da verificação de assinatura nesse caso de fallback.
  let rawBody = '';
  try {
    rawBody = await readRawBody(req);
  } catch {
    rawBody = '';
  }

  let body: any;
  if (rawBody) {
    const secret = process.env.CHECKOUT_WEBHOOK_SECRET;
    if (secret) {
      const sig = (req.headers['x-signature'] as string) || '';
      if (!sig || !verifySignature(rawBody, sig, secret)) {
        return res.status(401).end();
      }
    }
    try {
      body = JSON.parse(rawBody);
    } catch {
      return res.status(400).end();
    }
  } else {
    body = (req as { body?: unknown }).body;
    if (!body || typeof body !== 'object') return res.status(400).end();
  }

  // Eduzz manda event = "myeduzz.invoice_paid" — normaliza tirando o prefixo
  // (tolerante a config que mande com ou sem namespace).
  const rawEvent = (body?.event as string) || '';
  const eventKey = rawEvent.includes('.') ? rawEvent.split('.').pop()! : rawEvent;
  const metaEvent = EVENT_MAP[eventKey];
  if (!metaEvent) return res.status(200).json({ skipped: rawEvent });

  const data = body.data || {};
  const buyer = data.buyer || {};
  const items: Array<{ productId?: string | number; name?: string }> = data.items || [];
  const tracker = data.tracker || {};

  // PII hasheada com SHA-256 (requisito Meta)
  const userData: Record<string, unknown> = {};

  if (buyer.email) userData.em = [sha256(String(buyer.email))];
  const phone = buyer.cellphone || buyer.phone || buyer.phone2;
  if (phone) userData.ph = [sha256(String(phone))];
  if (buyer.name) {
    const parts = String(buyer.name).trim().split(/\s+/);
    userData.fn = [sha256(parts[0])];
    if (parts.length > 1) userData.ln = [sha256(parts[parts.length - 1])];
  }
  if (buyer.document) userData.external_id = [sha256(String(buyer.document))];
  userData.country = [sha256('br')];

  if (body.ip || data.ip) userData.client_ip_address = body.ip || data.ip;

  // Eduzz NÃO repassa fbp/fbclid nativamente (a Kirvano mandava em cookies).
  // Se o checkout for configurado pra repassar _fbp/_fbc via tracker codes
  // (cod1/cod2), aproveitamos aqui — só se o valor tiver cara de fbp/fbc.
  for (const code of [tracker.code1, tracker.code2, tracker.code3]) {
    if (typeof code === 'string' && /^fb\.\d/.test(code)) {
      if (!userData.fbp) userData.fbp = code;
      else if (!userData.fbc) userData.fbc = code;
    }
  }

  const value = Number(data?.paid?.value ?? data?.value ?? 0) || 0;
  const customData: Record<string, unknown> = {
    currency: data?.paid?.currency || 'BRL',
    value,
    content_type: 'product',
    content_ids: items.map((p) => String(p.productId ?? '')).filter(Boolean),
    content_name: items[0]?.name || data?.offer?.name || '',
    num_items: items.length,
  };

  // event_id idempotente: dedup no Meta se a Eduzz reenviar (retry).
  const eventId = `ez.${data.id ?? 'na'}.${eventKey}`;

  let eventTime = Math.floor(Date.now() / 1000);
  if (data.sentDate) {
    const parsed = new Date(data.sentDate);
    if (!isNaN(parsed.getTime())) eventTime = Math.floor(parsed.getTime() / 1000);
  }

  const payload: Record<string, unknown> = {
    data: [{
      event_name: metaEvent,
      event_time: eventTime,
      event_id: eventId,
      event_source_url: 'https://www.tonluccas.com.br/',
      action_source: 'website',
      user_data: userData,
      custom_data: customData,
    }],
    access_token: token,
  };

  const testCode = process.env.META_CAPI_TEST_CODE;
  if (testCode) payload.test_event_code = testCode;

  try {
    const metaRes = await fetch(`${GRAPH_API}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await metaRes.json();
    return res.status(metaRes.ok ? 200 : 502).json(result);
  } catch {
    return res.status(502).end();
  }
}
