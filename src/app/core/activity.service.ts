/**
 * ============================================================================
 *  activity.service.ts – Đếm thời gian học THỰC (bỏ qua lúc treo máy)
 * ============================================================================
 *  Thời gian học chỉ được cộng khi người học thật sự đang dùng app:
 *   - tab đang hiển thị, VÀ
 *   - vừa có thao tác (chạm, bấm, gõ phím, cuộn, di chuột) trong vòng IDLE_SECONDS giây,
 *     hoặc đang nghe một bài nghe (nghe bài dài thì không cần chạm vào máy).
 *  Mở app rồi bỏ đó, hay để máy ngủ, đều không được tính.
 */
import { Injectable, inject } from '@angular/core';
import { ProgressService } from './progress.service';
import { SpeechService } from './speech.service';

/** Không thao tác quá ngần này giây thì coi là treo máy (đủ dài để đọc một đoạn văn hay nói một câu trả lời) */
export const IDLE_SECONDS = 120;
/** Chu kỳ kiểm tra (giây) */
export const TICK_SECONDS = 5;
/** Gom đủ ngần này giây mới ghi xuống bộ nhớ, tránh ghi liên tục */
const FLUSH_SECONDS = 30;

/** Các thao tác được coi là "đang dùng app" */
const EVENTS = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'scroll', 'touchstart', 'touchmove'] as const;

@Injectable({ providedIn: 'root' })
export class ActivityService {
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);

  /** Thời điểm thao tác gần nhất (ms) */
  private last = 0;
  /** Số giây đã học nhưng chưa ghi xuống nhật ký */
  private pending = 0;
  private started = false;

  /** Bắt đầu theo dõi (App gọi một lần khi khởi động) */
  start(): void {
    if (this.started || typeof window === 'undefined') return;
    this.started = true;
    this.touch();
    const onInput = () => this.touch();
    for (const ev of EVENTS) window.addEventListener(ev, onInput, { passive: true, capture: true });
    setInterval(() => this.tick(), TICK_SECONDS * 1000);
    // Rời tab / đóng app: ghi nốt phần đang gom để không mất
    document.addEventListener('visibilitychange', () => { if (document.visibilityState !== 'visible') this.flush(); });
    window.addEventListener('pagehide', () => this.flush());
  }

  /** Ghi nhận người học vừa thao tác */
  touch(now = Date.now()): void {
    this.last = now;
  }

  /** Người học có đang thật sự dùng app không */
  isActive(now = Date.now()): boolean {
    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return false;
    if (this.speech.busy() && !this.speech.paused()) return true;
    return now - this.last < IDLE_SECONDS * 1000;
  }

  /** Một nhịp kiểm tra: đang dùng app thì cộng thời gian của nhịp này */
  tick(now = Date.now()): void {
    if (!this.isActive(now)) return;
    this.pending += TICK_SECONDS;
    if (this.pending >= FLUSH_SECONDS) this.flush();
  }

  /** Ghi phần thời gian đang gom vào nhật ký hôm nay */
  flush(): void {
    if (!this.pending) return;
    this.progress.addTime(this.pending);
    this.pending = 0;
  }
}
