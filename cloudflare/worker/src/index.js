/**
 * ============================================================================
 *  English Master – Cloudflare Worker chấm điểm bằng Workers AI
 * ============================================================================
 *  App (chạy trong trình duyệt) không gọi thẳng api.cloudflare.com được (bị chặn CORS và lộ token),
 *  nên Worker này đứng giữa: nhận yêu cầu từ app, gọi Workers AI qua binding `AI` (không cần token),
 *  trả kết quả về kèm header CORS.
 *
 *  Điểm cuối:
 *   GET  /health       → { ok: true, models }
 *   POST /transcribe   → thân là tệp âm thanh (WAV/MP3...) → Whisper → { text, words: [{ word, start, end }] }
 *   POST /chat         → { model?, system, prompt, schema? } → LLM (JSON) → { response, model }
 *
 *  Bảo vệ (tùy chọn): đặt secret APP_TOKEN (`npx wrangler secret put APP_TOKEN`) thì mọi yêu cầu phải có
 *  header  Authorization: Bearer <APP_TOKEN>  – nhập token này trong Cài đặt của app.
 *  ALLOWED_ORIGINS (biến trong wrangler.toml, phân tách bằng dấu phẩy) giới hạn trang web được gọi; "*" = mọi nơi.
 *
 *  Triển khai: xem cloudflare/worker/README.md
 */

/** Model được phép gọi (chặn gọi model đắt tiền ngoài danh sách) */
const CHAT_MODELS = [
  '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  '@cf/meta/llama-4-scout-17b-16e-instruct',
  '@cf/meta/llama-3.1-8b-instruct-fast',
];
const DEFAULT_CHAT = CHAT_MODELS[0];
const WHISPER = '@cf/openai/whisper-large-v3-turbo';
/** Giới hạn kích thước: ~4 MB âm thanh (≈ 2 phút WAV 16 kHz), 60 KB văn bản */
const MAX_AUDIO = 4 * 1024 * 1024;
const MAX_TEXT = 60 * 1024;

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });

    if (!cors['Access-Control-Allow-Origin']) return json({ error: 'Origin not allowed' }, 403);
    if (env.APP_TOKEN && request.headers.get('Authorization') !== `Bearer ${env.APP_TOKEN}`) return json({ error: 'Unauthorized' }, 401);

    const path = new URL(request.url).pathname.replace(/\/+$/, '');
    try {
      if (request.method === 'GET' && (path === '' || path === '/health')) return json({ ok: true, models: CHAT_MODELS, whisper: WHISPER });
      if (request.method === 'POST' && path === '/transcribe') return json(await transcribe(request, env));
      if (request.method === 'POST' && path === '/chat') return json(await chat(request, env));
      return json({ error: 'Not found' }, 404);
    } catch (e) {
      const status = e instanceof HttpError ? e.status : 500;
      return json({ error: String(e?.message ?? e).slice(0, 500) }, status);
    }
  },
};

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

/** Header CORS: chỉ trả về khi origin nằm trong ALLOWED_ORIGINS (mặc định "*") */
function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = String(env.ALLOWED_ORIGINS ?? '*').split(',').map((s) => s.trim()).filter(Boolean);
  const ok = allowed.includes('*') || !origin || allowed.includes(origin);
  const headers = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (ok) headers['Access-Control-Allow-Origin'] = allowed.includes('*') ? '*' : origin;
  return headers;
}

/** Âm thanh → chữ (Whisper large v3 turbo), kèm thời điểm từng từ */
async function transcribe(request, env) {
  const buf = await request.arrayBuffer();
  if (!buf.byteLength) throw new HttpError(400, 'Empty audio');
  if (buf.byteLength > MAX_AUDIO) throw new HttpError(413, 'Audio too large');
  const out = await env.AI.run(WHISPER, { audio: toBase64(new Uint8Array(buf)), language: 'en', task: 'transcribe' });
  const words = (out?.segments ?? []).flatMap((s) => s.words ?? []).map((w) => ({ word: String(w.word ?? '').trim(), start: w.start, end: w.end }));
  return { text: String(out?.text ?? '').trim(), words, model: WHISPER };
}

/** Gọi LLM, yêu cầu trả JSON (theo schema nếu có) */
async function chat(request, env) {
  const raw = await request.text();
  if (raw.length > MAX_TEXT) throw new HttpError(413, 'Request too large');
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    throw new HttpError(400, 'Invalid JSON');
  }
  const model = CHAT_MODELS.includes(body.model) ? body.model : DEFAULT_CHAT;
  if (!body.prompt) throw new HttpError(400, 'Missing prompt');
  const input = {
    messages: [
      { role: 'system', content: String(body.system ?? '') },
      { role: 'user', content: String(body.prompt) },
    ],
    max_tokens: Math.min(Number(body.max_tokens) || 2500, 4000),
    temperature: 0.2,
  };
  if (body.schema) input.response_format = { type: 'json_schema', json_schema: body.schema };
  let out;
  try {
    out = await env.AI.run(model, input);
  } catch (e) {
    // Một số model không hỗ trợ JSON schema: thử lại không ép schema (prompt vẫn yêu cầu JSON)
    if (!body.schema) throw e;
    delete input.response_format;
    out = await env.AI.run(model, input);
  }
  return { response: out?.response ?? '', model };
}

function toBase64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
