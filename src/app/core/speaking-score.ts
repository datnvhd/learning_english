/**
 * ============================================================================
 *  speaking-score.ts – Chấm bài nói TỰ ĐỘNG từ kết quả nhận dạng giọng nói (offline)
 * ============================================================================
 *  Đầu vào là bản chép lời kèm thời điểm và độ tin cậy của từng từ (AsrService, mô hình Vosk
 *  chạy trong trình duyệt). Hai kiểu chấm:
 *   - scoreReading(): đọc theo câu/đoạn mẫu (luyện phát âm, TOEIC Q1–2 Read aloud).
 *       So từng từ với câu mẫu → độ chính xác, phát âm (độ tin cậy nhận dạng), tốc độ & ngắt nghỉ.
 *   - scoreFree(): trả lời tự do (IELTS Part 1–3, TOEIC Q3–11) theo 4 nhóm tiêu chí:
 *       trôi chảy & mạch lạc, từ vựng, ngữ pháp, phát âm (+ nội dung/độ liên quan cho TOEIC).
 *  Đây là ƯỚC TÍNH bằng máy để luyện tập, không thay thế giám khảo: máy không hiểu ý nghĩa sâu
 *  của câu trả lời, nên nhóm "nội dung" chỉ dựa vào độ dài và mức trùng từ khóa với đề/bài mẫu.
 */
import type { AiFeedback } from './gemini.service';
import type { PronResult } from './phoneme-score';
import type { ProsodyResult } from './prosody';
import { CefrIndex, cohesion, syntaxProfile, vocabProfile } from './language-features';
import { ieltsOverall, speakingRubric, toToeic } from './rubric';
import { checkGrammar } from './writing-check';

/** Một từ nhận dạng được */
export interface AsrWord {
  word: string;
  /** Độ tin cậy 0..1 */
  conf: number;
  /** Thời điểm bắt đầu / kết thúc (giây) */
  start: number;
  end: number;
}

/** Kết quả nhận dạng một đoạn ghi âm */
export interface AsrResult {
  text: string;
  words: AsrWord[];
  /** Các đoạn nói liền mạch (bộ nhận dạng tự tách khi người nói ngừng) */
  segments: string[];
  /** Độ dài bản ghi (giây) */
  duration: number;
  /** Âm thanh 16 kHz một kênh (để chấm phát âm từng âm) */
  pcm?: Float32Array;
}

/** Một tiêu chí chấm */
export interface SpeakCriterion {
  id: string;
  label: string;
  /** 0..1 */
  value: number;
  /** Nhãn điểm hiển thị: "Band 6.5" (IELTS) hoặc phần trăm */
  shown: string;
  note: string;
}

/** Trạng thái từng từ của câu mẫu khi chấm đọc theo */
export interface ReadWord {
  word: string;
  status: 'ok' | 'weak' | 'miss';
  heard?: string;
}

/** Kết quả chấm một bài nói */
export interface SpeakScore {
  /** Điểm tổng 0..1 */
  overall: number;
  /** Nhãn điểm tổng: "Band 6.0", "2/3", "85%" */
  label: string;
  criteria: SpeakCriterion[];
  transcript: string;
  /** Từ có độ tin cậy thấp (phát âm có thể chưa rõ) */
  unclear: string[];
  /** Chỉ có ở chế độ đọc theo mẫu */
  words?: ReadWord[];
  wpm: number;
  pauses: number;
  advice: string[];
  /** Nhận xét chi tiết khi bài được chấm bằng AI (Gemini) */
  ai?: AiFeedback;
  /** Thông báo kèm theo (ví dụ: không gọi được AI nên dùng bộ chấm offline) */
  notice?: string;
  /** Chấm phát âm từng âm (mô hình âm vị) */
  pron?: PronResult;
  /** Ngữ điệu & trọng âm (đo cao độ / độ lớn) */
  prosody?: ProsodyResult;
}

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const pct = (v: number) => `${Math.round(clamp(v) * 100)}%`;

