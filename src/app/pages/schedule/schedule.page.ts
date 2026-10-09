/**
 * schedule.page.ts – Trang "Lịch học" (thiết kế theo ảnh "English Master Weekly Schedule Dashboard").
 *
 *  - Lưới tuần (Thứ Hai → Chủ Nhật, 07:00 → 23:00) hiển thị các buổi tự học lặp lại hằng tuần.
 *    Lần đầu app gợi ý sẵn một lịch theo mục tiêu (IELTS / TOEIC); người học thêm, xóa buổi tùy ý.
 *  - Bấm một buổi để xem chi tiết, bắt đầu học ngay hoặc xóa.
 *  - Cột phải: lịch tháng (chấm xanh = ngày đã học), bộ lọc loại buổi học, các buổi sắp tới.
 * Lịch lưu trên máy cùng tiến độ học (ProgressService.plan).
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { dayKey } from '../../core/text-utils';
import { PlanItem, PlanKind } from '../../models/progress.model';
import { IconComponent } from '../../theme/icon.component';
import { IconName } from '../../theme/icons';

/** Thông tin hiển thị của từng loại buổi học */
const KINDS: Record<PlanKind, { label: string; color: string; icon: IconName; link: string; query: Record<string, string> }> = {
  ielts: { label: 'IELTS', color: 'var(--blossom-500)', icon: 'school', link: '/ielts', query: {} },
  toeic: { label: 'TOEIC', color: 'var(--sky-500)', icon: 'file-description', link: '/toeic', query: {} },
  vocab: { label: 'Từ vựng', color: 'var(--grape-500)', icon: 'letter-case', link: '/vocab', query: { tab: 'lessons' } },
  practice: { label: 'Luyện tập', color: 'var(--leaf-500)', icon: 'pencil', link: '/practice', query: {} },
  mock: { label: 'Thi thử', color: 'var(--sun-500)', icon: 'file-text', link: '/mock', query: {} },
  review: { label: 'Ôn tập', color: 'var(--tangerine-500)', icon: 'refresh', link: '/session/review/all', query: {} },
};

const DAY_NAMES = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
const FIRST_HOUR = 7;
const LAST_HOUR = 23;
/** Chiều cao một giờ trên lưới (px) */
const HOUR_PX = 40;

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + (m || 0);
}

