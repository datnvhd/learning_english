"""
============================================================================
 fetch-images.py – Tải ảnh minh họa từ vựng (giấy phép CC0 / Public Domain) từ Openverse
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet):   npm run fetch:images
 Yêu cầu: python + `pip install pillow`

 Quy trình cho mỗi dòng trong tools/image-words.txt (chủ đề|từ|từ khóa|chỉ số ảnh):
   1. Tìm ảnh trên Openverse (chỉ lấy license CC0 / PDM, loại ảnh chụp) – kết quả được lưu đệm
      vào tools/.image-cache/<chủ đề>-<từ>.json để lần sau đổi ảnh không cần tìm lại.
   2. Tải ảnh thu nhỏ của kết quả được chọn, cắt giữa về tỉ lệ 4:3, thu về 360x270, nén JPEG.
   3. Lưu vào public/assets/photos/<chủ đề>-<từ>.jpg (đóng gói cùng app => dùng được offline).
 Cuối cùng sinh:
   - src/app/data/photos.ts : bảng mã từ -> đường dẫn ảnh + thông tin tác giả/giấy phép
   - CREDITS.md            : danh sách nguồn ảnh
 Giới hạn của Openverse cho khách vãng lai: 20 lượt tìm/phút, 200 lượt/ngày, 1000 ảnh thu nhỏ/ngày,
 nên script tự giãn nhịp và bỏ qua ảnh đã có.
 Muốn đổi ảnh xấu: sửa chỉ số ở cột thứ 4 rồi chạy lại với --redo <chủ đề>|<từ>.
"""
import io
import json
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request

from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parent.parent
LIST = ROOT / 'tools' / 'image-words.txt'
CACHE = ROOT / 'tools' / '.image-cache'
OUT = ROOT / 'public' / 'assets' / 'photos'
TS_OUT = ROOT / 'src' / 'app' / 'data' / 'photos.ts'
CREDITS = ROOT / 'CREDITS.md'
API = 'https://api.openverse.org/v1/images/'
UA = {'User-Agent': 'EnglishAdventure/1.0 (offline learning app build script)'}
SIZE = (360, 270)


def slug(text: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read()


def search(query: str) -> list[dict]:
    params = urllib.parse.urlencode({
        'q': query, 'license': 'cc0,pdm', 'category': 'photograph', 'page_size': 8, 'mature': 'false',
    })
    data = json.loads(get(f'{API}?{params}'))
    keep = ('id', 'title', 'creator', 'creator_url', 'license', 'license_version', 'foreign_landing_url', 'thumbnail', 'width', 'height', 'source')
    return [{k: r.get(k) for k in keep} for r in data.get('results', [])]


def main() -> None:
    redo = set(sys.argv[sys.argv.index('--redo') + 1:]) if '--redo' in sys.argv else set()
    CACHE.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    entries = []
    searches = 0
    for raw in LIST.read_text(encoding='utf-8').splitlines():
        line = raw.strip()
        if not line or line.startswith('//'):
            continue
        topic, word, query, pick = [p.strip() for p in line.split('|')]
        key = f'{topic}-{slug(word)}'
        cache_file = CACHE / f'{key}.json'
        if cache_file.exists():
            cands = json.loads(cache_file.read_text(encoding='utf-8'))
        else:
            if searches:
                time.sleep(3.3)  # tôn trọng giới hạn 20 lượt tìm/phút
            try:
                cands = search(query)
            except Exception as e:  # hết lượt trong ngày hoặc lỗi mạng -> để lần sau
                print('SEARCH FAIL', key, e)
                continue
            searches += 1
            cache_file.write_text(json.dumps(cands, ensure_ascii=False, indent=1), encoding='utf-8')
        if not cands:
            print('NO RESULT', key)
            continue
        choice = cands[min(int(pick), len(cands) - 1)]
        target = OUT / f'{key}.jpg'
        if not target.exists() or f'{topic}|{word}' in redo:
            try:
                img = Image.open(io.BytesIO(get(choice['thumbnail']))).convert('RGB')
                img = ImageOps.fit(img, SIZE, Image.LANCZOS, centering=(0.5, 0.45))
                img.save(target, 'JPEG', quality=72, optimize=True, progressive=True)
                print('OK', key)
                time.sleep(0.3)
            except Exception as e:
                print('THUMB FAIL', key, e)
                continue
        entries.append({
            'id': f'{topic}:{word.lower()}', 'src': f'assets/photos/{key}.jpg', 'title': choice.get('title') or word,
            'creator': choice.get('creator') or 'Unknown', 'license': (choice.get('license') or '').upper(),
            'url': choice.get('foreign_landing_url') or '', 'source': choice.get('source') or '',
        })

    # --- sinh photos.ts ---
    ts = ['/**', ' * Ảnh minh họa từ vựng (SINH TỰ ĐỘNG bởi tools/fetch-images.py – không sửa tay).',
          ' * Nguồn: Openverse, chỉ dùng ảnh giấy phép CC0 / Public Domain Mark. Chi tiết tác giả xem CREDITS.md.',
          ' */', 'export interface PhotoInfo {', '  src: string;', '  creator: string;', '  license: string;', '  url: string;', '}', '',
          'export const PHOTOS: Record<string, PhotoInfo> = {']
    for e in entries:
        info = {k: e[k] for k in ('src', 'creator', 'license', 'url')}  # bỏ 'title' cho gọn bundle
        ts.append(f'  {json.dumps(e["id"], ensure_ascii=False)}: {json.dumps(info, ensure_ascii=False)},')
    ts.append('};\n')
    TS_OUT.write_text('\n'.join(ts), encoding='utf-8')

    # --- sinh CREDITS.md ---
    md = ['# Nguồn ảnh minh họa', '', 'Toàn bộ ảnh chụp trong `public/assets/photos` được tải qua [Openverse](https://openverse.org)',
          'và chỉ dùng ảnh có giấy phép **CC0** hoặc **Public Domain Mark** (không bắt buộc ghi công, nhưng chúng tôi vẫn ghi lại để tôn trọng tác giả).', '',
          '| Từ | Ảnh | Tác giả | Giấy phép | Nguồn |', '|---|---|---|---|---|']
    for e in entries:
        title = e['title'].replace('|', '/')[:60]
        md.append(f"| {e['id']} | {title} | {e['creator'].replace('|', '/')} | {e['license']} | [{e['source']}]({e['url']}) |")
    CREDITS.write_text('\n'.join(md) + '\n', encoding='utf-8')
    print(f'\nTổng: {len(entries)} ảnh · lượt tìm mới: {searches}')


if __name__ == '__main__':
    main()
