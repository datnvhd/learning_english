/**
 * confetti.component.ts – Hiệu ứng pháo giấy vẽ bằng canvas (mừng khi đạt điểm cao, lên cấp, mở rương...).
 *
 * Cách dùng:  <app-confetti #cf />   rồi gọi   cf.fire()  (hoặc  cf.fire(180)  để bắn nhiều hạt hơn).
 * Canvas phủ toàn màn hình, không chặn thao tác chuột (pointer-events: none) và tự dừng khi hết hạt.
 */
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';
import { PALETTE } from '../theme/theme';

/** Một mảnh pháo giấy */
interface Piece {
  x: number; y: number; vx: number; vy: number; size: number; rot: number; vr: number; color: string; shape: 'rect' | 'circle' | 'star';
}

/** Màu pháo giấy lấy từ bảng màu của theme (canvas cần mã màu thật, không dùng được var(--...)) */
const COLORS = [PALETTE.coral[400], PALETTE.sun[400], PALETTE.leaf[400], PALETTE.sky[500], PALETTE.grape[400], PALETTE.tangerine[400], PALETTE.blossom[400], PALETTE.sky[300]];

@Component({
  selector: 'app-confetti',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #cv aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      z-index: 200;
      pointer-events: none;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `,
})
export class ConfettiComponent implements OnDestroy {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('cv');
  private pieces: Piece[] = [];
  private raf = 0;

  /** Bắn pháo giấy từ hai bên/giữa phía trên màn hình */
  fire(count = 120): void {
    const el = this.canvas().nativeElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    el.width = Math.round(window.innerWidth * dpr);
    el.height = Math.round(window.innerHeight * dpr);
    const w = el.width;
    for (let i = 0; i < count; i++) {
      const fromLeft = i % 3 === 0;
      const fromRight = i % 3 === 1;
      const x = fromLeft ? 0 : fromRight ? w : w / 2 + (Math.random() - 0.5) * w * 0.3;
      const dir = fromLeft ? 1 : fromRight ? -1 : (Math.random() - 0.5) * 1.4;
      this.pieces.push({
        x, y: el.height * 0.25 + Math.random() * el.height * 0.1,
        vx: (dir * (6 + Math.random() * 9) + (Math.random() - 0.5) * 3) * dpr, vy: (-7 - Math.random() * 9) * dpr,
        size: (6 + Math.random() * 7) * dpr, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)], shape: (['rect', 'circle', 'star'] as const)[Math.floor(Math.random() * 3)],
      });
    }
    if (!this.raf) this.raf = requestAnimationFrame(() => this.tick());
  }

  /** Mỗi khung hình: cập nhật vị trí (trọng lực + lực cản) và vẽ lại */
  private tick(): void {
    const el = this.canvas().nativeElement;
    const ctx = el.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, el.width, el.height);
    const g = 0.32 * (el.width / window.innerWidth);
    this.pieces = this.pieces.filter((p) => p.y < el.height + 40);
    for (const p of this.pieces) {
      p.vy += g;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      else if (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, p.size / 2.2, 0, Math.PI * 2); ctx.fill(); }
      else {
        ctx.beginPath();
        for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i; const r = i % 2 ? p.size * 0.25 : p.size * 0.6; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }
    this.raf = this.pieces.length ? requestAnimationFrame(() => this.tick()) : 0;
    if (!this.pieces.length) ctx.clearRect(0, 0, el.width, el.height);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }
}
