/**
 * app.routes.ts – Bản đồ các màn hình của ứng dụng (English Master OFFLINE).
 *
 * Mỗi màn hình được nạp lười (lazy) bằng loadComponent để app khởi động nhanh.
 * Các mục của thanh bên (sidebar) ứng với các đường dẫn cấp một dưới đây.
 *
 *  /home                      Dashboard: mục tiêu IELTS/TOEIC, tiếp tục học, hôm nay học gì, thống kê nhanh
 *  /ielts, /toeic             Trang kỳ thi: kỹ năng/phần thi, lộ trình, đề gợi ý, chiến lược làm bài
 *  /vocab, /vocab/:id         Từ vựng & Cụm từ: bảng từ, bài học flashcard, yêu thích, ôn tập
 *  /word/:id                  Chi tiết một từ (mã "<chủ đề>:<từ>")
 *  /learn/:id/:lesson         Học một bài từ vựng bằng thẻ (flashcard)
 *  /practice                  Practice: luyện theo kỹ năng, kiểm tra, trò chơi, ôn tập
 *  /mock                      Mock Test: danh sách đề thi thử và đề theo kỹ năng
 *  /session/:mode/:topic      Làm bài (luyện tập, kiểm tra, ôn tập, luyện thi, thi thử...)
 *  /errors                    Error Review: các câu đã làm sai kèm đáp án và giải thích
 *  /progress                  Progress: thống kê, biểu đồ, huy hiệu, lịch sử
 *  /schedule                  Lịch học hằng tuần
 *  /settings                  Settings: hồ sơ, mục tiêu, âm thanh, quản lý dữ liệu offline
 *  /grammar, /grammar/:id     12 chủ điểm ngữ pháp: giải thích, ví dụ, bài luyện
 *  /game/:type/:topic         Trò chơi mini (ghép cặp, xếp chữ, đố nhanh, nghe chọn ảnh)
 *  /topic/:id (+ /summary)    Giới thiệu một chủ đề từ vựng và luyện tập tổng hợp của chủ đề
 *  /search                    Tra từ trên toàn bộ kho từ vựng (ô tìm kiếm trên topbar)
 *  /onboarding                Thiết lập mục tiêu, trình độ, thời gian mỗi ngày (3 bước)
 * Đường dẫn cũ (/topics, /exam, /me) được chuyển hướng sang trang mới tương ứng.
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: 'ielts', data: { exam: 'ielts' }, loadComponent: () => import('./pages/exam/exam.page').then((m) => m.ExamPage) },
  { path: 'toeic', data: { exam: 'toeic' }, loadComponent: () => import('./pages/exam/exam.page').then((m) => m.ExamPage) },
  { path: 'vocab', loadComponent: () => import('./pages/vocab/vocab.page').then((m) => m.VocabPage) },
  { path: 'vocab/:id', loadComponent: () => import('./pages/vocab/vocab.page').then((m) => m.VocabPage) },
  { path: 'word/:id', loadComponent: () => import('./pages/word/word.page').then((m) => m.WordPage) },
  { path: 'learn/:id/:lesson', loadComponent: () => import('./pages/lesson-study/lesson-study.page').then((m) => m.LessonStudyPage) },
  { path: 'practice', loadComponent: () => import('./pages/practice/practice.page').then((m) => m.PracticePage) },
  { path: 'mock', loadComponent: () => import('./pages/mock/mock.page').then((m) => m.MockPage) },
  { path: 'session/:mode/:topic', loadComponent: () => import('./pages/session/session.page').then((m) => m.SessionPage) },
  { path: 'errors', loadComponent: () => import('./pages/errors/errors.page').then((m) => m.ErrorsPage) },
  { path: 'progress', loadComponent: () => import('./pages/progress/progress.page').then((m) => m.ProgressPage) },
  { path: 'schedule', loadComponent: () => import('./pages/schedule/schedule.page').then((m) => m.SchedulePage) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage) },
  { path: 'grammar', loadComponent: () => import('./pages/grammar/grammar-list.page').then((m) => m.GrammarListPage) },
  { path: 'grammar/:id', loadComponent: () => import('./pages/grammar/grammar-lesson.page').then((m) => m.GrammarLessonPage) },
  { path: 'game/:type/:topic', loadComponent: () => import('./pages/game/game.page').then((m) => m.GamePage) },
  { path: 'topic/:id', loadComponent: () => import('./pages/topic-detail/topic-detail.page').then((m) => m.TopicDetailPage) },
  { path: 'topic/:id/summary', loadComponent: () => import('./pages/topic-summary/topic-summary.page').then((m) => m.TopicSummaryPage) },
  { path: 'search', loadComponent: () => import('./pages/search/search.page').then((m) => m.SearchPage) },
  { path: 'onboarding', loadComponent: () => import('./pages/onboarding/onboarding.page').then((m) => m.OnboardingPage) },
  // Đường dẫn của giao diện cũ
  { path: 'topics', redirectTo: 'home' },
  { path: 'exam', redirectTo: 'ielts' },
  { path: 'me', redirectTo: 'progress' },
  { path: '**', redirectTo: 'home' },
];
