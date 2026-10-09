/**
 * ============================================================================
 *  sfx.service.ts – Hiệu ứng âm thanh nhỏ (đúng/sai/hoàn thành)
 * ============================================================================
 *  Âm thanh được tạo trực tiếp bằng Web Audio API (không cần file .mp3),
 *  nên nhẹ và chạy được khi offline.
 */
import { Injectable, inject } from '@angular/core';
import { ProgressService } from './progress.service';

@Injectable({ providedIn: 'root' })
export class SfxService {
  private readonly progress = inject(ProgressService);
  private ctx: AudioContext | null = null;

  /** Phát một chuỗi nốt nhạc: mỗi phần tử là [tần số Hz, thời lượng giây] */
  private play(notes: [number, number][], type: OscillatorType = 'sine', volume = 0.12): void {
    if (!this.progress.settings().sfx || typeof window === 'undefined') return;
    try {
      this.ctx ??= new (window.AudioContext || (window as any).webkitAudioContext)();
      const ctx = this.ctx;
      let t = ctx.currentTime;
      for (const [freq, dur] of notes) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(volume, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(gain).connect(ctx.destination);
        osc.start(t);
        osc.stop(t + dur);
        t += dur * 0.9;
      }
    } catch {
      /* Trình duyệt không cho phát âm thanh – bỏ qua */
    }
  }

  /** Trả lời đúng */
  correct(): void {
    this.play([[660, 0.09], [880, 0.14]]);
  }

  /** Trả lời sai */
  wrong(): void {
    this.play([[220, 0.16], [180, 0.2]], 'triangle', 0.14);
  }

  /** Hoàn thành bài / lên cấp / nhận huy hiệu */
  win(): void {
    this.play([[523, 0.1], [659, 0.1], [784, 0.1], [1047, 0.25]]);
  }

  /** Chạm nút nhẹ */
  tap(): void {
    this.play([[500, 0.04]], 'sine', 0.05);
  }
}
