/**
 * ============================================================================
 *  build-icons.mjs – Sinh bộ icon dùng trong app từ Tabler Icons (giấy phép MIT)
 * ============================================================================
 *  Chạy: npm run build:icons
 *  Chỉ lấy những icon có trong danh sách NAMES (để bundle nhỏ gọn), trích phần <path>... bên trong
 *  và sinh src/app/theme/icons.ts. Component <app-icon name="..."> dùng file này, nét vẽ theo
 *  currentColor nên icon luôn đồng bộ màu với theme.
 *  Muốn thêm icon: thêm tên (xem https://tabler.io/icons) vào NAMES rồi chạy lại.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'node_modules', '@tabler', 'icons', 'icons', 'outline');

export const NAMES = [
  'compass', 'book-2', 'book', 'device-gamepad-2', 'target', 'user-circle', 'headphones', 'microphone', 'file-text', 'pencil',
  'letter-case', 'language', 'search', 'volume', 'volume-2', 'player-play', 'player-pause', 'x', 'chevron-left', 'chevron-right',
  'chevron-down', 'check', 'checks', 'star', 'flame', 'trophy', 'gift', 'settings', 'bookmark', 'refresh', 'bulb', 'clock',
  'calendar', 'calendar-stats', 'chart-bar', 'award', 'cards', 'puzzle', 'bolt', 'photo', 'photo-search', 'world', 'school',
  'notebook', 'sparkles', 'arrow-right', 'heart', 'lock', 'download', 'upload', 'trash', 'map-2', 'plane', 'message-circle',
  'brain', 'ear', 'keyboard', 'repeat', 'rocket', 'crown', 'medal', 'confetti', 'backpack', 'eye', 'filter', 'list-check',
  'hourglass', 'gauge', 'player-skip-forward', 'home', 'bell', 'dice-5', 'abc', 'certificate', 'progress-check', 'mood-smile',
  'tools-kitchen-2', 'briefcase', 'stethoscope', 'building-community', 'device-laptop', 'alert-triangle', 'info-circle',
  'cloud-off', 'wand', 'sort-ascending-letters', 'speakerphone', 'messages', 'news', 'mail', 'player-stop', 'table',
  'presentation', 'clock-play', 'circle-check', 'circle-x',
  // Bổ sung cho giao diện English Master (sidebar, topbar, bảng điều khiển)
  'wifi', 'wifi-off', 'chevron-up', 'dots-vertical', 'plus', 'minus', 'calendar-event', 'layout-dashboard', 'clipboard-list', 'clipboard-check', 'database', 'device-floppy', 'send', 'arrow-left', 'trending-up', 'adjustments-horizontal', 'history', 'user', 'users', 'menu-2', 'list', 'file-description', 'alarm', 'help-circle', 'flag', 'category', 'folder', 'leaf', 'map-pin', 'cloud-download', 'shield-check', 'text-size', 'arrows-shuffle', 'logout', 'eye-off', 'books', 'vocabulary', 'writing', 'report-analytics', 'device-desktop', 'edit', 'stopwatch', 'circle', 'bookmarks', 'graph', 'chart-donut', 'chart-pie', 'zoom-check', 'coffee', 'building', 'currency-dollar', 'heartbeat',
];

const out = {};
for (const name of NAMES) {
  const svg = readFileSync(join(DIR, `${name}.svg`), 'utf8');
  // bỏ thẻ <svg> bao ngoài và path "khung" vô hình, giữ phần hình vẽ
  const inner = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<path stroke="none" d="M0 0h24v24H0z" fill="none"\s*\/>/, '')
    .replace(/\s+/g, ' ')
    .trim();
  out[name] = inner;
}

const ts = `/**
 * Bộ icon của app (SINH TỰ ĐỘNG bởi tools/build-icons.mjs từ Tabler Icons – MIT License).
 * Không sửa tay. Mỗi icon là phần nội dung bên trong thẻ <svg viewBox="0 0 24 24">.
 */
export const ICONS = ${JSON.stringify(out, null, 1)} as const;

export type IconName = keyof typeof ICONS;
`;
writeFileSync(join(ROOT, 'src', 'app', 'theme', 'icons.ts'), ts, 'utf8');
console.log(`Đã sinh ${NAMES.length} icon.`);
