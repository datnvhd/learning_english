/**
 * ============================================================================
 *  gemini.service.ts – Chấm Speaking / Writing bằng AI Google Gemini (TÙY CHỌN, cần Internet)
 * ============================================================================
 *  Bật trong Cài đặt › Chấm điểm bằng AI và nhập API key Gemini của bạn (aistudio.google.com/api-keys).
 *  Khi bật: bản ghi âm (Speaking) hoặc bài viết (Writing) được gửi tới Gemini API cùng đề bài;
 *  Gemini đóng vai giám khảo IELTS/TOEIC, trả về điểm theo từng tiêu chí và nhận xét chi tiết
 *  (JSON theo schema cố định). Không bật / mất mạng / lỗi gọi API → app dùng bộ chấm offline.
 *
 *  API key chỉ lưu trên thiết bị này (localStorage, KHÔNG nằm trong file sao lưu tiến độ) và được
 *  gửi thẳng từ trình duyệt tới máy chủ Google.
 */
import { Injectable, computed, signal } from '@angular/core';
import {
  AI_PROVIDER_LABEL, AiEssayResult, AiSpeakContext, AiWriteContext, OK_SCHEMA, RawSpeak, RawWrite, SPEAK_SCHEMA, WRITE_SCHEMA,
  speakAudioPrompt, toEssayResult, toGeminiSchema, toSpeakScore, writePrompt,
} from './ai-grading';
import { SpeakScore } from './speaking-score';

