/**
 * ============================================================================
 *  theme.ts – THEME DUY NHẤT của app: "English Master" (bảng điều khiển học tập, hoàn toàn offline)
 * ============================================================================
 *  Đây là NGUỒN SỰ THẬT DUY NHẤT cho màu sắc, chữ, khoảng cách, bo góc, bóng đổ, chuyển động.
 *  - Lúc khởi động, applyTheme() ghi toàn bộ token thành biến CSS trên :root (--sky-500, --space-4...).
 *  - Mọi file SCSS/CSS của component CHỈ được dùng var(--...) – không viết mã màu trực tiếp.
 *    (tools/check-theme.mjs sẽ báo lỗi nếu có mã màu nằm ngoài bảng màu).
 *  - Code TypeScript (biểu đồ, pháo giấy canvas...) lấy màu qua đối tượng THEME bên dưới.
 *
 *  Thiết kế theo bộ ảnh "English Master OFFLINE": nền xám xanh rất nhạt, thẻ trắng viền mảnh,
 *  xanh dương đậm cho điều hướng và hành động chính, đỏ hồng cho IELTS, xanh dương cho TOEIC,
 *  xanh lá = đúng/hoàn thành, đỏ = sai, cam/vàng = cảnh báo & chuỗi ngày học, tím = từ vựng/luyện tập.
 *  Bố cục: thanh bên trái (sidebar) + thanh trên cùng (topbar) + nội dung dạng lưới thẻ.
 *  Tên các họ màu (sky, sun, leaf...) được giữ nguyên để mọi component cũ tiếp tục dùng được.
 */

/** Bảng màu gốc (primitive). Mỗi họ màu có các sắc độ 50 → 800 */
export const PALETTE = {
  sky: { 50: '#eff5ff', 100: '#dfeaff', 200: '#bdd4ff', 300: '#8fb6ff', 400: '#5590ff', 500: '#1a6bf5', 600: '#0f55d6', 700: '#1043a6', 800: '#0e2f73' },
  sun: { 50: '#fffaeb', 100: '#fef0c7', 200: '#fedf89', 300: '#fec84b', 400: '#fdb022', 500: '#f79009', 600: '#dc6803', 700: '#93370d', 800: '#5c2606' },
  blossom: { 50: '#fff1f4', 100: '#ffe4ea', 200: '#fecdd8', 300: '#fda4b8', 400: '#fb7193', 500: '#f43f6e', 600: '#e11d54', 700: '#be1247', 800: '#881337' },
  leaf: { 50: '#ecfdf3', 100: '#d1fadf', 200: '#a6f4c5', 300: '#6ce9a6', 400: '#32d583', 500: '#12b76a', 600: '#039855', 700: '#027a48', 800: '#05603a' },
  coral: { 50: '#fef3f2', 100: '#fee4e2', 200: '#fecdca', 300: '#fda29b', 400: '#f97066', 500: '#f04438', 600: '#d92d20', 700: '#b42318', 800: '#912018' },
  grape: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#4c1d95' },
  tangerine: { 50: '#fff6ed', 100: '#ffead5', 200: '#fddcab', 300: '#feb273', 400: '#fd853a', 500: '#fb6514', 600: '#ec4a0a', 700: '#c4320a', 800: '#9c2a10' },
  sand: { 50: '#fafbfd', 100: '#f4f6fa', 200: '#e8ecf3', 300: '#d5dbe6', 400: '#a4adbd', 500: '#737d90', 600: '#555e70', 700: '#3d4556', 800: '#262c3a' },
  slate: { 50: '#f8fafd', 100: '#f1f4f9', 200: '#e3e8f0', 300: '#cbd3df', 400: '#94a0b4', 500: '#64708a', 600: '#475069', 700: '#27304a', 800: '#101828' },
  white: '#ffffff',
} as const;

const P = PALETTE;

/** Token ngữ nghĩa: dùng trong giao diện thay cho màu gốc */
export const COLORS = {
  // nền & bề mặt
  bg: '#f3f6fb',
  bgSoft: P.slate[50],
  surface: P.white,
  surfaceMuted: P.slate[50],
  line: P.slate[200],
  // chữ
  ink: P.slate[800],
  inkSoft: P.slate[500],
  inkMute: P.slate[400],
  onPrimary: P.white,
  onAccent: P.sun[800],
  // vai trò
  primary: P.sky[500],
  primaryDark: P.sky[600],
  primarySoft: P.sky[50],
  accent: P.sun[400],
  accentDark: P.sun[600],
  accentSoft: P.sun[100],
  good: P.leaf[500],
  goodDark: P.leaf[600],
  goodSoft: P.leaf[50],
  bad: P.coral[500],
  badDark: P.coral[600],
  badSoft: P.coral[50],
  warn: P.sun[500],
  warnSoft: P.sun[50],
  purple: P.grape[500],
  pink: P.blossom[400],
  // màu nhận diện hai kỳ thi
  ielts: P.blossom[600],
  toeic: P.sky[500],
} as const;