function fmt(min: number): string {
  return `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
}

@Component({
  selector: 'app-schedule',
  imports: [FormsModule, RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Lịch học</span></div>
      <div class="cols">
        <div class="stack">
          <header class="card page-head">
            <span class="tile-ic lg" style="--c: var(--grape-600)"><app-icon name="calendar-event" /></span>
            <div class="ph-text"><h1>Lịch học</h1><p>Sắp xếp các buổi tự học trong tuần và theo dõi hoạt động của bạn.</p></div>
          </header>

          <section class="card flush">
            <div class="bar-top">
              <button class="nb" type="button" (click)="shift(-1)" aria-label="Tuần trước"><app-icon name="chevron-left" /></button>
              <button class="nb" type="button" (click)="shift(1)" aria-label="Tuần sau"><app-icon name="chevron-right" /></button>
              <button class="btn btn-ghost btn-sm" type="button" (click)="offset.set(0)">Hôm nay</button>
              <h2>{{ rangeLabel() }}</h2>
              <span class="spacer"></span>
              <div class="seg">
                <button type="button" [class.on]="view() === 'day'" (click)="view.set('day')">Ngày</button>
                <button type="button" [class.on]="view() === 'week'" (click)="view.set('week')">Tuần</button>
              </div>
              <button class="btn btn-primary" type="button" (click)="adding.set(!adding())"><app-icon name="plus" /> Thêm lịch</button>
            </div>

            @if (adding()) {
              <form class="add" (ngSubmit)="add()">
                <label>Nội dung<input class="input" type="text" maxlength="40" name="title" [(ngModel)]="draft.title" placeholder="VD: IELTS Writing Task 2" required /></label>
                <label>Loại
                  <select class="input" name="kind" [(ngModel)]="draft.kind">@for (k of kindList; track k.id) { <option [ngValue]="k.id">{{ k.label }}</option> }</select>
                </label>
                <label>Thứ
                  <select class="input" name="day" [(ngModel)]="draft.day">@for (d of dayNames; track $index) { <option [ngValue]="$index">{{ d }}</option> }</select>
                </label>
                <label>Bắt đầu<input class="input" type="time" name="start" [(ngModel)]="draft.start" min="07:00" max="22:30" required /></label>
                <label>Thời lượng
                  <select class="input" name="minutes" [(ngModel)]="draft.minutes">@for (m of [15, 20, 30, 45, 60, 90, 120]; track m) { <option [ngValue]="m">{{ m }} phút</option> }</select>
                </label>
                <button class="btn btn-primary" type="submit">Lưu</button>
                <button class="btn btn-ghost" type="button" (click)="adding.set(false)">Hủy</button>
              </form>
            }

            <div class="scroll">
              <div class="grid" [class.dayview]="view() === 'day'" [style.--cols]="days().length" [style.--hour.px]="hourPx">
                <div class="gh corner">Giờ</div>
                @for (d of days(); track d.index) {
                  <div class="gh" [class.today]="d.today"><b>{{ d.name }}</b><small>{{ d.date }}</small></div>
                }
                <div class="hours">
                  @for (h of hours; track h) { <span [style.top.px]="(h - firstHour) * hourPx">{{ h < 10 ? '0' + h : h }}:00</span> }
                </div>
                @for (d of days(); track d.index) {
                  <div class="daycol" [class.today]="d.today" [style.height.px]="gridHeight">
                    @for (e of d.events; track e.id) {
                      <button type="button" class="ev" [class.tiny]="e.height < 42" [class.sel]="selected()?.id === e.id" [style.--c]="kinds[e.kind].color"
                              [style.top.px]="e.top" [style.height.px]="e.height" (click)="selected.set(e)">
                        <small>{{ e.start }} - {{ e.end }}</small>
                        <b>{{ e.title }}</b>
                        @if (e.height > 56) { <span class="ek"><app-icon [name]="kinds[e.kind].icon" /> {{ kinds[e.kind].label }}</span> }
                      </button>
                    }
                  </div>
                }
              </div>
            </div>
            <footer class="foot">
              <small class="muted">Lịch lặp lại hằng tuần · {{ plan().length }} buổi · {{ totalHours() }} giờ học mỗi tuần</small>
              <button class="btn btn-ghost btn-sm" type="button" (click)="reset()"><app-icon name="refresh" /> Dùng lại lịch gợi ý</button>
            </footer>
          </section>
        </div>

        <aside class="side">
          @if (selected(); as s) {
            <section class="card sel" [style.--c]="kinds[s.kind].color">
              <div class="card-head"><span class="tile-ic sm"><app-icon [name]="kinds[s.kind].icon" /></span><h3>{{ s.title }}</h3>
                <button class="icon-btn" type="button" (click)="selected.set(null)" aria-label="Đóng"><app-icon name="x" /></button></div>
              <p class="muted">{{ dayNames[s.day] }} · {{ s.start }} – {{ endOf(s) }} · {{ s.minutes }} phút · {{ kinds[s.kind].label }}</p>
              <div class="row">
                <a class="btn btn-primary" [routerLink]="kinds[s.kind].link" [queryParams]="kinds[s.kind].query">Bắt đầu học <app-icon name="arrow-right" /></a>
                <button class="btn btn-danger" type="button" (click)="remove(s)"><app-icon name="trash" /> Xóa</button>
              </div>
            </section>
          }

          <section class="card">
            <div class="card-head"><span class="tile-ic sm" style="--c: var(--grape-500)"><app-icon name="calendar" /></span><h3>{{ monthLabel() }}</h3>
              <button class="nb" type="button" (click)="monthOffset.set(monthOffset() - 1)" aria-label="Tháng trước"><app-icon name="chevron-left" /></button>
              <button class="nb" type="button" (click)="monthOffset.set(monthOffset() + 1)" aria-label="Tháng sau"><app-icon name="chevron-right" /></button></div>
            <div class="month">
              @for (n of ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']; track n) { <small class="mh">{{ n }}</small> }
              @for (c of month(); track c.key) {
                <span class="md" [class.out]="!c.inMonth" [class.today]="c.today" [class.done]="c.xp > 0" [title]="c.xp > 0 ? c.xp + ' XP' : ''">{{ c.day }}</span>
              }
            </div>
            <small class="muted lg"><i></i> Ngày đã học</small>
          </section>

          <section class="card">
            <div class="card-head"><span class="tile-ic sm"><app-icon name="filter" /></span><h3>Hiển thị lịch</h3></div>
            @for (k of kindList; track k.id) {
              <label class="ck"><input type="checkbox" [checked]="!hidden().has(k.id)" (change)="toggleKind(k.id)" /><i [style.background]="k.color"></i> {{ k.label }}</label>
            }
          </section>

          <section class="card">
            <div class="card-head"><span class="tile-ic sm"><app-icon name="alarm" /></span><h3>Lịch sắp tới</h3></div>
            @for (u of upcoming(); track u.id) {
              <a class="up" [style.--c]="kinds[u.kind].color" [routerLink]="kinds[u.kind].link" [queryParams]="kinds[u.kind].query">
                <span class="tile-ic sm"><app-icon [name]="kinds[u.kind].icon" /></span>
                <span><b>{{ u.title }}</b><small>{{ u.start }} - {{ u.end }} · {{ u.when }}</small></span>
                <app-icon name="chevron-right" class="chev" />
              </a>
            } @empty {
              <p class="empty">Chưa có buổi học nào. Bấm “Thêm lịch” để tạo.</p>
            }
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .bar-top { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); padding: var(--space-3) var(--space-4); }
    .bar-top h2 { font-size: var(--fs-lg); margin-left: var(--space-3); }
    .nb { width: 34px; height: 34px; border: 1px solid var(--line); border-radius: var(--radius-sm); display: grid; place-items: center; background: var(--white); color: var(--slate-600); }
    .nb:hover { border-color: var(--primary); color: var(--primary); }
    .nb app-icon { width: 16px; height: 16px; }
    .seg { display: flex; border: 1px solid var(--line); border-radius: var(--radius-sm); overflow: hidden; }
    .seg button { padding: 7px var(--space-4); font-size: var(--fs-sm); color: var(--slate-600); }
    .seg button.on { background: var(--primary-soft); color: var(--primary-dark); box-shadow: inset 0 0 0 1px var(--primary); border-radius: var(--radius-sm); }
    .add { display: flex; flex-wrap: wrap; align-items: flex-end; gap: var(--space-3); padding: var(--space-3) var(--space-4); background: var(--slate-50); border-top: 1px solid var(--line); }
    .add label { display: flex; flex-direction: column; gap: 4px; font-size: var(--fs-xs); font-weight: 600; color: var(--slate-600); }
    .add label:first-child { flex: 1; min-width: 180px; }
    .scroll { overflow-x: auto; border-top: 1px solid var(--line); }
    .grid { display: grid; grid-template-columns: 58px repeat(var(--cols), minmax(118px, 1fr)); min-width: 900px; }
    .grid.dayview { min-width: 0; }
    .gh { padding: var(--space-2); text-align: center; display: flex; flex-direction: column; justify-content: center; background: var(--slate-50); border-bottom: 1px solid var(--line); border-left: 1px solid var(--line); line-height: 1.35; }
    .gh small { color: var(--ink-soft); }
    .gh.corner { border-left: 0; font-weight: 600; font-size: var(--fs-sm); }
    .gh.today { background: var(--sky-100); color: var(--primary-dark); }
    .gh.today small { color: var(--primary-dark); }
    .hours { position: relative; }
    .hours span { position: absolute; left: 0; right: 0; text-align: center; font-size: var(--fs-xs); color: var(--slate-600); transform: translateY(4px); }
    .daycol { position: relative; border-left: 1px solid var(--line); background-image: linear-gradient(var(--line) 1px, transparent 1px); background-size: 100% var(--hour); }
    .daycol.today { background-color: color-mix(in srgb, var(--sky-50) 60%, transparent); }
    .ev { position: absolute; left: 4px; right: 4px; overflow: hidden; text-align: left; padding: 5px 8px; border-radius: var(--radius-sm); display: flex; flex-direction: column; gap: 1px;
      background: color-mix(in srgb, var(--c) 14%, var(--white)); border: 1px solid color-mix(in srgb, var(--c) 45%, var(--white)); border-left: 3px solid var(--c); color: var(--ink); transition: box-shadow var(--motion-fast); }
    .ev:hover, .ev.sel { box-shadow: var(--shadow-md); z-index: 2; }
    .ev small { font-size: 0.7rem; color: var(--slate-600); white-space: nowrap; }
    .ev.tiny { padding: 2px 8px; justify-content: center; }
    .ev.tiny small { display: none; }
    .ev.tiny b { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ev b { font-size: var(--fs-xs); line-height: 1.25; }
    .ek { display: inline-flex; align-items: center; gap: 4px; font-size: 0.7rem; color: color-mix(in srgb, var(--c) 70%, var(--slate-800)); }
    .ek app-icon { width: 13px; height: 13px; }
    .foot { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-2); padding: var(--space-3) var(--space-4); border-top: 1px solid var(--line); }
    .sel { border-color: var(--c); }
    .sel .tile-ic, .up .tile-ic { --c: inherit; }
    .sel p { margin-bottom: var(--space-3); }
    .month { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; }
    .mh { color: var(--ink-soft); font-weight: 600; padding-bottom: 4px; }
    .md { position: relative; height: 32px; display: grid; place-items: center; border-radius: var(--radius-sm); font-size: var(--fs-sm); font-weight: 600; }
    .md.out { color: var(--ink-mute); font-weight: 500; }
    .md.done::after { content: ''; position: absolute; bottom: 3px; width: 5px; height: 5px; border-radius: 50%; background: var(--good); }
    .md.today { background: var(--primary); color: var(--white); }
    .md.today.done::after { background: var(--white); }
    .lg { display: flex; align-items: center; gap: 6px; margin-top: var(--space-2); }
    .lg i { width: 6px; height: 6px; border-radius: 50%; background: var(--good); }
    .ck { display: flex; align-items: center; gap: var(--space-2); padding: 6px 0; cursor: pointer; font-size: var(--fs-sm); }
    .ck input { width: 17px; height: 17px; accent-color: var(--primary); }
    .ck i { width: 11px; height: 11px; border-radius: 50%; }
    .up { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2) var(--space-3); border-left: 3px solid var(--c); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; }
    .up + .up { margin-top: var(--space-2); }
    .up:hover { background: var(--slate-50); }
    .up span:nth-child(2) { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.35; }
    .up small { color: var(--ink-soft); }
    .chev { width: 16px; height: 16px; color: var(--primary); }
  `,
})
export class SchedulePage {
  private readonly progress = inject(ProgressService);

