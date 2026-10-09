/**
 * topic-detail.page.ts – Giới thiệu một chủ đề (ví dụ "Du lịch & Khám phá").
 *
 * - Ảnh minh họa + đoạn giới thiệu của chủ đề. Du lịch dùng banner Santorini độ phân giải cao; các chủ đề khác
 *   chỉ có ảnh nhỏ nên hiển thị ảnh sắc nét cỡ vừa trên nền chính ảnh đó làm mờ (tránh phóng to bị vỡ hạt).
 * - Nút "Bắt đầu học" đưa tới danh sách bài từ vựng.
 * - 5 ô kỹ năng (Từ vựng, Nghe, Nói, Đọc, Viết) hiển thị điểm cao nhất và dẫn tới bài luyện.
 * - Lối tắt tới "Luyện tập tổng hợp" và "Kiểm tra chủ đề".
 */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { pct } from '../../core/text-utils';
import { SKILL_INFO, TOPIC_BY_ID, topicLessonCount, topicWordCount } from '../../data/topics';
import { Skill, TopicId } from '../../models/content.model';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ArtComponent } from '../../shared/art/art.component';
import { IconComponent } from '../../theme/icon.component';

@Component({
  selector: 'app-topic-detail',
  imports: [IconComponent, RouterLink, PageHeaderComponent, ArtComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (topic(); as t) {
      <main class="page no-nav stack">
        <app-page-header [title]="t.title" [icon]="t.emoji" back="/vocab" />

        <section class="hero card" [style.--c]="t.color">
          @if (t.id === 'travel') {
            <app-art class="pic" kind="travel-hero" [alt]="t.title" />
          } @else {
            <div class="banner">
              <app-art class="bg" [kind]="t.id" alt="" aria-hidden="true" />
              <app-art class="fg" [kind]="t.id" [alt]="t.title" />
            </div>
          }
          <div class="body">
            <h2>{{ t.id === 'travel' ? 'Đến Santorini, Hy Lạp' : t.titleEn }}</h2>
            <p>{{ t.intro }}</p>
            <div class="pr">
              <div class="bar blue"><i [style.width.%]="percent()"></i></div>
              <small>{{ learned() }}/{{ total }} từ · {{ lessons }} bài</small>
            </div>
            <a class="btn btn-primary btn-block" [routerLink]="['/vocab', t.id]">Bắt đầu học</a>
          </div>
        </section>

        <section class="skills">
          @for (s of skills; track s) {
            <a class="skill card" [routerLink]="link(s)" [queryParams]="query(s)">
              <span class="ic" [style.background]="info[s].color + '22'" [style.color]="info[s].color"><app-icon [name]="info[s].ico" /></span>
              <b>{{ info[s].label }}</b>
              <small [class.done]="best(s) > 0">{{ best(s) > 0 ? best(s) + '%' : 'Chưa làm' }}</small>
            </a>
          }
        </section>

        <div class="row extra">
          <a class="btn btn-soft" style="flex:1" [routerLink]="['/topic', t.id, 'summary']">📊 Tổng hợp chủ đề</a>
          <a class="btn btn-accent" style="flex:1" [routerLink]="['/session/test', t.id]" [queryParams]="{ kind: 'all' }">📝 Kiểm tra</a>
        </div>
      </main>
    }
  `,
  styles: `
    .hero {
      padding: 0;
      overflow: hidden;
      border: 3px solid color-mix(in srgb, var(--c) 50%, white);
    }
    .pic {
      width: 100%;
    }
    .banner {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      display: grid;
      place-items: center;
    }
    .banner .bg {
      position: absolute;
      inset: -24px;
      aspect-ratio: auto;
      filter: blur(16px) saturate(1.15);
      opacity: 0.9;
    }
    .banner .fg {
      position: relative;
      height: 84%;
      border-radius: var(--radius-lg);
      border: 3px solid var(--white);
      box-shadow: var(--shadow);
    }
    .body {
      padding: 14px 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .body h2 {
      font-size: 1.5rem;
      color: var(--primary-dark);
    }
    .body p {
      color: var(--ink-soft);
      line-height: 1.45;
    }
    .pr {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pr .bar {
      flex: 1;
    }
    .pr small {
      color: var(--ink-soft);
      white-space: nowrap;
    }
    .skills {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
    }
    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 10px 4px;
      text-align: center;
      font-size: 0.85rem;
    }
    .skill .ic {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 1.4rem;
    }
    .skill small {
      color: var(--ink-soft);
      font-size: 0.72rem;
    }
    .skill small.done {
      color: var(--good);
    }
    @media (max-width: 420px) {
      .skills {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
})
export class TopicDetailPage {
  private readonly progress = inject(ProgressService);
  private readonly route = inject(ActivatedRoute);

  protected readonly info = SKILL_INFO;
  protected readonly skills: Skill[] = ['vocab', 'listening', 'speaking', 'reading', 'writing'];

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') as TopicId)), { requireSync: true });
  protected readonly topic = computed(() => TOPIC_BY_ID[this.id()]);

  protected get total(): number {
    return topicWordCount(this.id());
  }
  protected get lessons(): number {
    return topicLessonCount(this.id());
  }
  protected learned = computed(() => this.progress.learnedCount(this.id()));
  protected percent = computed(() => pct(this.learned(), this.total));

  /** Điểm cao nhất (%) của một kỹ năng trong chủ đề */
  protected best(skill: Skill): number {
    return this.progress.bestScore(this.id(), skill);
  }

  /** Đường dẫn khi bấm ô kỹ năng: Từ vựng -> danh sách bài, còn lại -> bài luyện */
  protected link(skill: Skill): string[] {
    return skill === 'vocab' ? ['/vocab', this.id()] : ['/session/skill', this.id()];
  }

  protected query(skill: Skill): Record<string, string> {
    return skill === 'vocab' ? {} : { skill };
  }
}
