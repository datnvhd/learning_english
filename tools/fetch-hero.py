"""
============================================================================
 fetch-hero.py – Tải ảnh bìa (banner, ảnh đề thi) giấy phép CC0 / Public Domain từ Openverse
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet):   npm run fetch:hero
 Yêu cầu: python + `pip install pillow`

 Mỗi dòng trong ITEMS: (tên file, từ khóa tìm, chỉ số kết quả muốn lấy, kích thước cắt).
 Ảnh được cắt giữa theo đúng tỉ lệ, nén JPEG và lưu vào public/assets/art/photo-<tên>.jpg
 (đóng gói cùng app => dùng được offline). Kết quả tìm kiếm lưu đệm ở tools/.image-cache/hero-<tên>.json.
 Cuối cùng sinh src/app/data/hero-photos.ts (đường dẫn + tác giả + giấy phép) – trang Cài đặt hiển thị nguồn ảnh.
 Muốn đổi ảnh: sửa chỉ số rồi chạy lại với --redo <tên>.
"""
import io
import json
import pathlib
import sys
import time
import urllib.parse
import urllib.request

from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / 'tools' / '.image-cache'
OUT = ROOT / 'public' / 'assets' / 'art'
TS_OUT = ROOT / 'src' / 'app' / 'data' / 'hero-photos.ts'
API = 'https://api.openverse.org/v1/images/'
UA = {'User-Agent': 'EnglishMaster/1.0 (offline learning app build script)'}

ITEMS = [
    ('london', 'big ben westminster london', 1, (1600, 520)),
    ('skyline', 'city skyline skyscrapers', 0, (800, 480)),
    ('study', 'student studying laptop', 0, (800, 480)),
    ('library', 'library books shelves', 0, (800, 480)),
    ('writing', 'hand writing notebook pen', 0, (800, 480)),
    ('headphones', 'woman headphones listening', 0, (800, 480)),
    ('mountain', 'mountain lake landscape', 0, (800, 480)),
    ('office', 'business people talking office', 0, (800, 480)),
]


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def search(query: str) -> list[dict]:
    params = urllib.parse.urlencode({
        'q': query, 'license': 'cc0,pdm', 'category': 'photograph', 'page_size': 12, 'mature': 'false',
        'aspect_ratio': 'wide', 'size': 'large',
    })
    data = json.loads(get(f'{API}?{params}'))
    keep = ('id', 'title', 'creator', 'license', 'foreign_landing_url', 'url', 'thumbnail', 'width', 'height')
    return [{k: r.get(k) for k in keep} for r in data.get('results', [])]


def main() -> None:
    redo = set(sys.argv[sys.argv.index('--redo') + 1:]) if '--redo' in sys.argv else set()
    CACHE.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    info = {}
    for name, query, index, size in ITEMS:
        cache = CACHE / f'hero-{name}.json'
        if cache.exists():
            results = json.loads(cache.read_text(encoding='utf-8'))
        else:
            results = search(query)
            cache.write_text(json.dumps(results, ensure_ascii=False, indent=1), encoding='utf-8')
            time.sleep(3.2)
        if not results:
            print('KHÔNG có kết quả:', name)
            continue
        target = OUT / f'photo-{name}.jpg'
        pick = None
        if target.exists() and name not in redo:
            pick = results[min(index, len(results) - 1)]
        else:
            # thử lần lượt từ chỉ số được chọn cho tới khi tải được ảnh
            for r in results[index:] + results[:index]:
                for url in (r.get('url'), r.get('thumbnail')):
                    try:
                        img = Image.open(io.BytesIO(get(url))).convert('RGB')
                        if img.width < size[0] * 0.6:
                            continue
                        ImageOps.fit(img, size, Image.LANCZOS).save(target, 'JPEG', quality=80, optimize=True, progressive=True)
                        pick = r
                        break
                    except Exception:
                        continue
                if pick:
                    break
        if not pick:
            print('KHÔNG tải được:', name)
            continue
        info[name] = {
            'src': f'assets/art/photo-{name}.jpg', 'creator': pick.get('creator') or 'Unknown',
            'license': (pick.get('license') or '').upper(), 'url': pick.get('foreign_landing_url') or '',
        }
        print('OK', name, '-', pick.get('title'))

    ts = '/**\n * Ảnh bìa của app (SINH TỰ ĐỘNG bởi tools/fetch-hero.py – không sửa tay).\n'
    ts += ' * Nguồn: Openverse, chỉ dùng ảnh giấy phép CC0 / Public Domain Mark.\n */\n'
    ts += 'export const HERO_PHOTOS = ' + json.dumps(info, ensure_ascii=False, indent=2) + ' as const;\n\n'
    ts += 'export type HeroPhoto = keyof typeof HERO_PHOTOS;\n'
    TS_OUT.write_text(ts, encoding='utf-8')


main()
