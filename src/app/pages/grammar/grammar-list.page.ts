/**
 * grammar-list.page.ts – Danh sách 12 chủ điểm ngữ pháp, nhóm theo trình độ, kèm điểm cao nhất.
 * Bài phù hợp trình độ người học (chọn ở bước làm quen) được gắn nhãn "Hợp với bạn".
 */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { GRAMMAR, GrammarLesson } from '../../data/grammar';
import { BongComponent } from '../../shared/bong.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { IconComponent } from '../../theme/icon.component';

const LEVELS: { id: GrammarLesson['level']; label: string }[] = [
  { id: 'starter', label: 'Nền tảng' },
  { id: 'basic', label: 'Cơ bản' },
  { id: 'intermediate', label: 'Nâng cao' },
];

@Component({
  selector: 'app-grammar-list',
  imports: [RouterLink, BongComponent, PageHeaderComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <app-page-header title="Ngữ pháp" ico="notebook" back="/practice" />
      <div class="card"><app-bong mood="write" [size]="72" message="Mỗi bài chỉ 5 phút: đọc công thức, nghe ví dụ rồi làm 10 câu luyện nhé!" /></div>

      <div class="card prog">
        <div class="row"><b class="spacer">Đã hoàn thành</b><span>{{ doneCount() }}/{{ total }} bài</span></div>
        <div class="bar gold"><i [style.width.%]="(doneCount() / total) * 100"></i></div>
      </div>

      @for (lv of levels; track lv.id) {
        <h2 class="section-title"><app-icon name="sort-ascending-letters" /> {{ lv.label }}</h2>
        <div class="grid">
          @for (g of byLevel(lv.id); track g.id) {
            <a class="card interactive item" [routerLink]="['/grammar', g.id]">
              <span class="emo">{{ g.icon }}</span>
              <span class="tx">
                <b>{{ g.title }}</b>
                <small class="muted">{{ g.titleEn }}</small>
              </span>
              @if (best(g.id); as b) {
                <span class="score" [class.good]="b >= 80">{{ b }}%</span>
              } @else if (g.level === myLevel()) {
                <span class="badge-pill">Hợp với bạn</span>
              }
              <app-icon name="chevron-right" class="go" />
            </a>
          }
        </div>
      }
    </main>
  `,
  styles: `
    .prog { display: flex; flex-direction: column; gap: var(--space-2); }
    .grid { display: grid; grid-template-columns: 1fr; gap: var(--space-2); }
    .item { display: flex; align-items: center; gap: var(--space-3); min-height: 64px; }
    .emo { font-size: 1.8rem; width: 48px; height: 48px; border-radius: 50%; background: var(--primary-soft); display: grid; place-items: center; flex: none; }
    .tx { flex: 1; display: flex; flex-direction: column; min-width: 0; }
    .score { font-family: var(--font-head); color: var(--accent-dark); }
    .score.good { color: var(--good-dark); }
    .go { color: var(--ink-mute); }
    @media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; } }
  `,
})
export class GrammarListPage {
  private readonly progress = inject(ProgressService);
  protected readonly levels = LEVELS;
  protected readonly total = GRAMMAR.length;
  protected readonly myLevel = computed(() => this.progress.settings().level);

  protected byLevel(level: GrammarLesson['level']): GrammarLesson[] {
    return GRAMMAR.filter((g) => g.level === level);
  }

  protected best(id: string): number | undefined {
    this.progress.state();
    return this.progress.bestOf(`grammar:${id}`);
  }

  protected readonly doneCount = computed(() => {
    this.progress.state();
    return GRAMMAR.filter((g) => (this.progress.bestOf(`grammar:${g.id}`) ?? 0) >= 60).length;
  });
}
