/**
 * app.ts – Khung ứng dụng (App Shell) theo thiết kế "English Master OFFLINE".
 *
 *  ┌──────────────────────────── topbar ────────────────────────────┐
 *  │ logo · ô tìm kiếm · Offline mode · chuỗi ngày · thời gian · 🔔 · học viên │
 *  ├── sidebar ──┬───────────────────────────────────────────────────┤
 *  │ điều hướng  │  router-outlet (các màn hình)                     │
 *  │ thẻ Offline │                                                   │
 *  └─────────────┴───────────────────────────────────────────────────┘
 *  Màn hình hẹp: sidebar thu lại thành ngăn kéo, mở bằng nút ☰ trên topbar.
 *  App cũng đếm thời gian học (mỗi 30 giây khi tab đang hiển thị) để hiện "Hôm nay".
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { OfflineService, formatBytes } from './core/offline.service';
import { ProgressService } from './core/progress.service';
import { UxService } from './core/ux.service';
import { formatDuration } from './core/text-utils';
import { ToastHostComponent } from './shared/toast-host.component';
import { WordSheetComponent } from './shared/word-sheet.component';
import { IconComponent } from './theme/icon.component';
import { IconName } from './theme/icons';

/** Một mục của thanh bên: `match` là các tiền tố đường dẫn làm mục này sáng lên */
interface NavItem {
  link: string;
  label: string;
  icon: IconName;
  match: RegExp;
}

const NAV: NavItem[] = [
  { link: '/home', label: 'Dashboard', icon: 'home', match: /^\/(home|topics|onboarding)?(\?|$)/ },
  { link: '/ielts', label: 'IELTS', icon: 'school', match: /^\/(ielts|session\/exam\/ielts\?(?!.*mock))/ },
  { link: '/toeic', label: 'TOEIC', icon: 'file-description', match: /^\/(toeic|session\/exam\/toeic\?(?!.*mock))/ },
  { link: '/vocab', label: 'Từ vựng & Cụm từ', icon: 'letter-case', match: /^\/(vocab|word|learn|topic|search|session\/(lesson|review))/ },
  { link: '/practice', label: 'Practice', icon: 'pencil', match: /^\/(practice|grammar|game|session\/(skill|test|mixed|grammar))/ },
  { link: '/mock', label: 'Mock Test', icon: 'file-text', match: /^\/(mock|session\/exam\/\w+\?.*mock)/ },
  { link: '/errors', label: 'Error Review', icon: 'alert-triangle', match: /^\/errors/ },
  { link: '/progress', label: 'Progress', icon: 'chart-bar', match: /^\/(progress|me)/ },
  { link: '/schedule', label: 'Lịch học', icon: 'calendar-event', match: /^\/schedule/ },
  { link: '/settings', label: 'Settings', icon: 'settings', match: /^\/settings/ },
];

