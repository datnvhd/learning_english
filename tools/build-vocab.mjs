/**
 * ============================================================================
 *  build-vocab.mjs – Công cụ sinh dữ liệu từ vựng (chạy lúc phát triển, KHÔNG chạy trong app)
 * ============================================================================
 *  Cách dùng:  npm run build:vocab
 *
 *  Nhiệm vụ:
 *   1. Đọc các file nguồn dễ soạn thảo trong  tools/vocab-src/<mã-chủ-đề>.txt
 *   2. Tự động tra phiên âm IPA (từ điển CMU đóng gói sẵn trong node_modules,
 *      không cần internet) và bổ sung các từ đặc biệt trong tools/ipa-overrides.txt
 *   3. Sinh ra file TypeScript  src/app/data/vocab/<mã-chủ-đề>.ts
 *      => toàn bộ từ vựng được "gói" vào mã nguồn nên app học được khi KHÔNG có mạng.
 *
 *  Định dạng file nguồn (mỗi dòng một mục):
 *      ## 👨‍👩‍👧|Gia đình|Family                 <- tiêu đề bài học: icon|tên tiếng Việt|tên tiếng Anh
 *      mother|n|mẹ|My mother cooks dinner.|Mẹ tôi nấu bữa tối.
 *      từ|loại từ|nghĩa tiếng Việt|câu ví dụ tiếng Anh|câu ví dụ tiếng Việt
 *  Dòng trống hoặc bắt đầu bằng "//" sẽ bị bỏ qua.
 *
 *   4. Gắn TRÌNH ĐỘ CEFR (A1, A2, B1, B2) cho từng từ theo danh sách CEFR-J (tools/cefr-j-wordlist.csv).
 *      Cụm từ lấy trình độ cao nhất của các từ thành phần. Từ không có trong danh sách (tên món ăn,
 *      thuật ngữ...) được ƯỚC LƯỢNG theo chủ đề: đời sống = B1, IELTS/TOEIC/IT = B2.
 *      Muốn tự đặt trình độ: thêm trường thứ 6 vào dòng, ví dụ  ...|câu ví dụ VI|B2
 * ============================================================================
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dictionary } from 'cmu-pronouncing-dictionary';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = join(ROOT, 'tools', 'vocab-src');
const OUT_DIR = join(ROOT, 'src', 'app', 'data', 'vocab');
const OVERRIDE_FILE = join(ROOT, 'tools', 'ipa-overrides.txt');

// ---------------------------------------------------------------------------
// 1. Bảng chuyển ký hiệu ARPAbet (CMU) -> IPA kiểu sách giáo khoa Việt Nam
// ---------------------------------------------------------------------------
const VOWELS = {
  AA: 'ɑː', AE: 'æ', AH: 'ʌ', AO: 'ɔː', AW: 'aʊ', AY: 'aɪ', EH: 'e', ER: 'ɜːr',
  EY: 'eɪ', IH: 'ɪ', IY: 'iː', OW: 'oʊ', OY: 'ɔɪ', UH: 'ʊ', UW: 'uː',
};
const CONSONANTS = {
  B: 'b', CH: 'tʃ', D: 'd', DH: 'ð', F: 'f', G: 'ɡ', HH: 'h', JH: 'dʒ', K: 'k', L: 'l',
  M: 'm', N: 'n', NG: 'ŋ', P: 'p', R: 'r', S: 's', SH: 'ʃ', T: 't', TH: 'θ', V: 'v',
  W: 'w', Y: 'j', Z: 'z', ZH: 'ʒ',
};

// Các cụm phụ âm đầu âm tiết hợp lệ (dùng để tách âm tiết theo nguyên tắc "onset tối đa")
const VALID_ONSETS = new Set([
  'p r', 'p l', 'b r', 'b l', 't r', 'd r', 'k r', 'k l', 'g r', 'g l', 'f r', 'f l', 'th r',
  'sh r', 't w', 'd w', 'k w', 'g w', 's w', 's p', 's t', 's k', 's m', 's n', 's l', 's f',
  'p y', 'b y', 't y', 'd y', 'k y', 'g y', 'f y', 'm y', 'n y', 'h y', 'v y', 's y', 'l y',
  's p r', 's p l', 's t r', 's k r', 's k l', 's k w',
]);

/** Chuyển một từ (đã tra CMU) sang IPA có dấu nhấn ˈ ˌ */
function arpaToIpa(pron) {
  const phones = pron.split(' ').map((p) => {
    const m = p.match(/^([A-Z]+)([012])?$/);
    return { base: m[1], stress: m[2] === undefined ? -1 : Number(m[2]), isVowel: m[1] in VOWELS };
  });

  // Tìm vị trí các nguyên âm -> mỗi nguyên âm là "lõi" của một âm tiết
  const vowelIdx = phones.map((p, i) => (p.isVowel ? i : -1)).filter((i) => i >= 0);
  if (vowelIdx.length === 0) return phones.map((p) => CONSONANTS[p.base] ?? '').join('');

  // Xác định điểm bắt đầu của từng âm tiết: phụ âm giữa 2 nguyên âm được chia theo onset tối đa
  const starts = [0];
  for (let k = 1; k < vowelIdx.length; k++) {
    const prev = vowelIdx[k - 1];
    const cur = vowelIdx[k];
    let start = cur; // mặc định: âm tiết bắt đầu ngay tại nguyên âm
    // thử kéo dần các phụ âm phía trước nguyên âm hiện tại vào onset
    for (let s = cur - 1; s > prev; s--) {
      const cluster = phones.slice(s, cur).map((p) => p.base.toLowerCase());
      const ok = cluster.length === 1 ? cluster[0] !== 'ng' : VALID_ONSETS.has(cluster.join(' '));
      if (!ok) break;
      start = s;
    }
    starts.push(start);
  }

  const multi = vowelIdx.length > 1; // chỉ đánh dấu nhấn với từ nhiều âm tiết
  let out = '';
  phones.forEach((p, i) => {
    const sylIndex = starts.indexOf(i);
    if (multi && sylIndex >= 0) {
      const v = phones[vowelIdx[sylIndex]];
      if (v.stress === 1) out += 'ˈ';
      else if (v.stress === 2) out += 'ˌ';
    }
    if (p.isVowel) {
      let ipa = VOWELS[p.base];
      // Nguyên âm không nhấn: AH0 -> ə, ER0 -> ər, IY0 -> i (happy)
      if (p.stress === 0 && p.base === 'AH') ipa = 'ə';
      if (p.stress === 0 && p.base === 'ER') ipa = 'ər';
      if (p.stress === 0 && p.base === 'IY') ipa = 'i';
      out += ipa;
    } else out += CONSONANTS[p.base] ?? '';
  });
  return out;
}

