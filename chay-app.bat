@echo off
chcp 65001 >nul
rem ============================================================
rem  English Master OFFLINE - bấm đúp file này để chạy ứng dụng
rem  Lần đầu sẽ tự cài thư viện và build (cần internet 1 lần).
rem  Từ lần sau chạy hoàn toàn OFFLINE: từ vựng, đề thi, ảnh và
rem  toàn bộ âm thanh tiếng Anh đã nằm sẵn trong thư mục dự án.
rem ============================================================
cd /d "%~dp0"
if not exist node_modules (
  echo Dang cai dat thu vien lan dau...
  call npm install
)
if not exist dist\english-adventure\browser\index.html (
  echo Dang build ung dung...
  call npm run build
)
node tools\serve.mjs
pause
