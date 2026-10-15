/**
 * ============================================================================
 *  asr.service.ts – Nhận dạng giọng nói tiếng Anh NGAY TRÊN MÁY (không cần Internet)
 * ============================================================================
 *  Dùng thư viện vosk-browser (Kaldi biên dịch sang WebAssembly, Apache-2.0) với mô hình
 *  vosk-model-small-en-us-0.15 đóng gói trong app (public/assets/asr/en-us.tar.gz, tải bằng
 *  `npm run fetch:asr`). Lần đầu mô hình được giải nén vào bộ nhớ trình duyệt (IndexedDB),
 *  các lần sau mở rất nhanh. Âm thanh ghi âm KHÔNG được gửi đi đâu.
 *
 *  transcribe(blob): giải mã bản ghi → 16 kHz mono → nhận dạng → chữ + thời điểm + độ tin cậy từng từ.
 */
import { Injectable, signal } from '@angular/core';
import type { KaldiRecognizer, Model } from 'vosk-browser';
import { AsrResult, AsrWord } from './speaking-score';

/** Đường dẫn mô hình (tương đối với trang) */
const MODEL_PATH = 'assets/asr/en-us.tar.gz';
const RATE = 16000;
/** Mỗi lần gửi 0,25 giây âm thanh cho bộ nhận dạng */
const CHUNK = 4000;

interface VoskResult {
  text?: string;
  result?: AsrWord[];
}

@Injectable({ providedIn: 'root' })
export class AsrService {
  /** Trạng thái mô hình nhận dạng */
  readonly state = signal<'idle' | 'loading' | 'ready' | 'error'>('idle');

  private model: Promise<Model> | null = null;

  /** Trình duyệt có đủ điều kiện chạy nhận dạng trên máy không */
  readonly supported = typeof window !== 'undefined' && typeof WebAssembly !== 'undefined' && typeof Worker !== 'undefined'
    && typeof OfflineAudioContext !== 'undefined';

  /** Nạp mô hình (gọi sớm khi mở phần Speaking để lúc chấm không phải chờ) */
  load(): Promise<Model> {
    if (!this.model) {
      this.state.set('loading');
      this.model = import('vosk-browser')
        .then((m) => {
          const create = (m as unknown as { createModel?: typeof m.createModel; default?: { createModel: typeof m.createModel } });
          return (create.createModel ?? create.default!.createModel)(new URL(MODEL_PATH, document.baseURI).href, -1);
        })
        .then((model) => {
          this.state.set('ready');
          return model;
        })
        .catch((e) => {
          this.state.set('error');
          this.model = null;
          throw e;
        });
    }
    return this.model;
  }

  /** Nhận dạng một bản ghi âm (webm/ogg/wav... mà trình duyệt giải mã được) */
  async transcribe(audio: Blob): Promise<AsrResult> {
    const model = await this.load();
    const pcm = await this.toMono16k(audio);
    const parts = await this.recognize(model, pcm);
    const words = parts.flatMap((p) => p.result ?? []);
    const segments = parts.map((p) => p.text ?? '').filter(Boolean);
    return { text: segments.join(' '), words, segments, duration: pcm.length / RATE, pcm };
  }

  /** Giải mã và chuyển về 16 kHz một kênh (định dạng mô hình được huấn luyện) */
  private async toMono16k(audio: Blob): Promise<Float32Array> {
    const ctx = new AudioContext();
    try {
      const buf = await ctx.decodeAudioData(await audio.arrayBuffer());
      const off = new OfflineAudioContext(1, Math.max(1, Math.ceil(buf.duration * RATE)), RATE);
      const src = off.createBufferSource();
      src.buffer = buf;
      src.connect(off.destination);
      src.start();
      return (await off.startRendering()).getChannelData(0);
    } finally {
      void ctx.close();
    }
  }

  /**
   * Gửi âm thanh theo từng đoạn rồi xin kết quả cuối. Bộ nhận dạng trả lời đúng một tin cho mỗi đoạn
   * (result khi người nói vừa ngừng, partialresult nếu chưa), tin thứ N+1 là kết quả cuối cùng.
   */
  private recognize(model: Model, pcm: Float32Array): Promise<VoskResult[]> {
    return new Promise((resolve, reject) => {
      const rec: KaldiRecognizer = new model.KaldiRecognizer(RATE);
      rec.setWords(true);
      const parts: VoskResult[] = [];
      const total = Math.ceil(pcm.length / CHUNK);
      let got = 0;
      const timer = setTimeout(() => {
        rec.remove();
        reject(new Error('Nhận dạng quá lâu'));
      }, 60_000 + pcm.length / 20);
      const tick = (result: VoskResult | undefined, isResult: boolean) => {
        if (isResult && result) parts.push(result);
        if (++got === total + 1) {
          clearTimeout(timer);
          rec.remove();
          resolve(parts);
        }
      };
      rec.on('result', (m) => tick((m as unknown as { result: VoskResult }).result, true));
      rec.on('partialresult', () => tick(undefined, false));
      for (let i = 0; i < pcm.length; i += CHUNK) rec.acceptWaveformFloat(pcm.subarray(i, i + CHUNK), RATE);
      rec.retrieveFinalResult();
    });
  }
}
