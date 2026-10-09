/**
 * donut.component.ts – Biểu đồ vành khuyên nhiều phần (tỉ lệ luyện tập, phân bố kết quả, tiến độ từ vựng...).
 *
 * Cách dùng:
 *   <app-donut [segments]="[{ value: 32, color: 'var(--good)' }, { value: 8, color: 'var(--bad)' }]" [size]="150">
 *     <b>32/40</b><small>câu đúng</small>
 *   </app-donut>
 * Nội dung bên trong thẻ hiển thị ở giữa vành. `total` (tùy chọn) lớn hơn tổng các phần thì phần còn lại để trống.
 */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface DonutSegment {
  value: number;
  /** Màu theo theme, ví dụ 'var(--good)' */
  color: string;
}

@Component({
  selector: 'app-donut',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="donut" [style.width.px]="size()" [style.height.px]="size()">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" [attr.r]="r()" class="track" [attr.stroke-width]="thickness()" />
        @for (a of arcs(); track $index) {
          <circle cx="50" cy="50" [attr.r]="r()" class="arc" [attr.stroke-width]="thickness()" [style.stroke]="a.color"
                  [attr.stroke-dasharray]="a.dash" [attr.stroke-dashoffset]="a.offset" transform="rotate(-90 50 50)" />
        }
      </svg>
      <div class="mid"><ng-content /></div>
    </div>
  `,
  styles: `
    :host { display: inline-block; flex: none; }
    .donut { position: relative; }
    svg { width: 100%; height: 100%; display: block; }
    circle { fill: none; }
    .track { stroke: var(--slate-200); }
    .arc { transition: stroke-dasharray var(--motion-slow) var(--motion-ease); }
    .mid { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15; text-align: center; }
    .mid ::ng-deep b { font-size: 1.35em; }
    .mid ::ng-deep small { color: var(--ink-soft); }
  `,
})
export class DonutComponent {
  readonly segments = input.required<DonutSegment[]>();
  readonly size = input(120);
  readonly thickness = input(12);
  /** Tổng để tính tỉ lệ; mặc định = tổng các phần */
  readonly total = input(0);

  protected readonly r = computed(() => 50 - this.thickness() / 2 - 1);

  protected readonly arcs = computed(() => {
    const segs = this.segments().filter((s) => s.value > 0);
    const sum = segs.reduce((n, s) => n + s.value, 0);
    const total = Math.max(this.total(), sum) || 1;
    const circ = 2 * Math.PI * this.r();
    let acc = 0;
    return segs.map((s) => {
      const len = (s.value / total) * circ;
      const arc = { color: s.color, dash: `${len.toFixed(2)} ${(circ - len).toFixed(2)}`, offset: (-acc).toFixed(2) };
      acc += len;
      return arc;
    });
  });
}
