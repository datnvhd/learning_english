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
| `npm run fetch:asr` | Tải mô hình nhận dạng giọng nói tiếng Anh (Vosk small en-us, Apache-2.0, ~41 MB) dùng để chấm Speaking offline |
| `npm run fetch:dict` | Tạo từ điển chính tả offline (danh sách ENABLE – public domain – gộp với từ trong nội dung app) để chấm Writing |
| `npm run fetch:phoneme` | Tải mô hình nhận dạng âm vị (wav2vec2 XLS-R `robg/speako-phoneme-recognizer`, Apache-2.0, ONNX INT8 ~343 MB) và từ điển phát âm CMU để chấm phát âm từng âm |
| `npm run build:icons` | Sinh lại bộ icon Tabler dùng trong app |
| `npm run check:theme` | Kiểm tra tuân thủ theme (`-- --fix` để tự sửa) |

## Học hoàn toàn offline

Mọi thứ app cần đều đã được tải về và nằm trong thư mục dự án – khi học app **không gọi ra Internet**:

| Dữ liệu | Vị trí | Dung lượng |
|---|---|---|
| ~3.900 từ vựng (11 chủ đề, có gắn trình độ CEFR A1–C1), đề IELTS & TOEIC, bài đọc, hội thoại, 31 bài ngữ pháp A1–C1 | `src/app/data/**` (đóng gói trong mã ứng dụng) | ≈ 2 MB |
| **Âm thanh tiếng Anh thu sẵn**: 15.010 tệp mp3 cho mọi từ, câu ví dụ, hội thoại (2 giọng), bài nghe luyện thi, bài mẫu | `public/assets/audio` | ≈ 363 MB |
| Ảnh từ vựng, ảnh đề thi TOEIC Part 1 | `public/assets/photos` | ≈ 2,7 MB |
| Ảnh bìa, hình minh họa | `public/assets/art` | ≈ 1 MB |
| Lời hướng dẫn tiếng Việt, 2 giọng thu sẵn: nữ (Hoài My) và nam (Nam Minh) – chọn trong Settings | `public/assets/voice` | ≈ 1,7 MB |
| Mô hình nhận dạng giọng nói tiếng Anh (chấm Speaking) | `public/assets/asr` | ≈ 41 MB |
| Từ điển chính tả tiếng Anh (chấm Writing) | `public/assets/dict` | ≈ 1,7 MB |
| Bộ kiểm tra ngữ pháp Harper (WebAssembly, Apache-2.0) | `public/assets/harper` | ≈ 16 MB |
| Mô hình nhận dạng âm vị + từ điển phát âm CMU (chấm phát âm từng âm) | `public/assets/phoneme` | ≈ 343 MB |
| ONNX Runtime Web (chạy mô hình âm vị) | `public/assets/ort` | ≈ 26 MB |
| Font Inter, bộ icon | đóng gói trong bản build | – |

- **Nghe phát âm**: `SpeechService` tìm file mp3 theo mã băm của câu (`core/audio-key.ts`) và phát file đó.
  Chỉ khi một câu chưa có bản thu (nội dung mới thêm) mới dùng giọng đọc của thiết bị làm dự phòng.
  Thêm nội dung mới xong chạy `npm run build:audio` để tải phần còn thiếu; test `audio-key.spec.ts` sẽ báo nếu thiếu file.
- **Trình phát bài nghe** (màn làm bài): nút tròn là phát / tạm dừng / phát tiếp, **Chậm** bật–tắt tốc độ 0,7× (đổi ngay khi
  đang nghe, áp dụng cho cả hội thoại), **Nghe lại** phát từ đầu. Các câu chung một bài nghe thì bài nghe chạy tiếp khi sang câu;
  sang bài khác thì bài cũ tự dừng.
- **Dùng như ứng dụng cài đặt**: bản production có service worker (PWA). Vào *Settings › Quản lý dữ liệu offline* bấm
  **Tải toàn bộ dữ liệu** để trình duyệt lưu hết ~9.700 tệp; sau đó app mở được kể cả khi tắt máy chủ và ngắt mạng.
