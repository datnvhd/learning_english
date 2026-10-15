/**
 * ============================================================================
 *  phoneme-score.ts – Chấm phát âm đến từng ÂM (không dùng AI tạo sinh)
 * ============================================================================
 *  - Cách đọc chuẩn của từng từ: CMU Pronouncing Dictionary (ARPAbet) → đổi sang bộ 39 âm IPA của mô hình.
 *  - Âm máy nghe được: mô hình nhận dạng âm vị wav2vec2 (PhonemeService) trả về chuỗi âm IPA.
 *  - Gióng hàng hai chuỗi âm (quy hoạch động, các cặp âm gần nhau bị phạt nhẹ) → độ chính xác âm vị
 *    và lỗi cụ thể của từng từ, kèm chẩn đoán lỗi người Việt hay mắc (mất âm cuối, /θ/→/t/, /ʃ/→/s/...).
 */

/** Bộ âm của mô hình (39 âm, ký hiệu IPA) */
export const PHONES = ['ɑ', 'æ', 'ə', 'aʊ', 'aɪ', 'b', 'ʧ', 'd', 'ð', 'ɾ', 'ɛ', 'ɝ', 'eɪ', 'f', 'g', 'h', 'ɪ', 'i', 'ʤ', 'k', 'l', 'm', 'n', 'ŋ',
  'oʊ', 'ɔɪ', 'p', 'ɹ', 's', 'ʃ', 't', 'θ', 'ʊ', 'u', 'v', 'w', 'j', 'z'];

/** ARPAbet (CMU) → IPA theo bộ âm TIMIT 39 của mô hình */
const ARPA: Record<string, string> = {
  AA: 'ɑ', AE: 'æ', AH: 'ə', AO: 'ɑ', AW: 'aʊ', AY: 'aɪ', B: 'b', CH: 'ʧ', D: 'd', DH: 'ð', EH: 'ɛ', ER: 'ɝ', EY: 'eɪ', F: 'f', G: 'g',
  HH: 'h', IH: 'ɪ', IY: 'i', JH: 'ʤ', K: 'k', L: 'l', M: 'm', N: 'n', NG: 'ŋ', OW: 'oʊ', OY: 'ɔɪ', P: 'p', R: 'ɹ', S: 's', SH: 'ʃ',
  T: 't', TH: 'θ', UH: 'ʊ', UW: 'u', V: 'v', W: 'w', Y: 'j', Z: 'z', ZH: 'ʃ',
};

/** Một âm của cách đọc chuẩn: âm IPA và có phải nguyên âm không nhấn (được đọc lướt) */
export interface ExpectedPhone {
  p: string;
  weak: boolean;
  /** Âm thuộc từ chức năng (to, the, your...) – thường đọc lướt nên không chấm */
  skip?: boolean;
}

/** Từ chức năng hay được đọc lướt / dạng yếu trong lời nói tự nhiên */
const FUNCTION = new Set(('a an the to of at for from in on and or but as than that this these those your you our their his her its my ' +
  'can could would should will shall must do does did have has had was were are is am be been him them us me we they he she it ' +
  'there some any just not so if by with into onto up out').split(' '));

/** Từ điển phát âm: từ → cách đọc chuẩn */
export type PronDict = ReadonlyMap<string, ExpectedPhone[][]>;

