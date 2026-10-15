/**
 * grammar.service.ts – Bắt lỗi ngữ pháp tiếng Anh OFFLINE cho phần chấm Writing/Speaking.
 *
 * Kết hợp hai bộ kiểm tra chạy ngay trên thiết bị:
 *  1) Bộ luật của app (writing-check.ts): các lỗi người học Việt Nam hay mắc.
 *  2) Harper (harper.js, Apache-2.0, WebAssembly ~16 MB đóng gói ở assets/harper): hàng trăm luật ngữ pháp;
 *     chỉ giữ các nhóm lỗi đáng tin (harper-filter.ts). Nạp lười ở lần chấm đầu tiên.
 * Harper không nạp được (trình duyệt cũ, thiếu file) thì chỉ dùng bộ luật của app.
 */
import { Injectable } from '@angular/core';
import type { LocalLinter } from 'harper.js';
import { RawLint, filterHarper, mergeIssues } from './harper-filter';
import { WritingIssue, checkGrammar } from './writing-check';

const WASM = 'assets/harper/harper_wasm_slim_bg.wasm';

@Injectable({ providedIn: 'root' })
export class GrammarService {
  private linter: Promise<LocalLinter | null> | null = null;

  /** Nạp Harper (một lần); lỗi thì trả về null */
  private load(): Promise<LocalLinter | null> {
    return (this.linter ??= (async () => {
      try {
        // Môi trường kiểm thử (jsdom) không có file WebAssembly: chỉ dùng bộ luật của app
        if (typeof WebAssembly === 'undefined' || typeof document === 'undefined' || /jsdom/i.test(navigator.userAgent)) return null;
        const h = await import('harper.js');
        const linter = new h.LocalLinter({ binary: h.createBinaryModuleFromUrl(new URL(WASM, document.baseURI).href, 'slim') });
        await linter.setup();
        return linter;
      } catch {
        return null;
      }
    })());
  }

  /** Nạp sẵn (gọi khi mở bài viết / bài nói để lúc chấm không phải chờ) */
  warmUp(): void {
    void this.load();
  }

  /** Bắt lỗi ngữ pháp / trình bày của một đoạn văn */
  async check(text: string): Promise<WritingIssue[]> {
    const own = checkGrammar(text);
    const linter = await this.load();
    if (!linter || !text.trim()) return own;
    try {
      const lints = await linter.lint(text, { language: 'plaintext' });
      const raw: RawLint[] = lints.map((l) => {
        const span = l.span();
        return {
          kind: l.lint_kind(), text: l.get_problem_text(), start: span.start, end: span.end,
          suggestions: l.suggestions().map((s) => s.get_replacement_text()), message: l.message(),
        };
      });
      return mergeIssues(own, filterHarper(text, raw));
    } catch {
      return own;
    }
  }
}
