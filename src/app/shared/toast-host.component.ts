/**
 * toast-host.component.ts – Vùng hiển thị thông báo nhanh (đặt một lần trong app.ts).
 * Nội dung lấy từ UxService.toasts; màu và icon theo theme cho từng loại thông báo.
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UxService } from '../core/ux.service';
import { IconComponent } from '../theme/icon.component';
import { IconName } from '../theme/icons';

const ICON: Record<string, IconName> = { info: 'info-circle', good: 'check', bad: 'alert-triangle', reward: 'sparkles' };

@Component({
  selector: 'app-toast-host',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="host" aria-live="polite">
      @for (t of ux.toasts(); track t.id) {
        <div class="toast" [class]="'toast ' + t.tone"><app-icon [name]="icon[t.tone]" /> {{ t.text }}</div>
      }
    </div>
  `,
  styles: `
    .host {
      position: fixed;
      left: 50%;
      bottom: calc(var(--nav-h) + 16px);
      transform: translateX(-50%);
      z-index: 300;
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      align-items: center;
      pointer-events: none;
      width: min(92vw, 420px);
    }
    .toast {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-pill);
      background: var(--slate-700);
      color: var(--white);
      font-size: var(--fs-sm);
      box-shadow: var(--shadow-lg);
      animation: pop var(--motion-base) var(--motion-bounce) both;
    }
    .toast.good {
      background: var(--good-dark);
    }
    .toast.bad {
      background: var(--bad-dark);
    }
    .toast.reward {
      background: var(--accent);
      color: var(--on-accent);
    }
  `,
})
export class ToastHostComponent {
  protected readonly ux = inject(UxService);
  protected readonly icon = ICON;
}
