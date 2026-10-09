/**
 * main.ts – Điểm khởi động ứng dụng.
 * Áp dụng theme duy nhất "English Master" (ghi biến CSS lên :root) TRƯỚC khi Angular vẽ giao diện.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { applyTheme } from './app/theme/theme';

applyTheme();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
