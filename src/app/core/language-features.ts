/**
 * ============================================================================
 *  language-features.ts – Đo các đặc trưng ngôn ngữ mà giám khảo IELTS/TOEIC dựa vào khi chấm
 * ============================================================================
 *  Không dùng AI: chỉ tách câu/từ và đối chiếu với danh sách từ CEFR-J, từ nối, cấu trúc câu.
 *   - vocabProfile():  độ khó từ vựng theo CEFR (A1–B2, trên B2), độ đa dạng từ vựng
 *   - syntaxProfile(): tỉ lệ câu phức, các dạng cấu trúc ngữ pháp, độ dài câu
 *   - cohesion():      từ nối theo nhóm chức năng, từ nối dùng quá nhiều, từ quy chiếu
 *  Kết quả được rubric.ts quy đổi thành band theo từng tiêu chí.
 */

export type Cefr = 'A1' | 'A2' | 'B1' | 'B2' | 'C' | '?';

/** Tra trình độ CEFR của một từ (có xét các dạng chia: -s, -ed, -ing...) */
export interface CefrIndex {
  level(word: string): Cefr;
}

/**
 * Tạo bộ tra CEFR. `dict` (từ điển chính tả) giúp nhận ra từ hợp lệ nằm ngoài danh sách CEFR-J
 * (A1–B2) → coi là từ nâng cao (trên B2); từ không có trong từ điển → '?' (tên riêng, viết sai...).
 */
export function buildCefrIndex(words: Record<'A1' | 'A2' | 'B1' | 'B2', string>, dict?: ReadonlySet<string>): CefrIndex {
  const map = new Map<string, Cefr>();
  for (const l of ['B2', 'B1', 'A2', 'A1'] as const) for (const w of words[l].split(' ')) if (w) map.set(w, l);
  const cache = new Map<string, Cefr>();
  return {
    level(raw: string): Cefr {
      const w = raw.toLowerCase().replace(/^'+|'+$/g, '');
      const hit = cache.get(w);
      if (hit) return hit;
      // Lấy trình độ thấp nhất giữa dạng gốc và dạng chia (learning -> learn A1, không phải 'learning' B2)
      const order: Cefr[] = ['A1', 'A2', 'B1', 'B2'];
      let out: Cefr | undefined;
      for (const b of [w, ...lemmas(w)]) {
        const l = map.get(b);
        if (l && (!out || order.indexOf(l) < order.indexOf(out))) out = l;
      }
      if (!out) out = dict ? (dict.has(w) && w.length >= 4 ? 'C' : '?') : w.length >= 9 ? 'C' : '?';
      cache.set(w, out);
      return out;
    },
  };
}

/** Động từ bất quy tắc thông dụng: quá khứ / phân từ -> nguyên mẫu */
const IRREGULAR: Record<string, string> = Object.fromEntries(
  ('went:go gone:go was:be were:be been:be had:have did:do done:do made:make took:take taken:take got:get gotten:get saw:see seen:see ' +
    'came:come gave:give given:give knew:know known:know thought:think bought:buy brought:bring taught:teach caught:catch found:find ' +
    'felt:feel left:leave kept:keep slept:sleep met:meet paid:pay said:say told:tell sold:sell wrote:write written:write spoke:speak ' +
    'spoken:speak broke:break broken:break chose:choose chosen:choose began:begin begun:begin ran:run drank:drink drunk:drink ate:eat ' +
    'eaten:eat drove:drive driven:drive rode:ride ridden:ride grew:grow grown:grow threw:throw thrown:throw flew:fly flown:fly ' +
    'fell:fall fallen:fall forgot:forget forgotten:forget understood:understand stood:stand sat:sit lost:lose won:win built:build ' +
    'sent:send spent:spend lent:lend meant:mean heard:hear held:hold led:lead read:read rose:rise risen:rise wore:wear worn:wear ' +
    'swam:swim sang:sing sung:sing became:become children:child people:person men:man women:woman lives:life better:good best:good worse:bad worst:bad')
    .split(' ').map((p) => p.split(':')));