// ---------------------------------------------------------------------------
// 2. Nạp bảng phiên âm ghi đè (dành cho từ CMU không có, ví dụ thuật ngữ IT)
// ---------------------------------------------------------------------------
const overrides = new Map();
if (existsSync(OVERRIDE_FILE)) {
  for (const line of readFileSync(OVERRIDE_FILE, 'utf8').split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('//')) continue;
    const i = t.indexOf('=');
    overrides.set(t.slice(0, i).trim().toLowerCase(), t.slice(i + 1).trim());
  }
}

/** Tra IPA cho một từ hoặc cụm từ; trả về null nếu thiếu dữ liệu */
function lookupIpa(word) {
  const key = word.toLowerCase();
  if (overrides.has(key)) return overrides.get(key);
  const parts = key.split(/[\s-]+/).filter(Boolean);
  const res = [];
  for (const part of parts) {
    if (overrides.has(part)) { res.push(overrides.get(part)); continue; }
    const clean = part.replace(/[.,!?;:"()]/g, '');
    const pron = dictionary[clean];
    if (!pron) return null;
    res.push(arpaToIpa(pron));
  }
  return res.join(' ');
}

// ---------------------------------------------------------------------------
// 2b. Trình độ CEFR của từng từ theo danh sách CEFR-J
//     (CEFR-J Wordlist Version 1.5, Tono Laboratory, Tokyo University of Foreign Studies –
//      dùng miễn phí cho nghiên cứu và thương mại khi có ghi nguồn; xem CREDITS-MEDIA.md)
// ---------------------------------------------------------------------------
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const cefr = new Map();
for (const line of readFileSync(join(ROOT, 'tools', 'cefr-j-wordlist.csv'), 'utf8').split(/\r?\n/).slice(1)) {
  const [headword, , level] = line.split(',');
  if (!headword || !LEVELS.includes(level)) continue;
  for (const h of headword.split('/')) {
    const key = h.trim().toLowerCase();
    // Một từ có nhiều từ loại -> lấy trình độ thấp nhất (nghĩa thông dụng nhất)
    if (key && (!cefr.has(key) || LEVELS.indexOf(level) < LEVELS.indexOf(cefr.get(key)))) cefr.set(key, level);
  }
}
/** Trình độ mặc định của từ nằm ngoài danh sách, theo chủ đề */
const TOPIC_DEFAULT_LEVEL = { it: 'B2', ielts: 'B2', toeic: 'B2', b2: 'B2' };
const levelCount = {};

/** Chỉnh tay cho vài từ mà danh sách CEFR-J xếp lệch so với mức thông dụng */
const LEVEL_OVERRIDES = { friendly: 'A2' };

/** Tra trình độ của một từ đơn; thử thêm dạng số ít nếu từ đang ở số nhiều (parents -> parent) */
function lookupLevel(key) {
  for (const k of [key, key.replace(/ies$/, 'y'), key.replace(/es$/, ''), key.replace(/s$/, '')]) {
    if (cefr.has(k)) return cefr.get(k);
  }
  return null;
}

/** Trình độ CEFR của một từ/cụm từ trong một chủ đề */
function levelOf(word, topicId) {
  const key = word.toLowerCase();
  if (LEVEL_OVERRIDES[key]) return LEVEL_OVERRIDES[key];
  const direct = lookupLevel(key);
  if (direct) return direct;
  const fallback = TOPIC_DEFAULT_LEVEL[topicId] ?? 'B1';
  const parts = key.split(/[\s-]+/).map((p) => p.replace(/[.,!?;:"()']/g, '')).filter(Boolean);
  if (parts.length < 2) return fallback;
  // Cụm từ: trình độ cao nhất trong các từ thành phần; thành phần lạ tính theo mặc định của chủ đề
  return parts.map((p) => lookupLevel(p) ?? fallback).sort((a, b) => LEVELS.indexOf(b) - LEVELS.indexOf(a))[0];
}

// ---------------------------------------------------------------------------
// 3. Đọc file nguồn và sinh file TypeScript cho từng chủ đề
// ---------------------------------------------------------------------------
mkdirSync(OUT_DIR, { recursive: true });
const missing = [];
const summary = [];
const stats = {}; // thống kê số từ/bài mỗi chủ đề -> ghi ra vocab-stats.ts

// Một chủ đề có thể gồm nhiều file: ielts.txt + ielts.2.txt ... (gộp theo phần trước dấu chấm đầu tiên)
const topicFiles = {};
for (const f of readdirSync(SRC_DIR).filter((f) => f.endsWith('.txt')).sort()) (topicFiles[f.split('.')[0]] ??= []).push(f);

for (const [topicId, files] of Object.entries(topicFiles)) {
  const file = files.join('+');
  const lessons = [];
  const seen = new Set();
  let dup = 0;
  const lines = files.flatMap((f) => readFileSync(join(SRC_DIR, f), 'utf8').split(/\r?\n/));

  lines.forEach((raw, lineNo) => {
    const line = raw.trim();
    if (!line || line.startsWith('//')) return;
    if (line.startsWith('##')) {
      const [icon, vi, en] = line.slice(2).trim().split('|').map((s) => s.trim());
      lessons.push({ icon, vi, en, words: [] });
      return;
    }
    const f = line.split('|').map((s) => s.trim());
    if (f.length < 5 || !lessons.length) {
      console.warn(`⚠ ${file}:${lineNo + 1} dòng sai định dạng: ${line}`);
      return;
    }
    const [word, pos, vi, ex, exVi] = f;
    const key = word.toLowerCase();
    if (seen.has(key)) { dup++; console.warn(`⚠ ${file}:${lineNo + 1} từ trùng trong chủ đề: ${word}`); return; }
    seen.add(key);
    const ipa = lookupIpa(word);
    if (ipa === null) missing.push(`${topicId}: ${word}`);
    const level = LEVELS.includes(f[5]) ? f[5] : levelOf(word, topicId);
    levelCount[level] = (levelCount[level] ?? 0) + 1;
    lessons.at(-1).words.push([word, pos, ipa ?? '', vi, ex, exVi, level]);
  });

  const total = lessons.reduce((n, l) => n + l.words.length, 0);
  stats[topicId] = { words: total, lessons: lessons.length };
  summary.push(`${topicId.padEnd(10)} ${String(lessons.length).padStart(3)} bài | ${String(total).padStart(4)} từ | trùng bỏ qua: ${dup}`);

  const header = `/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "${topicId}"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/${topicId}.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = ${JSON.stringify({ lessons }, null, 1)};
`;
  writeFileSync(join(OUT_DIR, `${topicId}.ts`), header, 'utf8');
}

// Ghi file thống kê nhanh (số từ, số bài) để màn hình chủ đề không phải nạp toàn bộ dữ liệu
writeFileSync(
  join(OUT_DIR, 'vocab-stats.ts'),
  `/**
 * Thống kê nhanh số từ và số bài của từng chủ đề (SINH TỰ ĐỘNG bởi tools/build-vocab.mjs).
 * Dùng để hiển thị thẻ chủ đề mà không cần nạp toàn bộ dữ liệu từ vựng.
 */
export const VOCAB_STATS: Record<string, { words: number; lessons: number }> = ${JSON.stringify(stats, null, 2)};
`,
  'utf8',
);

console.log('\n=== TỔNG KẾT ===\n' + summary.join('\n'));
console.log('Trình độ CEFR: ' + LEVELS.map((l) => `${l} ${levelCount[l] ?? 0}`).join(' · '));
if (missing.length) {
  console.log(`\n❗ ${missing.length} từ thiếu phiên âm – hãy thêm vào tools/ipa-overrides.txt (dạng  từ=ipa, không cần dấu gạch chéo):`);
  console.log([...new Set(missing)].join('\n'));
}