/** Đọc nội dung file cmudict.dict (mỗi dòng: "word  W ER1 D"; dạng biến thể "word(2)" bị bỏ qua) */
export function parseCmuDict(raw: string): PronDict {
  const map = new Map<string, ExpectedPhone[][]>();
  for (const line of raw.split('\n')) {
    const sp = line.indexOf(' ');
    if (sp < 1) continue;
    const word = line.slice(0, sp).replace(/\(\d+\)$/, '');
    const phones = line.slice(sp + 1).replace(/#.*$/, '').trim().split(/\s+/)
      .map((a) => ({ p: ARPA[a.replace(/\d/g, '')], weak: /0$/.test(a) }))
      .filter((x) => !!x.p);
    if (!phones.length) continue;
    const list = map.get(word);
    if (list) list.push(phones);
    else map.set(word, [phones]);
  }
  return map;
}

/** Tách chuỗi IPA mô hình trả về thành từng âm (ghép dài nhất trước: aɪ, eɪ, oʊ...) */
export function splitPhones(ipa: string): string[][] {
  const sorted = [...PHONES].sort((a, b) => b.length - a.length);
  return ipa.trim().split(/\s+|\|/).filter(Boolean).map((word) => {
    const out: string[] = [];
    let i = 0;
    while (i < word.length) {
      const hit = sorted.find((p) => word.startsWith(p, i));
      if (hit) {
        out.push(hit);
        i += hit.length;
      } else i++; // ký tự lạ: bỏ qua
    }
    return out;
  }).filter((w) => w.length);
}

/** Các cặp âm gần nhau (phạt nhẹ khi đọc lẫn) */
const NEAR: [string, string][] = [['t', 'ɾ'], ['d', 'ɾ'], ['ə', 'ɪ'], ['ə', 'ʊ'], ['ə', 'ɛ'], ['ə', 'ɑ'], ['ɑ', 'ə'], ['ɪ', 'i'], ['ʊ', 'u'], ['ɝ', 'ə'],
  ['ɑ', 'ɝ'], ['ʊ', 'ɝ'], ['ɛ', 'ɝ'], ['ɪ', 'ɝ'], ['s', 'z'], ['θ', 'ð'], ['ɑ', 'oʊ'], ['ɪ', 'ɛ'], ['n', 'ŋ']];
function cost(expected: ExpectedPhone, heard: string): number {
  if (expected.p === heard) return 0;
  if (expected.skip) return 0.1;
  const near = NEAR.some(([a, b]) => (a === expected.p && b === heard) || (b === expected.p && a === heard));
  if (near) return expected.weak ? 0.1 : 0.35;
  return 1;
}
/** Phạt khi thiếu một âm */
const STOPS = new Set(['p', 'b', 't', 'd', 'k', 'g', 'ʧ', 'ʤ']);
const delCost =(e: ExpectedPhone) => (e.skip ? 0.1 : e.weak ? 0.5 : 1);

/** Kết quả so khớp một âm */
interface Aligned {
  expected?: ExpectedPhone;
  heard?: string;
  word: number;
}

/** Gióng hàng chuỗi âm chuẩn (kèm chỉ số từ) với chuỗi âm nghe được */
function align(expected: (ExpectedPhone & { word: number })[], heard: string[]): Aligned[] {
  const n = expected.length;
  const m = heard.length;
  const d: number[][] = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: m + 1 }, (_, j) => (i === 0 ? j * 0.8 : j === 0 ? i : 0)));
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= m; j++)
      d[i][j] = Math.min(d[i - 1][j] + delCost(expected[i - 1]), d[i][j - 1] + 0.8, d[i - 1][j - 1] + cost(expected[i - 1], heard[j - 1]));
  const out: Aligned[] = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && Math.abs(d[i][j] - (d[i - 1][j - 1] + cost(expected[i - 1], heard[j - 1]))) < 1e-9) {
      out.push({ expected: expected[i - 1], heard: heard[j - 1], word: expected[i - 1].word });
      i--;
      j--;
    } else if (i > 0 && Math.abs(d[i][j] - (d[i - 1][j] + delCost(expected[i - 1]))) < 1e-9) {
      out.push({ expected: expected[i - 1], word: expected[i - 1].word });
      i--;
    } else {
      out.push({ heard: heard[j - 1], word: i > 0 ? expected[i - 1].word : 0 });
      j--;
    }
  }
  return out.reverse();
}