/** Các dạng gốc có thể có của một từ đã chia */
export function lemmas(w: string): string[] {
  const out: string[] = [];
  if (IRREGULAR[w]) out.push(IRREGULAR[w]);
  const add = (x: string) => x.length >= 2 && out.push(x);
  if (w.endsWith("'s")) add(w.slice(0, -2));
  if (w.endsWith('ies')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('es')) add(w.slice(0, -2));
  if (w.endsWith('s')) add(w.slice(0, -1));
  if (w.endsWith('ied')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('ed')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1ed$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('ing')) { add(w.slice(0, -3)); add(w.slice(0, -3) + 'e'); if (/(.)\1ing$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('ier')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('iest')) add(w.slice(0, -4) + 'y');
  // So sánh hơn / nhất: larger -> large, bigger -> big, safest -> safe
  if (w.endsWith('er')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1er$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('est')) { add(w.slice(0, -3)); add(w.slice(0, -2)); if (/(.)\1est$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('ily')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('ly')) add(w.slice(0, -2));
  return out;
}

/** Từ chức năng (không tính vào phân tích độ khó từ vựng) */
export const FUNCTION_WORDS = new Set(('a an the and or but so nor yet to of in on at for with from by as into onto about over under than then ' +
  'is are was were be been being am do does did done have has had having will would shall should can could may might must ' +
  'i you he she it we they me him her us them my your his its our their mine yours ours theirs myself yourself himself herself ' +
  'itself ourselves themselves this that these those there here what which who whom whose when where why how not no yes ' +
  'cannot very too also just only all any some each every both either neither one other such own same more most much many few ' +
  "if because although though while whereas unless until since before after again further once i'm it's don't doesn't " +
  "didn't can't won't isn't aren't wasn't weren't i've i'd i'll you're we're they're that's there's let's").split(' '));

export interface VocabProfile {
  /** Số từ nội dung (bỏ từ chức năng) */
  content: number;
  /** Tỉ lệ từ theo trình độ trong các từ nội dung */
  share: Record<'basic' | 'B1' | 'B2' | 'C', number>;
  /** Tỉ lệ từ nâng cao (B2 trở lên) */
  advanced: number;
  /** Các từ nâng cao khác nhau đã dùng (để nêu ví dụ) */
  advancedWords: string[];
  /** Chỉ số đa dạng từ vựng (Guiraud: số từ khác nhau / căn số từ) */
  diversity: number;
}

/** Phân tích độ khó và độ đa dạng từ vựng */
export function vocabProfile(tokens: string[], idx: CefrIndex): VocabProfile {
  const words = tokens.map((t) => t.toLowerCase()).filter((t) => /^[a-z][a-z'-]*$/.test(t));
  const content = words.filter((w) => !FUNCTION_WORDS.has(w));
  const counts = { basic: 0, B1: 0, B2: 0, C: 0 };
  const adv = new Set<string>();
  let known = 0;
  for (const w of content) {
    const l = idx.level(w);
    if (l === '?') continue;
    known++;
    if (l === 'A1' || l === 'A2') counts.basic++;
    else counts[l]++;
    if (l === 'B2' || l === 'C') adv.add(w);
  }
  const div = (n: number) => (known ? n / known : 0);
  return {
    content: content.length,
    share: { basic: div(counts.basic), B1: div(counts.B1), B2: div(counts.B2), C: div(counts.C) },
    advanced: div(counts.B2 + counts.C),
    advancedWords: [...adv].slice(0, 12),
    diversity: words.length ? new Set(words).size / Math.sqrt(words.length) : 0,
  };
}

/** Tách đoạn văn thành câu (bỏ qua dấu chấm của từ viết tắt thông dụng) */
export function splitSentences(text: string): string[] {
  return text
    .replace(/\b(Mr|Mrs|Ms|Dr|St|vs|etc|e\.g|i\.e|a\.m|p\.m|No)\./gi, (m) => m.replace(/\./g, '§'))
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.replace(/§/g, '.').trim())
    .filter((s) => /[a-z]/i.test(s) && s.split(/\s+/).length >= 2);
}

/** Các dạng cấu trúc ngữ pháp (để đánh giá Grammatical Range) */
const STRUCTURES: [string, RegExp][] = [
  ['mệnh đề trạng ngữ (because/when/if...)', /\b(because|since|as soon as|when|while|whereas|although|though|even though|even if|unless|until|before|after|so that|in order that|once)\b/i],
  ['mệnh đề quan hệ (which/who/that...)', /\b\w+\s+(which|who|whom|whose|where)\b|\b(the|a|an)\s+\w+\s+that\s+\w+/i],
  ['câu điều kiện', /\bif\b[^.?!]*\b(will|would|could|might|can)\b|\b(were|had)\s+\w+\s+\w*,?\s*\b(would|could)\b/i],
  ['mệnh đề danh từ (that/what...)', /\b(think|believe|say|says|said|argue|argued|feel|know|claim|suggest|show|shows|mean|means|agree)\s+(that|what|how|whether|why)\b|\b(what|whether)\s+\w+\s+(is|are|was|were|do|does)\b/i],
  ['bị động', /\b(is|are|was|were|be|been|being|has been|have been)\s+(\w+ly\s+)?\w+(ed|en|wn|un|ght)\b/i],
  ['thì hoàn thành', /\b(have|has|had|'ve|'d)\s+(\w+ly\s+)?(been|\w+ed|done|made|seen|gone|taken|given|known|grown|become|begun|written|spoken|chosen|risen|fallen)\b/i],
  ['động từ khuyết thiếu (should/might...)', /\b(should|might|must|could|would|ought to|may)\s+(not\s+)?(have\s+)?\w+/i],
  ['so sánh', /\b\w+er than\b|\b(more|less|fewer)\s+\w+\s+than\b|\bthe (most|least)\b|\bas \w+ as\b/i],
  ['danh động từ / to V làm chủ ngữ', /^(\w+ing|to \w+)\b|\b(by|of|for|about|without|after|before)\s+\w+ing\b/i],
  ['đảo ngữ / nhấn mạnh', /\b(not only|no sooner|rarely|seldom|never before|it is \w+ that|what \w+ is)\b/i],
  ['cụm phân từ', /(^|,\s*)(\w+ing|\w+ed)\s+\w+[^,]*,/i],
];

/** Dấu hiệu câu phức (có mệnh đề phụ) */
const COMPLEX = /\b(because|since|when|while|whereas|although|though|unless|until|if|so that|which|who|whom|whose|where|that|whether|what)\b/i;

export interface SyntaxProfile {
  sentences: number;
  /** Tỉ lệ câu phức */
  complexRatio: number;
  /** Các dạng cấu trúc khác nhau đã dùng */
  structures: string[];
  avgLength: number;
}

/** Phân tích độ đa dạng và độ phức tạp của câu */
export function syntaxProfile(sentences: string[]): SyntaxProfile {
  const n = sentences.length;
  const complex = sentences.filter((s) => COMPLEX.test(s) && s.split(/\s+/).length >= 6).length;
  const found = STRUCTURES.filter(([, re]) => sentences.some((s) => re.test(s))).map(([name]) => name);
  const words = sentences.reduce((sum, s) => sum + s.split(/\s+/).length, 0);
  return { sentences: n, complexRatio: n ? complex / n : 0, structures: found, avgLength: n ? words / n : 0 };
}

/** Từ nối theo nhóm chức năng (giám khảo đánh giá cả độ đa dạng lẫn việc lạm dụng) */
const LINKER_GROUPS: Record<string, string[]> = {
  'bổ sung': ['moreover', 'furthermore', 'in addition', 'additionally', 'besides', 'also', 'what is more', 'not only'],
  'tương phản': ['however', 'nevertheless', 'on the other hand', 'in contrast', 'by contrast', 'whereas', 'while', 'although', 'though', 'despite', 'in spite of', 'but', 'yet', 'conversely'],
  'nguyên nhân – kết quả': ['because', 'since', 'therefore', 'consequently', 'as a result', 'thus', 'hence', 'so', 'due to', 'owing to', 'this means'],
  'ví dụ': ['for example', 'for instance', 'such as', 'e.g.', 'to illustrate', 'in particular', 'particularly'],
  'trình tự': ['firstly', 'secondly', 'thirdly', 'first', 'second', 'then', 'next', 'finally', 'lastly', 'to begin with', 'after that', 'meanwhile', 'subsequently'],
  'kết luận / khái quát': ['in conclusion', 'to conclude', 'to sum up', 'overall', 'in summary', 'in general', 'generally', 'all in all', 'on the whole', 'in short'],
  'quan điểm': ['in my opinion', 'i believe', 'i think', 'personally', 'from my perspective', 'in my view', 'to be honest', 'actually'],
};

export interface CohesionProfile {
  /** Số lần dùng từ nối */
  count: number;
  /** Số lần dùng trên 100 từ */
  perHundred: number;
  /** Các nhóm chức năng đã dùng */
  groups: string[];
  /** Từ nối bị lặp quá nhiều (> 3 lần) */
  overused: string[];
  /** Số từ/cụm quy chiếu (this, these, such, which, it...) */
  references: number;
}

/** Phân tích liên kết câu (Coherence & Cohesion) */
export function cohesion(text: string): CohesionProfile {
  const low = ' ' + text.toLowerCase().replace(/[^a-z' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
  const words = low.trim().split(' ').filter(Boolean).length;
  let count = 0;
  const groups: string[] = [];
  const overused: string[] = [];
  for (const [g, list] of Object.entries(LINKER_GROUPS)) {
    let used = false;
    for (const l of list) {
      const n = low.split(' ' + l.replace(/\./g, ' ').trim() + ' ').length - 1;
      if (!n) continue;
      used = true;
      count += n;
      if (n > 3 && !['but', 'so', 'also', 'and', 'then', 'i think'].includes(l)) overused.push(l);
    }
    if (used) groups.push(g);
  }
  const references = (low.match(/ (this|these|those|such|which|the former|the latter|its|their|it|they) /g) ?? []).length;
  return { count, perHundred: words ? (count / words) * 100 : 0, groups, overused, references };
}

/** Số liệu được nhắc tới (Task 1): số, phần trăm, năm */
export function dataMentions(text: string): number {
  return (text.match(/\b\d+(?:[.,]\d+)?\s*(%|percent|per cent|million|billion|thousand)?/gi) ?? []).length;
}

/** Từ/cụm so sánh số liệu (Task 1) */
export function comparisons(text: string): number {
  return (text.match(/\b(higher|lower|more|less|fewer|greater|smaller|larger|bigger|increase[ds]?|decrease[ds]?|rose|fell|grew|declined|doubled|tripled|compared|whereas|while|than|the same as|similar|in contrast)\b/gi) ?? []).length;
}
