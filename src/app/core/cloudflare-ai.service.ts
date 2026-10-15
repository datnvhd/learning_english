/**
 * ============================================================================
 *  cloudflare-ai.service.ts – Chấm Speaking / Writing bằng Cloudflare Workers AI (TÙY CHỌN, cần Internet)
 * ============================================================================
 *  App gọi Worker của chính người dùng (cloudflare/worker – triển khai miễn phí bằng `npx wrangler deploy`),
 *  Worker gọi Workers AI:
 *   - Whisper large v3 turbo: chép lời bài nói (gửi WAV 16 kHz đã giải mã sẵn trên máy).
 *   - Llama 3.3 70B: đóng vai giám khảo, trả JSON theo schema.
 *  Llama không nghe được âm thanh nên bài nói được chấm từ bản chép lời + SỐ ĐO của bộ chấm offline
 *  (độ chính xác âm vị, lỗi phát âm từng từ, ngữ điệu, tốc độ, ngập ngừng).
 *
 *  Địa chỉ Worker và mã truy cập chỉ lưu trên thiết bị này (localStorage, không nằm trong file sao lưu).
 */
import { Injectable, computed, signal } from '@angular/core';
import {
  AI_PROVIDER_LABEL, AiEssayResult, AiSpeakContext, AiWriteContext, OK_SCHEMA, RawSpeak, RawWrite, SPEAK_TEXT_SCHEMA, SpeechMeasures, WRITE_SCHEMA,
  parseJsonReply, speakTextPrompt, toEssayResult, toSpeakScore, writePrompt,
} from './ai-grading';
import { SpeakScore } from './speaking-score';
import { encodeWav } from './wav';

