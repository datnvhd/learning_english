/**
 * ============================================================================
 *  offline.service.ts – Trạng thái "Hoàn toàn Offline" và quản lý gói dữ liệu trên máy
 * ============================================================================
 *  Toàn bộ nội dung học (3.600 từ vựng, đề thi, bài đọc, hội thoại) nằm trong mã nguồn của app;
 *  ảnh, giọng nói và âm thanh tiếng Anh thu sẵn nằm trong thư mục assets đi kèm bản build.
 *  Dịch vụ này:
 *   - theo dõi máy đang có mạng hay không (chỉ để hiển thị – app không cần mạng);
 *   - cho biết dung lượng gói dữ liệu (data/offline-pack.ts) và dung lượng trình duyệt đã lưu;
 *   - "Tải toàn bộ dữ liệu": đọc lần lượt mọi file tài nguyên để service worker lưu vào bộ nhớ
 *     của trình duyệt, nhờ đó app chạy tiếp được kể cả khi tắt máy chủ.
 */
import { Injectable, computed, signal } from '@angular/core';
import { audioPath } from './audio-key';
import { OFFLINE_FILES, OFFLINE_PACK } from '../data/offline-pack';

/** Khóa lưu thời điểm đã tải xong toàn bộ dữ liệu */
const READY_KEY = 'english-master:offline-ready';

/** Tiến độ tải dữ liệu */
export interface DownloadState {
  running: boolean;
  done: number;
  total: number;
  failed: number;
}

/** Đổi số byte thành chuỗi dễ đọc: 1536 -> "1.5 KB" */
export function formatBytes(bytes: number): string {
  if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(1)} GB`;
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(bytes >= 10485760 ? 0 : 1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

@Injectable({ providedIn: 'root' })
export class OfflineService {
  /** Máy có đang nối mạng không (app vẫn chạy khi không có mạng) */
  readonly online = signal(typeof navigator === 'undefined' ? true : navigator.onLine);
  /** Các nhóm dữ liệu của gói offline */
  readonly pack = OFFLINE_PACK;
  /** Tổng dung lượng gói dữ liệu (byte) */
  readonly packBytes = OFFLINE_PACK.reduce((n, g) => n + g.bytes, 0);
  /** Tổng số file tài nguyên */
  readonly packFiles = OFFLINE_PACK.reduce((n, g) => n + g.files, 0);

  /** Dung lượng trình duyệt đang dùng cho app và hạn mức (byte) */
  readonly usage = signal(0);
  readonly quota = signal(0);
  /** Trình duyệt đã cam kết không tự xóa dữ liệu của app chưa */
  readonly persisted = signal(false);
  /** Thời điểm đã tải xong toàn bộ dữ liệu vào trình duyệt ('' = chưa) */
  readonly readyAt = signal(this.readReady());
  /** Tiến độ lần tải đang chạy */
  readonly download = signal<DownloadState>({ running: false, done: 0, total: 0, failed: 0 });

  /** Phần trăm tiến độ tải (0–100) */
  readonly downloadPercent = computed(() => {
    const d = this.download();
    return d.total ? Math.round((d.done / d.total) * 100) : 0;
  });

  /** Service worker có hoạt động không (chỉ có ở bản build production) */
  readonly cacheable = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;

  constructor() {
    if (typeof window === 'undefined') return;
    window.addEventListener('online', () => this.online.set(true));
    window.addEventListener('offline', () => this.online.set(false));
    void this.refresh();
  }

  /** Đọc lại dung lượng đã dùng từ trình duyệt */
  async refresh(): Promise<void> {
    try {
      const est = await navigator.storage?.estimate?.();
      this.usage.set(est?.usage ?? 0);
      this.quota.set(est?.quota ?? 0);
      this.persisted.set((await navigator.storage?.persisted?.()) ?? false);
    } catch {
      /* Trình duyệt không hỗ trợ Storage API – bỏ qua */
    }
  }

  /** Xin trình duyệt giữ dữ liệu lâu dài (không tự dọn khi thiếu dung lượng) */
  async persist(): Promise<boolean> {
    try {
      const ok = (await navigator.storage?.persist?.()) ?? false;
      this.persisted.set(ok);
      return ok;
    } catch {
      return false;
    }
  }

  /**
   * Tải toàn bộ file tài nguyên (ảnh, giọng nói, âm thanh) để service worker lưu lại.
   * Chạy 6 luồng song song; có thể gọi lại để tải tiếp các file lỗi.
   */
  async downloadAll(): Promise<void> {
    if (this.download().running) return;
    const { AUDIO_KEYS } = await import('../data/audio-index');
    const urls = [...OFFLINE_FILES];
    for (let i = 0; i + 16 <= AUDIO_KEYS.length; i += 16) urls.push(audioPath(AUDIO_KEYS.slice(i, i + 16)));
    this.download.set({ running: true, done: 0, total: urls.length, failed: 0 });
    void this.persist();

    let next = 0;
    let done = 0;
    let failed = 0;
    const worker = async () => {
      while (next < urls.length) {
        const url = urls[next++];
        try {
          const res = await fetch(url);
          if (!res.ok) failed++;
          else await res.arrayBuffer();
        } catch {
          failed++;
        }
        done++;
        if (done % 25 === 0 || done === urls.length) this.download.set({ running: true, done, total: urls.length, failed });
      }
    };
    await Promise.all(Array.from({ length: 6 }, worker));
    this.download.set({ running: false, done, total: urls.length, failed });
    if (!failed) {
      const at = new Date().toISOString();
      this.readyAt.set(at);
      try { localStorage.setItem(READY_KEY, at); } catch { /* bỏ qua */ }
    }
    await this.refresh();
  }

  private readReady(): string {
    try {
      return localStorage.getItem(READY_KEY) ?? '';
    } catch {
      return '';
    }
  }
}
