/**
 * theme.spec.ts – Kiểm thử theme duy nhất: đủ token, màu hợp lệ, tương phản chữ đủ đọc.
 */
import { describe, expect, it } from 'vitest';
import { COLORS, PALETTE, SKILL_COLORS, themeCssVars } from './theme';
import { ICONS } from './icons';

/** Độ sáng tương đối theo WCAG */
function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string): number {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

describe('Theme English Master', () => {
  it('mọi màu trong bảng màu là mã hex hợp lệ', () => {
    for (const fam of Object.values(PALETTE)) {
      const values = typeof fam === 'string' ? [fam] : Object.values(fam);
      for (const c of values) expect(c).toMatch(/^#[0-9a-f]{6}$/);
    }
  });

  it('sinh đủ biến CSS dùng trong app', () => {
    const v = themeCssVars();
    for (const k of ['--primary', '--accent', '--good', '--bad', '--ink', '--line', '--surface', '--card', '--font', '--font-head', '--radius-md', '--shadow-sm', '--space-4', '--fs-md', '--touch-min', '--skill-listening', '--sky-500', '--motion-base']) {
      expect(v[k], k).toBeTruthy();
    }
  });

  it('chữ chính đủ tương phản trên nền (WCAG AA ≥ 4.5)', () => {
    expect(contrast(COLORS.ink, COLORS.surface)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(COLORS.ink, COLORS.bg)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(COLORS.onAccent, COLORS.accent)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(COLORS.primaryDark, COLORS.primarySoft)).toBeGreaterThanOrEqual(4.5);
  });

  it('mỗi kỹ năng có màu riêng và bộ icon đã được sinh', () => {
    expect(new Set(Object.values(SKILL_COLORS)).size).toBe(5);
    for (const n of ['headphones', 'microphone', 'book-2', 'search', 'x', 'check']) expect(ICONS[n as keyof typeof ICONS], n).toBeTruthy();
  });
});
