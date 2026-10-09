/**
 * icon.component.ts – Icon vector thống nhất toàn app (bộ Tabler Icons, nét tròn 2px).
 *
 * Cách dùng:  <app-icon name="headphones" />   (kích thước theo CSS width/height, mặc định 1.25em)
 * Màu icon = màu chữ hiện tại (currentColor) nên tự khớp theme ở mọi nơi.
 * Icon mang tính trang trí nên mặc định ẩn với trình đọc màn hình; truyền `label` nếu cần đọc.
 */
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS, IconName } from './icons';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.role]': "label() ? 'img' : null",
    '[attr.aria-label]': 'label() || null',
    '[attr.aria-hidden]': "label() ? null : 'true'",
  },
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" [attr.stroke-width]="stroke()"
                  stroke-linecap="round" stroke-linejoin="round" [innerHTML]="svg()"></svg>`,
  styles: `
    :host {
      display: inline-flex;
      width: 1.25em;
      height: 1.25em;
      flex: none;
      vertical-align: middle;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class IconComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input.required<IconName>();
  readonly stroke = input(2);
  readonly label = input('');

  /** Nội dung SVG lấy từ bộ icon đóng gói sẵn (hằng số trong mã, không phải dữ liệu người dùng) */
  protected readonly svg = computed<SafeHtml>(() => this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name()] ?? ''));
}
