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
import { SpeakCriterion, SpeakScore } from './speaking-score';
import { WritingIssue } from './writing-check';

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

/** Nhận xét chi tiết của AI (hiển thị thêm ở màn hình kết quả) */
export interface AiFeedback {
  model: string;
  /** Nhận xét tổng quát (tiếng Việt) */
  summary: string;
  strengths: string[];
  /** Lỗi cụ thể: câu/từ đã nói hoặc viết → cách sửa → giải thích */
  mistakes: { said: string; correction: string; explanation: string }[];
  /** Lỗi phát âm từng từ (chỉ Speaking) */
  pronunciation: { word: string; issue: string; tip: string }[];
  /** Bài nói/viết mẫu đã nâng cấp dựa trên ý của người học */
  improved: string;
}

/** Ngữ cảnh chấm bài nói */
export interface AiSpeakContext {
  /** read = đọc theo mẫu; free = trả lời tự do */
  mode: 'read' | 'free';
  /** ielts = band 0–9; toeic = thang 0–maxPoints; practice = 0–100 */
  exam: 'ielts' | 'toeic' | 'practice';
  question: string;
  /** Câu/đoạn cần đọc (mode = read) */
  target?: string;
  sample?: string;
  maxPoints?: number;
  seconds?: number;
}

/** Ngữ cảnh chấm bài viết */
export interface AiWriteContext {
  exam: 'ielts' | 'toeic';
  /** Tên dạng bài: "IELTS Writing Task 2", "TOEIC email"... */
  kind: string;
  prompt: string;
  /** Bảng số liệu (Task 1) */
  data?: string;
  /** Các ý bắt buộc (TOEIC email) */
  requirements?: string[];
  minWords: number;
  maxPoints?: number;
}

/** Kết quả chấm bài viết của AI */
export interface AiEssayResult {
  /** Band IELTS (0–9) hoặc điểm TOEIC (0–max) */
  overall: number;
  label: string;
  /** 0..1 */
  score: number;
  parts: { label: string; value: number; note: string }[];
  advice: string[];
  issues: WritingIssue[];
  ai: AiFeedback;
}

interface RawCriterion { name: string; score: number; comment: string }
interface RawSpeak {
  transcript: string; overall: number; criteria: RawCriterion[]; summary: string; strengths: string[];
  mistakes: { said: string; correction: string; explanation: string }[];
  pronunciation: { word: string; issue: string; tip: string }[]; improved: string;
}
interface RawWrite {
  overall: number; criteria: RawCriterion[]; summary: string; strengths: string[]; suggestions: string[];
  errors: { original: string; correction: string; type: string; explanation: string }[]; improved: string;
}

// Schema JSON (định dạng Schema của Gemini API) – bắt AI trả về đúng cấu trúc
const S = { type: 'STRING' };
const N = { type: 'NUMBER' };
const ARR = (items: object) => ({ type: 'ARRAY', items });
const OBJ = (properties: Record<string, object>) => ({ type: 'OBJECT', properties, required: Object.keys(properties) });
const CRITERIA = ARR(OBJ({ name: S, score: N, comment: S }));
const SPEAK_SCHEMA = OBJ({
  transcript: S, overall: N, criteria: CRITERIA, summary: S, strengths: ARR(S),
  mistakes: ARR(OBJ({ said: S, correction: S, explanation: S })),
  pronunciation: ARR(OBJ({ word: S, issue: S, tip: S })),
  improved: S,
});
const WRITE_SCHEMA = OBJ({
  overall: N, criteria: CRITERIA, summary: S, strengths: ARR(S), suggestions: ARR(S),
  errors: ARR(OBJ({ original: S, correction: S, type: { type: 'STRING', enum: ['grammar', 'spelling', 'vocabulary', 'punctuation', 'coherence'] }, explanation: S })),
  improved: S,
});

const COMMON_RULES = `Write every comment, explanation, tip, strength and summary in VIETNAMESE (clear and encouraging, for Vietnamese learners).
Keep quoted English text (what the learner said/wrote and corrections) in English.
Be an honest, strict examiner: do not inflate scores. Base scores on the official public band descriptors / scoring guides.`;

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