// ---------------------------------------------------------------------------
//  Chuẩn hóa chữ để so khớp (bộ nhận dạng trả về chữ thường, số viết bằng chữ)
// ---------------------------------------------------------------------------

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** Số → chữ tiếng Anh (0–9999), ví dụ 45 → "forty five" */
export function numberWords(n: number): string {
  if (n < 20) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
  if (n < 1000) return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numberWords(n % 100) : '');
  return numberWords(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + numberWords(n % 1000) : '');
}

/** Tách câu thành các từ đã chuẩn hóa (chữ thường, số → chữ, bỏ dấu câu) */
export function speechTokens(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '') // bỏ dấu: café -> cafe
    .replace(/[’‘]/g, "'")
    .replace(/\b([a-z])\.\s?([a-z])\.?/g, '$1$2') // p.m. -> pm, u.s. -> us
    .replace(/(\d+)%/g, '$1 percent')
    .replace(/\$(\d+)/g, '$1 dollars')
    .replace(/\d{1,4}/g, (d) => ' ' + numberWords(+d) + ' ')
    .replace(/[^a-z' ]+/g, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/^'+|'+$/g, ''))
    .filter(Boolean);
}

/** Hai từ coi như khớp (bỏ qua dấu nháy: "dont" ~ "don't") */
function same(a: string, b: string): boolean {
  return a === b || a.replace(/'/g, '') === b.replace(/'/g, '');
}

/** Gióng hàng câu mẫu với lời nói (quy hoạch động, giống tính khoảng cách chỉnh sửa theo từ) */
export function alignWords(target: string[], heard: AsrWord[]): ReadWord[] {
  const n = target.length;
  const m = heard.length;
  const d: number[][] = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: m + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= m; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (same(target[i - 1], heard[j - 1].word) ? 0 : 1));
  const out: ReadWord[] = [];
  let i = n;
  let j = m;
  while (i > 0) {
    if (j > 0 && d[i][j] === d[i - 1][j - 1] + (same(target[i - 1], heard[j - 1].word) ? 0 : 1)) {
      const h = heard[j - 1];
      const ok = same(target[i - 1], h.word);
      out.push({ word: target[i - 1], status: ok ? (h.conf < 0.6 ? 'weak' : 'ok') : 'miss', heard: ok ? undefined : h.word });
      i--;
      j--;
    } else if (j > 0 && d[i][j] === d[i][j - 1] + 1) {
      j--; // từ nói thừa
    } else {
      out.push({ word: target[i - 1], status: 'miss' });
      i--;
    }
  }
  return out.reverse();
}

/** Gộp hai từ nghe được liền nhau nếu ghép lại đúng bằng một từ của câu mẫu ("help desk" → "helpdesk") */
function mergeCompounds(heard: AsrWord[], target: ReadonlySet<string>): AsrWord[] {
  const out: AsrWord[] = [];
  for (let k = 0; k < heard.length; k++) {
    const next = heard[k + 1];
    if (next && !target.has(heard[k].word) && target.has(heard[k].word + next.word)) {
      out.push({ word: heard[k].word + next.word, conf: Math.min(heard[k].conf, next.conf), start: heard[k].start, end: next.end });
      k++;
    } else out.push(heard[k]);
  }
  return out;
}

/** Tốc độ nói (từ/phút) và số lần ngừng lâu hơn `gap` giây giữa hai từ */
function pace(words: AsrWord[], gap: number): { wpm: number; pauses: number; span: number } {
  if (words.length < 2) return { wpm: 0, pauses: 0, span: 0 };
  const span = Math.max(0.5, words[words.length - 1].end - words[0].start);
  let pauses = 0;
  for (let k = 1; k < words.length; k++) if (words[k].start - words[k - 1].end > gap) pauses++;
  return { wpm: (words.length / span) * 60, pauses, span };
}