/** Lỗi phát âm của một từ */
export interface WordPron {
  word: string;
  /** Cách đọc chuẩn và cách máy nghe được (IPA) */
  expected: string;
  heard: string;
  /** Độ chính xác âm của từ 0..1 */
  accuracy: number;
  /** Chẩn đoán lỗi (tiếng Việt) */
  issues: string[];
}

export interface PronResult {
  /** Độ chính xác âm vị toàn bài 0..1 */
  accuracy: number;
  /** Các từ phát âm chưa đúng (thấp nhất trước) */
  words: WordPron[];
  /** Thống kê lỗi điển hình (để khuyên luyện tập) */
  patterns: string[];
  /** Số từ được chấm (có trong từ điển phát âm) */
  scored: number;
}

const VOWELS = new Set(['ɑ', 'æ', 'ə', 'aʊ', 'aɪ', 'ɛ', 'ɝ', 'eɪ', 'ɪ', 'i', 'oʊ', 'ɔɪ', 'ʊ', 'u']);

/** Chẩn đoán một lỗi âm theo các lỗi người Việt hay mắc */
function diagnose(exp: ExpectedPhone | undefined, heard: string | undefined, final: boolean): string | null {
  if (exp && !heard) {
    if (final && !VOWELS.has(exp.p)) return `mất âm cuối /${exp.p}/ – hãy bật rõ phụ âm cuối`;
    if (exp.weak) return null; // nuốt nguyên âm không nhấn là bình thường
    return `thiếu âm /${exp.p}/`;
  }
  if (!exp || !heard || exp.p === heard) return null;
  if (cost(exp, heard) < 0.4) return null; // biến thể chấp nhận được (âm không nhấn, đồng hóa, θ/ð...)
  const pair = exp.p + '>' + heard;
  const known: Record<string, string> = {
    'θ>t': '/θ/ bị đọc thành /t/ – đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi', 'θ>s': '/θ/ bị đọc thành /s/ – đưa đầu lưỡi ra giữa hai hàm răng',
    'θ>f': '/θ/ bị đọc thành /f/ – dùng lưỡi, không dùng môi', 'ð>d': '/ð/ bị đọc thành /d/ – lưỡi giữa hai răng, rung dây thanh',
    'ð>z': '/ð/ bị đọc thành /z/ – lưỡi giữa hai răng', 'ʃ>s': '/ʃ/ bị đọc thành /s/ – tròn môi, lưỡi lùi về sau', 's>ʃ': '/s/ bị đọc thành /ʃ/',
    'z>s': '/z/ bị đọc thành /s/ – cần rung dây thanh', 'v>b': '/v/ bị đọc thành /b/ – răng trên chạm môi dưới', 'v>w': '/v/ bị đọc thành /w/ – răng trên chạm môi dưới',
    'ɹ>l': '/r/ bị đọc thành /l/ – cong lưỡi, không chạm lợi', 'l>ɹ': '/l/ bị đọc thành /r/', 'l>n': '/l/ bị đọc thành /n/', 'n>l': '/n/ bị đọc thành /l/',
    'ʧ>ʃ': '/tʃ/ bị đọc thành /ʃ/', 'ʤ>z': '/dʒ/ bị đọc thành /z/', 'ʤ>ʧ': '/dʒ/ bị đọc thành /tʃ/ – cần rung dây thanh',
    'i>ɪ': 'nguyên âm dài /iː/ bị đọc ngắn – kéo dài âm', 'ɪ>i': 'nguyên âm ngắn /ɪ/ bị đọc dài', 'u>ʊ': 'nguyên âm dài /uː/ bị đọc ngắn', 'æ>ɛ': '/æ/ bị đọc thành /e/ – mở miệng rộng hơn',
    'p>b': '/p/ bị đọc thành /b/ – bật hơi mạnh', 'k>g': '/k/ bị đọc thành /g/', 't>d': '/t/ bị đọc thành /d/',
  };
  if (known[pair]) return known[pair];
  if (final && !VOWELS.has(exp.p)) return `âm cuối /${exp.p}/ bị đọc thành /${heard}/`;
  return `/${exp.p}/ bị đọc thành /${heard}/`;
}