  protected readonly kinds = KINDS;
  protected readonly kindList = (Object.keys(KINDS) as PlanKind[]).map((id) => ({ id, ...KINDS[id] }));
  protected readonly dayNames = DAY_NAMES;
  protected readonly firstHour = FIRST_HOUR;
  protected readonly hourPx = HOUR_PX;
  protected readonly hours = Array.from({ length: LAST_HOUR - FIRST_HOUR }, (_, i) => FIRST_HOUR + i);
  protected readonly gridHeight = (LAST_HOUR - FIRST_HOUR) * HOUR_PX;

  protected readonly plan = this.progress.plan;
  protected readonly view = signal<'day' | 'week'>('week');
  /** Số tuần lệch so với tuần hiện tại (ở chế độ ngày: số ngày lệch) */
  protected readonly offset = signal(0);
  protected readonly monthOffset = signal(0);
  protected readonly adding = signal(false);
  protected readonly selected = signal<PlanItem | null>(null);
  protected readonly hidden = signal<Set<PlanKind>>(new Set());

  /** Buổi học đang soạn trong form "Thêm lịch" */
  protected draft: { title: string; kind: PlanKind; day: number; start: string; minutes: number } = { title: '', kind: 'ielts', day: (new Date().getDay() + 6) % 7, start: '19:00', minutes: 45 };