/** Điểm tốc độ: lý tưởng trong khoảng [lo, hi] từ/phút */
function rateScore(wpm: number, lo: number, hi: number): number {
  if (!wpm) return 0;
  if (wpm < lo) return clamp(0.3 + (0.7 * wpm) / lo);
  if (wpm > hi) return clamp(1 - (wpm - hi) / 120);
  return 1;
}

const FILLERS = new Set(['uh', 'um', 'er', 'erm', 'hmm', 'ah', 'eh', 'huh', 'mm', 'oh', 'ooh', 'hm', 'mhm', 'hum', 'em', 'ha']);

/** Nhãn hiển thị trong bản chép lời cho tiếng ậm ừ */
export const HESITATION_MARK = '(ờ…)';

/**
 * Tiếng ậm ừ của người Việt ("ờm", "ừ", "ờ", "à") không có trong tiếng Anh nên bộ nhận dạng hay đoán thành
 * một từ ngắn: "i'm", "him", "who", "home", "her", "oh", "ah"... (đo trên bản ghi thử).
 * STRONG: từ hay bị đoán nhầm nhất; WEAK: từ thật hay gặp, chỉ coi là ậm ừ khi máy nghe không chắc.
 */
const HES_STRONG = new Set(["i'm", 'him', 'who', 'home', 'her', 'hum', 'am', 'whom', 'hey', 'huh', 'uh-huh', ...FILLERS]);
const HES_WEAK = new Set(['and', 'the', 'a', 'an', 'or', 'on', 'in', 'are', 'all', 'oh', 'ooh', 'um', 'off', 'of', 'i']);

/**
 * Nhận ra tiếng ậm ừ bị nhận nhầm thành từ tiếng Anh và đổi thành từ đệm "uh" (được tính là ngập ngừng,
 * không tính vào nội dung / ngữ pháp / từ vựng):
 *  - Cụm ≤ 3 từ đứng riêng giữa hai khoảng lặng (hoặc ở đầu / cuối bài) mà mọi từ đều thuộc nhóm hay bị nhầm
 *    (vd. "… city. [ờ] [à] It is …" → "ah ah"; "[ờm] I think …" → "i'm").
 *  - "i'm" / "him" dính liền ngay trước đại từ ("i'm i think", "him my hometown") – không thể đúng ngữ pháp.
 */
