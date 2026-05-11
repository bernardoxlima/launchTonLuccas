import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash } from 'crypto';

const GRAPH_API = 'https://graph.facebook.com/v21.0';

const EVENT_MAP: Record<string, string> = {
  PIX_GENERATED: 'InitiateCheckout',
  BOLETO_GENERATED: 'InitiateCheckout',
  PICPAY_GENERATED: 'InitiateCheckout',
  SALE_APPROVED: 'Purchase',
};

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function buildFbc(fbclid: string): string {
  return `fb.1.${Date.now()}.${fbclid}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const secret = process.env.KIRVANO_WEBHOOK_SECRET;
  if (secret && req.query.token !== secret) return res.status(401).end();

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return res.status(500).end();

  const body = req.body;
  const kirvanoEvent = body?.event as string;
  const metaEvent = EVENT_MAP[kirvanoEvent];
  if (!metaEvent) return res.status(200).json({ skipped: kirvanoEvent });

  const customer = body.customer || {};
  const products: Array<{ id: string; name: string }> = body.products || [];
  const cookies = body.cookies || {};
  const fiscal = body.fiscal || {};

  // PII hashed with SHA-256 (Meta requirement)
  const userData: Record<string, unknown> = {};

  if (customer.email) userData.em = [sha256(customer.email)];
  if (customer.phone_number) userData.ph = [sha256(customer.phone_number)];
  if (customer.name) {
    const parts = (customer.name as string).trim().split(/\s+/);
    userData.fn = [sha256(parts[0])];
    if (parts.length > 1) userData.ln = [sha256(parts[parts.length - 1])];
  }
  if (customer.document) userData.external_id = [sha256(customer.document)];
  userData.country = [sha256('br')];

  if (body.ip) userData.client_ip_address = body.ip;
  if (cookies.fbp) userData.fbp = cookies.fbp;
  if (cookies.fbclid) userData.fbc = buildFbc(cookies.fbclid);

  const value = fiscal.total_value || 0;
  const customData: Record<string, unknown> = {
    currency: 'BRL',
    value,
    content_type: 'product',
    content_ids: products.map((p) => p.id),
    content_name: products[0]?.name || '',
    num_items: products.length,
  };

  // Idempotent event_id: dedup on Meta side if Kirvano retries
  const eventId = `kv.${body.sale_id}.${kirvanoEvent}`;

  let eventTime = Math.floor(Date.now() / 1000);
  if (body.created_at) {
    const parsed = new Date(body.created_at.replace(' ', 'T') + '-03:00');
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
