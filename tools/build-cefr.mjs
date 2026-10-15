/**
 * ============================================================================
 *  build-cefr.mjs – Sinh bảng trình độ CEFR của từ tiếng Anh cho bộ chấm điểm
 * ============================================================================
 *  Chạy: node tools/build-cefr.mjs
 *  Đọc tools/cefr-j-wordlist.csv (CEFR-J Wordlist, A1–B2) và sinh src/app/data/cefr-levels.ts:
 *  mỗi trình độ là một chuỗi các từ cách nhau bằng dấu cách (gọn, nạp lười khi chấm bài).
 *  Bộ chấm dùng bảng này để phân tích độ khó từ vựng (Lexical Resource) giống cách giám khảo
 *  đánh giá "từ vựng ít gặp / nâng cao". Từ hợp lệ nằm ngoài danh sách được coi là trên B2.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const best = new Map();
for (const line of readFileSync(join(ROOT, 'tools', 'cefr-j-wordlist.csv'), 'utf8').split(/\r?\n/).slice(1)) {
  const [head, , level] = line.split(',');
  if (!head || !LEVELS.includes(level)) continue;
  // "a.m./A.M./am/AM" -> nhiều dạng; chỉ giữ từ đơn viết thường
  for (const raw of head.split('/')) {
    const w = raw.trim().toLowerCase();
    if (!/^[a-z][a-z'-]*$/.test(w)) continue;
    if (!best.has(w) || LEVELS.indexOf(level) < LEVELS.indexOf(best.get(w))) best.set(w, level);
  }
}
const by = Object.fromEntries(LEVELS.map((l) => [l, []]));
for (const [w, l] of best) by[l].push(w);
let ts = '/**\n * Trình độ CEFR của từ tiếng Anh (SINH TỰ ĐỘNG bởi tools/build-cefr.mjs từ CEFR-J Wordlist).\n * Mỗi trình độ: chuỗi các từ cách nhau bằng dấu cách. Không sửa tay.\n */\n';
ts += 'export const CEFR_WORDS: Record<\'A1\' | \'A2\' | \'B1\' | \'B2\', string> = {\n';
for (const l of LEVELS) ts += `  ${l}: '${by[l].sort().join(' ').replace(/'/g, "\\'")}',\n`;
ts += '};\n';
writeFileSync(join(ROOT, 'src', 'app', 'data', 'cefr-levels.ts'), ts);
console.log(LEVELS.map((l) => `${l}: ${by[l].length}`).join(' · '));
