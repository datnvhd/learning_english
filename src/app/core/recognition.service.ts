/**
 * ============================================================================
 *  recognition.service.ts – Nhận dạng giọng nói (Speaking) và ghi âm
 * ============================================================================
 *  Có 2 cách luyện nói, app tự chọn cách phù hợp với thiết bị:
 *   1) NHẬN DẠNG GIỌNG NÓI (Web Speech API `SpeechRecognition`): chuyển lời nói thành
 *      chữ rồi so với câu mẫu để chấm điểm. LƯU Ý: Chrome/Edge thường gửi âm thanh
 *      lên máy chủ của hãng nên tính năng này CẦN INTERNET.
 *   2) GHI ÂM + TỰ ĐÁNH GIÁ (hoạt động OFFLINE): thu âm giọng của bạn, phát lại để
 *      so với giọng mẫu của Bông, rồi tự chấm "Tốt / Tạm được / Cần luyện thêm".
 *  Khi không có mạng hoặc trình duyệt không hỗ trợ (1), app tự chuyển sang (2).
 */
import { Injectable } from '@angular/core';

/** Khai báo tối thiểu cho SpeechRecognition (TypeScript chưa có sẵn kiểu này) */
interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string; confidence: number }>> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}

/** Lý do nhận dạng thất bại */
export type RecognitionFailure = 'unsupported' | 'denied' | 'offline' | 'no-speech' | 'error';

/** Kết quả một lần nhận dạng */
export type RecognitionOutcome =
  | { ok: true; transcripts: string[] }
  | { ok: false; reason: RecognitionFailure };

@Injectable({ providedIn: 'root' })
export class RecognitionService {
  /** Trình duyệt có hỗ trợ nhận dạng giọng nói không */
  readonly recognitionSupported =
    typeof window !== 'undefined' && !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  /** Trình duyệt có hỗ trợ ghi âm không */
  readonly recordingSupported =
    typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== 'undefined';

  private rec: SpeechRecognitionLike | null = null;
  private recorder: MediaRecorder | null = null;
  private stream: MediaStream | null = null;
  private chunks: Blob[] = [];

  /** Có nên thử dùng nhận dạng giọng nói? (cần hỗ trợ + có mạng) */
  get canRecognize(): boolean {
    return this.recognitionSupported && (typeof navigator === 'undefined' || navigator.onLine !== false);
  }

  /** Nghe người dùng nói một câu tiếng Anh và trả về các bản chép lời có thể có */
  listen(lang = 'en-US'): Promise<RecognitionOutcome> {
    if (!this.recognitionSupported) return Promise.resolve({ ok: false, reason: 'unsupported' });
    return new Promise((resolve) => {
      const Ctor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const rec: SpeechRecognitionLike = new Ctor();
      this.rec = rec;
      rec.lang = lang;
      rec.interimResults = false;
      rec.continuous = false;
      rec.maxAlternatives = 3; // lấy nhiều phương án để chấm công bằng hơn
      let settled = false;
      const finish = (o: RecognitionOutcome) => {
        if (settled) return;
        settled = true;
        resolve(o);
      };
      rec.onresult = (e) => {
        const alts: string[] = [];
        for (let i = 0; i < e.results.length; i++) for (let j = 0; j < e.results[i].length; j++) alts.push(e.results[i][j].transcript);
        finish({ ok: true, transcripts: alts });
      };
      rec.onerror = (e) => {
        const map: Record<string, RecognitionFailure> = {
          'not-allowed': 'denied', 'service-not-allowed': 'denied', network: 'offline',
          'no-speech': 'no-speech', 'audio-capture': 'denied',
        };
        finish({ ok: false, reason: map[e.error] ?? 'error' });
      };
      rec.onend = () => finish({ ok: false, reason: 'no-speech' });
      try {
        rec.start();
      } catch {
        finish({ ok: false, reason: 'error' });
      }
    });
  }

  /** Dừng nhận dạng đang chạy (nếu có) */
  stopListening(): void {
    try {
      this.rec?.stop();
    } catch {
      /* bỏ qua */
    }
  }

  // ---------------------------------------------------------------------
  //  GHI ÂM (offline)
  // ---------------------------------------------------------------------

  /** Bắt đầu ghi âm từ micro. Trả về false nếu không được phép/không có micro */
  async startRecording(): Promise<boolean> {
    if (!this.recordingSupported) return false;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = [];
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
        const url = this.chunks.length ? URL.createObjectURL(new Blob(this.chunks, { type: r.mimeType || 'audio/webm' })) : null;
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
