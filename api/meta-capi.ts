import type { VercelRequest, VercelResponse } from '@vercel/node';

const GRAPH_API = 'https://graph.facebook.com/v21.0';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return res.status(500).end();

  const { event_name, event_id, event_source_url, fbc, fbp } = req.body || {};
  if (!event_name || !event_id) return res.status(400).end();

  const userData: Record<string, string> = {};

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
    || (req.headers['x-real-ip'] as string)
    || '';
  if (ip) userData.client_ip_address = ip;

  const ua = req.headers['user-agent'] || '';
  if (ua) userData.client_user_agent = ua;

  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url: event_source_url || '',
        action_source: 'website',
        user_data: userData,
      },
    ],
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

    return res.status(metaRes.ok ? 204 : 502).end();
  } catch {
    return res.status(502).end();
  }
}
