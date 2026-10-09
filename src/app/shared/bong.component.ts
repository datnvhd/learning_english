/**
 * bong.component.ts – Ô "trợ lý học tập": biểu tượng tròn kèm lời nhắn (gợi ý, khen, động viên).
 *
 * Trong giao diện English Master, trợ lý hiển thị bằng icon theo theme thay cho ảnh linh vật.
 * Tên component và các input được giữ nguyên để mọi màn hình cũ dùng tiếp.
 * Cách dùng:  <app-bong mood="cheer" [size]="84" message="Giỏi lắm!" />
 *  - mood   : 'cheer' (chúc mừng, màu xanh lá) · 'hello' (thông tin, xanh dương) · 'write' (gợi ý, tím) · 'avatar'
 *  - size   : cỡ ô (px) – ô icon bằng khoảng 55% giá trị này
 *  - message: lời nhắn hiện bên cạnh (bỏ trống thì chỉ có icon)
 *  - flip   : đặt lời nhắn bên trái icon
 *  - tappable: bấm vào để nghe một mẹo học bằng giọng tiếng Việt thu sẵn (mặc định bật)
 */
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { BONG_LINES, BongLineKey } from '../data/bong-lines';
import { SpeechService } from '../core/speech.service';
import { IconComponent } from '../theme/icon.component';
import { IconName } from '../theme/icons';

/** Sắc thái của trợ lý */
export type BongMood = 'hello' | 'cheer' | 'write' | 'avatar';

const MOOD: Record<BongMood, { icon: IconName; color: string }> = {
  hello: { icon: 'message-circle', color: 'var(--primary)' },
  cheer: { icon: 'trophy', color: 'var(--good)' },
  write: { icon: 'bulb', color: 'var(--grape-500)' },
  avatar: { icon: 'user', color: 'var(--primary)' },
};

@Component({
  selector: 'app-bong',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bong" [class.flip]="flip()" [class.tap]="tappable()" [class.jump]="jump()" [class.solo]="!shown()" [style.--c]="look().color"
         (click)="tapped()" (keyup.enter)="tapped()" [attr.role]="tappable() ? 'button' : null" [attr.tabindex]="tappable() ? 0 : null"
         [attr.aria-label]="tappable() ? 'Bấm để nghe một mẹo học' : null">
      <span class="pic" [style.width.px]="box()" [style.height.px]="box()"><app-icon [name]="look().icon" /></span>
      @if (shown()) {
        <div class="bubble" role="status">{{ shown() }}</div>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .bong { display: flex; align-items: center; gap: var(--space-3); text-align: left; }
    .bong.solo { justify-content: center; }
    .bong.tap { cursor: pointer; }
    .bong.flip { flex-direction: row-reverse; }
    .pic {
      flex: none; display: grid; place-items: center; border-radius: 50%;
      background: color-mix(in srgb, var(--c) 12%, var(--white)); color: var(--c);
      transition: transform var(--motion-base) var(--motion-bounce);
    }
    .pic app-icon { width: 52%; height: 52%; }
    .bong.jump .pic { transform: scale(1.12); }
    .bubble {
      flex: 1; min-width: 0; padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
      background: color-mix(in srgb, var(--c) 6%, var(--white)); border: 1px solid color-mix(in srgb, var(--c) 22%, var(--white));
      color: var(--slate-700); font-weight: 500; line-height: 1.5; animation: fade-up var(--motion-base) var(--motion-ease);
    }
  `,
})
export class BongComponent {
  readonly mood = input<BongMood>('cheer');
  readonly size = input(76);
  readonly message = input('');
  readonly flip = input(false);
  /** Cho phép bấm để nghe một mẹo học (mặc định bật) */
  readonly tappable = input(true);

  private readonly speech = inject(SpeechService);
  /** Lời mẹo tạm thời thay cho message khi người dùng bấm vào */
  private readonly tip = signal('');
  protected readonly jump = signal(false);
  protected readonly shown = computed(() => this.tip() || this.message());
  protected readonly look = computed(() => MOOD[this.mood()]);
  /** Cỡ ô icon: nhỏ hơn cỡ ảnh linh vật cũ để hợp bố cục mới */
  protected readonly box = computed(() => Math.round(Math.max(36, this.size() * 0.55)));
  private static tipIndex = 0;

  /** Bấm vào: hiện và đọc một mẹo học (lần lượt, không lặp liên tiếp) */
  protected tapped(): void {
    if (!this.tappable()) return;
    const key = `tip${(BongComponent.tipIndex++ % 8) + 1}` as BongLineKey;
    this.tip.set(BONG_LINES[key]);
    this.jump.set(true);
    setTimeout(() => this.jump.set(false), 520);
    setTimeout(() => this.tip.set(''), 5000);
    void this.speech.bong(key);
  }
}
