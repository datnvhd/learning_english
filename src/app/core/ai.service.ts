/**
 * ai.service.ts – Chọn nhà cung cấp AI để chấm bài (Cài đặt › Chấm điểm bằng AI):
 *  - Cloudflare Workers AI (mặc định): Worker của người dùng, Whisper + Llama (cloudflare-ai.service.ts)
 *  - Google Gemini: nghe trực tiếp âm thanh (gemini.service.ts)
 * Tắt / thiếu cấu hình / mất mạng → app dùng bộ chấm offline.
 */
import { Injectable, computed, inject, signal } from '@angular/core';
import { AI_PROVIDER_LABEL, AiEssayResult, AiProvider, AiWriteContext } from './ai-grading';
import { CloudflareAiService } from './cloudflare-ai.service';
import { GeminiService } from './gemini.service';

const LS_PROVIDER = 'em.ai.provider';

function readProvider(): AiProvider | null {
  try {
    const v = localStorage.getItem(LS_PROVIDER);
    return v === 'gemini' || v === 'cloudflare' ? v : null;
  } catch {
    return null;
  }
}

@Injectable({ providedIn: 'root' })
export class AiService {
  readonly gemini = inject(GeminiService);
  readonly cloudflare = inject(CloudflareAiService);

  /** Bật / tắt chấm bằng AI (dùng chung một công tắc cho mọi nhà cung cấp) */
  readonly enabled = this.gemini.enabled;
  /** Nhà cung cấp: đã chọn trong Cài đặt; chưa chọn mà đã có key Gemini (bản cũ) → Gemini; còn lại → Cloudflare */
  readonly provider = signal<AiProvider>(readProvider() ?? (this.gemini.apiKey() ? 'gemini' : 'cloudflare'));

  /** Đã cấu hình đủ cho nhà cung cấp đang chọn */
  readonly configured = computed(() => (this.provider() === 'gemini' ? this.gemini.apiKey().trim().length >= 20 : this.cloudflare.configured()));
  readonly ready = computed(() => this.enabled() && this.configured());
  /** Tên nhà cung cấp để hiện trên giao diện ("Cloudflare Workers AI đang chấm...") */
  readonly label = computed(() => AI_PROVIDER_LABEL[this.provider()]);

  setEnabled(on: boolean): void {
    this.gemini.setEnabled(on);
  }
  setProvider(p: AiProvider): void {
    this.provider.set(p);
    try {
      localStorage.setItem(LS_PROVIDER, p);
    } catch {
      /* bỏ qua */
    }
  }

  /** Có dùng AI cho lần chấm này (đã bật, đã cấu hình, đang có mạng) */
  usable(): boolean {
    return this.ready() && (typeof navigator === 'undefined' || navigator.onLine !== false);
  }

  /** Kiểm tra kết nối với nhà cung cấp đang chọn */
  test(): Promise<string> {
    return this.provider() === 'gemini' ? this.gemini.test() : this.cloudflare.test();
  }

  /** Chấm bài viết bằng nhà cung cấp đang chọn */
  gradeEssay(text: string, ctx: AiWriteContext): Promise<AiEssayResult> {
    return this.provider() === 'gemini' ? this.gemini.gradeEssay(text, ctx) : this.cloudflare.gradeEssay(text, ctx);
  }
}
