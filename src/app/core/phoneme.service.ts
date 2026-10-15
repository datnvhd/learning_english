/**
 * phoneme.service.ts – Nhận dạng ÂM VỊ tiếng Anh ngay trên thiết bị để chấm phát âm từng âm.
 *
 * Mô hình wav2vec2 XLS-R (robg/speako-phoneme-recognizer, Apache-2.0, ONNX INT8 ~355 MB) chạy bằng
 * Transformers.js + ONNX Runtime Web (WebAssembly), mọi file đều nằm trong public/assets (không cần mạng):
 *   assets/phoneme/speako/…   mô hình        (npm run fetch:phoneme)
 *   assets/phoneme/cmudict.dict  từ điển phát âm CMU (cách đọc chuẩn)
 *   assets/ort/…              ONNX Runtime    (tools/copy-wasm.mjs; .wasm lưu nén gzip, giải nén khi nạp)
 * Lần đầu nạp mất một lúc (đọc 355 MB); trình duyệt lưu đệm nên các lần sau nhanh hơn.
 */
import { Injectable, signal } from '@angular/core';
import { PronDict, PronResult, parseCmuDict, scorePronunciation } from './phoneme-score';

/** Tên tệp ONNX Runtime (bản asyncify, đơn luồng) trong assets/ort */
const ORT = 'ort-wasm-simd-threaded.asyncify';

/** Nhận dạng chuỗi âm IPA từ âm thanh 16 kHz */
type Recognizer = (audio: Float32Array) => Promise<string>;

@Injectable({ providedIn: 'root' })
export class PhonemeService {
  readonly state = signal<'idle' | 'loading' | 'ready' | 'error'>('idle');
  private model: Promise<Recognizer> | null = null;
  private dict: Promise<PronDict> | null = null;

  /** Thiết bị đủ điều kiện chạy mô hình (WebAssembly, bộ nhớ đủ lớn) */
  readonly supported = typeof WebAssembly !== 'undefined' && typeof document !== 'undefined'
    && ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) >= 4;

  private base(path: string): string {
    return new URL(path, document.baseURI).href;
  }

  /** Nạp mô hình (một lần) */
  load(): Promise<Recognizer> {
    if (!this.model) {
      this.state.set('loading');
      this.model = (async () => {
        const t = await import('@huggingface/transformers');
        t.env.allowRemoteModels = false;
        t.env.allowLocalModels = true;
        t.env.localModelPath = this.base('assets/phoneme/');
        const wasm = t.env.backends.onnx.wasm;
        if (wasm) {
          // File .wasm được lưu nén gzip (vượt 25 MB/tệp của Cloudflare Pages nếu để nguyên): giải nén thành blob
          wasm.wasmPaths = { mjs: this.base(`assets/ort/${ORT}.mjs`), wasm: await this.ortWasm() };
          wasm.numThreads = 1; // không cần cấu hình máy chủ đặc biệt (cross-origin isolation)
        }
        // Gọi trực tiếp bộ trích đặc trưng + mô hình CTC, rồi tự giải mã chuỗi âm (CTC tham lam)
        const [extractor, model, vocab] = await Promise.all([
          t.AutoFeatureExtractor.from_pretrained('speako'),
          t.AutoModelForCTC.from_pretrained('speako', { dtype: 'q8', device: 'wasm' }),
          fetch(this.base('assets/phoneme/speako/vocab.json')).then((r) => r.json() as Promise<Record<string, number>>),
        ]);
        const byId = new Map(Object.entries(vocab).map(([tok, id]) => [id, tok]));
        const pad = vocab['[PAD]'];
        this.state.set('ready');
        return async (audio: Float32Array) => {
          const inputs = await extractor(audio);
          const { logits } = await model(inputs);
          const [, frames, classes] = logits.dims as number[];
          const data = logits.data as Float32Array;
          let out = '';
          let prev = -1;
          for (let f = 0; f < frames; f++) {
            let best = 0;
            for (let c = 1; c < classes; c++) if (data[f * classes + c] > data[f * classes + best]) best = c;
            if (best !== prev && best !== pad) {
              const tok = byId.get(best) ?? '';
              out += tok === '|' || tok === ' ' ? ' ' : tok.startsWith('[') ? '' : tok;
            }
            prev = best;
          }
          return out.replace(/\s+/g, ' ').trim();
        };
      })().catch((e) => {
        console.warn('[phoneme] không nạp được mô hình âm vị:', e);
        this.state.set('error');
        this.model = null;
        throw e;
      });
    }
    return this.model;
  }

  /** Giải nén ONNX Runtime wasm (.wasm.gz) thành địa chỉ blob: để ONNX Runtime nạp */
  private async ortWasm(): Promise<string> {
    const res = await fetch(this.base(`assets/ort/${ORT}.wasm.gz`));
    if (!res.ok || !res.body) throw new Error(`Không tải được ONNX Runtime (${res.status})`);
    const wasm = await new Response(res.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
    return URL.createObjectURL(new Blob([wasm], { type: 'application/wasm' }));
  }

  /** Từ điển phát âm CMU */
  pronDict(): Promise<PronDict> {
    return (this.dict ??= fetch(this.base('assets/phoneme/cmudict.dict'))
      .then((r) => (r.ok ? r.text() : ''))
      .then(parseCmuDict)
      .catch(() => new Map()));
  }

  /** Nạp sẵn khi mở phần nói */
  warmUp(): void {
    if (this.supported) void this.load().catch(() => undefined);
  }

  /** Chuỗi âm IPA nghe được trong đoạn âm thanh 16 kHz */
  async recognize(pcm16k: Float32Array): Promise<string> {
    const recognize = await this.load();
    return recognize(pcm16k);
  }

  /**
   * Chấm phát âm: `words` là các từ người học cần nói (câu mẫu) hoặc đã nói (lời nhận dạng được).
   * Đoạn âm thanh quá dài được cắt còn 45 giây đầu để thời gian chấm hợp lý.
   */
  async assess(pcm16k: Float32Array, words: string[]): Promise<PronResult> {
    const max = 16000 * 45;
    const clip = pcm16k.length > max ? pcm16k.subarray(0, max) : pcm16k;
    // Ước lượng số từ trong phần âm thanh đã cắt (giữ tỉ lệ)
    const used = pcm16k.length > max ? words.slice(0, Math.ceil((words.length * max) / pcm16k.length)) : words;
    const [ipa, dict] = await Promise.all([this.recognize(clip), this.pronDict()]);
    return scorePronunciation(used, ipa, dict);
  }
}
