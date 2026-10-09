/**
 * mock.page.ts – Trang "Mock Test": danh sách đề thi thử và đề theo từng kỹ năng
 * (thiết kế theo ảnh "Offline English Master Mock Test Dashboard").
 *
 *  - Tab: Tất cả · IELTS · TOEIC · Kỹ năng · Đề yêu thích; lọc theo kỹ năng và tìm theo tên.
 *  - Mỗi đề: ảnh, nhãn, số kỹ năng, số câu, thời lượng, đánh dấu yêu thích và nút "Bắt đầu làm bài".
 *  - Cột phải: tiến độ (số loại đề đã làm), kết quả gần đây, đề gợi ý tiếp theo.
 * Đề được tạo từ kho câu hỏi đóng gói sẵn nên làm được khi không có Internet; mỗi lần làm đề được xáo lại.
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { photoOf } from '../../core/photos';
import { EXAM_INFO, EXAM_SECTIONS } from '../../data/exam/sections';
import { HERO_PHOTOS } from '../../data/hero-photos';
import { ExamId, ExamKind } from '../../models/exam.model';
import { DonutComponent } from '../../shared/donut.component';
import { IconComponent } from '../../theme/icon.component';

type Tab = 'all' | 'ielts' | 'toeic' | 'skill' | 'fav';

interface MockItem {
  id: string;
  kind: ExamKind;
  exam: ExamId;
  title: string;
  desc: string;
  photo: string;
  skills: string;
  count: string;
  minutes: number;
  /** Nhãn kỹ năng (Full Test / Listening / ...) */
  skill: string;
  level: string;
  full: boolean;
  query: Record<string, string>;
}

/** Ảnh minh họa cho đề theo kỹ năng */
const SKILL_PHOTO: Record<string, string> = {
  listening: HERO_PHOTOS.headphones.src, reading: HERO_PHOTOS.library.src, writing: HERO_PHOTOS.writing.src, speaking: HERO_PHOTOS.office.src,
};

const ITEMS: MockItem[] = [
  {
    id: 'ielts-full', kind: 'mock', exam: 'ielts', title: 'IELTS Full Test', desc: EXAM_INFO.ielts.mockDesc, photo: HERO_PHOTOS.london.src,
    skills: '4 kỹ năng', count: '~20 mục', minutes: EXAM_INFO.ielts.mockMinutes, skill: 'Full Test', level: 'B1 – C1', full: true, query: { mock: '1' },
  },
  {
    id: 'toeic-lr', kind: 'mock', exam: 'toeic', title: 'TOEIC Listening & Reading Test', desc: EXAM_INFO.toeic.mockDesc, photo: HERO_PHOTOS.skyline.src,
    skills: '2 kỹ năng', count: '51 câu', minutes: EXAM_INFO.toeic.mockMinutes, skill: 'Full Test', level: 'A2 – B2', full: true, query: { mock: '1' },
  },
  {
    id: 'toeic-sw', kind: 'mock-sw', exam: 'toeic', title: 'TOEIC Speaking & Writing Test', desc: EXAM_INFO.toeic.mockSw!.desc, photo: HERO_PHOTOS.study.src,
    skills: '2 kỹ năng', count: '13 câu', minutes: EXAM_INFO.toeic.mockSw!.minutes, skill: 'Full Test', level: 'B1 – B2', full: true, query: { mock: 'sw' },
  },
  ...EXAM_SECTIONS.map((s): MockItem => ({
    id: s.id, kind: s.id, exam: s.exam, title: `${s.exam === 'ielts' ? 'IELTS' : 'TOEIC'} ${s.exam === 'ielts' ? s.titleEn + ' Test' : s.title}`, desc: s.desc,
    photo: (s.id === 'toeic-part1' ? photoOf('scene:meeting')?.src : undefined) ?? SKILL_PHOTO[s.skill],
    skills: '1 kỹ năng', count: `${s.count} ${s.skill === 'writing' || s.skill === 'speaking' ? 'đề' : 'câu'}`, minutes: s.minutes,
    skill: { listening: 'Listening', reading: 'Reading', writing: 'Writing', speaking: 'Speaking' }[s.skill], level: s.exam === 'ielts' ? 'B1 – C1' : 'A2 – B2', full: false,
    query: { section: s.id },
  })),
];

