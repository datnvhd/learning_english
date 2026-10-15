/**
 * ============================================================================
 *  recognition.service.ts – Ghi âm giọng nói từ micro (hoạt động OFFLINE)
 * ============================================================================
 *  Ghi âm bằng MediaRecorder; bản ghi gần nhất (lastBlob) được AsrService nhận dạng ngay trên
 *  thiết bị và SpeakingService chấm điểm tự động. Không gửi âm thanh lên máy chủ nào.
 */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecognitionService {
  /** Trình duyệt có hỗ trợ ghi âm không */
  readonly recordingSupported =
    typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== 'undefined';

  private recorder: MediaRecorder | null = null;
  private stream: MediaStream | null = null;
  private chunks: Blob[] = [];
  /** Bản ghi âm gần nhất (để nhận dạng và chấm điểm offline bằng AsrService) */
  lastBlob: Blob | null = null;

  // ---------------------------------------------------------------------
  //  GHI ÂM (offline)
  // ---------------------------------------------------------------------

  /** Bắt đầu ghi âm từ micro. Trả về false nếu không được phép/không có micro */
  async startRecording(): Promise<boolean> {
    if (!this.recordingSupported) return false;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
      this.lastBlob = null;
      this.recorder = new MediaRecorder(this.stream);
      this.recorder.ondataavailable = (e) => e.data.size && this.chunks.push(e.data);
      this.recorder.start();
      return true;
    } catch {
      this.releaseStream();
      return false;
    }
  }

  /** Dừng ghi âm và trả về địa chỉ (object URL) của đoạn âm thanh để phát lại */
  stopRecording(): Promise<string | null> {
    return new Promise((resolve) => {
      const r = this.recorder;
      if (!r || r.state === 'inactive') {
        this.releaseStream();
        return resolve(null);
      }
      r.onstop = () => {
        this.lastBlob = this.chunks.length ? new Blob(this.chunks, { type: r.mimeType || 'audio/webm' }) : null;
        const url = this.lastBlob ? URL.createObjectURL(this.lastBlob) : null;
        this.releaseStream();
        resolve(url);
      };
      r.stop();
    });
  }

  /** Giải phóng micro */
  private releaseStream(): void {
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    this.recorder = null;
  }
}
