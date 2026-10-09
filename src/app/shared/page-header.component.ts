/**
 * page-header.component.ts – Thanh tiêu đề trên cùng của các màn hình con.
 *
 * Cách dùng:
 *   <app-page-header title="Luyện nghe" icon="🎧" [back]="'/topics'" [counter]="'3/10'" />
 *  - back   : đường dẫn quay lại (nếu bỏ trống sẽ dùng lịch sử trình duyệt)
 *  - counter: chữ nhỏ bên phải (ví dụ số câu "3/10")
 *  Nội dung chèn vào giữa thẻ (ng-content) sẽ hiển thị ở phía phải (ví dụ nút phụ).
 */
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { IconName } from '../theme/icons';
import { IconComponent } from '../theme/icon.component';

@Component({
  selector: 'app-page-header',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <button class="icon-btn" type="button" (click)="goBack()" aria-label="Quay lại"><app-icon name="chevron-left" [stroke]="2.6" /></button>
      <h1 class="title">
        @if (ico()) {
          <app-icon class="ico" [name]="ico()!" />
        } @else if (icon()) {
          <span class="ic">{{ icon() }}</span>
        }
        {{ title() }}
      </h1>
      <span class="spacer"></span>
      @if (counter()) {
        <span class="counter">{{ counter() }} <span class="star">★</span></span>
      }
      <ng-content />
    </header>
  `,
  styles: `
    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }
    .icon-btn {
      font-size: 1.6rem;
      line-height: 1;
      padding-bottom: 3px;
    }
    .title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.35rem;
      background: var(--white);
      padding: 6px 18px 6px 12px;
      border-radius: 999px;
      box-shadow: var(--shadow-sm);
      color: var(--primary-dark);
    }
    .ic {
      font-size: 1.3rem;
    }
    .ico {
      width: 24px;
      height: 24px;
      color: var(--primary);
    }
    .counter {
      font-family: var(--font-head);
      color: var(--ink-soft);
      font-size: 1.05rem;
    }
    .star {
      color: var(--accent);
    }
  `,
})
export class PageHeaderComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly title = input.required<string>();
  readonly icon = input('');
  /** Icon theo bộ icon của theme (ưu tiên hơn emoji) */
  readonly ico = input<IconName | null>(null);
  readonly back = input<string | null>(null);
  readonly counter = input('');

  /** Quay lại: về đường dẫn chỉ định, nếu không có thì lùi lịch sử */
  protected goBack(): void {
    const target = this.back();
    if (target) this.router.navigateByUrl(target);
    else this.location.back();
  }
}
