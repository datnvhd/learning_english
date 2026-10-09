/**
 * app.config.ts – Cấu hình gốc của ứng dụng Angular.
 *
 * - provideRouter: bật định tuyến. Dùng kiểu "hash" (#/) để app chạy được từ bất kỳ máy chủ
 *   tĩnh nào (kể cả khi không cấu hình rewrite) và hoạt động ổn định khi offline.
 * - withInMemoryScrolling: mỗi lần chuyển trang sẽ cuộn lên đầu; liên kết có #fragment cuộn tới đúng mục.
 * - provideServiceWorker: bản build production lưu toàn bộ app + dữ liệu vào trình duyệt để chạy offline.
 */
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

// Định dạng số và ngày theo tiếng Việt (6.591 thay vì 6,591)
registerLocaleData(localeVi);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' },
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
