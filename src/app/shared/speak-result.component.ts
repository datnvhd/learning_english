/**
 * speak-result.component.ts – Hiển thị kết quả chấm bài nói tự động: điểm tổng, từng tiêu chí,
 * lời máy nghe được (đọc theo mẫu: tô màu từng từ đúng / chưa rõ / thiếu) và lời khuyên.
 */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SpeakScore } from '../core/speaking-score';
import { IconComponent } from '../theme/icon.component';

@Component({
  selector: 'app-speak-result',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let s = score();
    <section class="sr">
      @if (s.notice) { <p class="notice"><app-icon name="alert-triangle" /> {{ s.notice }}</p> }
      <div class="top">
        <span class="lbl">{{ title() }} @if (s.ai) { <span class="aib"><app-icon name="sparkles" /> Gemini</span> }</span>
        <b class="big" [class.low]="s.overall < 0.5" [class.mid]="s.overall >= 0.5 && s.overall < 0.75">{{ s.label }}</b>
      </div>

      <div class="crit">
        @for (c of s.criteria; track c.id) {
          <div class="c">
            <div class="ch"><span>{{ c.label }}</span><b>{{ c.shown }}</b></div>
            <div class="bar" [class.gold]="c.value < 0.6" [class.red]="c.value < 0.35"><i [style.width.%]="c.value * 100"></i></div>
            <small class="muted">{{ c.note }}</small>
          </div>
        }
      </div>

      @if (s.words?.length) {
        <div class="heard">
          <small class="muted"><app-icon name="ear" /> So với câu mẫu:</small>
          <p class="ws">
            @for (w of s.words; track $index) {
              <span [class]="'w ' + w.status" [attr.title]="w.status === 'miss' ? (w.heard ? 'Máy nghe thành: ' + w.heard : 'Chưa đọc từ này') : w.status === 'weak' ? 'Chưa rõ' : null">{{ w.word }}</span>
            }
          </p>
          <small class="legend"><i class="d ok"></i> đúng <i class="d weak"></i> chưa rõ <i class="d miss"></i> thiếu / sai</small>
        </div>
      }
      <div class="heard">
        <small class="muted"><app-icon name="ear" /> Máy nghe được:</small>
        <p class="tr">{{ s.transcript ? '“' + s.transcript + '”' : '(không nghe được lời nói)' }}</p>
        @if (s.unclear.length && !s.words?.length && !s.ai) {
          <small class="muted">Từ chưa rõ: <b class="uc">{{ s.unclear.join(', ') }}</b></small>
        }
      </div>

      @if (s.ai; as ai) {
        @if (ai.summary) { <p class="sum">{{ ai.summary }}</p> }
        @if (ai.strengths.length) {
          <div class="blk good"><b><app-icon name="circle-check" /> Điểm mạnh</b><ul>@for (t of ai.strengths; track $index) { <li>{{ t }}</li> }</ul></div>
        }
        @if (ai.mistakes.length) {
          <div class="blk"><b><app-icon name="edit" /> Lỗi cần sửa</b>
            @for (m of ai.mistakes; track $index) {
              <div class="mk"><span><s>{{ m.said }}</s> → <b class="ok">{{ m.correction }}</b></span><small class="muted">{{ m.explanation }}</small></div>
            }
          </div>
        }
        @if (ai.pronunciation.length) {
          <div class="blk"><b><app-icon name="microphone" /> Phát âm</b>
            @for (p of ai.pronunciation; track $index) {
              <div class="mk"><span><b>{{ p.word }}</b> – {{ p.issue }}</span><small class="muted">{{ p.tip }}</small></div>
            }
          </div>
        }
        @if (ai.improved) {
          <details class="blk imp"><summary><app-icon name="wand" /> Bài nói gợi ý (nâng cấp từ câu trả lời của bạn)</summary><p>{{ ai.improved }}</p></details>
        }
        <p class="muted tiny"><app-icon name="info-circle" /> Chấm bởi AI Google Gemini ({{ ai.model }}) – AI có thể nhầm, điểm chỉ để tham khảo.</p>
      } @else {
        @if (s.pron; as pr) {
        <div class="blk pr">
          <b><app-icon name="microphone" /> Phát âm từng âm: {{ Math.round(pr.accuracy * 100) }}% âm đúng</b>
          @if (pr.patterns.length) { <small class="muted">Lỗi hay gặp: {{ pr.patterns.join(' · ') }}</small> }
          @for (w of pr.words; track $index) {
            <div class="mk">
              <span><b>{{ w.word }}</b> <span class="ipa">chuẩn /{{ w.expected }}/</span> · <span class="ipa bad">bạn đọc /{{ w.heard || '—' }}/</span></span>
              <small class="muted">{{ w.issues.join('; ') }}</small>
            </div>
          } @empty {
            <small class="muted">Không có từ nào bị đọc sai rõ rệt.</small>
          }
        </div>
      }
        @if (s.prosody; as pd) {
        <div class="blk pr">
          <b><app-icon name="microphone" /> Ngữ điệu & trọng âm: {{ Math.round(pd.score * 100) }}%</b>
          <small class="muted">Cao độ dao động {{ pd.range.toFixed(1) }} bán cung@if (pd.contours.total) { · cuối câu đúng {{ pd.contours.ok }}/{{ pd.contours.total }} }</small>
          @for (n of pd.notes; track n) { <small>{{ n }}</small> }
        </div>
      }
        <ul class="adv">@for (a of s.advice; track a) { <li>{{ a }}</li> }</ul>
        <p class="muted tiny"><app-icon name="info-circle" /> Điểm do máy ước tính từ nhận dạng giọng nói ngay trên thiết bị (không cần Internet) – dùng để luyện tập, không thay thế giám khảo. Bật "Chấm điểm bằng AI" trong Cài đặt để có nhận xét chi tiết hơn.</p>
      }
    </section>
  `,
  styles: `
    .sr { display: flex; flex-direction: column; gap: 12px; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: var(--radius-md); padding: 14px; }
    .top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .lbl { font-weight: 700; }
    .big { font-family: var(--font-head); font-size: 1.7rem; color: var(--good-dark); }
    .big.mid { color: var(--sun-700); }
    .big.low { color: var(--bad-dark); }
    .crit { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px 16px; }
    .c { display: flex; flex-direction: column; gap: 4px; }
    .ch { display: flex; justify-content: space-between; gap: 8px; font-size: var(--fs-sm); }
    .ch b { white-space: nowrap; }
    .heard { display: flex; flex-direction: column; gap: 4px; }
    .heard small { display: inline-flex; align-items: center; gap: 4px; }
    .heard app-icon { width: 15px; height: 15px; }
    .tr { font-style: italic; line-height: 1.5; }
    .ws { display: flex; flex-wrap: wrap; gap: 4px 2px; line-height: 1.6; }
    .w { padding: 1px 3px; margin-right: 2px; border-radius: 4px; }
    .w.weak { background: var(--sun-100); text-decoration: underline wavy var(--sun-500); }
    .w.miss { background: var(--bad-soft); color: var(--bad-dark); text-decoration: line-through; }
    .legend { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; color: var(--ink-soft); }
    .d { width: 12px; height: 12px; border-radius: 3px; display: inline-block; margin-left: 6px; border: 1px solid var(--line); }
    .d.ok { background: var(--white); }
    .d.weak { background: var(--sun-100); border-color: var(--sun-500); }
    .d.miss { background: var(--bad-soft); border-color: var(--bad); }
    .uc { color: var(--sun-700); }
    .adv { margin: 0; padding-left: 20px; line-height: 1.5; }
    .tiny { font-size: 0.78rem; display: flex; gap: 4px; align-items: flex-start; }
    .notice { display: flex; gap: 6px; align-items: flex-start; font-size: var(--fs-sm); color: var(--tangerine-600); background: var(--sun-100); padding: 8px 10px; border-radius: var(--radius-sm); }
    .notice app-icon { width: 16px; height: 16px; flex: none; margin-top: 2px; }
    .aib { display: inline-flex; align-items: center; gap: 4px; margin-left: 6px; padding: 2px 8px; border-radius: 99px; font-size: 0.72rem; font-weight: 700; color: var(--grape-600); background: color-mix(in srgb, var(--grape-500) 12%, var(--white)); vertical-align: middle; }
    .aib app-icon { width: 12px; height: 12px; }
    .sum { line-height: 1.55; }
    .blk { display: flex; flex-direction: column; gap: 6px; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 10px 12px; }
    .blk > b, .blk summary { display: inline-flex; align-items: center; gap: 6px; }
    .blk app-icon { width: 16px; height: 16px; color: var(--primary); }
    .blk.good app-icon { color: var(--good); }
    .blk ul { margin: 0; padding-left: 20px; line-height: 1.5; }
    .mk { display: flex; flex-direction: column; gap: 1px; padding: 4px 0; border-top: 1px dashed var(--line); }
    .mk:first-of-type { border-top: 0; }
    .mk s { color: var(--bad-dark); }
    .mk .ok { color: var(--good-dark); }
    .imp summary { cursor: pointer; font-weight: 700; }
    .imp p { margin-top: 8px; line-height: 1.6; white-space: pre-line; }
    .ipa { font-family: 'Segoe UI', 'Noto Sans', sans-serif; color: var(--good-dark); }
    .ipa.bad { color: var(--bad-dark); }
    .tiny app-icon { width: 14px; height: 14px; flex: none; margin-top: 2px; }
  `,
})
export class SpeakResultComponent {
  protected readonly Math = Math;
  readonly score = input.required<SpeakScore>();
  readonly title = input('Kết quả chấm tự động');
}
