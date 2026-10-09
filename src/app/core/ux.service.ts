/**
 * ============================================================================
 *  ux.service.ts – Tiện ích trải nghiệm dùng chung: thông báo nhanh (toast), rung phản hồi,
 *  áp dụng cài đặt hỗ trợ (cỡ chữ, giảm chuyển động) và mở bảng chi tiết từ vựng.
 * ============================================================================
 *  - toast('Đã lưu từ', 'good')  → hiện dải thông báo nhỏ phía dưới 2.5 giây (ToastHostComponent).
 *  - haptic('good' | 'bad' | 'tap') → rung rất ngắn trên điện thoại hỗ trợ (tắt được trong Cài đặt).
 *  - openWord(word) → mở bảng chi tiết từ (WordSheetComponent) ở bất kỳ màn hình nào.
 */
import { Injectable, effect, inject, signal } from '@angular/core';
import { Word } from '../models/vocab.model';
import { ProgressService } from './progress.service';

/** Kiểu thông báo (quyết định màu và icon theo theme) */
export type ToastTone = 'info' | 'good' | 'bad' | 'reward';

export interface Toast {
  id: number;
  text: string;
  tone: ToastTone;
}

@Injectable({ providedIn: 'root' })
export class UxService {
  private readonly progress = inject(ProgressService);
  private seq = 0;

  /** Danh sách toast đang hiển thị */
  readonly toasts = signal<Toast[]>([]);
  /** Từ đang mở trong bảng chi tiết (null = đóng) */
  readonly sheetWord = signal<Word | null>(null);

  constructor() {
    // Áp dụng cỡ chữ & giảm chuyển động mỗi khi cài đặt thay đổi
    effect(() => {
      const s = this.progress.settings();
      if (typeof document === 'undefined') return;
      const root = document.documentElement;
      root.style.setProperty('--font-scale', String(s.fontScale ?? 1));
      root.classList.toggle('reduce-motion', !!s.reduceMotion);
    });
  }

  /** Hiện một thông báo ngắn */
  toast(text: string, tone: ToastTone = 'info', ms = 2500): void {
    const t: Toast = { id: ++this.seq, text, tone };
    this.toasts.update((list) => [...list.slice(-2), t]);
    setTimeout(() => this.toasts.update((list) => list.filter((x) => x.id !== t.id)), ms);
  }

  /** Rung phản hồi ngắn (bỏ qua nếu thiết bị không hỗ trợ hoặc người dùng tắt) */
  haptic(kind: 'good' | 'bad' | 'tap' = 'tap'): void {
    if (!this.progress.settings().haptics || typeof navigator === 'undefined' || !navigator.vibrate) return;
    navigator.vibrate(kind === 'good' ? [18] : kind === 'bad' ? [40, 60, 40] : [8]);
  }

  /** Mở bảng chi tiết của một từ */
  openWord(word: Word): void {
    this.sheetWord.set(word);
  }

  closeWord(): void {
    this.sheetWord.set(null);
  }
}
