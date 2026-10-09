/**
 * topic-summary.page.ts – "Luyện tập tổng hợp" của một chủ đề (theo ảnh thiết kế).
 *
 * Hiển thị điểm cao nhất của 4 kỹ năng Nghe – Nói – Đọc – Viết (dạng x/10), thanh tiến độ
 * chung, lời khen của Bông và các nút "Luyện lại" / "Quay về danh sách chủ đề".
 */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { pct } from '../../core/text-utils';
import { SKILL_INFO, TOPIC_BY_ID, topicWordCount } from '../../data/topics';
import { LANGUAGE_SKILLS, Skill, TopicId } from '../../models/content.model';
import { BongComponent } from '../../shared/bong.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { IconComponent } from '../../theme/icon.component';

@Component({
  selector: 'app-topic-summary',
  imports: [IconComponent, RouterLink, BongComponent, PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page no-nav stack">
      <app-page-header title="Luyện tập tổng hợp" ico="bulb" [back]="'/topic/' + id()" />

      <section class="card">
        <app-bong mood="hello" [size]="84" [message]="message()" />
        <p class="topic">Chủ đề: <b>{{ topic().title }}</b></p>
        <div class="bar"><i [style.width.%]="overall()"></i></div>
        <p class="muted small">{{ overall() }}% hoàn thành · {{ learned() }}/{{ total }} từ vựng đã thuộc</p>
      </section>

      <section class="tiles">
        @for (s of skills; track s) {
          <a class="tile card" [routerLink]="['/session/skill', id()]" [queryParams]="{ skill: s }" [style.--c]="info[s].color">
            <span class="ic"><app-icon [name]="info[s].ico" /></span>
            <span class="tt">
              <b>{{ info[s].label }}</b>
              <em>{{ outOfTen(s) }}<small>/10</small></em>
            </span>
          </a>
        }
      </section>

      <a class="btn btn-accent btn-block" [routerLink]="['/session/mixed', id()]">🔁 Luyện lại (tổng hợp 4 kỹ năng)</a>
      <a class="btn btn-soft btn-block" routerLink="/vocab">Quay về Từ vựng</a>
    </main>
  `,
  styles: `
    .card:first-of-type {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .topic {
      font-size: 1.1rem;
    }
    .small {
      font-size: 0.85rem;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .tile {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      border: 3px solid color-mix(in srgb, var(--c) 45%, white);
      background: color-mix(in srgb, var(--c) 10%, white);
    }
    .ic {
      font-size: 2rem;
    }
    .tt {
      display: flex;
      flex-direction: column;
    }
    .tt em {
      font-style: normal;
      font-family: var(--font-head);
      font-size: 1.4rem;
      color: var(--c);
    }
    .tt small {
      font-size: 0.85rem;
      color: var(--ink-soft);
    }
  `,
})
export class TopicSummaryPage {
  private readonly progress = inject(ProgressService);
  private readonly route = inject(ActivatedRoute);

  protected readonly info = SKILL_INFO;
  protected readonly skills = LANGUAGE_SKILLS;
  protected readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') as TopicId)), { requireSync: true });
  protected readonly topic = computed(() => TOPIC_BY_ID[this.id()]);

  protected get total(): number {
    return topicWordCount(this.id());
  }
  protected readonly learned = computed(() => this.progress.learnedCount(this.id()));

  /** Điểm cao nhất của kỹ năng quy về thang 10 */
  protected outOfTen(skill: Skill): number {
    return Math.round(this.progress.bestScore(this.id(), skill) / 10);
  }

  /** Tiến độ tổng: trung bình cộng giữa % từ đã thuộc và điểm 4 kỹ năng */
  protected readonly overall = computed(() => {
    const wordPct = pct(this.learned(), this.total);
    const skillPcts = LANGUAGE_SKILLS.map((s) => this.progress.bestScore(this.id(), s));
    return Math.round([wordPct, ...skillPcts].reduce((a, b) => a + b, 0) / 5);
  });

  protected readonly message = computed(() => {
    const p = this.overall();
    if (p >= 80) return `Bạn đã hoàn thành chủ đề "${this.topic().title}"! Thật tuyệt vời 💖`;
    if (p >= 40) return 'Bạn làm rất tốt! Tiếp tục cố gắng nhé 💪';
    return 'Mình cùng luyện tập từng chút một nhé!';
  });
}