/** Model mặc định và danh sách gợi ý (có thể gõ tên model khác trong Cài đặt) */
export const GEMINI_DEFAULT_MODEL = 'gemini-3.8-flash';
export const GEMINI_MODELS = [
  { id: 'gemini-3.8-flash', label: 'Gemini 3.8 Flash – chấm kỹ, nhận xét chi tiết (khuyên dùng · có gói miễn phí)' },
  { id: 'gemini-3.6-flash', label: 'Gemini 3.6 Flash – có gói miễn phí' },
  { id: 'gemini-3.5-flash-lite', label: 'Gemini 3.5 Flash-Lite – nhanh, hạn mức cao hơn (có gói miễn phí)' },
  { id: 'gemini-3.1-flash-lite', label: 'Gemini 3.1 Flash-Lite – nhanh (có gói miễn phí)' },
  { id: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash – chỉ dùng được nếu tài khoản đã từng dùng' },
];

const API = 'https://generativelanguage.googleapis.com/v1beta/models';
const LS = { on: 'em.ai.on', key: 'em.ai.key', model: 'em.ai.model' };

export type { AiEssayResult, AiFeedback, AiSpeakContext, AiWriteContext } from './ai-grading';

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

/** Lỗi gọi Gemini, kèm thông báo tiếng Việt dễ hiểu */
export class GeminiError extends Error {}

@Injectable({ providedIn: 'root' })
export class GeminiService {
  readonly enabled = signal(read(LS.on) === '1');
  readonly apiKey = signal(read(LS.key));
  readonly model = signal(read(LS.model) || GEMINI_DEFAULT_MODEL);

  /** Đã bật và có API key */
  readonly ready = computed(() => this.enabled() && this.apiKey().trim().length >= 20);

  setEnabled(on: boolean): void {
    this.enabled.set(on);
    write(LS.on, on ? '1' : '');
  }
  setApiKey(key: string): void {
    this.apiKey.set(key.trim());
    write(LS.key, key.trim());
  }
  setModel(model: string): void {
    this.model.set(model.trim() || GEMINI_DEFAULT_MODEL);
    write(LS.model, model.trim());
  }

  /** Có nên dùng AI cho lần chấm này (đã bật, có key, đang có mạng) */
  usable(): boolean {
    return this.ready() && (typeof navigator === 'undefined' || navigator.onLine !== false);
  }

  /** Kiểm tra key và model bằng một yêu cầu rất nhỏ */
  async test(): Promise<string> {
    const r = await this.generate<{ ok: boolean }>([{ text: 'Reply with {"ok": true}.' }], OK_SCHEMA, 'You are a connectivity test.');
    if (!r.ok) throw new GeminiError('Gemini trả lời không đúng định dạng.');
    return `Kết nối thành công với ${this.model()}.`;
  }

  // -------------------------------------------------------------------
  //  SPEAKING
  // -------------------------------------------------------------------

  /** Chấm một bản ghi âm: Gemini nghe trực tiếp âm thanh (phát âm, ngữ điệu, độ trôi chảy) */
  async gradeSpeech(audio: Blob, ctx: AiSpeakContext): Promise<SpeakScore> {
    const { system, prompt } = speakAudioPrompt(ctx);
    const data = await toBase64(audio);
    const mime = (audio.type || 'audio/webm').split(';')[0];
    const r = await this.generate<RawSpeak>([{ text: prompt }, { inline_data: { mime_type: mime, data } }], SPEAK_SCHEMA, system);
    return toSpeakScore(r, ctx, this.model(), AI_PROVIDER_LABEL.gemini);
  }

  // -------------------------------------------------------------------
  //  WRITING
  // -------------------------------------------------------------------

  /** Chấm một bài viết theo tiêu chí IELTS (4 tiêu chí, band) hoặc TOEIC (thang 0–4 / 0–5) */
  async gradeEssay(text: string, ctx: AiWriteContext): Promise<AiEssayResult> {
    const { system, prompt } = writePrompt(text, ctx);
    const r = await this.generate<RawWrite>([{ text: prompt }], WRITE_SCHEMA, system);
    return toEssayResult(r, ctx, this.model(), AI_PROVIDER_LABEL.gemini);
  }

  // -------------------------------------------------------------------
  //  GỌI API
  // -------------------------------------------------------------------

  private async generate<T>(parts: object[], schema: Record<string, unknown>, system: string): Promise<T> {
    const key = this.apiKey().trim();
    if (!key) throw new GeminiError('Chưa nhập API key Gemini trong Cài đặt.');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 90_000);
    let res: Response;
    try {
      res = await fetch(`${API}/${encodeURIComponent(this.model())}:generateContent`, {
        method: 'POST',
        signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents: [{ role: 'user', parts }],
          generation_config: { response_mime_type: 'application/json', response_schema: toGeminiSchema(schema), temperature: 0.2 },
        }),
      });
    } catch (e) {
      throw new GeminiError((e as Error).name === 'AbortError' ? 'Gemini phản hồi quá lâu.' : 'Không kết nối được tới Gemini (kiểm tra Internet).');
    } finally {
      clearTimeout(timer);
    }
    const body = await res.json().catch(() => null);
    if (!res.ok) {
      const msg: string = body?.error?.message ?? res.statusText;
      // Lý do chi tiết Google gửi kèm (ErrorInfo.reason), ví dụ SERVICE_DISABLED, API_KEY_HTTP_REFERRER_BLOCKED
      const reasons: string = (body?.error?.details ?? []).map((d: { reason?: string }) => d.reason ?? '').join(' ') + ' ' + (body?.error?.status ?? '');
      const why = `${msg}`.slice(0, 200);
      if (/API_KEY_INVALID/.test(reasons) || (res.status === 400 && /api key/i.test(msg))) throw new GeminiError('API key Gemini không hợp lệ – hãy sao chép lại key từ aistudio.google.com/api-keys.');
      if (/location is not supported|User location/i.test(msg)) throw new GeminiError('Gemini API chưa hỗ trợ khu vực của bạn (hoặc bạn đang dùng VPN tới khu vực không được hỗ trợ).');
      if (/SERVICE_DISABLED/.test(reasons) || /has not been used in project|is disabled/i.test(msg))
        throw new GeminiError('Project của key chưa bật "Generative Language API". Mở Google Cloud Console › APIs & Services › Library, tìm "Generative Language API" và bấm Enable (hoặc tạo key mới ngay trong aistudio.google.com/api-keys).');
      if (/API_KEY_HTTP_REFERRER_BLOCKED/.test(reasons) || /referer/i.test(msg))
        throw new GeminiError('Key đang giới hạn theo trang web (HTTP referrer) nên chặn app. Trong Google Cloud Console › Credentials › key của bạn: chọn "Application restrictions: None" (hoặc thêm địa chỉ đang chạy app, ví dụ http://localhost:*).');
      if (/API_KEY_SERVICE_BLOCKED/.test(reasons) || /blocked/i.test(msg))
        throw new GeminiError('Key đang bị giới hạn chỉ dùng cho API khác. Trong Google Cloud Console › Credentials › key của bạn: mục "API restrictions" chọn "Don\'t restrict key" hoặc thêm "Generative Language API".');
      if (res.status === 403) throw new GeminiError(`Google từ chối quyền dùng Gemini API: ${why}`);
      if (res.status === 404) throw new GeminiError(`Không tìm thấy model "${this.model()}" – hãy chọn model khác trong Cài đặt.`);
      if (res.status === 429) throw new GeminiError('Đã hết hạn mức gọi Gemini (quota) – thử lại sau ít phút.');
      throw new GeminiError(`Gemini báo lỗi ${res.status}: ${msg}`);
    }
    const text: string = (body?.candidates?.[0]?.content?.parts ?? []).map((p: { text?: string }) => p.text ?? '').join('');
    if (!text) throw new GeminiError(body?.promptFeedback?.blockReason ? 'Gemini từ chối xử lý nội dung này.' : 'Gemini không trả về kết quả.');
    try {
      return JSON.parse(text) as T;
    } catch {
      throw new GeminiError('Gemini trả về kết quả không đúng định dạng.');
    }
  }
}

/** Blob → base64 (không có tiền tố data:) */
async function toBase64(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