- **Tiến độ học** lưu trong `localStorage` của trình duyệt; sao lưu/khôi phục bằng tệp JSON ở trang Settings.
- **Chấm Speaking tự động, offline**: ghi âm → nhận dạng giọng nói ngay trong trình duyệt (vosk-browser + mô hình Vosk,
  `core/asr.service.ts`) → chấm theo tiêu chí (`core/speaking-score.ts`): đọc theo mẫu (độ chính xác từng từ, phát âm,
  tốc độ & ngắt nghỉ) và trả lời tự do (IELTS: Fluency & Coherence, Lexical Resource, Grammatical Range, Pronunciation;
  TOEIC: nội dung, từ vựng & ngữ pháp, phát âm, trôi chảy). Âm thanh không gửi đi đâu.
  Chỉ khi thiết bị không chạy được bộ nhận dạng (thiếu WebAssembly/Worker) mới chuyển sang tự đánh giá.
- **Chấm như giám khảo, không dùng AI/LLM** – các bước offline:
  1. *Mô tả band thành luật đo được* (`core/rubric.ts`, `core/language-features.ts`): mỗi tiêu chí IELTS có các mức band kèm
     điều kiện (tỉ lệ từ vựng B2+/C theo CEFR-J, độ đa dạng từ, tỉ lệ câu phức và số dạng cấu trúc, tỉ lệ câu không lỗi,
     từ nối theo nhóm, tốc độ nói, số lần ngừng / "uh um" mỗi phút...). Band = mức cao nhất thỏa mọi điều kiện; phần nhận xét
     liệt kê các điều kiện còn thiếu để lên band tiếp theo. TOEIC quy đổi từ band (`toToeic`).
  2. *Bắt lỗi ngữ pháp*: bộ luật lỗi người Việt hay mắc (`core/writing-check.ts`) + Harper (`core/grammar.service.ts`,
     lọc qua `core/harper-filter.ts`, chỉ giữ nhóm lỗi đáng tin; 0 báo nhầm trên ~10.000 câu đúng trong kho).
  3. *Phát âm từng âm* (`core/phoneme.service.ts`, `core/phoneme-score.ts`): mô hình wav2vec2 nghe ra chuỗi âm IPA, so với cách
     đọc chuẩn trong từ điển CMU (giữ mọi biến thể, bỏ qua từ chức năng đọc lướt, chấp nhận biến thể tự nhiên như t→ɾ, âm tắc
     không bật hơi) → % âm đúng, từ đọc sai kèm chẩn đoán lỗi người Việt (mất âm cuối, /θ/→/t/, /ʃ/→/s/...). Lần đầu nạp mô hình
     mất một lúc; thiết bị yếu (< 4 GB RAM) bỏ qua bước này.
  4. *Ngữ điệu & trọng âm* (`core/prosody.ts`, xử lý tín hiệu, không cần mô hình): dò cao độ bằng YIN → khoảng dao động cao độ
     (giọng đều đều hay có lên xuống), độ lớn từ nội dung so với từ chức năng (trọng âm câu), ngữ điệu cuối câu (câu kể xuống
     giọng, câu hỏi Yes/No lên giọng).
  5. *Hiệu chỉnh* (`core/calibration.spec.ts`): bài mẫu band cao, bài người học band ~4 và ~5.5, bài mẫu bị cắt ngắn / chèn lỗi
     phải được xếp đúng khoảng band và đúng thứ tự. Chạy lại tệp này sau khi chỉnh ngưỡng trong `rubric.ts`.
- **Chấm bằng AI (tùy chọn, cần Internet)** – bật trong Cài đặt › Chấm điểm bằng AI, chọn nhà cung cấp (`core/ai.service.ts`):
  - **Cloudflare Workers AI** (mặc định, `core/cloudflare-ai.service.ts`): app gọi Worker của bạn trong `cloudflare/worker`
    (triển khai miễn phí: `cd cloudflare/worker && npx wrangler login && npx wrangler deploy`, xem `cloudflare/worker/README.md`).
    Worker dùng **Whisper large v3 turbo** chép lời bài nói (app gửi WAV 16 kHz) và **Llama 3.3 70B** chấm theo tiêu chí, trả JSON.
    Llama không nghe được âm thanh nên bài nói được chấm từ bản chép lời + số đo của bộ chấm offline (độ chính xác âm vị,
    từ đọc sai, ngữ điệu, tốc độ, ngập ngừng); phần tô màu từng từ / phát âm từng âm / ngữ điệu của máy vẫn hiển thị kèm.
    Trình duyệt không gọi thẳng `api.cloudflare.com` được (CORS) nên cần Worker; Worker gọi Workers AI qua binding, không cần token.
    Có thể đặt `APP_TOKEN` để khóa Worker. Hạn mức miễn phí 10.000 neurons/ngày.
  - **Google Gemini** (`core/gemini.service.ts`): dán API key (aistudio.google.com/api-keys); Gemini nghe trực tiếp bản ghi âm.
  - Prompt, schema JSON và quy đổi kết quả dùng chung ở `core/ai-grading.ts`. Địa chỉ Worker / mã truy cập / API key chỉ lưu ở
    localStorage của thiết bị (không nằm trong file sao lưu). Tắt / mất mạng / lỗi gọi API → tự dùng bộ chấm offline bên dưới.
