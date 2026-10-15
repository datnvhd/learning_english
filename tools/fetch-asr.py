"""
============================================================================
 fetch-asr.py – Tải mô hình nhận dạng giọng nói tiếng Anh (Vosk) về máy
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run fetch:asr
 - Tải vosk-model-small-en-us-0.15 (Apache-2.0, ~40 MB) từ alphacephei.com
 - Đóng gói lại thành public/assets/asr/en-us.tar.gz (định dạng thư viện vosk-browser đọc được)
 Mô hình được đóng gói cùng app nên phần Speaking chấm điểm được khi KHÔNG có internet:
 giọng nói được nhận dạng ngay trong trình duyệt, không gửi đi đâu cả.
"""
import io
import pathlib
import sys
import tarfile
import urllib.request
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
NAME = "vosk-model-small-en-us-0.15"
URL = f"https://alphacephei.com/vosk/models/{NAME}.zip"
OUT = ROOT / "public" / "assets" / "asr" / "en-us.tar.gz"


def main() -> None:
    if OUT.exists() and OUT.stat().st_size > 10_000_000 and "--force" not in sys.argv:
        print("Đã có mô hình:", OUT)
        return
    print("Đang tải", URL)
    data = urllib.request.urlopen(URL, timeout=300).read()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(io.BytesIO(data)) as zf, tarfile.open(OUT, "w:gz", format=tarfile.USTAR_FORMAT) as tf:
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
    print("Xong:", OUT, f"{OUT.stat().st_size / 1e6:.1f} MB")


main()