@Component({
  selector: 'app-root',
  imports: [IconComponent, RouterOutlet, RouterLink, WordSheetComponent, ToastHostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="topbar">
      <button class="menu" type="button" (click)="drawer.set(!drawer())" aria-label="Mở menu"><app-icon name="menu-2" /></button>
      <a class="brand" routerLink="/home" aria-label="English Master – về Dashboard">
        <span class="logo"><app-icon name="book" [stroke]="2.4" /></span>
        <b>English Master</b>
        <span class="off">OFFLINE</span>
      </a>

      <form class="search" role="search" (submit)="search($event, q.value); q.blur()">
        <app-icon name="search" />
        <input #q type="search" placeholder="Tìm bài học, từ vựng, đề thi, chủ đề..." aria-label="Tìm kiếm" autocomplete="off" />
      </form>

      <span class="grow"></span>

      <a class="net" routerLink="/settings" fragment="data" [class.offline]="!online()"
         [title]="online() ? 'Mọi dữ liệu học đã nằm trên máy – không cần Internet' : 'Máy đang không có mạng – app vẫn hoạt động đầy đủ'">
        <app-icon [name]="online() ? 'wifi' : 'wifi-off'" />
        <span>{{ online() ? 'Offline mode' : 'Đang offline' }}</span>
        <app-icon name="check" [stroke]="3" class="ck" />
      </a>

      <a class="meter" routerLink="/progress" title="Chuỗi ngày học liên tiếp">
        <app-icon name="flame" class="fire" />
        <span><b>{{ streak() }} ngày</b><small>Streak</small></span>
      </a>
      <a class="meter time" routerLink="/progress" title="Thời gian học hôm nay">
        <app-icon name="clock" />
        <span><b>{{ todayTime() }}</b><small>Hôm nay</small></span>
      </a>

      <div class="bellwrap">
        <button class="bell" type="button" (click)="notes.set(!notes())" [attr.aria-expanded]="notes()" aria-label="Thông báo">
          <app-icon name="bell" />
          @if (noteCount() > 0) { <i>{{ noteCount() > 99 ? '99+' : noteCount() }}</i> }
        </button>
        @if (notes()) {
          <div class="pop card" (click)="notes.set(false)">
            <b class="pt">Nhắc việc hôm nay</b>
            @for (n of noteList(); track n.link) {
              <a class="pn" [routerLink]="n.link">
                <span class="tile-ic sm" [style.--c]="n.color"><app-icon [name]="n.icon" /></span>
                <span><b>{{ n.title }}</b><small>{{ n.desc }}</small></span>
              </a>
            } @empty {
              <p class="muted pe">Hôm nay bạn đã hoàn thành hết việc cần làm.</p>
            }
          </div>
        }
      </div>

      <a class="user" routerLink="/settings" aria-label="Hồ sơ và cài đặt">
        <span class="ava">{{ initial() }}</span>
        <span class="un">{{ name() }}</span>
        <app-icon name="chevron-down" />
      </a>
    </header>

    <div class="body">
      <aside class="sidebar" [class.open]="drawer()">
        <nav aria-label="Điều hướng chính">
          @for (item of items; track item.link) {
            <a class="nav" [routerLink]="item.link" [class.active]="active() === item.link" (click)="drawer.set(false)"
               [attr.aria-current]="active() === item.link ? 'page' : null">
              <app-icon [name]="item.icon" />
              <span>{{ item.label }}</span>
              @if (item.link === '/errors' && errorCount() > 0) { <i>{{ errorCount() > 99 ? '99+' : errorCount() }}</i> }
              @if (item.link === '/vocab' && due() > 0) { <i>{{ due() > 99 ? '99+' : due() }}</i> }
            </a>
          }
        </nav>

        <section class="offcard">
          <b class="oh"><app-icon name="wifi-off" /> Hoàn toàn Offline</b>
          <p>Tất cả dữ liệu được lưu trên thiết bị này. Không cần Internet.</p>
          <hr />
          <small class="ol">Dung lượng dữ liệu</small>
          <small class="ov">{{ packSize }} · {{ packFiles }} tệp</small>
          <div class="bar"><i [style.width.%]="savedPercent()"></i></div>
          <a class="btn btn-ghost btn-sm btn-block" routerLink="/settings" fragment="data" (click)="drawer.set(false)">Quản lý dữ liệu</a>
        </section>
      </aside>
      @if (drawer()) { <div class="scrim" (click)="drawer.set(false)"></div> }

      <div class="content">
        <router-outlet />
      </div>
    </div>

    <app-word-sheet />
    <app-toast-host />
  `,
  styles: `
    :host { display: block; min-height: 100vh; }
    .topbar {
      position: sticky; top: 0; z-index: 60; height: var(--topbar-h);
      display: flex; align-items: center; gap: var(--space-4); padding: 0 var(--space-5);
      background: color-mix(in srgb, var(--white) 92%, transparent); backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--line);
    }
    .menu { display: none; width: 38px; height: 38px; border-radius: var(--radius-sm); place-items: center; color: var(--ink); }
    .menu app-icon { width: 24px; height: 24px; }
    .brand { display: flex; align-items: center; gap: var(--space-2); width: calc(var(--sidebar-w) - var(--space-5)); flex: none; }
    .brand b { font-size: var(--fs-lg); letter-spacing: -0.02em; white-space: nowrap; }
    .logo { width: 34px; height: 34px; display: grid; place-items: center; border-radius: var(--radius-sm); background: var(--primary); color: var(--white); }
    .logo app-icon { width: 22px; height: 22px; }
    .off { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: var(--radius-pill); background: var(--sky-100); color: var(--primary-dark); }
    .search {
      display: flex; align-items: center; gap: var(--space-2); flex: 1; max-width: 500px; min-width: 120px; height: 40px;
      padding: 0 var(--space-4); border-radius: var(--radius-pill); background: var(--slate-100); border: 1px solid transparent; color: var(--ink-soft);
      transition: border-color var(--motion-fast), background var(--motion-fast);
    }
    .search:focus-within { background: var(--white); border-color: var(--primary); }
    .search app-icon { width: 18px; height: 18px; }
    .search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; }
    .grow { flex: 1; }
    .net { display: flex; align-items: center; gap: 6px; color: var(--good-dark); font-weight: 600; font-size: var(--fs-sm); white-space: nowrap; }
    .net app-icon { width: 22px; height: 22px; }
    .net .ck { width: 16px; height: 16px; }
    .net.offline { color: var(--tangerine-600); }
    .meter { display: flex; align-items: center; gap: var(--space-2); padding-left: var(--space-4); border-left: 1px solid var(--line); white-space: nowrap; }
    .meter app-icon { width: 24px; height: 24px; color: var(--ink); }
    .meter .fire { color: var(--tangerine-500); }
    .meter span { display: flex; flex-direction: column; line-height: 1.2; }
    .meter b { font-size: var(--fs-sm); }
    .meter small { color: var(--ink-soft); font-size: 0.72rem; }
    .bellwrap { position: relative; }
    .bell { position: relative; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; color: var(--ink); }
    .bell:hover { background: var(--slate-100); }
    .bell app-icon { width: 22px; height: 22px; }
    .bell i, .nav i {
      font-style: normal; min-width: 18px; padding: 0 5px; border-radius: var(--radius-pill); background: var(--bad); color: var(--white);
      font-size: 0.68rem; font-weight: 700; line-height: 18px; text-align: center;
    }
    .bell i { position: absolute; top: 0; right: -2px; }
    .pop { position: absolute; right: 0; top: 46px; width: 320px; box-shadow: var(--shadow-lg); display: flex; flex-direction: column; gap: var(--space-2); animation: fade-up var(--motion-base) var(--motion-ease); }
    .pn { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2); border-radius: var(--radius-sm); }
    .pn:hover { background: var(--slate-50); }
    .pn span:last-child { display: flex; flex-direction: column; line-height: 1.3; }
    .pn small { color: var(--ink-soft); }
    .pe { padding: var(--space-2); }
    .user { display: flex; align-items: center; gap: var(--space-2); white-space: nowrap; font-weight: 600; }
    .user app-icon { width: 16px; height: 16px; color: var(--ink-soft); }
    .ava { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: var(--primary); color: var(--white); font-weight: 700; }

    .body { display: flex; align-items: flex-start; }
    .sidebar {
      position: sticky; top: var(--topbar-h); z-index: 40; width: var(--sidebar-w); flex: none; height: calc(100vh - var(--topbar-h));
      display: flex; flex-direction: column; justify-content: space-between; gap: var(--space-4);
      padding: var(--space-3) var(--space-3) var(--space-4); overflow-y: auto; background: var(--white); border-right: 1px solid var(--line);
    }
    nav { display: flex; flex-direction: column; gap: 4px; }
    .nav {
      display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 var(--space-3); border-radius: var(--radius-md);
      color: var(--slate-700); font-weight: 600; transition: background var(--motion-fast);
    }
    .nav app-icon { width: 22px; height: 22px; color: var(--slate-600); }
    .nav span { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .nav:hover { background: var(--slate-100); }
    .nav.active { background: var(--primary); color: var(--white); box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 28%, transparent); }
    .nav.active app-icon { color: var(--white); }
    .nav.active i { background: var(--white); color: var(--primary-dark); }
    .offcard { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2); background: var(--white); }
    .oh { display: flex; align-items: center; gap: var(--space-2); }
    .oh app-icon { width: 22px; height: 22px; }
    .offcard p { color: var(--ink-soft); font-size: var(--fs-xs); line-height: 1.5; }
    .offcard hr { width: 100%; border: 0; border-top: 1px solid var(--line); margin: var(--space-1) 0; }
    .ol { font-weight: 700; }
    .ov { color: var(--ink-soft); }
    .content { flex: 1; min-width: 0; }
    .scrim { display: none; }

    @media (max-width: 1280px) {
      .meter small { display: none; }
      .net span { display: none; }
    }
    @media (max-width: 980px) {
      .menu { display: grid; }
      .brand { width: auto; }
      .brand .off, .un, .user app-icon { display: none; }
      .sidebar { position: fixed; left: 0; top: var(--topbar-h); transform: translateX(-100%); transition: transform var(--motion-base) var(--motion-ease); box-shadow: var(--shadow-lg); }
      .sidebar.open { transform: none; }
      .scrim { display: block; position: fixed; inset: var(--topbar-h) 0 0 0; z-index: 30; background: color-mix(in srgb, var(--slate-800) 35%, transparent); }
    }
    @media (max-width: 700px) {
      .topbar { gap: var(--space-2); padding: 0 var(--space-3); }
      .brand b, .net, .meter.time { display: none; }
      .search { min-width: 0; padding: 0 var(--space-3); }
      .meter { border: 0; padding: 0; }
      .pop { position: fixed; right: var(--space-3); left: var(--space-3); width: auto; top: calc(var(--topbar-h) + 4px); }
    }
  `,
})
export class App {
  private readonly router = inject(Router);
  private readonly progress = inject(ProgressService);
  private readonly offline = inject(OfflineService);
  /** Khởi tạo sớm để áp dụng cỡ chữ / giảm chuyển động ngay từ đầu */
  private readonly ux = inject(UxService);

  protected readonly items = NAV;
  protected readonly drawer = signal(false);
  protected readonly notes = signal(false);

  protected readonly online = this.offline.online;
  protected readonly packSize = formatBytes(this.offline.packBytes);
  protected readonly packFiles = this.offline.packFiles.toLocaleString('vi-VN');
  protected readonly streak = this.progress.streak;
  protected readonly due = this.progress.dueCount;
  protected readonly errorCount = computed(() => this.progress.errors().length);
  protected readonly name = computed(() => this.progress.settings().name);
  protected readonly initial = computed(() => (this.name().trim()[0] ?? 'H').toUpperCase());
  protected readonly todayTime = computed(() => formatDuration(this.progress.todaySeconds()));

  /** Thanh dung lượng: 100% khi đã tải toàn bộ dữ liệu vào trình duyệt, nếu không thì theo dung lượng đã lưu */
  protected readonly savedPercent = computed(() => {
    if (this.offline.readyAt()) return 100;
    if (this.offline.download().running) return this.offline.downloadPercent();
    const total = this.offline.packBytes;
    return total ? Math.min(100, Math.round((this.offline.usage() / total) * 100)) : 0;
  });

  /** Đường dẫn hiện tại (cập nhật sau mỗi lần chuyển trang) */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Mục thanh bên đang sáng */
  protected readonly active = computed(() => {
    const url = this.url();
    // Thi thử (có ?mock) thuộc Mock Test, xét trước IELTS/TOEIC
    if (/^\/session\/exam\/\w+\?.*mock=/.test(url)) return '/mock';
    return NAV.find((n) => n.match.test(url))?.link ?? '/home';
  });

  /** Danh sách nhắc việc trong chuông thông báo */
  protected readonly noteList = computed(() => {
    const out: { link: string; icon: IconName; color: string; title: string; desc: string }[] = [];
    const due = this.due();
    const errors = this.errorCount();
    const today = this.progress.today();
    if (due > 0) out.push({ link: '/session/review/all', icon: 'refresh', color: 'var(--tangerine-500)', title: `Ôn ${due} từ đến hạn`, desc: 'Ôn đúng lúc để nhớ lâu hơn' });
    if (errors > 0) out.push({ link: '/errors', icon: 'alert-triangle', color: 'var(--coral-500)', title: `${errors} câu sai cần xem lại`, desc: 'Xem giải thích và luyện lại' });
    if (today.lessons < 1) out.push({ link: '/vocab', icon: 'letter-case', color: 'var(--grape-500)', title: 'Học 1 bài từ vựng mới', desc: 'Khoảng 12 từ có phát âm và ví dụ' });
    if (today.xp < this.progress.settings().dailyGoal) out.push({ link: '/schedule', icon: 'calendar-event', color: 'var(--sky-500)', title: 'Xem lịch học hôm nay', desc: `Mục tiêu ${this.progress.settings().dailyGoal} XP – đã đạt ${today.xp} XP` });
    return out;
  });
  protected readonly noteCount = computed(() => this.noteList().length);

  constructor() {
    // Đếm thời gian học: +30 giây mỗi nửa phút khi tab đang hiển thị
    if (typeof window !== 'undefined') {
      setInterval(() => {
        if (document.visibilityState === 'visible') this.progress.addTime(30);
      }, 30_000);
    }
  }

  /** Tìm kiếm từ ô trên topbar: chuyển sang trang tra từ với từ khóa */
  protected search(ev: Event, q: string): void {
    ev.preventDefault();
    void this.router.navigate(['/search'], { queryParams: q.trim() ? { q: q.trim() } : {} });
  }
}