- **Chấm Writing tự động, offline** (`core/writing-check.ts`): bắt lỗi chính tả (từ điển ENABLE), lỗi ngữ pháp thường gặp
  (a/an, hòa hợp chủ ngữ – động từ, động từ sau can/did, so sánh kép, danh từ không đếm được...), trình bày (viết hoa, dấu câu)
  và mức độ bám đề (từ khóa của đề, hạng mục bảng số liệu Task 1); hiện danh sách lỗi kèm cách sửa.

## Từ vựng và ngữ pháp theo trình độ CEFR (A1 → C1)

- Mỗi từ có nhãn trình độ **A1 / A2 / B1 / B2 / C1**. `tools/build-vocab.mjs` gắn nhãn theo danh sách **CEFR-J**
  (`tools/cefr-j-wordlist.csv`); cụm từ lấy trình độ cao nhất của các từ thành phần; từ ngoài danh sách (tên món ăn,
  thuật ngữ...) được ước lượng theo chủ đề (đời sống = B1, IELTS/TOEIC/IT = B2, chủ đề C1 = C1). Muốn tự đặt: thêm trường thứ 6 vào dòng nguồn.
- Hai chủ đề riêng **Từ vựng B1 – Trung cấp** và **Từ vựng B2 – Trung cao cấp** (`tools/vocab-src/b1.txt`, `b2.txt`):
  mỗi chủ đề 25 bài × 12 từ, chọn từ danh sách CEFR-J và không trùng với các chủ đề khác.
- Chủ đề **Từ vựng C1 – Cao cấp** (`tools/vocab-src/c1.txt`): 25 bài × 12 từ học thuật / trang trọng / thành ngữ
  NẰM NGOÀI danh sách CEFR-J A1–B2 (CEFR-J không có C1), không trùng chủ đề khác; kiểm thử ở `core/vocab-level.spec.ts`.
- **Ngữ pháp 31 bài** chia 5 nhóm: Nền tảng (A1), Cơ bản (A2), Trung cấp (B1: bị động, câu điều kiện 0/1/2, mệnh đề quan hệ,
  câu tường thuật, V-ing / to V, quá khứ tiếp diễn & hoàn thành, used to), Trung cao cấp (B2: điều kiện loại 3 & wish,
  động từ khuyết thiếu suy đoán, bị động nâng cao & thể sai khiến, tương lai tiếp diễn / hoàn thành, từ nối tương phản,
  lượng từ) và Cao cấp (C1: đảo ngữ, câu chẻ, điều kiện hỗn hợp, giả định cách, mệnh đề phân từ, văn phong học thuật).
  12 bài cốt lõi ở `data/grammar.ts`, bài B1–C1 ở `data/grammar-advanced.ts`; `data/grammar.spec.ts` kiểm tra dữ liệu.
- Trang Từ vựng mặc định lọc **Trình độ: B1–B2**; đổi bộ lọc để xem A1/A2 hoặc tất cả. Cột phải có thống kê số từ đã thuộc theo trình độ.

## Các màn hình

