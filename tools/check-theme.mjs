/**
 * ============================================================================
 *  check-theme.mjs – Giữ app theo MỘT theme duy nhất ("Sky Adventure")
 * ============================================================================
 *  Chạy:  npm run check:theme          -> liệt kê mã màu viết cứng trong giao diện (lỗi nếu có)
 *         npm run check:theme -- --fix -> tự thay bằng biến theme gần nhất (var(--sky-500)...)
 *
 *  Phạm vi kiểm tra: src/app/**\/*.{ts,html,scss} và src/styles.scss
 *  Bỏ qua: src/app/theme (nơi định nghĩa theme), src/app/data (dữ liệu),
 *  file *.spec.ts.
 *  Bảng màu được đọc trực tiếp từ src/app/theme/theme.ts để luôn đồng bộ.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FIX = process.argv.includes('--fix');

// --- đọc bảng màu từ theme.ts ---
const themeSrc = readFileSync(join(ROOT, 'src/app/theme/theme.ts'), 'utf8');
const paletteBlock = themeSrc.slice(themeSrc.indexOf('export const PALETTE'), themeSrc.indexOf('} as const;', themeSrc.indexOf('export const PALETTE')));
const palette = []; // [{ name: 'sky-500', rgb: [r,g,b] }]
for (const m of paletteBlock.matchAll(/(\w+): \{([^}]*)\}/g)) {
  for (const s of m[2].matchAll(/(\d+): '(#[0-9a-f]{6})'/gi)) palette.push({ name: `${m[1]}-${s[1]}`, rgb: hexRgb(s[2]) });
}
palette.push({ name: 'white', rgb: [255, 255, 255] });

function hexRgb(h) {
  let x = h.slice(1);
  if (x.length === 3) x = x.split('').map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2), 16));
}
/** Khoảng cách màu có trọng số theo cảm nhận (redmean) */
function dist(a, b) {
  const rm = (a[0] + b[0]) / 2;
  const [dr, dg, db] = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  return Math.sqrt((2 + rm / 256) * dr * dr + 4 * dg * dg + (2 + (255 - rm) / 256) * db * db);
}
function nearest(rgb) {
  let best = palette[0], d = Infinity;
  for (const p of palette) { const x = dist(rgb, p.rgb); if (x < d) { d = x; best = p; } }
  return best;
}

// --- duyệt file ---
const files = [];
function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const rel = relative(ROOT, p).split(sep).join('/');
    if (statSync(p).isDirectory()) {
      if (/src\/app\/(theme|data)$/.test(rel)) continue;
      walk(p);
    } else if (/\.(ts|html|scss)$/.test(f) && !f.endsWith('.spec.ts')) files.push(p);
  }
}
walk(join(ROOT, 'src/app'));
files.push(join(ROOT, 'src/styles.scss'));

const HEX = /#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
const RGBA = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/g;
let problems = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  const rel = relative(ROOT, f);
  // chỉ xét phần style: file .scss, hoặc khối styles/template trong .ts, hoặc thuộc tính style trong .html
  let out = src;
  const report = (m, s) => { problems++; console.log(`${rel}: ${m} -> var(--${s})`); };
  out = out.replace(HEX, (m, off) => {
    // bỏ qua ký tự # trong URL/ID/route (vd routerLink="#x") – chỉ xử lý khi đứng sau dấu : hoặc , hoặc ( hoặc khoảng trắng
    const prev = out[off - 1];
    if (prev && !/[\s:(,'"]/.test(prev)) return m;
    const n = nearest(hexRgb(m));
    report(m, n.name);
    return `var(--${n.name})`;
  });
  out = out.replace(RGBA, (m, r, g, b, a) => {
    const n = nearest([+r, +g, +b].map(Number));
    const alpha = a === undefined ? 1 : Number(a);
    report(m, n.name);
    return alpha >= 1 ? `var(--${n.name})` : `color-mix(in srgb, var(--${n.name}) ${Math.round(alpha * 100)}%, transparent)`;
  });
  if (FIX && out !== src) writeFileSync(f, out, 'utf8');
}
console.log(problems ? `\n${problems} màu nằm ngoài theme${FIX ? ' – đã tự thay bằng biến theme.' : '. Chạy lại với --fix để tự sửa.'}` : 'Theme sạch: không có mã màu viết cứng. ✔');
if (problems && !FIX) process.exit(1);
