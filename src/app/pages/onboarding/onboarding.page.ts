/**
 * onboarding.page.ts – Làm quen 3 bước (chỉ hiện lần đầu), giúp cá nhân hóa lộ trình học:
 *   1. Mục tiêu: Bé vui học / Giao tiếp hằng ngày / Công việc / IELTS / TOEIC
 *   2. Trình độ: Mới bắt đầu / Cơ bản / Khá
 *   3. Thời gian mỗi ngày: 5 / 10 / 15 / 20 phút  → quy ra mục tiêu XP
 * Kết quả lưu vào Cài đặt (goal, level, dailyGoal) và dùng để gợi ý nhiệm vụ hằng ngày.
 * Mỗi lựa chọn là một thẻ lớn (≥ 56px) dễ chạm cho trẻ em; có thể "Bỏ qua" bất cứ lúc nào.
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { LearnerLevel, LearningGoal } from '../../models/progress.model';
import { BongComponent } from '../../shared/bong.component';
import { IconComponent } from '../../theme/icon.component';
import { IconName } from '../../theme/icons';

interface Choice<T> {
  id: T;
  title: string;
  desc: string;
  icon: IconName;
  tone: string;
}

const GOALS: Choice<LearningGoal>[] = [
  { id: 'kids', title: 'Mới bắt đầu', desc: 'Học qua hình ảnh, trò chơi và phát âm chuẩn', icon: 'mood-smile', tone: 'blossom' },
  { id: 'daily', title: 'Giao tiếp hằng ngày', desc: 'Gia đình, mua sắm, du lịch, ăn uống...', icon: 'message-circle', tone: 'sky' },
  { id: 'work', title: 'Công việc', desc: 'Tiếng Anh văn phòng và công nghệ IT', icon: 'briefcase', tone: 'grape' },
  { id: 'ielts', title: 'Luyện thi IELTS', desc: 'Nghe – Đọc – Viết – Nói theo dạng đề IELTS', icon: 'school', tone: 'leaf' },
  { id: 'toeic', title: 'Luyện thi TOEIC', desc: 'Part 2–7 kèm giải thích tiếng Việt', icon: 'certificate', tone: 'tangerine' },
];

const LEVELS: Choice<LearnerLevel>[] = [
  { id: 'starter', title: 'Mới bắt đầu', desc: 'Mình mới làm quen với tiếng Anh', icon: 'sparkles', tone: 'sun' },
  { id: 'basic', title: 'Cơ bản', desc: 'Biết từ vựng và câu đơn giản', icon: 'star', tone: 'sky' },
  { id: 'intermediate', title: 'Khá', desc: 'Đọc hiểu đoạn văn, muốn nâng cao', icon: 'rocket', tone: 'grape' },
];

const TIMES = [
  { minutes: 5, xp: 30, desc: 'Nhẹ nhàng' },
  { minutes: 10, xp: 50, desc: 'Vừa sức (gợi ý)' },
  { minutes: 15, xp: 80, desc: 'Chăm chỉ' },
  { minutes: 20, xp: 120, desc: 'Siêu tốc' },
];

@Component({
  selector: 'app-onboarding',
  imports: [BongComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page no-nav stack wrap">
      <div class="top">
        <div class="dots" aria-label="Bước {{ step() + 1 }} trên 3">
          @for (i of [0, 1, 2]; track i) {
            <i [class.on]="i <= step()"></i>
          }
        </div>
        <button class="btn btn-ghost btn-sm" type="button" (click)="finish()">Bỏ qua</button>
      </div>

      <app-bong mood="hello" [size]="84" [message]="bongSays()" [tappable]="false" />

      @switch (step()) {
        @case (0) {
          <div class="choices">
            @for (c of goals; track c.id) {
              <button type="button" class="choice" [class.sel]="goal() === c.id" (click)="goal.set(c.id)"
                      [style.--tone]="'var(--' + c.tone + '-500)'" [style.--tone-soft]="'var(--' + c.tone + '-100)'">
                <span class="ic"><app-icon [name]="c.icon" /></span>
                <span class="tx"><b>{{ c.title }}</b><small>{{ c.desc }}</small></span>
                @if (goal() === c.id) { <app-icon name="check" class="ok" [stroke]="3" /> }
              </button>
            }
          </div>
        }
        @case (1) {
          <div class="choices">
            @for (c of levels; track c.id) {
              <button type="button" class="choice" [class.sel]="level() === c.id" (click)="level.set(c.id)"
                      [style.--tone]="'var(--' + c.tone + '-500)'" [style.--tone-soft]="'var(--' + c.tone + '-100)'">
                <span class="ic"><app-icon [name]="c.icon" /></span>
                <span class="tx"><b>{{ c.title }}</b><small>{{ c.desc }}</small></span>
                @if (level() === c.id) { <app-icon name="check" class="ok" [stroke]="3" /> }
              </button>
            }
          </div>
        }
        @default {
          <div class="times">
            @for (t of times; track t.minutes) {
              <button type="button" class="time" [class.sel]="minutes() === t.minutes" (click)="minutes.set(t.minutes)">
                <b>{{ t.minutes }}</b><span>phút/ngày</span><small>{{ t.desc }}</small>
              </button>
            }
          </div>
          <p class="muted center">Mục tiêu hằng ngày: <b>{{ xpGoal() }} XP</b> · bạn có thể đổi trong Cài đặt</p>
        }
      }

      <div class="row nav">
        @if (step() > 0) {
          <button class="btn btn-ghost" type="button" (click)="step.set(step() - 1)"><app-icon name="chevron-left" /> Quay lại</button>
        }
        <span class="spacer"></span>
        <button class="btn btn-accent btn-lg" type="button" (click)="next()">
          {{ step() < 2 ? 'Tiếp tục' : 'Bắt đầu học' }} <app-icon name="arrow-right" />
        </button>
      </div>
    </main>
  `,
  styles: `
    .wrap { max-width: 520px; }
    .top { display: flex; align-items: center; justify-content: space-between; }
    .dots { display: flex; gap: 6px; }
    .dots i { width: 36px; height: 8px; border-radius: var(--radius-pill); background: var(--sky-200); transition: background var(--motion-base); }
    .dots i.on { background: var(--primary); }
    .choices { display: flex; flex-direction: column; gap: var(--space-3); }
    .choice {
      display: flex; align-items: center; gap: var(--space-3); min-height: 72px; padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-lg); background: var(--surface); border: 3px solid var(--line); text-align: left;
      box-shadow: var(--shadow-sm); transition: transform var(--motion-fast), border-color var(--motion-fast);
    }
    .choice:active { transform: scale(0.98); }
    .choice.sel { border-color: var(--tone); background: var(--tone-soft); }
    .choice .ic { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: var(--tone-soft); color: var(--tone); flex: none; }
    .choice.sel .ic { background: var(--surface); }
    .choice .ic app-icon { width: 26px; height: 26px; }
    .tx { flex: 1; display: flex; flex-direction: column; }
    .tx b { font-size: var(--fs-lg); }
    .tx small { color: var(--ink-soft); }
    .ok { color: var(--tone); width: 26px; height: 26px; }
    .times { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); }
    .time {
      display: flex; flex-direction: column; align-items: center; padding: var(--space-4) var(--space-2); border-radius: var(--radius-lg);
      background: var(--surface); border: 3px solid var(--line); box-shadow: var(--shadow-sm);
    }
    .time b { font-family: var(--font-head); font-size: var(--fs-3xl); color: var(--primary-dark); line-height: 1; }
    .time small { color: var(--ink-soft); }
    .time.sel { border-color: var(--accent-dark); background: var(--accent-soft); }
    .nav { margin-top: var(--space-2); }
  `,
})
export class OnboardingPage {
  private readonly progress = inject(ProgressService);
  private readonly router = inject(Router);
  private readonly speech = inject(SpeechService);

  protected readonly goals = GOALS;
  protected readonly levels = LEVELS;
  protected readonly times = TIMES;

  protected readonly step = signal(0);
  protected readonly goal = signal<LearningGoal>(this.progress.settings().goal ?? 'daily');
  protected readonly level = signal<LearnerLevel>(this.progress.settings().level ?? 'basic');
  protected readonly minutes = signal(10);
  protected readonly xpGoal = computed(() => TIMES.find((t) => t.minutes === this.minutes())?.xp ?? 50);

  protected readonly bongSays = computed(() => {
    const name = this.progress.settings().name;
    return [
      `Chào ${name}! Bạn học tiếng Anh để làm gì nào?`,
      'Bạn đang ở trình độ nào? Chọn thật lòng nhé, không sao đâu!',
      'Mỗi ngày bạn muốn học bao lâu? Học đều quan trọng hơn học nhiều!',
    ][this.step()];
  });

  protected next(): void {
    if (this.step() < 2) this.step.update((s) => s + 1);
    else this.finish();
  }

  /** Lưu lựa chọn và vào trang chủ */
  protected finish(): void {
    this.progress.updateSettings({ goal: this.goal(), level: this.level(), dailyGoal: this.xpGoal(), onboarded: true });
    void this.speech.bong('hello');
    this.router.navigateByUrl('/home');
  }
}