const clamp = (v: number) => Math.max(0, Math.min(1, v));

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
    const r = await this.generate<{ ok: boolean }>([{ text: 'Reply with {"ok": true}.' }], OBJ({ ok: { type: 'BOOLEAN' } }), 'You are a connectivity test.');
    if (!r.ok) throw new GeminiError('Gemini trả lời không đúng định dạng.');
    return `Kết nối thành công với ${this.model()}.`;
  }

  // -------------------------------------------------------------------
  //  SPEAKING
  // -------------------------------------------------------------------

  /** Chấm một bản ghi âm: Gemini nghe trực tiếp âm thanh (phát âm, ngữ điệu, độ trôi chảy) */
  async gradeSpeech(audio: Blob, ctx: AiSpeakContext): Promise<SpeakScore> {
    const scale = ctx.exam === 'ielts' ? 'IELTS band from 0 to 9 in steps of 0.5'
      : ctx.exam === 'toeic' ? `TOEIC Speaking points from 0 to ${ctx.maxPoints ?? 3} (integer)` : 'a percentage from 0 to 100';
    const criteria = ctx.mode === 'read'
      ? '"Accuracy" (words read correctly vs the target text), "Pronunciation", "Intonation & stress", "Fluency & pace"'
      : ctx.exam === 'ielts'
        ? '"Fluency and Coherence", "Lexical Resource", "Grammatical Range and Accuracy", "Pronunciation"'
        : '"Relevance & completeness", "Vocabulary & grammar", "Pronunciation & intonation", "Fluency"';
    const task = ctx.mode === 'read'
      ? `The learner was asked to READ ALOUD this text:\n"""${ctx.target}"""\nCompare the audio with the text word by word. List missed, added or mispronounced words.`
      : `The learner answered this ${ctx.exam === 'ielts' ? 'IELTS Speaking' : ctx.exam === 'toeic' ? 'TOEIC Speaking' : ''} question${ctx.seconds ? ` (time allowed: ${ctx.seconds} seconds)` : ''}:\n"""${ctx.question}"""` +
        (ctx.sample ? `\nA model answer for reference (do not require the same ideas):\n"""${ctx.sample}"""` : '');
    const system = `You are an experienced, certified ${ctx.exam === 'toeic' ? 'TOEIC Speaking rater' : 'IELTS Speaking examiner'} and pronunciation coach.
${COMMON_RULES}
Listen carefully to the audio itself (pronunciation, word stress, intonation, pauses, hesitation), not only to the words.
If the audio is silent, unintelligible or not English, give overall 0 and explain why.`;
    const prompt = `${task}

Return JSON:
- transcript: exactly what you hear (English).
- overall: the overall score as ${scale}.
- criteria: one item for each of ${criteria}; score uses the same scale as overall; comment in Vietnamese with concrete evidence.
- summary: 2–4 sentences overall feedback (Vietnamese).
- strengths: 2–4 points.
- mistakes: up to 10 concrete grammar / vocabulary / content mistakes: what was said → corrected English → short Vietnamese explanation.
- pronunciation: up to 10 words pronounced incorrectly or unclearly: the word, what was wrong (Vietnamese, e.g. missing final /s/, wrong stress), a tip (may include IPA).
- improved: ${ctx.mode === 'read' ? 'the target text with stress marks in CAPITALS on key words and | for natural pauses' : 'an improved version of the learner\'s answer keeping their ideas, at about one band higher'}.`;
    const data = await toBase64(audio);
    const mime = (audio.type || 'audio/webm').split(';')[0];
    const r = await this.generate<RawSpeak>([{ text: prompt }, { inline_data: { mime_type: mime, data } }], SPEAK_SCHEMA, system);
    return this.toSpeakScore(r, ctx);
  }

  private toSpeakScore(r: RawSpeak, ctx: AiSpeakContext): SpeakScore {
    const max = ctx.exam === 'ielts' ? 9 : ctx.exam === 'toeic' ? (ctx.maxPoints ?? 3) : 100;
    const norm = (v: number) => clamp((Number(v) || 0) / max);
    const fmt = (v: number) => (ctx.exam === 'ielts' ? `Band ${(Math.round((Number(v) || 0) * 2) / 2).toFixed(1)}` : ctx.exam === 'toeic' ? `${Math.round(Number(v) || 0)}/${max}` : `${Math.round(Number(v) || 0)}%`);
    const criteria: SpeakCriterion[] = (r.criteria ?? []).map((c, i) => ({ id: 'ai' + i, label: c.name, value: norm(c.score), shown: fmt(c.score), note: c.comment }));
    // IELTS: điểm 0..1 dùng cho thống kê quy đổi giống bộ chấm offline (band 3 → 0, band 8 → 1)
    const overall = ctx.exam === 'ielts' ? clamp(((Number(r.overall) || 0) - 3) / 5) : norm(r.overall);
    return {
      overall, label: fmt(r.overall), criteria, transcript: r.transcript ?? '', unclear: (r.pronunciation ?? []).map((p) => p.word).slice(0, 8),
      wpm: 0, pauses: 0, advice: [],
      ai: { model: this.model(), summary: r.summary ?? '', strengths: r.strengths ?? [], mistakes: r.mistakes ?? [], pronunciation: r.pronunciation ?? [], improved: r.improved ?? '' },
    };
  }

  // -------------------------------------------------------------------
  //  WRITING
  // -------------------------------------------------------------------

  /** Chấm một bài viết theo tiêu chí IELTS (4 tiêu chí, band) hoặc TOEIC (thang 0–4 / 0–5) */
  async gradeEssay(text: string, ctx: AiWriteContext): Promise<AiEssayResult> {
    const max = ctx.exam === 'ielts' ? 9 : (ctx.maxPoints ?? 5);
    const criteria = ctx.exam === 'ielts'
      ? '"Task Achievement / Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"'
      : '"Task completion (all required points)", "Organization", "Vocabulary", "Grammar"';
    const system = `You are an experienced, certified ${ctx.exam === 'ielts' ? 'IELTS Writing examiner' : 'TOEIC Writing rater'} and writing teacher.\n${COMMON_RULES}`;
    const prompt = `Task type: ${ctx.kind}. Minimum length: ${ctx.minWords} words.
Prompt:
"""${ctx.prompt}"""${ctx.data ? `\nData (table rows "label | values"):\n"""${ctx.data}"""` : ''}${ctx.requirements?.length ? `\nRequired points: ${ctx.requirements.join('; ')}` : ''}

Learner's answer:
"""${text}"""

Return JSON:
- overall: ${ctx.exam === 'ielts' ? 'IELTS band 0–9 in steps of 0.5 (penalise under-length and off-topic answers as the official descriptors do)' : `TOEIC score 0–${max} (integer)`}.
- criteria: one item for each of ${criteria}; score on the same scale as overall; comment in Vietnamese citing the learner's text.
- summary: 2–4 sentences overall feedback (Vietnamese).
- strengths: 2–4 points.
- errors: up to 20 concrete errors: original text (short, exactly as written) → corrected English → type → Vietnamese explanation.
- suggestions: 3–6 actionable suggestions to reach a higher score (Vietnamese).
- improved: a rewritten version of the learner's answer that keeps their ideas but fixes errors and is about one band / one point higher.`;
    const r = await this.generate<RawWrite>([{ text: prompt }], WRITE_SCHEMA, system);
    const value = (v: number) => clamp((Number(v) || 0) / max);
    const overall = Number(r.overall) || 0;
    const label = ctx.exam === 'ielts' ? `Band ${(Math.round(overall * 2) / 2).toFixed(1)}` : `${Math.round(overall)}/${max} điểm`;
    const kindOf = (t: string): WritingIssue['kind'] => (t === 'spelling' ? 'spelling' : t === 'punctuation' ? 'punctuation' : t === 'vocabulary' ? 'vocabulary' : t === 'coherence' ? 'coherence' : 'grammar');
    return {
      overall: ctx.exam === 'ielts' ? Math.round(overall * 2) / 2 : Math.round(overall),
      label,
      score: ctx.exam === 'ielts' ? clamp((overall - 3) / 5) : value(overall),
      parts: (r.criteria ?? []).map((c) => ({ label: c.name, value: value(c.score), note: `${ctx.exam === 'ielts' ? 'Band ' + c.score : c.score + '/' + max} · ${c.comment}` })),
      advice: r.suggestions ?? [],
      issues: (r.errors ?? []).map((e) => ({ kind: kindOf(e.type), text: e.original, fix: e.correction, note: e.explanation })),
      ai: { model: this.model(), summary: r.summary ?? '', strengths: r.strengths ?? [], mistakes: [], pronunciation: [], improved: r.improved ?? '' },
    };
  }

  // -------------------------------------------------------------------
  //  GỌI API
  // -------------------------------------------------------------------

  private async generate<T>(parts: object[], schema: object, system: string): Promise<T> {
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
          generation_config: { response_mime_type: 'application/json', response_schema: schema, temperature: 0.2 },
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
