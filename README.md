# English Master OFFLINE – luyện IELTS, TOEIC và từ vựng không cần Internet

Ứng dụng học tiếng Anh viết bằng **Angular 22** (standalone components, Signals, control flow mới),
giao diện theo bộ ảnh thiết kế "English Master" (thư mục `Downloads/TiengAnh`): thanh bên trái, thanh trên cùng,
nội dung dạng lưới thẻ. **Toàn bộ dữ liệu học và âm thanh nằm sẵn trên máy.**

## Chạy ứng dụng

```bash
npm install          # lần đầu (cần internet 1 lần để tải thư viện)
npm run app          # build + mở http://localhost:4300
```

Hoặc bấm đúp **chay-app.bat**. Khi phát triển: `npm start` (http://localhost:4200).

| Lệnh | Tác dụng |
|---|---|
| `npm start` | Chạy chế độ phát triển |
| `npm run build` | Build bản production vào `dist/` (tự kiểm tra theme và thống kê gói offline trước khi build) |
| `npm run serve` | Chạy máy chủ tĩnh nhỏ cho bản đã build (không cần internet) |
| `npm test` | Chạy kiểm thử đơn vị (Vitest) |
| `npm run build:audio` | **Tải âm thanh tiếng Anh về máy** cho mọi từ/câu trong kho (bỏ qua file đã có) |
| `npm run build:voice` | Tạo lời hướng dẫn tiếng Việt từ `tools/bong-lines.json` (bỏ qua file đã có; `--force` để tạo lại hết) |
| `npm run build:offline` | Thống kê lại gói dữ liệu offline (`src/app/data/offline-pack.ts`) |
| `npm run build:vocab` | Sinh lại dữ liệu từ vựng từ `tools/vocab-src/*.txt` |
| `npm run fetch:images` | Tải/cập nhật ảnh minh họa từ vựng (Openverse, CC0) |
| `npm run fetch:hero` | Tải ảnh bìa (banner, ảnh đề thi – Openverse, CC0) |
| `npm run build:icons` | Sinh lại bộ icon Tabler dùng trong app |
| `npm run check:theme` | Kiểm tra tuân thủ theme (`-- --fix` để tự sửa) |

## Học hoàn toàn offline

Mọi thứ app cần đều đã được tải về và nằm trong thư mục dự án – khi học app **không gọi ra Internet**:

| Dữ liệu | Vị trí | Dung lượng |
|---|---|---|
| ~3.600 từ vựng (10 chủ đề, có gắn trình độ CEFR A1–B2), đề IELTS & TOEIC, bài đọc, hội thoại, ngữ pháp | `src/app/data/**` (đóng gói trong mã ứng dụng) | ≈ 2 MB |
| **Âm thanh tiếng Anh thu sẵn**: 9.475 tệp mp3 cho mọi từ, câu ví dụ, hội thoại (2 giọng), bài nghe luyện thi, bài mẫu | `public/assets/audio` | ≈ 204 MB |
| Ảnh từ vựng, ảnh đề thi TOEIC Part 1 | `public/assets/photos` | ≈ 2,7 MB |
| Ảnh bìa, hình minh họa | `public/assets/art` | ≈ 1 MB |
| Lời hướng dẫn tiếng Việt | `public/assets/voice` | ≈ 0,7 MB |
| Font Inter, bộ icon | đóng gói trong bản build | – |

- **Nghe phát âm**: `SpeechService` tìm file mp3 theo mã băm của câu (`core/audio-key.ts`) và phát file đó.
  Chỉ khi một câu chưa có bản thu (nội dung mới thêm) mới dùng giọng đọc của thiết bị làm dự phòng.
  Thêm nội dung mới xong chạy `npm run build:audio` để tải phần còn thiếu; test `audio-key.spec.ts` sẽ báo nếu thiếu file.
- **Dùng như ứng dụng cài đặt**: bản production có service worker (PWA). Vào *Settings › Quản lý dữ liệu offline* bấm
  **Tải toàn bộ dữ liệu** để trình duyệt lưu hết ~9.700 tệp; sau đó app mở được kể cả khi tắt máy chủ và ngắt mạng.
- **Tiến độ học** lưu trong `localStorage` của trình duyệt; sao lưu/khôi phục bằng tệp JSON ở trang Settings.
- Chỉ còn một tính năng tùy chọn cần mạng: nhận dạng giọng nói của trình duyệt khi luyện nói. Không có mạng, app tự chuyển
  sang ghi âm → nghe lại → tự đánh giá.

## Từ vựng theo trình độ CEFR (trọng tâm B1–B2)

- Mỗi từ có nhãn trình độ **A1 / A2 / B1 / B2**. `tools/build-vocab.mjs` gắn nhãn theo danh sách **CEFR-J**
  (`tools/cefr-j-wordlist.csv`); cụm từ lấy trình độ cao nhất của các từ thành phần; từ ngoài danh sách (tên món ăn,
  thuật ngữ...) được ước lượng theo chủ đề (đời sống = B1, IELTS/TOEIC/IT = B2). Muốn tự đặt: thêm trường thứ 6 vào dòng nguồn.
- Hai chủ đề riêng **Từ vựng B1 – Trung cấp** và **Từ vựng B2 – Trung cao cấp** (`tools/vocab-src/b1.txt`, `b2.txt`):
  mỗi chủ đề 25 bài × 12 từ, chọn từ danh sách CEFR-J và không trùng với các chủ đề khác.
- Trang Từ vựng mặc định lọc **Trình độ: B1–B2**; đổi bộ lọc để xem A1/A2 hoặc tất cả. Cột phải có thống kê số từ đã thuộc theo trình độ.

## Các màn hình

| Mục | Đường dẫn | Nội dung |
|---|---|---|
| Dashboard | `/home` | Band IELTS / điểm TOEIC hiện tại → mục tiêu, tiếp tục học, "Hôm nay học gì?", thống kê nhanh, lối tắt |
| IELTS, TOEIC | `/ielts`, `/toeic` | Banner, 4 kỹ năng / Part 1–7 / Speaking & Writing, lộ trình, đề gợi ý, điểm mạnh – yếu, chiến lược làm bài |
| Từ vựng & Cụm từ | `/vocab`, `/word/:id` | Bảng từ có lọc – tìm – phân trang, bài học flashcard, yêu thích, ôn tập; trang chi tiết từ có bài tập vận dụng |
| Practice | `/practice` | Luyện theo kỹ năng và chủ đề, kiểm tra, trò chơi từ vựng, ôn tập ngắt quãng, ngữ pháp |
| Mock Test | `/mock` | **Bộ đề cố định: 20 đề IELTS + 20 đề TOEIC** (làm lại vẫn đúng đề đó); thi thử ngẫu nhiên IELTS, TOEIC L&R, TOEIC S&W có đồng hồ; đề theo từng kỹ năng; yêu thích; kết quả gần đây |
| Làm bài | `/session/...` | Đầu trang có đồng hồ, dải số câu; bài đọc/bài nghe bên trái – câu hỏi bên phải; trang kết quả chi tiết |
| Error Review | `/errors` | Mọi câu làm sai kèm đáp án, giải thích; lọc theo kỹ năng; từ hay sai; luyện lại |
| Progress | `/progress` | Chuỗi ngày, thời gian học, XP, biểu đồ 7 ngày, lịch hoạt động 12 tuần, huy hiệu, lịch sử |
| Lịch học | `/schedule` | Lịch tự học hằng tuần (gợi ý theo mục tiêu, thêm/xóa buổi), lịch tháng, buổi sắp tới |
| Settings | `/settings` | Hồ sơ, mục tiêu band/điểm, âm thanh, hiển thị, **quản lý dữ liệu offline**, sao lưu |

Band IELTS và điểm TOEIC trong app là **ước tính** từ các bài đã làm để theo dõi tiến bộ (Writing/Speaking chấm tự động +
tự đánh giá), không thay thế điểm thi chính thức.

## Theme duy nhất "English Master"

Toàn bộ màu, chữ, khoảng cách, bo góc, bóng, chuyển động định nghĩa **một lần** trong `src/app/theme/theme.ts`
và áp dụng thành biến CSS. Chi tiết và quy tắc khi phát triển thêm: **[docs/THEME.md](docs/THEME.md)**.

## Cấu trúc mã nguồn

```
tools/
  vocab-src/*.txt            Nguồn từ vựng dễ chỉnh sửa (mỗi dòng: từ|loại|nghĩa|ví dụ EN|ví dụ VI)
  build-vocab.mjs            Sinh src/app/data/vocab/*.ts (kèm tra IPA từ điển CMU)
  audio-texts.entry.ts       Gom mọi câu tiếng Anh app sẽ đọc (đọc thẳng dữ liệu trong src/app/data)
  build-audio-list.mjs       Đóng gói + chạy file trên -> tools/.audio-cache/texts.json
  build-audio.py             Tải mp3 cho từng câu vào public/assets/audio, sinh data/audio-index.ts
  build-offline-manifest.mjs Thống kê gói dữ liệu offline -> data/offline-pack.ts
  fetch-images.py, fetch-hero.py   Tải ảnh CC0 từ Openverse
  serve.mjs                  Máy chủ tĩnh nhỏ
src/app/
  app.ts                     Khung ứng dụng: topbar + sidebar + nội dung
  models/                    Kiểu dữ liệu (nội dung, từ vựng, câu hỏi, tiến độ, lịch học, câu sai)
  data/                      Chủ đề, từ vựng (sinh tự động), bài đọc, hội thoại, đề thi, huy hiệu,
                             audio-index.ts / offline-pack.ts / hero-photos.ts (sinh tự động)
  core/                      Dịch vụ: giọng đọc (file thu sẵn), offline, tiến độ, mục tiêu/điểm ước tính,
                             sinh câu hỏi, đề thi, nạp từ vựng
  theme/                     THEME DUY NHẤT (theme.ts), bộ icon (icons.ts), <app-icon>
  shared/                    Vòng tiến độ, biểu đồ vành khuyên, QuizRunner (bộ máy làm bài), màn hình kết quả,
                             ô trợ lý, bảng chi tiết từ, khung làm bài Writing/Speaking
  pages/                     Các màn hình (home, exam, vocab, word, practice, mock, session, errors,
                             progress, schedule, settings, grammar, game, lesson-study, search, onboarding...)
```

**Thêm từ vựng**: sửa file `.txt` trong `tools/vocab-src/` rồi chạy `npm run build:vocab` và `npm run build:audio`.
**Thêm bài đọc/hội thoại**: thêm phần tử vào `data/reading.ts` / `data/dialogues.ts`, rồi `npm run build:audio`.
**Bộ đề cố định** (`data/exam/tests/`): `ielts-01..05.ts` (20 đề, mỗi đề 2 phần Nghe + 1 bài Đọc + Writing Task 1, 2 + Speaking Part 1–3)
và `toeic-01..10.ts` (20 đề Listening & Reading, 51 câu/đề). Nội dung do dự án tự biên soạn theo đúng dạng câu hỏi của đề thật,
không sao chép đề có bản quyền của Cambridge/ETS. Đề viết ở dạng rút gọn (xem `helpers.ts`); danh mục hiển thị ở `catalog.ts`;
dữ liệu đề chỉ được nạp khi mở đề (`ExamService.buildTest`). Thêm/sửa đề xong chạy `npm run build:audio` và `npm test`
(`exam-tests.spec.ts` kiểm tra số câu, đáp án, số từ bài mẫu và độ phủ âm thanh).

**Thêm đề thi**: thêm phần tử vào `data/exam/ielts.ts` hoặc các file `toeic*.ts` (đáp án đúng ghi đầu tiên, app tự xáo trộn),
rồi `npm run build:audio`. Đề Part 1 / mô tả tranh dùng mã ảnh trong `data/photos.ts`.

Nguồn ảnh: [CREDITS.md](CREDITS.md) · Ảnh bìa, âm thanh, font, icon: [CREDITS-MEDIA.md](CREDITS-MEDIA.md).
