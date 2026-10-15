/**
 * ============================================================================
 *  ai-grading.ts – Phần dùng chung khi chấm bằng AI (Gemini hoặc Cloudflare Workers AI)
 * ============================================================================
 *  - Kiểu dữ liệu ngữ cảnh / kết quả, schema JSON bắt AI trả đúng cấu trúc.
 *  - Lời dặn giám khảo (prompt) cho Speaking và Writing.
 *  - Quy đổi kết quả thô của AI sang SpeakScore / AiEssayResult mà giao diện đang dùng.
 */
import type { SpeakCriterion, SpeakScore } from './speaking-score';
import type { WritingIssue } from './writing-check';

/** Nhà cung cấp AI */
export type AiProvider = 'cloudflare' | 'gemini';
export const AI_PROVIDER_LABEL: Record<AiProvider, string> = { cloudflare: 'Cloudflare Workers AI', gemini: 'Google Gemini' };

/** Nhận xét chi tiết của AI (hiển thị thêm ở màn hình kết quả) */
export interface AiFeedback {
  /** Tên model đã chấm */
  model: string;
  /** Nhà cung cấp (để ghi chú "Chấm bởi ...") */
  provider?: string;
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
export interface RawSpeak {
  transcript?: string; overall: number; criteria: RawCriterion[]; summary: string; strengths: string[];
  mistakes: { said: string; correction: string; explanation: string }[];
  pronunciation: { word: string; issue: string; tip: string }[]; improved: string;
}
export interface RawWrite {
  overall: number; criteria: RawCriterion[]; summary: string; strengths: string[]; suggestions: string[];
  errors: { original: string; correction: string; type: string; explanation: string }[]; improved: string;
}

// ---------------------------------------------------------------------------
//  SCHEMA (JSON Schema chuẩn; Gemini dùng bản chuyển đổi toGeminiSchema)
// ---------------------------------------------------------------------------
type Schema = Record<string, unknown>;
const S: Schema = { type: 'string' };
const N: Schema = { type: 'number' };
const ARR = (items: Schema): Schema => ({ type: 'array', items });
const OBJ = (properties: Record<string, Schema>): Schema => ({ type: 'object', properties, required: Object.keys(properties) });
const CRITERIA = ARR(OBJ({ name: S, score: N, comment: S }));
const SPEAK_FIELDS = {
  overall: N, criteria: CRITERIA, summary: S, strengths: ARR(S),
  mistakes: ARR(OBJ({ said: S, correction: S, explanation: S })),
  pronunciation: ARR(OBJ({ word: S, issue: S, tip: S })),
  improved: S,
};
/** Chấm từ âm thanh (AI tự nghe và chép lời) */
export const SPEAK_SCHEMA = OBJ({ transcript: S, ...SPEAK_FIELDS });
/** Chấm từ bản chép lời + số đo (AI không nghe được âm thanh) */
export const SPEAK_TEXT_SCHEMA = OBJ(SPEAK_FIELDS);
export const WRITE_SCHEMA = OBJ({
  overall: N, criteria: CRITERIA, summary: S, strengths: ARR(S), suggestions: ARR(S),
  errors: ARR(OBJ({ original: S, correction: S, type: { type: 'string', enum: ['grammar', 'spelling', 'vocabulary', 'punctuation', 'coherence'] }, explanation: S })),
  improved: S,
});
export const OK_SCHEMA = OBJ({ ok: { type: 'boolean' } });

/** JSON Schema chuẩn → định dạng Schema của Gemini API (kiểu viết HOA) */
export function toGeminiSchema(s: Schema): Schema {
  const out: Schema = { ...s, type: String(s['type']).toUpperCase() };
  if (s['items']) out['items'] = toGeminiSchema(s['items'] as Schema);
  if (s['properties']) out['properties'] = Object.fromEntries(Object.entries(s['properties'] as Record<string, Schema>).map(([k, v]) => [k, toGeminiSchema(v)]));
  return out;
}

// ---------------------------------------------------------------------------
//  PROMPT
// ---------------------------------------------------------------------------
const COMMON_RULES = `Write every comment, explanation, tip, strength and summary in VIETNAMESE (clear and encouraging, for Vietnamese learners).
Keep quoted English text (what the learner said/wrote and corrections) in English.
Be an honest, strict examiner: do not inflate scores. Base scores on the official public band descriptors / scoring guides.`;

/** Thang điểm của bài nói */
function speakScale(ctx: AiSpeakContext): string {
  return ctx.exam === 'ielts' ? 'IELTS band from 0 to 9 in steps of 0.5'
    : ctx.exam === 'toeic' ? `TOEIC Speaking points from 0 to ${ctx.maxPoints ?? 3} (integer)` : 'a percentage from 0 to 100';
}
function speakCriteria(ctx: AiSpeakContext): string {
  return ctx.mode === 'read'
    ? '"Accuracy" (words read correctly vs the target text), "Pronunciation", "Intonation & stress", "Fluency & pace"'
    : ctx.exam === 'ielts'
      ? '"Fluency and Coherence", "Lexical Resource", "Grammatical Range and Accuracy", "Pronunciation"'
      : '"Relevance & completeness", "Vocabulary & grammar", "Pronunciation & intonation", "Fluency"';
}
function speakTask(ctx: AiSpeakContext): string {
  return ctx.mode === 'read'
    ? `The learner was asked to READ ALOUD this text:\n"""${ctx.target}"""\nCompare what was said with the text word by word. List missed, added or mispronounced words.`
    : `The learner answered this ${ctx.exam === 'ielts' ? 'IELTS Speaking' : ctx.exam === 'toeic' ? 'TOEIC Speaking' : ''} question${ctx.seconds ? ` (time allowed: ${ctx.seconds} seconds)` : ''}:\n"""${ctx.question}"""` +
      (ctx.sample ? `\nA model answer for reference (do not require the same ideas):\n"""${ctx.sample}"""` : '');
}
function speakFields(ctx: AiSpeakContext): string {
  return `- overall: the overall score as ${speakScale(ctx)}.
- criteria: one item for each of ${speakCriteria(ctx)}; score uses the same scale as overall; comment in Vietnamese with concrete evidence.
- summary: 2–4 sentences overall feedback (Vietnamese).
- strengths: 2–4 points.
- mistakes: up to 10 concrete grammar / vocabulary / content mistakes: what was said → corrected English → short Vietnamese explanation.
- pronunciation: up to 10 words pronounced incorrectly or unclearly: the word, what was wrong (Vietnamese, e.g. missing final /s/, wrong stress), a tip (may include IPA).
- improved: ${ctx.mode === 'read' ? 'the target text with stress marks in CAPITALS on key words and | for natural pauses' : 'an improved version of the learner\'s answer keeping their ideas, at about one band higher'}.`;
}
function examiner(ctx: AiSpeakContext): string {
  return `You are an experienced, certified ${ctx.exam === 'toeic' ? 'TOEIC Speaking rater' : 'IELTS Speaking examiner'} and pronunciation coach.\n${COMMON_RULES}`;
}

/** Prompt khi AI nghe trực tiếp âm thanh (Gemini) */
export function speakAudioPrompt(ctx: AiSpeakContext): { system: string; prompt: string } {
  return {
    system: `${examiner(ctx)}
Listen carefully to the audio itself (pronunciation, word stress, intonation, pauses, hesitation), not only to the words.
If the audio is silent, unintelligible or not English, give overall 0 and explain why.`,
    prompt: `${speakTask(ctx)}\n\nReturn JSON:\n- transcript: exactly what you hear (English).\n${speakFields(ctx)}`,
  };
}

/** Số đo âm học do bộ chấm offline đo được (để AI chỉ đọc chữ vẫn đánh giá được phát âm / độ trôi chảy) */
export interface SpeechMeasures {
  transcript: string;
  /** Tốc độ nói (từ/phút) và số lần ngừng lâu */
  wpm: number;
  pauses: number;
  seconds: number;
  /** Tỉ lệ âm vị đúng 0..1, lỗi phát âm hay gặp, các từ đọc sai */
  phoneAccuracy?: number;
  patterns?: string[];
  words?: { word: string; expected: string; heard: string; issues: string[] }[];
  /** Ngữ điệu 0..1 và nhận xét */
  intonation?: number;
  intonationNotes?: string[];
  /** Số tiếng ậm ừ ("uh", "ờm") */
  fillers?: number;
  /** Ước tính của bộ chấm theo tiêu chí (tham khảo) */
  estimate?: string;
}

/** Prompt khi AI chỉ đọc bản chép lời + số đo (Cloudflare: Whisper chép lời, Llama chấm) */
export function speakTextPrompt(ctx: AiSpeakContext, m: SpeechMeasures): { system: string; prompt: string } {
  const lines = [
    `Speech duration: ${Math.round(m.seconds)} s; speaking rate: ${Math.round(m.wpm)} words/min; long pauses: ${m.pauses}${m.fillers !== undefined ? `; hesitation fillers (uh/um): ${m.fillers}` : ''}.`,
  ];
  if (m.phoneAccuracy !== undefined) lines.push(`Phoneme accuracy (speech recognition of individual sounds vs dictionary pronunciation): ${Math.round(m.phoneAccuracy * 100)}%.`);
  if (m.patterns?.length) lines.push(`Frequent pronunciation errors: ${m.patterns.join('; ')}.`);
  if (m.words?.length) lines.push('Mispronounced words (expected → heard): ' + m.words.slice(0, 12).map((w) => `${w.word} /${w.expected}/ → /${w.heard}/ (${w.issues.join(', ')})`).join('; ') + '.');
  if (m.intonation !== undefined) lines.push(`Intonation score: ${Math.round(m.intonation * 100)}%. ${(m.intonationNotes ?? []).join(' ')}`);
  if (m.estimate) lines.push(`Rule-based estimate (for reference only): ${m.estimate}.`);
  return {
    system: `${examiner(ctx)}
You cannot hear the audio. You receive an automatic transcript (Whisper) and acoustic measurements made by a pronunciation analyser.
Judge pronunciation, intonation and fluency ONLY from these measurements and the transcript; judge vocabulary, grammar and content from the transcript.
Transcripts may contain small recognition errors: do not penalise a single odd word heavily.
If the transcript is empty or not English, give overall 0 and explain why.`,
    prompt: `${speakTask(ctx)}

Transcript of the learner's speech:
"""${m.transcript || '(empty)'}"""

Acoustic measurements:
${lines.map((l) => '- ' + l).join('\n')}

Return JSON:
${speakFields(ctx)}`,
  };
}

/** Prompt chấm bài viết */
export function writePrompt(text: string, ctx: AiWriteContext): { system: string; prompt: string } {
  const max = ctx.exam === 'ielts' ? 9 : (ctx.maxPoints ?? 5);
  const criteria = ctx.exam === 'ielts'
    ? '"Task Achievement / Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"'
    : '"Task completion (all required points)", "Organization", "Vocabulary", "Grammar"';
  return {
    system: `You are an experienced, certified ${ctx.exam === 'ielts' ? 'IELTS Writing examiner' : 'TOEIC Writing rater'} and writing teacher.\n${COMMON_RULES}`,
    prompt: `Task type: ${ctx.kind}. Minimum length: ${ctx.minWords} words.
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
- improved: a rewritten version of the learner's answer that keeps their ideas but fixes errors and is about one band / one point higher.`,
  };
}

// ---------------------------------------------------------------------------
//  QUY ĐỔI KẾT QUẢ
// ---------------------------------------------------------------------------
const clamp = (v: number) => Math.max(0, Math.min(1, v));

/** Kết quả thô bài nói → SpeakScore */
export function toSpeakScore(r: RawSpeak, ctx: AiSpeakContext, model: string, provider: string): SpeakScore {
  const max = ctx.exam === 'ielts' ? 9 : ctx.exam === 'toeic' ? (ctx.maxPoints ?? 3) : 100;
  const norm = (v: number) => clamp((Number(v) || 0) / max);
  const fmt = (v: number) => (ctx.exam === 'ielts' ? `Band ${(Math.round((Number(v) || 0) * 2) / 2).toFixed(1)}` : ctx.exam === 'toeic' ? `${Math.round(Number(v) || 0)}/${max}` : `${Math.round(Number(v) || 0)}%`);
  const criteria: SpeakCriterion[] = (r.criteria ?? []).map((c, i) => ({ id: 'ai' + i, label: c.name, value: norm(c.score), shown: fmt(c.score), note: c.comment }));
  // IELTS: điểm 0..1 dùng cho thống kê quy đổi giống bộ chấm offline (band 3 → 0, band 8 → 1)
  const overall = ctx.exam === 'ielts' ? clamp(((Number(r.overall) || 0) - 3) / 5) : norm(r.overall);
  return {
    overall, label: fmt(r.overall), criteria, transcript: r.transcript ?? '', unclear: (r.pronunciation ?? []).map((p) => p.word).slice(0, 8),
    wpm: 0, pauses: 0, advice: [],
    ai: { model, provider, summary: r.summary ?? '', strengths: r.strengths ?? [], mistakes: r.mistakes ?? [], pronunciation: r.pronunciation ?? [], improved: r.improved ?? '' },
  };
}

/** Kết quả thô bài viết → AiEssayResult */
export function toEssayResult(r: RawWrite, ctx: AiWriteContext, model: string, provider: string): AiEssayResult {
  const max = ctx.exam === 'ielts' ? 9 : (ctx.maxPoints ?? 5);
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
    ai: { model, provider, summary: r.summary ?? '', strengths: r.strengths ?? [], mistakes: [], pronunciation: [], improved: r.improved ?? '' },
  };
}

/** Lấy JSON từ câu trả lời của LLM (có thể đã là object, hoặc chuỗi kèm ```json ... ```) */
export function parseJsonReply<T>(reply: unknown): T {
  if (reply && typeof reply === 'object') return reply as T;
  const text = String(reply ?? '').trim();
  try {
    return JSON.parse(text) as T;
  } catch {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start >= 0 && end > start) return JSON.parse(text.slice(start, end + 1)) as T;
    throw new Error('not json');
  }
}
