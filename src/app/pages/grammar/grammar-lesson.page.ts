/**
 * grammar-lesson.page.ts – Một bài ngữ pháp: giải thích, công thức, ví dụ có âm thanh, mẹo nhớ,
 * và nút làm bài luyện 10 câu (/session/grammar/:id).
 */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { GRAMMAR, GRAMMAR_BY_ID } from '../../data/grammar';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { IconComponent } from '../../theme/icon.component';

@Component({
  selector: 'app-grammar-lesson',
  imports: [RouterLink, PageHeaderComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (lesson(); as g) {
      <main class="page no-nav stack">
        <app-page-header [title]="g.title" [icon]="g.icon" back="/grammar" />

        <section class="card intro">
          <span class="en">{{ g.titleEn }}</span>
          <p>{{ g.summary }}</p>
        </section>

        <h2 class="section-title"><app-icon name="list-check" /> Công thức</h2>
        <section class="card rules">
          @for (r of g.rules; track r.form) {
            <div class="rule"><code>{{ r.form }}</code><small class="muted">{{ r.note }}</small></div>
          }
        </section>

        <h2 class="section-title"><app-icon name="message-circle" /> Ví dụ</h2>
        <section class="examples">
          @for (e of g.examples; track e[0]) {
            <button type="button" class="card interactive ex" (click)="say(e[0])">
              <app-icon name="volume" class="vol" />
              <span><b>{{ e[0] }}</b><small class="muted">{{ e[1] }}</small></span>
            </button>
          }
        </section>

        <section class="card tinted tip"><app-icon name="bulb" class="bulb" /> {{ g.tip }}</section>

        @if (best(); as b) {
          <p class="muted center">Điểm cao nhất của bạn: <b>{{ b }}%</b></p>
        }
        <a class="btn btn-accent btn-lg btn-block" [routerLink]="['/session/grammar', g.id]"><app-icon name="pencil" /> Làm bài luyện (10 câu)</a>
        @if (nextId(); as n) {
          <a class="btn btn-ghost btn-block" [routerLink]="['/grammar', n]">Bài tiếp theo <app-icon name="chevron-right" /></a>
        }
      </main>
    }
  `,
  styles: `
    .intro { display: flex; flex-direction: column; gap: var(--space-2); line-height: 1.55; }
    .en { color: var(--primary); font-size: var(--fs-sm); }
    .rules { display: flex; flex-direction: column; gap: var(--space-2); }
    .rule { display: flex; flex-direction: column; gap: 2px; padding-bottom: var(--space-2); border-bottom: 1px dashed var(--line); }
    .rule:last-child { border: 0; padding: 0; }
    code { font-family: var(--font); font-weight: 800; color: var(--primary-dark); background: var(--primary-soft); padding: 4px 10px; border-radius: var(--radius-sm); align-self: flex-start; }
    .examples { display: flex; flex-direction: column; gap: var(--space-2); }
    .ex { display: flex; align-items: center; gap: var(--space-3); text-align: left; width: 100%; }
    .ex span { display: flex; flex-direction: column; }
    .vol { color: var(--primary); width: 24px; height: 24px; }
    .tip { display: flex; align-items: center; gap: var(--space-2); }
    .bulb { color: var(--accent-dark); width: 26px; height: 26px; }
  `,
})
export class GrammarLessonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly speech = inject(SpeechService);
  private readonly progress = inject(ProgressService);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), { requireSync: true });
  protected readonly lesson = computed(() => GRAMMAR_BY_ID[this.id()]);
  protected readonly best = computed(() => {
    this.progress.state();
    return this.progress.bestOf(`grammar:${this.id()}`);
  });
  protected readonly nextId = computed(() => {
    const i = GRAMMAR.findIndex((g) => g.id === this.id());
    return GRAMMAR[i + 1]?.id;
  });

  protected say(text: string): void {
    void this.speech.speakEn(text);
  }
}
