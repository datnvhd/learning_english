/**
 * ring.component.ts – Vòng tròn tiến độ (dùng cho mục tiêu XP hằng ngày, điểm số...).
 *
 * Cách dùng: <app-ring [value]="35" [max]="50" label="XP" />
 * Vòng được vẽ bằng SVG nên sắc nét ở mọi kích thước và không cần ảnh.
 */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-ring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ring" [style.width.px]="size()" [style.height.px]="size()">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="42" class="track" />
        <circle cx="50" cy="50" r="42" class="fill" [style.stroke]="color()"
                [attr.stroke-dasharray]="dash()" transform="rotate(-90 50 50)" />
      </svg>
      <div class="txt">
        <b>{{ value() }}</b>
        @if (label()) {
          <small>{{ label() }}</small>
        }
      </div>
    </div>
  `,
  styles: `
    .ring {
      position: relative;
      flex: none;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    .track {
      fill: none;
      stroke: var(--sky-100);
      stroke-width: 11;
    }
    .fill {
      fill: none;
      stroke-width: 11;
      stroke-linecap: round;
      transition: stroke-dasharray 0.6s ease;
    }
    .txt {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1.05;
    }
    b {
      font-family: var(--font-head);
      font-size: 1.25rem;
    }
    small {
      font-size: 0.68rem;
      color: var(--ink-soft);
    }
  `,
})
export class RingComponent {
  readonly value = input(0);
  readonly max = input(100);
  readonly size = input(76);
  readonly label = input('');
  /** Màu vòng, nhận biến theme – ví dụ 'var(--good)' */
  readonly color = input('var(--good)');

  /** Chuỗi dash của SVG: phần được tô / phần còn lại (chu vi = 2πr ≈ 264) */
  protected readonly dash = computed(() => {
    const circ = 2 * Math.PI * 42;
    const ratio = Math.min(1, Math.max(0, this.value() / (this.max() || 1)));
    return `${(ratio * circ).toFixed(1)} ${circ.toFixed(1)}`;
  });
}
