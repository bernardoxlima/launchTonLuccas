const GRAPH_API = 'https://graph.facebook.com/v21.0';

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405 });
  }

  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) {
    return new Response(null, { status: 500 });
  }

  let body: {
    event_name?: string;
    event_id?: string;
    event_source_url?: string;
    fbc?: string | null;
    fbp?: string | null;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const { event_name, event_id, event_source_url, fbc, fbp } = body;
  if (!event_name || !event_id) {
    return new Response(null, { status: 400 });
  }

  const userData: Record<string, string> = {};

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || '';
  if (ip) userData.client_ip_address = ip;

  const ua = request.headers.get('user-agent') || '';
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

  const res = await fetch(`${GRAPH_API}/${pixelId}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return new Response(null, { status: res.ok ? 204 : 502 });
}
