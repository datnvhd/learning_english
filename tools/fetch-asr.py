"""
============================================================================
 fetch-asr.py – Tải mô hình nhận dạng giọng nói tiếng Anh (Vosk) về máy
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run fetch:asr
 - Tải vosk-model-small-en-us-0.15 (Apache-2.0, ~40 MB) từ alphacephei.com
 - Đóng gói lại thành tar.gz (định dạng thư viện vosk-browser đọc được) rồi CHIA thành các phần ≤ 20 MB:
     public/assets/asr/en-us.tar.gz.000, .001, ...  +  public/assets/asr/en-us.json (danh sách phần, phiên bản)
   vì Cloudflare Pages (và nhiều nơi lưu trữ tĩnh) giới hạn 25 MB mỗi tệp. App tải đủ các phần rồi ghép lại
   trong trình duyệt (core/asr.service.ts).
 Mô hình được đóng gói cùng app nên phần Speaking chấm điểm được khi KHÔNG có internet:
 giọng nói được nhận dạng ngay trong trình duyệt, không gửi đi đâu cả.

 Tùy chọn:  --force  tải lại;  nếu còn tệp cũ en-us.tar.gz (một khối) thì chỉ chia nhỏ, không tải lại.
"""
import hashlib
import io
import json
import pathlib
import sys
import tarfile
import urllib.request
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
NAME = "vosk-model-small-en-us-0.15"
URL = f"https://alphacephei.com/vosk/models/{NAME}.zip"
DIR = ROOT / "public" / "assets" / "asr"
LEGACY = DIR / "en-us.tar.gz"
MANIFEST = DIR / "en-us.json"
PART = 20 * 1024 * 1024


def repack(data: bytes) -> bytes:
    """zip của alphacephei -> tar.gz USTAR có cả mục thư mục"""
    out = io.BytesIO()
    with zipfile.ZipFile(io.BytesIO(data)) as zf, tarfile.open(fileobj=out, mode="w:gz", format=tarfile.USTAR_FORMAT) as tf:
        # Ghi cả mục thư mục (vosk-browser cần thư mục có sẵn khi giải nén vào bộ nhớ trình duyệt)
        dirs = sorted({str(pathlib.PurePosixPath(i.filename).parent) for i in zf.infolist()} | {i.filename.rstrip("/") for i in zf.infolist() if i.is_dir()})
        for d in [x for x in dirs if x not in (".", "")]:
            ti = tarfile.TarInfo(d + "/")
            ti.type = tarfile.DIRTYPE
            ti.mode = 0o755
            ti.mtime = 1_600_000_000
            tf.addfile(ti)
        for info in zf.infolist():
            if info.is_dir():
                continue
            ti = tarfile.TarInfo(info.filename)
            ti.size = info.file_size
            ti.mode = 0o644
            ti.mtime = 1_600_000_000
            tf.addfile(ti, io.BytesIO(zf.read(info)))
    return out.getvalue()


def write_parts(blob: bytes) -> None:
    """Chia tar.gz thành các phần ≤ 20 MB và ghi danh sách vào en-us.json"""
    DIR.mkdir(parents=True, exist_ok=True)
    for old in DIR.glob("en-us.tar.gz.*"):
        old.unlink()
    parts = []
    for i in range(0, len(blob), PART):
        name = f"en-us.tar.gz.{i // PART:03d}"
        (DIR / name).write_bytes(blob[i:i + PART])
        parts.append(name)
    version = hashlib.sha1(blob).hexdigest()[:12]
    MANIFEST.write_text(json.dumps({"model": NAME, "version": version, "size": len(blob), "parts": parts}, indent=1) + "\n", encoding="utf-8")
    print(f"Xong: {len(parts)} phần, {len(blob) / 1e6:.1f} MB, phiên bản {version}")


def main() -> None:
    force = "--force" in sys.argv
    if LEGACY.exists() and not force:
        print("Chia nhỏ tệp mô hình cũ", LEGACY)
        write_parts(LEGACY.read_bytes())
        LEGACY.unlink()
        return
    if MANIFEST.exists() and not force:
        print("Đã có mô hình:", MANIFEST)
        return
    print("Đang tải", URL)
    write_parts(repack(urllib.request.urlopen(URL, timeout=300).read()))


main()