/**
 * Chấm phát âm: so cách đọc chuẩn của `words` (các từ của câu mẫu hoặc lời đã nhận dạng) với chuỗi âm nghe được.
 * Từ không có trong từ điển phát âm (tên riêng...) bị bỏ qua.
 */
export function scorePronunciation(words: string[], heardIpa: string, dict: PronDict): PronResult {
  const expected: (ExpectedPhone & { word: number })[] = [];
  const known: { word: string; idx: number; phones: ExpectedPhone[] }[] = [];
  const heard = splitPhones(heardIpa).flat();
  const heardSet = new Set(heard);
  words.forEach((w) => {
    const key = w.toLowerCase().replace(/[^a-z']/g, '');
    const variants = dict.get(key);
    if (!variants) return;
    // Biến thể có nhiều âm xuất hiện trong lời nghe được nhất (vd. with /wɪð/ hay /wɪθ/)
    const phones = variants.reduce((best, v) => (v.filter((x) => heardSet.has(x.p)).length / v.length > best.filter((x) => heardSet.has(x.p)).length / best.length ? v : best));
    const skip = FUNCTION.has(key);
    const idx = known.length;
    known.push({ word: w, idx, phones });
    // Âm tắc đứng trước âm tắc khác (/k/ trong "factory", "expected") thường không bật hơi → nghe rất nhẹ, không coi là lỗi
    phones.forEach((p, k) => expected.push({ ...p, weak: p.weak || (STOPS.has(p.p) && STOPS.has(phones[k + 1]?.p ?? '')), skip, word: idx }));
  });
  if (!expected.length) return { accuracy: 0, words: [], patterns: [], scored: 0 };
  const al = align(expected, heard);

  const per: WordPron[] = known.map((k) => ({ word: k.word, expected: k.phones.map((p) => p.p).join(''), heard: '', accuracy: 1, issues: [] }));
  const counts = new Map<string, number>();
  let errSum = 0;
  let total = 0;
  // Đếm lỗi theo từ
  const byWord = new Map<number, Aligned[]>();
  for (const a of al) (byWord.get(a.word) ?? byWord.set(a.word, []).get(a.word)!).push(a);
  for (const [wi, list] of byWord) {
    const w = per[wi];
    if (!w) continue;
    w.heard = list.map((a) => a.heard ?? '').join('');
    const exps = list.filter((a) => a.expected);
    const lastExp = exps[exps.length - 1];
    let err = 0;
    for (const a of list) {
      if (a.expected && a.heard) err += cost(a.expected, a.heard);
      else if (a.expected) err += a.expected.weak ? 0.5 : 1;
      else err += 0.5; // âm thừa
      const dx = a.expected?.skip ? null : diagnose(a.expected, a.heard, a === lastExp);
      if (dx && !w.issues.includes(dx)) {
        w.issues.push(dx);
        const key = dx.split(' – ')[0].replace(/^(mất âm cuối|âm cuối) \/\S+\/.*/, 'mất / sai âm cuối');
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    const n = Math.max(1, exps.length);
    w.accuracy = Math.max(0, 1 - err / n);
    if (exps[0]?.expected?.skip) {
      w.issues = [];
      continue; // từ chức năng: không tính điểm
    }
    errSum += Math.min(err, n);
    total += n;
  }
  const accuracy = total ? Math.max(0, 1 - errSum / total) : 0;
  const patterns = [...counts].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([k, n]) => `${k} (${n} lần)`);
  return {
    accuracy,
    words: per.filter((w) => w.accuracy < 0.9 && w.issues.length).sort((a, b) => a.accuracy - b.accuracy).slice(0, 12),
    patterns,
    scored: known.length,
  };
}