export const CF_DEFAULT_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
export const CF_MODELS = [
  { id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast', label: 'Llama 3.3 70B – chấm kỹ, tiếng Việt tốt (khuyên dùng)' },
  { id: '@cf/meta/llama-4-scout-17b-16e-instruct', label: 'Llama 4 Scout 17B – nhanh' },
  { id: '@cf/meta/llama-3.1-8b-instruct-fast', label: 'Llama 3.1 8B – rất nhanh, tốn ít hạn mức, nhận xét đơn giản hơn' },
];
const LS = { url: 'em.cf.url', token: 'em.cf.token', model: 'em.cf.model' };

function read(key: string): string {
  try {
    return localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}
function write(key: string, value: string): void {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    /* bộ nhớ trình duyệt bị chặn: chỉ giữ trong phiên */
  }
}

/** Lỗi gọi Cloudflare, kèm thông báo tiếng Việt dễ hiểu */
export class CloudflareAiError extends Error {}

@Injectable({ providedIn: 'root' })
export class CloudflareAiService {
  readonly url = signal(read(LS.url));
  readonly token = signal(read(LS.token));
  readonly model = signal(read(LS.model) || CF_DEFAULT_MODEL);

  /** Đã nhập địa chỉ Worker hợp lệ */
  readonly configured = computed(() => /^https?:\/\/\S+$/.test(this.url().trim()));

  setUrl(url: string): void {
    const clean = url.trim().replace(/\/+$/, '');
    this.url.set(clean);
    write(LS.url, clean);
  }
  setToken(token: string): void {
    this.token.set(token.trim());
    write(LS.token, token.trim());
  }
  setModel(model: string): void {
    this.model.set(model || CF_DEFAULT_MODEL);
    write(LS.model, model);
  }

  /** Kiểm tra Worker + model bằng một yêu cầu rất nhỏ */
  async test(): Promise<string> {
    const r = parseJsonReply<{ ok?: boolean }>(await this.chat('You are a connectivity test. Reply only with JSON.', 'Reply with {"ok": true}.', OK_SCHEMA, 50));
    if (!r?.ok) throw new CloudflareAiError('Worker trả lời không đúng định dạng.');
    return `Kết nối thành công với Worker (${this.model().replace('@cf/', '')}).`;
  }

  /** Chép lời bằng Whisper (âm thanh PCM 16 kHz đã giải mã trên máy) */
  async transcribe(pcm16k: Float32Array): Promise<string> {
    // Giới hạn ~2 phút để không vượt kích thước yêu cầu của Worker
    const clip = pcm16k.length > 16000 * 120 ? pcm16k.subarray(0, 16000 * 120) : pcm16k;
    const body = await this.call<{ text?: string }>('/transcribe', encodeWav(clip), 'audio/wav');
    return String(body.text ?? '').trim();
  }

  /** Chấm bài nói từ bản chép lời + số đo của bộ chấm offline */
  async gradeSpeech(ctx: AiSpeakContext, measures: SpeechMeasures): Promise<SpeakScore> {
    const { system, prompt } = speakTextPrompt(ctx, measures);
    const r = parseJsonReply<RawSpeak>(await this.chat(system, prompt, SPEAK_TEXT_SCHEMA));
    if (!Array.isArray(r?.criteria)) throw new CloudflareAiError('AI trả kết quả không đúng định dạng.');
    return { ...toSpeakScore(r, ctx, this.model().replace('@cf/', ''), AI_PROVIDER_LABEL.cloudflare), transcript: measures.transcript };
  }

  /** Chấm bài viết */
  async gradeEssay(text: string, ctx: AiWriteContext): Promise<AiEssayResult> {
    const { system, prompt } = writePrompt(text, ctx);
    const r = parseJsonReply<RawWrite>(await this.chat(system, prompt, WRITE_SCHEMA));
    if (!Array.isArray(r?.criteria)) throw new CloudflareAiError('AI trả kết quả không đúng định dạng.');
    return toEssayResult(r, ctx, this.model().replace('@cf/', ''), AI_PROVIDER_LABEL.cloudflare);
  }

  // -------------------------------------------------------------------
  //  GỌI WORKER
  // -------------------------------------------------------------------

  private async chat(system: string, prompt: string, schema: object, maxTokens = 2500): Promise<unknown> {
    const body = await this.call<{ response?: unknown }>('/chat', JSON.stringify({ model: this.model(), system, prompt, schema, max_tokens: maxTokens }), 'application/json');
    return body.response;
  }

  private async call<T>(path: string, body: BodyInit, type: string): Promise<T> {
    if (!this.configured()) throw new CloudflareAiError('Chưa nhập địa chỉ Worker Cloudflare trong Cài đặt.');
    const headers: Record<string, string> = { 'Content-Type': type };
    if (this.token()) headers['Authorization'] = `Bearer ${this.token()}`;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 90_000);
    let res: Response;
    try {
      res = await fetch(this.url() + path, { method: 'POST', headers, body, signal: ctrl.signal });
    } catch (e) {
      throw new CloudflareAiError((e as Error).name === 'AbortError' ? 'Cloudflare AI phản hồi quá lâu.' : 'Không kết nối được tới Worker (kiểm tra Internet và địa chỉ Worker).');
    } finally {
      clearTimeout(timer);
    }
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = String(data?.error ?? res.statusText).slice(0, 200);
      if (res.status === 401) throw new CloudflareAiError('Sai mã truy cập Worker (APP_TOKEN) – kiểm tra lại trong Cài đặt.');
      if (res.status === 403) throw new CloudflareAiError('Worker không cho trang này gọi tới (ALLOWED_ORIGINS trong wrangler.toml).');
      if (res.status === 404) throw new CloudflareAiError('Địa chỉ Worker không đúng (không tìm thấy điểm cuối).');
      if (res.status === 413) throw new CloudflareAiError('Bài quá dài để gửi lên Worker.');
      if (res.status === 429 || /neuron|quota|limit/i.test(msg)) throw new CloudflareAiError('Đã hết hạn mức Workers AI hôm nay – thử lại sau.');
      throw new CloudflareAiError(`Cloudflare AI báo lỗi ${res.status}: ${msg}`);
    }
    return (data ?? {}) as T;
  }
}