export function markHesitations(r: AsrResult, gap = 0.3): AsrResult {
  const ws = r.words;
  if (!ws.length) return r;
  const isHes = (w: AsrWord) => HES_STRONG.has(w.word) || (HES_WEAK.has(w.word) && w.conf < 0.75);
  const hes = new Array<boolean>(ws.length).fill(false);
  // Chia thành các cụm nói liền mạch theo khoảng lặng
  let s = 0;
  for (let i = 1; i <= ws.length; i++) {
    if (i === ws.length || ws[i].start - ws[i - 1].end >= gap) {
      const chunk = ws.slice(s, i);
      if (chunk.length <= 3 && chunk.every(isHes) && !(chunk.length === 1 && chunk[0].word === 'i')) for (let k = s; k < i; k++) hes[k] = true;
      s = i;
    }
  }
  for (let i = 0; i + 1 < ws.length; i++) {
    if (/^(i'm|him|um|uh)$/.test(ws[i].word) && /^(i|my|we|it|in|on|the|there|yes|no|well)$/.test(ws[i + 1].word) && ws[i + 1].start - ws[i].end < gap) hes[i] = true;
  }
  if (!hes.some(Boolean)) return r;

  const words = ws.map((w, i) => (hes[i] ? { ...w, word: 'uh' } : w));
  // Dựng lại các đoạn (mỗi đoạn ứng với một nhóm từ liên tiếp của bộ nhận dạng) và bản chép lời
  const segments: string[] = [];
  let k = 0;
  for (const seg of r.segments) {
    const n = seg.split(/\s+/).filter(Boolean).length;
    const kept = words.slice(k, k + n).filter((w) => !FILLERS.has(w.word)).map((w) => w.word);
    k += n;
    if (kept.length) segments.push(kept.join(' '));
  }
  const text = words.map((w) => (FILLERS.has(w.word) ? HESITATION_MARK : w.word)).join(' ').replace(/(\(ờ…\) ?)+/g, `${HESITATION_MARK} `).trim();
  return { ...r, words, segments: k === ws.length ? segments : r.segments, text };
}

/** Từ có độ tin cậy thấp (không tính từ đệm) */
function unclearWords(words: AsrWord[]): string[] {
  return [...new Set(words.filter((w) => w.conf < 0.6 && !FILLERS.has(w.word) && w.word.length > 2).map((w) => w.word))].slice(0, 8);
}

// ---------------------------------------------------------------------------
//  1) ĐỌC THEO MẪU
// ---------------------------------------------------------------------------

/**
 * Quy điểm 0..1 về thang TOEIC Read aloud (0–3): 3 = rất dễ hiểu, 2 = nhìn chung dễ hiểu nhưng còn lỗi,
 * 1 = khó hiểu / đọc thiếu nhiều, 0 = không đọc.
 */
export function readingPoints(overall: number, max: number): number {
  if (max !== 3) return Math.round(overall * max);
  return overall >= 0.85 ? 3 : overall >= 0.6 ? 2 : overall >= 0.25 ? 1 : 0;
}

/**
 * Chấm bài đọc theo câu/đoạn mẫu.
 * @param maxPoints thang điểm TOEIC (3) – bỏ trống thì nhãn điểm là phần trăm
 */
export function scoreReading(target: string, r: AsrResult, maxPoints?: number, pron?: PronResult, prosody?: ProsodyResult): SpeakScore {
  const tgt = speechTokens(target);
  const heard = mergeCompounds(r.words.filter((w) => !FILLERS.has(w.word) && w.word !== '[unk]'), new Set(tgt));
  const words = alignWords(tgt, heard);
  const ok = words.filter((w) => w.status !== 'miss').length;
  const accuracy = tgt.length ? ok / tgt.length : 0;
  const matchedConf = heard.length ? heard.reduce((s, w) => s + w.conf, 0) / heard.length : 0;
  const weak = words.filter((w) => w.status === 'weak').length;
  // Phát âm: chỉ xét những từ đã đọc (độ tin cậy nhận dạng + tỉ lệ từ nghe chưa rõ)
  const confPron = ok ? clamp(clamp((matchedConf - 0.45) / 0.5) * 0.7 + (1 - weak / ok) * 0.3) : 0;
  // Có chấm âm vị: phát âm chủ yếu dựa vào độ chính xác từng âm (chi tiết hơn độ tin cậy nhận dạng từ)
  const pronOk = !!pron && pron.scored >= Math.min(3, tgt.length);
  const phonePron = pronOk ? clamp((pron!.accuracy - 0.5) / 0.45) : 0;
  const pronS = pronOk ? (ok ? clamp(phonePron * 0.75 + confPron * 0.25) : 0) : confPron;
  const { wpm, pauses } = pace(heard, 0.7);
  const long = tgt.length >= 4;
  const fluency = long ? clamp(rateScore(wpm, 80, 190) - pauses * 0.08) : accuracy;
  // Ngữ điệu chỉ xét khi đọc đoạn dài (đủ câu để đo lên xuống giọng)
  const into = long && prosody && prosody.range > 0 ? prosody : undefined;
  const quality = long ? (into ? pronS * 0.4 + fluency * 0.35 + into.score * 0.25 : (pronS + fluency) / 2) : pronS;
  // Đọc thiếu/sai từ kéo điểm xuống mạnh: điểm tổng = độ chính xác × chất lượng đọc
  const overall = heard.length ? clamp(accuracy * (0.6 + 0.4 * quality)) : 0;

  const missed = words.filter((w) => w.status === 'miss').map((w) => w.word);
  const advice: string[] = [];
  if (!heard.length) advice.push('Máy chưa nghe được bạn đọc. Hãy nói to, rõ và để micro gần hơn rồi thử lại.');
  else {
    if (missed.length) advice.push(`Từ đọc thiếu hoặc chưa đúng: ${[...new Set(missed)].slice(0, 8).join(', ')}. Nghe mẫu và đọc lại các từ này.`);
    if (weak) advice.push('Một số từ máy nghe chưa rõ (gạch chân cam) – hãy phát âm rõ phụ âm cuối và trọng âm.');
    if (pronOk && pron!.patterns.length) advice.push(`Lỗi phát âm hay gặp: ${pron!.patterns.join('; ')}. Xem chi tiết từng từ bên dưới.`);
    if (long && wpm && wpm < 80) advice.push(`Bạn đọc hơi chậm (${Math.round(wpm)} từ/phút). Tốc độ tự nhiên khoảng 110–160 từ/phút.`);
    if (long && wpm > 190) advice.push(`Bạn đọc hơi nhanh (${Math.round(wpm)} từ/phút) – chậm lại để phát âm rõ hơn.`);
    if (long && pauses >= 3) advice.push(`Có ${pauses} chỗ ngừng lâu. Hãy ngắt nghỉ ở dấu phẩy, dấu chấm thay vì giữa cụm từ.`);
    if (into && into.score < 0.6) advice.push(...into.notes);
    if (!advice.length) advice.push('Rất tốt! Bạn đọc đúng và rõ ràng.');
  }

  const criteria: SpeakCriterion[] = [
    { id: 'accuracy', label: 'Độ chính xác (đọc đúng từ)', value: accuracy, shown: pct(accuracy), note: `${ok}/${tgt.length} từ đúng` },
    { id: 'pron', label: 'Phát âm', value: pronS, shown: pct(pronS), note: pronOk ? `đúng ${pct(pron!.accuracy)} số âm${pron!.patterns.length ? ' · ' + pron!.patterns.slice(0, 2).join('; ') : ''}` : weak ? `${weak} từ chưa rõ` : 'Rõ ràng' },
  ];
  if (long) criteria.push({ id: 'fluency', label: 'Tốc độ & ngắt nghỉ', value: fluency, shown: pct(fluency), note: wpm ? `${Math.round(wpm)} từ/phút · ${pauses} lần ngừng lâu` : '—' });
  if (into) criteria.push({ id: 'intonation', label: 'Ngữ điệu & trọng âm', value: into.score, shown: pct(into.score), note: prosodyNote(into) });

  return {
    overall, label: maxPoints ? `${readingPoints(overall, maxPoints)}/${maxPoints}` : pct(overall), criteria, transcript: r.text,
    unclear: unclearWords(r.words), words, wpm: Math.round(wpm), pauses, advice, pron: pronOk ? pron : undefined, prosody: into,
  };
}

/** Tóm tắt số đo ngữ điệu */
function prosodyNote(p: ProsodyResult): string {
  const parts = [`cao độ dao động ${p.range.toFixed(1)} bán cung`];
  if (p.stress) parts.push(`từ nội dung ${p.stress >= 0 ? 'to hơn' : 'nhỏ hơn'} ${Math.abs(p.stress).toFixed(1)} dB`);
  if (p.contours.total) parts.push(`cuối câu đúng ${p.contours.ok}/${p.contours.total}`);
  return parts.join(' · ');
}

// ---------------------------------------------------------------------------
//  2) TRẢ LỜI TỰ DO
// ---------------------------------------------------------------------------

const STOP = new Set(('a an the and or but so to of in on at for with from by as is are was were be been being am do does did have has had i you he she it we they ' +
  'me him her us them my your his its our their this that these those there here what which who when where why how not no yes very really just ' +
  'can could will would should may might must shall about into than then also too more most some any all one like get got go going well').split(' '));

/** Gốc từ đơn giản để so khớp từ khóa (bỏ đuôi s/es/ed/ing) */
function stem(w: string): string {
  return w.replace(/(ing|ed|es|s)$/, '');
}

export interface FreeContext {
  /** Câu hỏi / đề */
  question: string;
  /** Câu trả lời mẫu (để đối chiếu từ khóa) */
  sample: string;
  /** Thời gian nói cho phép (giây) */
  seconds: number;
  exam: 'ielts' | 'toeic';
  /** Thang điểm TOEIC (3 hoặc 5) */
  maxPoints?: number;
  /** Từ vựng nâng cao (dự phòng khi chưa có bảng CEFR) */
  advanced?: ReadonlySet<string>;
  /** Bảng trình độ CEFR để phân tích độ khó từ vựng */
  cefr?: CefrIndex;
  /** Lỗi ngữ pháp của bản chép lời (do bộ kiểm tra ngữ pháp tìm ra); bỏ trống thì dùng bộ luật có sẵn */
  grammar?: { kind: string; text: string }[];
  /** Phát âm chi tiết: độ chính xác âm vị 0..1 (bước chấm âm vị) */
  phoneAccuracy?: number;
  /** Ngữ điệu 0..1 (đo cao độ) */
  intonation?: number;
  /** Kết quả chấm âm vị chi tiết (để hiển thị) */
  pron?: PronResult;
  /** Kết quả đo ngữ điệu chi tiết */
  prosody?: ProsodyResult;
}

/** Bộ tra CEFR dự phòng khi chưa nạp bảng CEFR */
function fallbackCefr(advanced?: ReadonlySet<string>): CefrIndex {
  return { level: (w) => (advanced?.has(w) ? 'B2' : w.length >= 9 ? 'C' : 'A2') };
}

/**
 * Chấm câu trả lời tự do theo MÔ TẢ BAND (rubric.ts): đo tốc độ, ngập ngừng, lặp/tự sửa, từ nối,
 * độ khó từ vựng theo CEFR, câu phức và dạng cấu trúc, tỉ lệ câu không lỗi, độ rõ khi phát âm.
 */
export function scoreFree(r: AsrResult, ctx: FreeContext): SpeakScore {
  const words = r.words.filter((w) => w.word !== '[unk]');
  const content = words.filter((w) => !FILLERS.has(w.word));
  const toks = content.map((w) => w.word);
  const n = toks.length;
  const text = toks.join(' ');
  const { wpm, pauses, span } = pace(content, 1.0);
  const fillers = words.length - content.length;

  // Lặp lại / tự sửa: lặp ngay một từ ("I I"), hoặc nói lại cả cụm hai từ ("I think I think")
  let repeats = 0;
  for (let i = 1; i < n; i++) {
    if (toks[i] === toks[i - 1] && !/^(very|so|no|bye|ha)$/.test(toks[i])) repeats++;
    else if (i >= 3 && toks[i] === toks[i - 2] && toks[i - 1] === toks[i - 3]) repeats++;
  }

  // Câu = các đoạn nói liền mạch (bộ nhận dạng tự tách khi ngừng); viết hoa + thêm dấu chấm để kiểm tra ngữ pháp
  const sentences = (r.segments.length ? r.segments : [text]).map((s) => s.trim()).filter((s) => s.split(/\s+/).length >= 2)
    .map((s) => s[0].toUpperCase() + s.slice(1).replace(/\bi\b/g, 'I') + '.');
  const issues = (ctx.grammar ?? checkGrammar(sentences.join(' '))).filter((i) => i.kind === 'grammar');
  const errorFree = sentences.length ? sentences.filter((s) => !issues.some((i) => s.toLowerCase().includes(i.text.toLowerCase()))).length / sentences.length : 0;

  // Độ liên quan tới đề (để giới hạn điểm khi lạc đề)
  const keys = new Set(speechTokens(ctx.question + ' ' + ctx.sample).filter((w) => !STOP.has(w) && w.length > 2).map(stem));
  const used = new Set(toks.filter((w) => !STOP.has(w) && w.length > 2).map(stem));
  const shared = [...used].filter((w) => keys.has(w)).length;
  const relevance = clamp(shared / Math.max(2, Math.min(8, keys.size / 3)));

  const avgConf = content.length ? content.reduce((s, w) => s + w.conf, 0) / content.length : 0;
  const lowRatio = content.length ? content.filter((w) => w.conf < 0.6).length / content.length : 1;
  const expected = Math.max(12, ctx.seconds * 1.6 * 0.7);
  const minutes = Math.max(span, 1) / 60;
  const rubric = speakingRubric({
    words: n, length: n / expected, wpm, pausesPerMin: span ? pauses / minutes : 0,
    fillers: n ? (fillers / n) * 100 : 0, repetitions: n ? (repeats / n) * 100 : 0,
    cohesion: cohesion(text), vocab: vocabProfile(toks, ctx.cefr ?? fallbackCefr(ctx.advanced)), syntax: syntaxProfile(sentences),
    errorFree, confidence: avgConf, unclear: lowRatio, phoneAccuracy: ctx.phoneAccuracy, intonation: ctx.intonation ?? (ctx.prosody && ctx.prosody.range > 0 ? ctx.prosody.score : undefined),
  });

  // Band tổng; câu trả lời quá ngắn hoặc lạc đề bị giới hạn như giám khảo ("không đủ để đánh giá")
  let band = ieltsOverall(rubric.map((x) => x.band));
  if (n < 10) band = Math.min(band, 4);
  else if (n < 20) band = Math.min(band, 5);
  if (n >= 15 && relevance < 0.15) band = Math.min(band, 5);
  if (n < 3) band = 0;

  const toeic = ctx.exam === 'toeic';
  const max = ctx.maxPoints ?? 3;
  const pts = toToeic(band, max);
  const criteria: SpeakCriterion[] = rubric.map((x) => ({
    id: x.id, label: x.label, value: x.band / 9, shown: toeic ? pct(x.band / 9) : `Band ${x.band.toFixed(1)}`, note: x.evidence.join(' · '),
  }));

  const advice: string[] = [];
  if (n < 3) advice.push('Máy chưa nghe được câu trả lời. Hãy nói to, rõ và để micro gần hơn rồi thử lại.');
  else {
    if (n >= 15 && relevance < 0.15) advice.push('Câu trả lời có vẻ chưa bám sát câu hỏi – hãy nhắc lại từ khóa của đề khi trả lời.');
    if (n < 20) advice.push(`Câu trả lời còn ngắn (${n} từ) – giám khảo cần nghe đủ dài để đánh giá. Hãy thêm lý do, ví dụ, trải nghiệm bản thân.`);
    for (const x of rubric) if (x.next.length && x.band < 9) advice.push(`${x.label} (band ${x.band}) → để lên band ${x.band + 1}: ${x.next.slice(0, 3).join('; ')}.`);
    for (const i of issues.slice(0, 4)) advice.push(`Lỗi ngữ pháp: "${i.text}" → "${(i as { fix?: string }).fix ?? ''}".`);
  }

  return {
    overall: n < 3 ? 0 : toeic ? pts / max : clamp((band - 3) / 5),
    label: n < 3 ? 'Chưa chấm được' : toeic ? `${pts}/${max}` : `Band ${band.toFixed(1)}`,
    criteria, transcript: r.text, unclear: unclearWords(content), wpm: Math.round(wpm), pauses, advice, pron: ctx.pron,
    prosody: ctx.prosody && ctx.prosody.range > 0 ? ctx.prosody : undefined,
  };
}
