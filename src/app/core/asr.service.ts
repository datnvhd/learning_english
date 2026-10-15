/**
 * ============================================================================
 *  asr.service.ts – Nhận dạng giọng nói tiếng Anh NGAY TRÊN MÁY (không cần Internet)
 * ============================================================================
 *  Dùng thư viện vosk-browser (Kaldi biên dịch sang WebAssembly, Apache-2.0) với mô hình
 *  vosk-model-small-en-us-0.15 đóng gói trong app (public/assets/asr/en-us.tar.gz.000, .001... ≤ 20 MB mỗi phần
 *  vì Cloudflare Pages giới hạn 25 MB/tệp; danh sách ở en-us.json; tải bằng `npm run fetch:asr`).
 *  Lần đầu: tải đủ các phần, ghép lại thành một Blob, đưa địa chỉ blob: cho vosk-browser; thư viện giải nén vào
 *  bộ nhớ trình duyệt (IndexedDB) trong thư mục đặt tên theo ĐỊA CHỈ mô hình. App ghi nhớ địa chỉ đó
 *  (localStorage) nên các lần sau vosk-browser tìm thấy bản đã giải nén và mở ngay, không tải lại.
 *  Âm thanh ghi âm KHÔNG được gửi đi đâu.
 *
 *  transcribe(blob): giải mã bản ghi → 16 kHz mono → nhận dạng → chữ + thời điểm + độ tin cậy từng từ.
 */
import { Injectable, signal } from '@angular/core';
import type { KaldiRecognizer, Model } from 'vosk-browser';
import { AsrResult, AsrWord } from './speaking-score';

/** Danh sách các phần của mô hình (tương đối với trang) */
const MANIFEST = 'assets/asr/en-us.json';
/** Địa chỉ mô hình đã giải nén vào IndexedDB lần trước (khóa thư mục cache của vosk-browser) */
const LS_MODEL = 'em.asr.model';
/** Chờ tối đa khi mở mô hình từ cache (nếu cache đã bị xóa, vosk-browser không tải được địa chỉ cũ) */
const CACHE_TIMEOUT = 20_000;
const RATE = 16000;
/** Mỗi lần gửi 0,25 giây âm thanh cho bộ nhận dạng */
const CHUNK = 4000;

interface ModelManifest {
  version: string;
  parts: string[];
}

type VoskModule = typeof import('vosk-browser');

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
      this.model = this.open()
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

  private async open(): Promise<Model> {
    const m = await import('vosk-browser');
    const vosk = ((m as unknown as { default?: VoskModule }).default ?? m) as VoskModule;
    const base = (p: string) => new URL(p, document.baseURI).href;
    const manifest = (await (await fetch(base(MANIFEST))).json()) as ModelManifest;

    // 1) Đã giải nén lần trước: mở lại bằng đúng địa chỉ cũ (vosk-browser dùng bản trong IndexedDB)
    const saved = readSaved();
    if (saved?.version === manifest.version) {
      try {
        return await openModel(vosk, saved.url, CACHE_TIMEOUT);
      } catch {
        /* cache đã bị xóa: tải lại bên dưới */
      }
    }

    // 2) Tải các phần, ghép lại và giải nén
    const chunks = await Promise.all(manifest.parts.map(async (p) => {
      const res = await fetch(base('assets/asr/' + p));
      if (!res.ok) throw new Error(`Không tải được ${p} (${res.status})`);
      return res.arrayBuffer();
    }));
    const url = URL.createObjectURL(new Blob(chunks, { type: 'application/gzip' }));
    try {
      const model = await openModel(vosk, url);
      try {
        localStorage.setItem(LS_MODEL, JSON.stringify({ version: manifest.version, url }));
      } catch {
        /* không lưu được: lần sau sẽ giải nén lại */
      }
      return model;
    } finally {
      URL.revokeObjectURL(url); // mô hình đã nằm trong bộ nhớ của bộ nhận dạng
    }
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

/** Địa chỉ mô hình đã giải nén lần trước */
function readSaved(): { version: string; url: string } | null {
  try {
    return JSON.parse(localStorage.getItem(LS_MODEL) ?? 'null');
  } catch {
    return null;
  }
}

/** Mở mô hình; báo lỗi (thay vì chờ mãi) khi vosk-browser không tải / giải nén được */
function openModel(vosk: VoskModule, url: string, timeout = 0): Promise<Model> {
  const model = new vosk.Model(url, -1);
  return new Promise((resolve, reject) => {
    const fail = (why: string) => {
      clearTimeout(timer);
      model.terminate();
      reject(new Error(why));
    };
    const timer = timeout ? setTimeout(() => fail('Hết thời gian mở mô hình'), timeout) : undefined;
    model.on('load', (msg) => {
      if ((msg as { result?: boolean }).result) {
        clearTimeout(timer);
        resolve(model);
      } else fail('Không mở được mô hình');
    });
    model.on('error', (msg) => fail(String((msg as { error?: string }).error ?? 'Lỗi mô hình')));
  });
}
