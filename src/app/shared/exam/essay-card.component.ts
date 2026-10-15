/**
 * essay-card.component.ts – Khung làm bài viết: IELTS Writing (Task 1/2), TOEIC Writing (email Q6–7, luận Q8).
 *
 *  - Hiển thị đề (email TOEIC giữ nguyên xuống dòng), bảng số liệu (Task 1), gợi ý cách viết.
 *  - Đếm từ/đoạn theo thời gian thực so với số từ tối thiểu; TOEIC hiển thị các ý bắt buộc.
 *  - Bấm "Nộp bài": ExamService phân tích và ước tính band IELTS hoặc điểm TOEIC (0–4 / 0–5).
 *  - Ở chế độ luyện tập: hiện phân tích + bài mẫu; ở chế độ thi thử: nộp xong chuyển câu ngay.
 */
import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EssayAnalysis, ExamService } from '../../core/exam.service';
import { SpeechService } from '../../core/speech.service';
import { WritingTask } from '../../models/exam.model';
import { IconComponent } from '../../theme/icon.component';

/** Kết quả gửi về cho QuizRunner */
export interface ChildResult {
  score: number;
  given: string;
  correct: string;
}

@Component({
  selector: 'app-essay-card',
  imports: [FormsModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="essay">
      <p class="pr">{{ task().prompt }}</p>

      @if (table(); as t) {
        <table class="tbl">
          <thead><tr>@for (h of t.head; track $index) { <th>{{ h }}</th> }</tr></thead>
          <tbody>@for (r of t.rows; track $index) { <tr>@for (c of r; track $index) { <td>{{ c }}</td> }</tr> }</tbody>
        </table>
      }

      @if (task().checks?.length) {
        <div class="req">
          <b>Yêu cầu:</b>
          @for (c of task().checks; track c.label) { <span class="chip">{{ c.label }}</span> }
        </div>
      }

      <button class="btn btn-ghost btn-sm" type="button" (click)="showTips.set(!showTips())"><app-icon name="bulb" /> {{ showTips() ? 'Ẩn' : 'Xem' }} gợi ý cách viết</button>
      @if (showTips()) {
        <ul class="tips">@for (t of task().tips; track t) { <li>{{ t }}</li> }</ul>
      }

      <textarea class="input area" rows="12" placeholder="Viết bài của bạn ở đây..." [ngModel]="text()" (ngModelChange)="text.set($event)"
                [disabled]="!!analysis()" spellcheck="true" autocapitalize="sentences"></textarea>

      <div class="counter" [class.ok]="words() >= task().minWords">
        <b>{{ words() }}</b> / {{ task().minWords }} từ · {{ paragraphs() }} đoạn
        <span class="bar"><i [style.width.%]="Math.min(100, (words() / task().minWords) * 100)"></i></span>
      </div>

      @if (!analysis()) {
        <button class="btn btn-primary btn-block" type="button" [disabled]="words() < 20 || busy()" (click)="submit()">
          {{ busy() ? 'Đang phân tích...' : (test() ? 'Nộp bài ›' : 'Nộp bài và phân tích') }}
        </button>
        @if (words() < 20) { <p class="muted center tiny">Hãy viết ít nhất 20 từ để nộp bài.</p> }
        <button class="btn btn-ghost btn-sm" type="button" (click)="skip()">Bỏ qua bài này</button>
      } @else {
        @if (analysis(); as a) {
          <section class="fb fade-up">
            @if (a.notice) { <p class="notice"><app-icon name="alert-triangle" /> {{ a.notice }}</p> }
            <h3>{{ task().exam === 'toeic' ? 'Điểm ước tính' : 'Band ước tính' }}: <b class="band">{{ task().exam === 'toeic' ? a.label : a.band.toFixed(1) }}</b>
              @if (a.ai) { <span class="aib"><app-icon name="sparkles" /> AI</span> }</h3>
            @if (a.ai?.summary) { <p class="sum">{{ a.ai!.summary }}</p> }
            @if (a.ai?.strengths?.length) {
              <div class="strong"><b><app-icon name="circle-check" /> Điểm mạnh</b><ul>@for (t of a.ai!.strengths; track $index) { <li>{{ t }}</li> }</ul></div>
            }
            <div class="parts">
              @for (p of a.parts; track p.label) {
                <div class="part">
                  <span>{{ p.label }}</span>
                  <div class="bar" [class.gold]="p.value < 0.6"><i [style.width.%]="p.value * 100"></i></div>
                  <small class="muted">{{ p.note }}</small>
                </div>
              }
            </div>
            <ul class="advice">@for (t of a.advice; track t) { <li>{{ t }}</li> }</ul>
            @if (a.issues.length) {
              <div class="issues">
                <b>Lỗi cần sửa ({{ a.issues.length }})</b>
                @for (i of a.issues.slice(0, 20); track $index) {
                  <div class="iss">
                    <span class="tag" [class.red]="i.kind === 'spelling'" [class.amber]="i.kind === 'grammar'" [class.blue]="i.kind === 'punctuation'" [class.purple]="i.kind === 'vocabulary' || i.kind === 'coherence'">{{ kindLabel[i.kind] }}</span>
                    <span class="iw"><s>{{ i.text }}</s> → <b>{{ i.fix }}</b></span>
                    <small class="muted">{{ i.note }}</small>
                  </div>
                }
                @if (a.issues.length > 20) { <small class="muted">... và {{ a.issues.length - 20 }} lỗi khác.</small> }
              </div>
            }
            @if (a.ai?.improved) {
              <details class="imp"><summary><app-icon name="wand" /> Bài viết gợi ý (nâng cấp từ bài của bạn)</summary><p>{{ a.ai!.improved }}</p></details>
            }
            <p class="muted tiny">{{ a.ai ? 'Chấm bởi ' + (a.ai.provider ?? 'Google Gemini') + ' (' + a.ai.model + ') – AI có thể nhầm, điểm chỉ để tham khảo.' : 'Đây là phân tích tự động trên máy để tham khảo, không phải điểm chính thức. Bật "Chấm điểm bằng AI" trong Cài đặt để có nhận xét chi tiết hơn.' }}</p>

            <button class="btn btn-soft btn-sm" type="button" (click)="showModel.set(!showModel())"><app-icon name="book-2" /> {{ showModel() ? 'Ẩn' : 'Xem' }} bài mẫu</button>
            @if (showModel()) {
              <div class="model">
                <button class="icon-btn sm" type="button" (click)="read()" aria-label="Nghe bài mẫu"><app-icon name="volume" /></button>
                <p>{{ task().model }}</p>
              </div>
            }
            <button class="btn btn-primary btn-block" type="button" (click)="finish()">Tiếp tục ›</button>
          </section>
        }
      }
    </div>
  `,
  styles: `
    .essay { display: flex; flex-direction: column; gap: 10px; }
    .pr { line-height: 1.5; background: var(--bg-soft); padding: 10px 12px; border-radius: var(--radius-sm); white-space: pre-line; }
    .req { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; font-size: var(--fs-sm); }
    .btn app-icon { width: 1.1em; height: 1.1em; vertical-align: -0.18em; }
    .tbl { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
    .tbl th, .tbl td { border: 2px solid var(--line); padding: 6px 8px; text-align: center; }
    .tbl th { background: var(--primary-soft); color: var(--primary-dark); }
    .tips { margin: 0; padding: 8px 12px 8px 28px; background: var(--sand-100); border-radius: var(--radius-sm); line-height: 1.45; }
    .area { min-height: 220px; resize: vertical; line-height: 1.5; }
    .counter { display: flex; align-items: center; gap: 8px; color: var(--ink-soft); flex-wrap: wrap; }
    .counter.ok b { color: var(--good); }
    .counter .bar { flex: 1; min-width: 80px; }
    .tiny { font-size: 0.8rem; }
    .fb { background: var(--slate-50); border: 2px solid var(--line); border-radius: var(--radius); padding: 12px; display: flex; flex-direction: column; gap: 10px; }
    .band { font-family: var(--font-head); font-size: 1.6rem; color: var(--primary-dark); }
    .parts { display: flex; flex-direction: column; gap: 8px; }
    .part { display: grid; grid-template-columns: 1fr; gap: 3px; }
    .advice { margin: 0; padding-left: 20px; line-height: 1.45; }
    .issues { display: flex; flex-direction: column; gap: 6px; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 10px 12px; }
    .iss { display: grid; grid-template-columns: auto 1fr; gap: 2px 8px; align-items: center; padding: 4px 0; border-top: 1px dashed var(--line); }
    .iss:first-of-type { border-top: 0; }
    .iss small { grid-column: 2; }
    .iw s { color: var(--bad-dark); }
    .iw b { color: var(--good-dark); }
    .notice { display: flex; gap: 6px; align-items: flex-start; font-size: var(--fs-sm); color: var(--tangerine-600); background: var(--sun-100); padding: 8px 10px; border-radius: var(--radius-sm); }
    .notice app-icon { width: 16px; height: 16px; flex: none; margin-top: 2px; }
    .aib { display: inline-flex; align-items: center; gap: 4px; margin-left: 6px; padding: 2px 8px; border-radius: 99px; font-size: 0.72rem; font-weight: 700; color: var(--grape-600); background: color-mix(in srgb, var(--grape-500) 12%, var(--white)); vertical-align: middle; }
    .aib app-icon { width: 12px; height: 12px; }
    .sum { line-height: 1.55; }
    .strong { background: var(--good-soft); border-radius: var(--radius-sm); padding: 10px 12px; }
    .strong b { display: inline-flex; align-items: center; gap: 6px; color: var(--good-dark); }
    .strong ul { margin: 6px 0 0; padding-left: 20px; line-height: 1.5; }
    .imp { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 10px 12px; }
    .imp summary { cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; }
    .imp p { margin-top: 8px; line-height: 1.6; white-space: pre-line; }
    .model { background: var(--white); border-radius: var(--radius-sm); padding: 10px 12px; white-space: pre-line; line-height: 1.5; }
    .icon-btn.sm { width: 32px; height: 32px; }
  `,
})
export class EssayCardComponent {
  private readonly exam = inject(ExamService);
  private readonly speech = inject(SpeechService);
  protected readonly Math = Math;
  protected readonly kindLabel = { spelling: 'Chính tả', grammar: 'Ngữ pháp', punctuation: 'Trình bày', vocabulary: 'Từ vựng', coherence: 'Mạch lạc' } as const;

  readonly task = input.required<WritingTask>();
  /** true = chế độ thi thử (không hiện phân tích) */
  readonly test = input(false);
  readonly done = output<ChildResult>();

  protected readonly text = signal('');
  protected readonly analysis = signal<EssayAnalysis | null>(null);
  protected readonly busy = signal(false);
  protected readonly showTips = signal(false);
  protected readonly showModel = signal(false);

  protected readonly words = computed(() => this.text().trim().split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length);
  protected readonly paragraphs = computed(() => this.text().split(/\n\s*\n|\n/).filter((p) => p.trim().length > 20).length);

  /** Dữ liệu bảng cho Task 1 (mỗi dòng "a | b | c") */
  protected readonly table = computed(() => {
    const d = this.task().data;
    if (!d) return null;
    const rows = d.split('\n').map((l) => l.split('|').map((c) => c.trim()));
    return { head: rows[0], rows: rows.slice(1) };
  });

  /** Nộp bài: thi thử → gửi kết quả ngay; luyện tập → hiện phân tích */
  protected async submit(): Promise<void> {
    this.busy.set(true);
    const a = await this.exam.analyzeEssay(this.text(), this.task());
    this.busy.set(false);
    this.analysis.set(a);
    if (this.test()) this.finish();
  }

  protected finish(): void {
    const a = this.analysis();
    this.done.emit({ score: a?.score ?? 0, given: this.text().trim() || '(bỏ trống)', correct: this.task().model });
  }

  protected skip(): void {
    this.done.emit({ score: 0, given: '(bỏ qua)', correct: this.task().model });
  }

  protected read(): void {
    void this.speech.speakEn(this.task().model);
  }
}
