"""
crop-art.py – Cắt ảnh minh họa từ bộ ảnh thiết kế gốc (thư mục Downloads/*.png) thành các file WebP nhỏ
cho app (public/assets/art). Chạy lại khi có bản thiết kế mới:  python tools/crop-art.py
Yêu cầu: pip install pillow. Ảnh IELTS/TOEIC/rương báu không có trong bộ thiết kế nên không do script này sinh ra.
"""
import pathlib, sys
from PIL import Image, ImageDraw

D = pathlib.Path(r'C:\Users\datnv\Downloads')
OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(r'C:\Learn_English\public\assets\art')
OUT.mkdir(parents=True, exist_ok=True)

# tên file đích: (ảnh nguồn, hộp cắt x0,y0,x1,y1, kích thước đích (w,h) hoặc None)
CROPS = {
    # Bông – 4 tư thế (ô vuông)
    'bong-hello': ('09_practice_summary_4x.png', (28, 170, 348, 490), (320, 320)),
    'bong-cheer': ('05_speaking_4x.png', (50, 1045, 415, 1410), (320, 320)),
    'bong-write': ('07_writing_4x.png', (684, 1068, 994, 1378), (320, 320)),
    'bong-avatar': ('10_achievements_4x.png', (62, 205, 292, 435), (320, 320)),
    # Minh họa trang chào: nguyên màn hình thiết kế; nút "Bắt đầu" và 4 ô tính năng thật được đặt đè đúng vị trí
    'hero': ('01_home_4x.png', (0, 0, 1536, 1972), (1080, 1387)),
    # Banner độ phân giải cao cho trang chủ đề Du lịch (màn "Đến Santorini, Hy Lạp"), bỏ nút quay lại và bộ đếm
    'travel-hero': ('03_lesson_intro_4x.png', (10, 215, 1290, 935), (1080, 608)),
    # Ảnh chủ đề (cắt lùi vào trong để bỏ góc bo)
    'daily': ('02_topic_selection_4x.png', (72, 447, 330, 745), (384, 444)),
    'it': ('02_topic_selection_4x.png', (1020, 447, 1280, 745), (384, 440)),
    'travel': ('02_topic_selection_4x.png', (72, 862, 345, 1180), (384, 447)),
    'study': ('02_topic_selection_4x.png', (1020, 862, 1280, 1180), (384, 470)),
    'health': ('02_topic_selection_4x.png', (72, 1302, 350, 1615), (384, 432)),
    'food': ('02_topic_selection_4x.png', (1020, 1302, 1280, 1615), (384, 463)),
    # Dải banner "khám phá thế giới"
    'world': ('11_world_banner_4x.png', (0, 0, 6144, 460), (2400, 180)),
}

for name, (src, box, size) in CROPS.items():
    im = Image.open(D / src).convert('RGB').crop(box)
    if size:
        im = im.resize(size, Image.LANCZOS)
    if name == 'bong-avatar':
        # ảnh đại diện tròn: phần ngoài vòng tròn trong suốt
        mask = Image.new('L', im.size, 0)
        ImageDraw.Draw(mask).ellipse((2, 2, im.size[0] - 3, im.size[1] - 3), fill=255)
        im = im.convert('RGBA'); im.putalpha(mask)
    im.save(OUT / f'{name}.webp', 'WEBP', quality=84, method=6)
    print(name, im.size, (OUT / f'{name}.webp').stat().st_size // 1024, 'KB')
