/**
 * art.component.ts – Hiển thị một hình minh họa (ảnh WebP đóng gói sẵn, dùng được offline).
 *
 * Cách dùng:  <app-art kind="travel" />   hoặc   <app-art kind="bong-hello" style="width:80px;height:80px" />
 *
 * - Tỉ lệ khung mặc định theo kích thước gốc của ảnh (ART_SIZE) để bố cục không nhảy khi ảnh đang tải.
 *   Trang có thể đặt tỉ lệ khác bằng CSS (ví dụ `app-art.thumb { aspect-ratio: 1 }`); ảnh sẽ được cắt vừa khung
 *   (object-fit: cover) và canh theo `focus` (mặc định ưu tiên phần trên – nơi thường có khuôn mặt nhân vật).
 * - Ảnh nằm trong public/assets/art nên được service worker lưu đệm cho chế độ offline.
 */
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ART_SIZE, ArtKind, artSrc } from './art';

@Component({
  selector: 'app-art',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[style.--art-ratio]': 'ratio()' },
  template: `<img [src]="src()" [alt]="label()" [style.object-position]="focus()" decoding="async" draggable="false" />`,
  styles: `
    :host {
      display: block;
      overflow: hidden;
      line-height: 0;
      aspect-ratio: var(--art-ratio);
      background: var(--sky-100);
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
  `,
})
export class ArtComponent {
  /** Hình cần hiển thị */
  readonly kind = input.required<ArtKind>();
  /** Mô tả cho trình đọc màn hình */
  readonly alt = input('');
  /** Vị trí canh ảnh khi khung khác tỉ lệ ảnh (giá trị object-position) */
  readonly focus = input('50% 30%');

  protected readonly src = computed(() => artSrc(this.kind()));
  protected readonly ratio = computed(() => {
    const [w, h] = ART_SIZE[this.kind()];
    return `${w} / ${h}`;
  });
  protected readonly label = computed(() => this.alt() || `Hình minh họa ${this.kind()}`);
}