  /** Thứ Hai của tuần đang xem */
  private readonly monday = computed(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + (this.view() === 'week' ? this.offset() * 7 : 0));
    return d;
  });

  /** Các cột ngày đang hiển thị kèm buổi học đã tính vị trí */
  protected readonly days = computed(() => {
    const today = dayKey();
    const hidden = this.hidden();
    const plan = this.plan();
    const cols = [];
    const base = this.monday();
    const only = this.view() === 'day' ? (((new Date().getDay() + 6) % 7) + this.offset()) : null;
    for (let i = 0; i < 7; i++) {
      const offsetDays = only === null ? i : only;
      if (only !== null && i > 0) break;
      const date = new Date(base);
      date.setDate(base.getDate() + offsetDays);
      const index = (date.getDay() + 6) % 7;
      cols.push({
        index: offsetDays, name: DAY_NAMES[index], today: dayKey(date) === today,
        date: `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`,
        events: plan.filter((p) => p.day === index && !hidden.has(p.kind)).map((p) => {
          const start = toMinutes(p.start);
          return { ...p, end: fmt(start + p.minutes), top: ((start - FIRST_HOUR * 60) / 60) * HOUR_PX, height: Math.max(30, (p.minutes / 60) * HOUR_PX - 2) };
        }),
      });
    }
    return cols;
  });

  protected readonly rangeLabel = computed(() => {
    const cols = this.days();
    const first = new Date(this.monday());
    first.setDate(first.getDate() + cols[0].index);
    if (cols.length === 1) return `${cols[0].name}, ${first.getDate()} tháng ${first.getMonth() + 1}, ${first.getFullYear()}`;
    const last = new Date(first);
    last.setDate(first.getDate() + 6);
    const d2 = String(last.getDate()).padStart(2, '0');
    return first.getMonth() === last.getMonth()
      ? `${String(first.getDate()).padStart(2, '0')} - ${d2} tháng ${last.getMonth() + 1}, ${last.getFullYear()}`
      : `${cols[0].date} - ${cols[6].date}, ${last.getFullYear()}`;
  });

  protected readonly totalHours = computed(() => (this.plan().reduce((n, p) => n + p.minutes, 0) / 60).toFixed(1));

  /** Lịch tháng: 6 hàng × 7 ô, kèm XP của từng ngày */
  protected readonly month = computed(() => {
    const logs = this.progress.state().days;
    const now = new Date();
    const first = new Date(now.getFullYear(), now.getMonth() + this.monthOffset(), 1);
    const start = new Date(first);
    start.setDate(1 - ((first.getDay() + 6) % 7));
    const today = dayKey();
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const key = dayKey(d);
      return { key, day: d.getDate(), inMonth: d.getMonth() === first.getMonth(), today: key === today, xp: logs[key]?.xp ?? 0 };
    });
  });
  protected readonly monthLabel = computed(() => {
    const now = new Date();
    const d = new Date(now.getFullYear(), now.getMonth() + this.monthOffset(), 1);
    return `Tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
  });

  /** 4 buổi học gần nhất tính từ bây giờ */
  protected readonly upcoming = computed(() => {
    const now = new Date();
    const todayIdx = (now.getDay() + 6) % 7;
    const nowMin = now.getHours() * 60 + now.getMinutes();
    return this.plan()
      .map((p) => {
        const start = toMinutes(p.start);
        let ahead = (p.day - todayIdx + 7) % 7;
        if (ahead === 0 && start + p.minutes <= nowMin) ahead = 7;
        return { ...p, end: fmt(start + p.minutes), order: ahead * 1440 + start, when: ahead === 0 ? 'Hôm nay' : ahead === 1 ? 'Ngày mai' : DAY_NAMES[p.day] };
      })
      .sort((a, b) => a.order - b.order)
      .slice(0, 4);
  });

  protected shift(step: number): void {
    this.offset.set(this.offset() + step);
  }

  protected endOf(p: PlanItem): string {
    return fmt(toMinutes(p.start) + p.minutes);
  }

  protected toggleKind(kind: PlanKind): void {
    const s = new Set(this.hidden());
    s.has(kind) ? s.delete(kind) : s.add(kind);
    this.hidden.set(s);
  }

  /** Thêm buổi học mới vào lịch tuần */
  protected add(): void {
    const title = this.draft.title.trim();
    if (!title || !/^\d{2}:\d{2}$/.test(this.draft.start)) return;
    const start = Math.min(Math.max(toMinutes(this.draft.start), FIRST_HOUR * 60), LAST_HOUR * 60 - this.draft.minutes);
    const item: PlanItem = { id: `p${Date.now()}`, day: this.draft.day, start: fmt(start), minutes: this.draft.minutes, title, kind: this.draft.kind };
    this.progress.setPlan([...this.plan(), item]);
    this.draft = { ...this.draft, title: '' };
    this.adding.set(false);
    this.selected.set(item);
  }

  protected remove(p: PlanItem): void {
    this.progress.setPlan(this.plan().filter((x) => x.id !== p.id));
    this.selected.set(null);
  }

  protected reset(): void {
    if (window.confirm('Thay lịch hiện tại bằng lịch gợi ý theo mục tiêu học của bạn?')) {
      this.progress.setPlan(undefined);
      this.selected.set(null);
    }
  }
}
