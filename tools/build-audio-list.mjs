/**
 * ============================================================================
 *  build-audio-list.mjs – Sinh danh sách mọi câu tiếng Anh cần thu âm
 * ============================================================================
 *  Đóng gói tools/audio-texts.entry.ts (đọc trực tiếp dữ liệu trong src/app/data) bằng esbuild,
 *  chạy nó và ghi kết quả vào tools/.audio-cache/texts.json: [{ k: mã, t: câu, v: giọng, g: nhóm }].
 *  Bước tiếp theo: tools/build-audio.py tải file mp3 cho từng câu.
 *  Chạy cả hai bước: npm run build:audio
 */
import { build } from 'esbuild';
import { mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = join(ROOT, 'tools', '.audio-cache');
mkdirSync(CACHE, { recursive: true });

const bundle = join(CACHE, 'texts.bundle.mjs');
await build({ entryPoints: [join(ROOT, 'tools', 'audio-texts.entry.ts')], bundle: true, format: 'esm', platform: 'node', outfile: bundle, logLevel: 'error' });
const json = execFileSync(process.execPath, [bundle], { maxBuffer: 256 * 1024 * 1024, encoding: 'utf8' });
const list = JSON.parse(json);
writeFileSync(join(CACHE, 'texts.json'), JSON.stringify(list), 'utf8');

const groups = {};
for (const x of list) groups[x.g] = (groups[x.g] ?? 0) + 1;
console.log(`Đã gom ${list.length} câu cần thu âm:`, groups);