| Mục | Đường dẫn | Nội dung |
|---|---|---|
| Dashboard | `/home` | Band IELTS / điểm TOEIC hiện tại → mục tiêu, tiếp tục học, "Hôm nay học gì?", thống kê nhanh, lối tắt |
| IELTS, TOEIC | `/ielts`, `/toeic` | Banner, 4 kỹ năng / Part 1–7 / Speaking & Writing, lộ trình, đề gợi ý, điểm mạnh – yếu, chiến lược làm bài |
| Từ vựng & Cụm từ | `/vocab`, `/word/:id` | Bảng từ có lọc – tìm – phân trang, bài học flashcard, yêu thích, ôn tập; trang chi tiết từ có bài tập vận dụng |
| Practice | `/practice` | Luyện theo kỹ năng và chủ đề, kiểm tra, ôn tập ngắt quãng, ngữ pháp |
| Trò chơi | `/games` | **7 trò chơi** từ vựng & ngữ pháp (Đoán từ kiểu Wordle, Xây câu, Thử thách ngữ pháp 3 mạng, Nghe và chọn ảnh, Ghép cặp, Xếp chữ, Đố nhanh 60 giây), **Thử thách hôm nay** (mỗi ngày một trò, hoàn thành được +20 XP), bảng kỷ lục theo chủ đề |
| Mock Test | `/mock` | **Bộ đề cố định: 20 đề IELTS + 20 đề TOEIC** (làm lại vẫn đúng đề đó); thi thử ngẫu nhiên IELTS, TOEIC L&R, TOEIC S&W có đồng hồ; đề theo từng kỹ năng; yêu thích; kết quả gần đây |
| Làm bài | `/session/...` | Đầu trang có đồng hồ, dải số câu; bài đọc/bài nghe bên trái – câu hỏi bên phải; trang kết quả chi tiết |
| Error Review | `/errors` | Mọi câu làm sai kèm đáp án, giải thích; lọc theo kỹ năng; từ hay sai; luyện lại |
| Progress | `/progress` | Chuỗi ngày, thời gian học (chỉ tính khi đang thao tác hoặc đang nghe – treo máy quá 2 phút hay ẩn tab thì không tính), XP, biểu đồ 7 ngày, lịch hoạt động 12 tuần, huy hiệu, lịch sử |
| Lịch học | `/schedule` | Lịch tự học hằng tuần (gợi ý theo mục tiêu, thêm/xóa buổi), lịch tháng, buổi sắp tới |
| Settings | `/settings` | Hồ sơ, mục tiêu band/điểm, âm thanh, hiển thị, **quản lý dữ liệu offline**, sao lưu |

Band IELTS và điểm TOEIC trong app là **ước tính** từ các bài đã làm để theo dõi tiến bộ (Writing/Speaking do máy chấm
tự động theo tiêu chí), không thay thế điểm thi chính thức.

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
**Bộ đề cố định** (`data/exam/tests/`): 20 đề IELTS và 20 đề TOEIC, đều **đủ độ dài đề thật** – IELTS 4 phần Nghe (40 câu)
+ 3 bài Đọc (40 câu) + Writing Task 1, 2 + Speaking Part 1–3; TOEIC Listening & Reading 200 câu (Part 1–7: 6/25/39/30/30/16/54).
Mỗi đề ghép từ phần gốc (`ielts-01..05.ts`, `toeic-01..10.ts`) và phần mở rộng trong `full/` (`ielts-NN.ts`, `toeic-NN-l.ts`,
`toeic-NN-r.ts`), đăng ký ở `ielts-all.ts` / `toeic-all.ts`. Part 1 TOEIC dùng lại kho ảnh offline trong `data/photos.ts`. Nội dung do dự án tự biên soạn theo đúng dạng câu hỏi của đề thật,
không sao chép đề có bản quyền của Cambridge/ETS. Đề viết ở dạng rút gọn (xem `helpers.ts`); danh mục hiển thị ở `catalog.ts`;
dữ liệu đề chỉ được nạp khi mở đề (`ExamService.buildTest`). Thêm/sửa đề xong chạy `npm run build:audio` và `npm test`
(`exam-tests.spec.ts` kiểm tra số câu, đáp án, số từ bài mẫu và độ phủ âm thanh).

**Thêm đề thi**: thêm phần tử vào `data/exam/ielts.ts` hoặc các file `toeic*.ts` (đáp án đúng ghi đầu tiên, app tự xáo trộn),
rồi `npm run build:audio`. Đề Part 1 / mô tả tranh dùng mã ảnh trong `data/photos.ts`.

Nguồn ảnh: [CREDITS.md](CREDITS.md) · Ảnh bìa, âm thanh, font, icon: [CREDITS-MEDIA.md](CREDITS-MEDIA.md).