/** Màu đại diện cho từng kỹ năng (dùng thống nhất ở mọi màn hình) */
export const SKILL_COLORS = {
  vocab: P.grape[500],
  listening: P.grape[400],
  speaking: P.leaf[500],
  reading: P.sky[500],
  writing: P.blossom[500],
} as const;

/** Chữ */
export const TYPE = {
  fontBody: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  fontDisplay: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  size: { xs: '0.8rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.3rem', '2xl': '1.55rem', '3xl': '1.9rem', display: '2.4rem' },
  weight: { regular: 500, bold: 700 },
} as const;

/** Khoảng cách theo lưới 4px */
export const SPACE = { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px', 10: '40px' } as const;

/** Bo góc */
export const RADIUS = { sm: '8px', md: '12px', lg: '16px', xl: '20px', pill: '999px' } as const;

/** Bóng đổ trung tính, rất nhẹ (thẻ nổi lên nền bằng viền mảnh là chính) */
export const SHADOW = {
  sm: '0 1px 2px rgba(16, 24, 40, 0.05)',
  md: '0 4px 14px rgba(16, 24, 40, 0.08)',
  lg: '0 16px 40px rgba(16, 24, 40, 0.14)',
} as const;

/** Chuyển động */
export const MOTION = {
  fast: '120ms',
  base: '220ms',
  slow: '360ms',
  ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

/** Kích thước vùng bấm tối thiểu */
export const TOUCH = { min: '40px', primary: '46px' } as const;

/** Kích thước khung ứng dụng */
export const LAYOUT = { sidebarW: '248px', topbarH: '62px', navH: '62px' } as const;

/** Toàn bộ theme cho code TypeScript */
export const THEME = { name: 'English Master', palette: PALETTE, colors: COLORS, skills: SKILL_COLORS, type: TYPE, space: SPACE, radius: RADIUS, shadow: SHADOW, motion: MOTION, touch: TOUCH, layout: LAYOUT } as const;

/** Chuyển camelCase -> kebab-case cho tên biến CSS */
function kebab(s: string): string {
  return s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
}

/** Tạo danh sách biến CSS từ theme (dùng cho applyTheme và cho công cụ kiểm tra) */
export function themeCssVars(): Record<string, string> {
  const v: Record<string, string> = {};
  for (const [family, shades] of Object.entries(PALETTE)) {
    if (typeof shades === 'string') v[`--${family}`] = shades;
    else for (const [k, c] of Object.entries(shades)) v[`--${family}-${k}`] = c;
  }
  for (const [k, c] of Object.entries(COLORS)) v[`--${kebab(k)}`] = c;
  for (const [k, c] of Object.entries(SKILL_COLORS)) v[`--skill-${k}`] = c;
  v['--font'] = TYPE.fontBody;
  v['--font-head'] = TYPE.fontDisplay;
  for (const [k, s] of Object.entries(TYPE.size)) v[`--fs-${k}`] = s;
  for (const [k, s] of Object.entries(SPACE)) v[`--space-${k}`] = s;
  for (const [k, s] of Object.entries(RADIUS)) v[`--radius-${k}`] = s;
  v['--radius'] = RADIUS.md;
  v['--radius-sm'] = RADIUS.sm;
  for (const [k, s] of Object.entries(SHADOW)) v[`--shadow-${k}`] = s;
  v['--shadow'] = SHADOW.md;
  for (const [k, s] of Object.entries(MOTION)) v[`--motion-${k}`] = s;
  v['--touch-min'] = TOUCH.min;
  v['--touch-primary'] = TOUCH.primary;
  v['--nav-h'] = LAYOUT.navH;
  v['--sidebar-w'] = LAYOUT.sidebarW;
  v['--topbar-h'] = LAYOUT.topbarH;
  v['--card'] = COLORS.surface; // tên cũ, giữ để tương thích
  return v;
}

/** Ghi theme vào :root. Gọi một lần trước khi khởi động app (main.ts) */
export function applyTheme(root: HTMLElement = document.documentElement): void {
  for (const [k, val] of Object.entries(themeCssVars())) root.style.setProperty(k, val);
  root.dataset['theme'] = 'english-master';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS.primary);
}