@Component({
  selector: 'app-mock',
  imports: [RouterLink, DatePipe, IconComponent, DonutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Mock Test</span></div>
      <div class="cols">
        <div class="stack">
          <header class="card page-head">
            <span class="tile-ic lg" style="--c: var(--grape-600)"><app-icon name="file-text" /></span>
            <div class="ph-text">
              <h1>Mock Test</h1>
              <p>Luyện đề bám sát cấu trúc đề thi thật, giúp bạn làm quen áp lực thời gian và nâng cao kỹ năng.</p>
            </div>
          </header>

          <section class="card flush">
            <nav class="tabs" aria-label="Loại đề">
              @for (t of tabs; track t.id) {
                <button type="button" class="tab" [class.active]="tab() === t.id" (click)="tab.set(t.id)"><app-icon [name]="t.icon" /> {{ t.label }}</button>
              }
            </nav>
            <div class="filters">
              <select class="select" [value]="skill()" (change)="skill.set($any($event.target).value)" aria-label="Kỹ năng">
                <option value="">Kỹ năng: Tất cả</option>
                @for (s of skillOptions; track s) { <option [value]="s">{{ s }}</option> }
              </select>
              <select class="select" [value]="status()" (change)="status.set($any($event.target).value)" aria-label="Trạng thái">
                <option value="">Trạng thái: Tất cả</option>
                <option value="done">Đã làm</option>
                <option value="todo">Chưa làm</option>
              </select>
              <label class="find"><app-icon name="search" /><input type="search" placeholder="Tìm kiếm đề thi..." [value]="query()" (input)="query.set($any($event.target).value)" /></label>
            </div>

            <ul class="list">
              @for (m of visible(); track m.id) {
                <li>
                  <img [src]="m.photo" alt="" loading="lazy" />
                  <div class="info">
                    <h3>{{ m.title }} @if (!done(m)) { <span class="tag red new">Mới</span> }</h3>
                    <p class="muted">{{ m.desc }}</p>
                    <div class="row tg">
                      <span class="tag" [class.red]="m.exam === 'ielts'" [class.blue]="m.exam === 'toeic'">{{ m.exam === 'ielts' ? 'IELTS' : 'TOEIC' }}</span>
                      <span class="tag blue">{{ m.skill }}</span>
                      <span class="tag purple">{{ m.level }}</span>
                      @if (best(m); as b) { <span class="tag green">Gần nhất: {{ b }}</span> }
                    </div>
                  </div>
                  <div class="meta">
                    <span><app-icon name="list-check" /> {{ m.skills }}</span><span><app-icon name="clipboard-list" /> {{ m.count }}</span>
                    <span><app-icon name="clock" /> {{ duration(m.minutes) }}</span>
                  </div>
                  <button class="fav" type="button" [class.on]="fav(m.id)" (click)="toggleFav(m.id)" [attr.aria-label]="fav(m.id) ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'" [attr.aria-pressed]="fav(m.id)"><app-icon name="star" /></button>
                  <a class="btn btn-primary" [routerLink]="['/session/exam', m.exam]" [queryParams]="m.query">{{ done(m) ? 'Làm lại' : 'Bắt đầu làm bài' }}</a>
                </li>
              } @empty {
                <li class="empty">{{ tab() === 'fav' ? 'Chưa có đề yêu thích. Bấm ngôi sao ở một đề để lưu lại.' : 'Không có đề nào phù hợp bộ lọc.' }}</li>
              }
            </ul>
          </section>
        </div>

        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="chart-bar" /><h3>Tiến độ làm Mock Test</h3><a class="link-more" routerLink="/progress">Chi tiết <app-icon name="arrow-right" /></a></div>
            <div class="prog">
              <app-donut [segments]="[{ value: doneCount(), color: 'var(--good)' }]" [total]="items.length" [size]="130" [thickness]="11">
                <b>{{ donePercent() }}%</b><small>{{ doneCount() }} / {{ items.length }} đề</small>
              </app-donut>
              <ul>
                <li><i class="g"></i><span>Đã hoàn thành</span><b>{{ doneCount() }}</b></li>
                <li><i class="b"></i><span>Lượt làm</span><b>{{ attempts() }}</b></li>
                <li><i class="s"></i><span>Chưa làm</span><b>{{ items.length - doneCount() }}</b></li>
              </ul>
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="clock" /><h3>Kết quả gần đây</h3></div>
            @for (h of recent(); track h.id) {
              <div class="list-row">
                <span class="tile-ic" [style.--c]="h.exam === 'ielts' ? 'var(--ielts)' : 'var(--toeic)'"><app-icon name="file-text" /></span>
                <span class="lr-text"><b>{{ titleOf(h.kind, h.exam) }}</b><small>Hoàn thành: {{ h.date | date: 'dd/MM/yyyy' }}</small></span>
                <span class="tag score" [class.green]="h.percent >= 70" [class.blue]="h.percent >= 40 && h.percent < 70" [class.red]="h.percent < 40">{{ h.label }}</span>
              </div>
            } @empty {
              <p class="empty">Chưa có kết quả. Làm một đề để xem điểm ước tính ở đây.</p>
            }
          </section>

          @if (suggest(); as s) {
            <section class="card">
              <div class="card-head"><app-icon name="trophy" class="tr" /><h3>Đề thi gợi ý cho bạn</h3></div>
              <a class="sg" [routerLink]="['/session/exam', s.exam]" [queryParams]="s.query">
                <img [src]="s.photo" alt="" />
                <div>
                  <span class="tag orange">Phù hợp với mục tiêu hiện tại</span>
                  <b>{{ s.title }}</b>
                  <small class="muted">{{ s.skills }} · {{ s.minutes }} phút · {{ s.count }}</small>
                </div>
                <span class="go"><app-icon name="arrow-right" /></span>
              </a>
            </section>
          }
        </aside>
      </div>
    </main>
  `,
  styles: `
    .tabs { padding: 0 var(--space-3); }
    .filters { display: flex; flex-wrap: wrap; gap: var(--space-2); padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--line); }
    .find { flex: 1; min-width: 180px; display: flex; align-items: center; gap: var(--space-2); height: 36px; padding: 0 var(--space-3); border-radius: var(--radius-md); background: var(--slate-100); color: var(--ink-soft); }
    .find input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; }
    .find app-icon { width: 18px; height: 18px; }
    .list { list-style: none; margin: 0; padding: 0 var(--space-4); }
    .list li { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-3) 0; border-top: 1px solid var(--line); }
    .list li:first-child { border-top: 0; }
    .list img { width: 168px; height: 86px; object-fit: cover; border-radius: var(--radius-md); flex: none; }
    .info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
    .info h3 { display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap; }
    .info p { font-size: var(--fs-sm); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .new { background: var(--bad); color: var(--white); }
    .tg { flex-wrap: wrap; }
    .meta { display: grid; grid-template-columns: auto auto; gap: 4px var(--space-4); font-size: var(--fs-sm); color: var(--slate-600); white-space: nowrap; flex: none; }
    .meta span { display: flex; align-items: center; gap: 6px; }
    .meta app-icon { width: 17px; height: 17px; color: var(--primary); }
    .fav { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; color: var(--ink-mute); flex: none; }
    .fav:hover { background: var(--slate-100); }
    .fav.on { color: var(--sun-500); }
    .fav.on ::ng-deep svg { fill: currentColor; }
    .prog { display: flex; align-items: center; gap: var(--space-4); }
    .prog ul { list-style: none; margin: 0; padding: 0; flex: 1; display: flex; flex-direction: column; gap: var(--space-3); font-size: var(--fs-sm); }
    .prog li { display: flex; align-items: center; gap: var(--space-2); }
    .prog li span { flex: 1; color: var(--slate-600); }
    .prog i { width: 10px; height: 10px; border-radius: 50%; }
    .g { background: var(--good); }
    .b { background: var(--primary); }
    .s { background: var(--slate-300); }
    .score { font-size: var(--fs-sm); padding: 4px 10px; max-width: 130px; overflow: hidden; text-overflow: ellipsis; }
    .tr { color: var(--sun-500) !important; }
    .sg { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .sg:hover { border-color: var(--sky-300); }
    .sg img { width: 78px; height: 92px; object-fit: cover; border-radius: var(--radius-md); flex: none; }
    .sg div { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
    .go { width: 30px; height: 30px; border-radius: 50%; border: 1.5px solid var(--primary); color: var(--primary); display: grid; place-items: center; flex: none; }
    .go app-icon { width: 16px; height: 16px; }
    @media (max-width: 1400px) { .meta { grid-template-columns: auto; } }
    @media (max-width: 860px) {
      .list li { flex-wrap: wrap; }
      .list img { width: 110px; height: 70px; }
      .info { flex-basis: 50%; }
      .meta { grid-template-columns: repeat(3, auto); flex: 1; }
    }
  `,
})
export class MockPage {
  private readonly progress = inject(ProgressService);
  private readonly route = inject(ActivatedRoute);

  protected readonly items = ITEMS;
  protected readonly skillOptions = ['Full Test', 'Listening', 'Reading', 'Writing', 'Speaking'];
  protected readonly tabs: { id: Tab; label: string; icon: 'file-text' | 'school' | 'file-description' | 'list-check' | 'heart' }[] = [
    { id: 'all', label: 'Tất cả', icon: 'file-text' },
    { id: 'ielts', label: 'IELTS', icon: 'school' },
    { id: 'toeic', label: 'TOEIC', icon: 'file-description' },
    { id: 'skill', label: 'Kỹ năng', icon: 'list-check' },
    { id: 'fav', label: 'Đề yêu thích', icon: 'heart' },
  ];

  protected readonly tab = signal<Tab>((this.route.snapshot.queryParamMap.get('tab') as Tab | null) ?? 'all');
  protected readonly skill = signal('');
  protected readonly status = signal('');
  protected readonly query = signal('');

  /** Kết quả gần nhất theo từng loại đề: "<kỳ thi>|<loại>" -> nhãn điểm */
  private readonly lastByKind = computed(() => {
    const map = new Map<string, string>();
    for (const h of this.progress.exams()) if (!map.has(`${h.exam}|${h.kind}`)) map.set(`${h.exam}|${h.kind}`, h.label);
    return map;
  });

  protected readonly visible = computed(() => {
    const tab = this.tab();
    const skill = this.skill();
    const status = this.status();
    const q = this.query().trim().toLowerCase();
    this.progress.state();
    return ITEMS.filter((m) => {
      if (tab === 'ielts' && m.exam !== 'ielts') return false;
      if (tab === 'toeic' && m.exam !== 'toeic') return false;
      if (tab === 'skill' && m.full) return false;
      if (tab === 'fav' && !this.progress.isFav(m.id)) return false;
      if (skill && m.skill !== skill) return false;
      if (status === 'done' && !this.done(m)) return false;
      if (status === 'todo' && this.done(m)) return false;
      return !q || `${m.title} ${m.desc} ${m.skill}`.toLowerCase().includes(q);
    });
  });

  protected readonly doneCount = computed(() => ITEMS.filter((m) => this.lastByKind().has(`${m.exam}|${m.kind}`)).length);
  protected readonly donePercent = computed(() => Math.round((this.doneCount() / ITEMS.length) * 100));
  protected readonly attempts = computed(() => this.progress.exams().length);
  protected readonly recent = computed(() => this.progress.exams().slice(0, 5));

  /** Đề gợi ý: đề đầy đủ của kỳ thi mục tiêu chưa làm, sau đó tới đề kỹ năng chưa làm */
  protected readonly suggest = computed(() => {
    const exam: ExamId = this.progress.settings().goal === 'toeic' ? 'toeic' : 'ielts';
    const todo = ITEMS.filter((m) => !this.done(m));
    return todo.find((m) => m.exam === exam && m.full) ?? todo.find((m) => m.exam === exam) ?? todo[0] ?? ITEMS.find((m) => m.exam === exam);
  });

  protected done(m: MockItem): boolean {
    return this.lastByKind().has(`${m.exam}|${m.kind}`);
  }

  protected best(m: MockItem): string | undefined {
    return this.lastByKind().get(`${m.exam}|${m.kind}`);
  }

  protected fav(id: string): boolean {
    this.progress.state();
    return this.progress.isFav(id);
  }

  protected toggleFav(id: string): void {
    this.progress.toggleFav(id);
  }

  /** 80 -> "1h 20 phút", 38 -> "38 phút" */
  protected duration(minutes: number): string {
    if (minutes < 60) return `${minutes} phút`;
    return `${Math.floor(minutes / 60)}h ${minutes % 60 ? String(minutes % 60).padStart(2, '0') + ' phút' : ''}`.trim();
  }

  protected titleOf(kind: ExamKind, exam: ExamId): string {
    return ITEMS.find((m) => m.kind === kind && m.exam === exam)?.title ?? kind;
  }
}
