# Nguồn ảnh bìa, âm thanh, font và icon

(Ảnh minh họa từ vựng xem [CREDITS.md](CREDITS.md) – file đó được sinh tự động bởi `npm run fetch:images`.)

## Ảnh bìa (banner, ảnh đề thi)

Tải bằng `npm run fetch:hero` từ Openverse – chỉ giấy phép CC0 / Public Domain Mark.

| Tệp | Tác giả | Giấy phép | Nguồn |
|---|---|---|---|
| `assets/art/photo-london.jpg` | Unknown | CC0 | https://www.rawpixel.com/image/5924003/photo-image-background-public-domain-sky |
| `assets/art/photo-skyline.jpg` | Unknown | CC0 | https://www.rawpixel.com/image/5967710/aerial-view-city-skyline-skyscraper |
| `assets/art/photo-study.jpg` | Stanley Dai | CC0 | https://stocksnap.io/photo/laptop-apple-BUFBDV2NQW |
| `assets/art/photo-library.jpg` | Patrik Goethe | CC0 | https://stocksnap.io/photo/books-library-EB9B6BC1F6 |
| `assets/art/photo-writing.jpg` | Green Chameleon | CC0 | https://stocksnap.io/photo/writing-drawing-8Y0EDX4VP9 |
| `assets/art/photo-headphones.jpg` | Burst | CC0 | https://stocksnap.io/photo/woman-listening-CXVAJQHIMC |
| `assets/art/photo-mountain.jpg` | Unknown | CC0 | https://www.rawpixel.com/image/5904011/photo-image-public-domain-tree-green |
| `assets/art/photo-office.jpg` | Helena Lopes | CC0 | https://stocksnap.io/photo/businessmeeting-people-AEENLCARXY |

## Âm thanh

- Âm thanh tiếng Anh (`public/assets/audio`, 7.791 tệp): tạo bằng `npm run build:audio` với giọng đọc `en-US-AriaNeural` (nữ) và `en-US-GuyNeural` (nam) của dịch vụ Microsoft Edge Text-to-Speech, lưu sẵn trong dự án để dùng offline.
- Lời hướng dẫn tiếng Việt (`public/assets/voice`): giọng `vi-VN-HoaiMyNeural`, tạo bằng `npm run build:voice`.

## Font và icon

- Font **Inter** (SIL Open Font License 1.1) – gói `@fontsource/inter`, đóng gói cùng app.
- **Tabler Icons** (MIT).

## Trình độ từ vựng (CEFR)

- Nhãn A1–B2 của từ vựng dựa trên **CEFR-J Wordlist Version 1.5** – Tono Laboratory, Tokyo University of Foreign Studies (biên soạn: Yukio Tono), lấy từ dự án Open Language Profiles (https://github.com/openlanguageprofiles/olp-en-cefrj). Danh sách được phép dùng miễn phí cho nghiên cứu và thương mại khi ghi nguồn. Bản sao: `tools/cefr-j-wordlist.csv`.
