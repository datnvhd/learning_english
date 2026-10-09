/**
 * Ảnh bìa của app (SINH TỰ ĐỘNG bởi tools/fetch-hero.py – không sửa tay).
 * Nguồn: Openverse, chỉ dùng ảnh giấy phép CC0 / Public Domain Mark.
 */
export const HERO_PHOTOS = {
  "london": {
    "src": "assets/art/photo-london.jpg",
    "creator": "Unknown",
    "license": "CC0",
    "url": "https://www.rawpixel.com/image/5924003/photo-image-background-public-domain-sky"
  },
  "skyline": {
    "src": "assets/art/photo-skyline.jpg",
    "creator": "Unknown",
    "license": "CC0",
    "url": "https://www.rawpixel.com/image/5967710/aerial-view-city-skyline-skyscraper"
  },
  "study": {
    "src": "assets/art/photo-study.jpg",
    "creator": "Stanley Dai",
    "license": "CC0",
    "url": "https://stocksnap.io/photo/laptop-apple-BUFBDV2NQW"
  },
  "library": {
    "src": "assets/art/photo-library.jpg",
    "creator": "Patrik Goethe",
    "license": "CC0",
    "url": "https://stocksnap.io/photo/books-library-EB9B6BC1F6"
  },
  "writing": {
    "src": "assets/art/photo-writing.jpg",
    "creator": "Green Chameleon",
    "license": "CC0",
    "url": "https://stocksnap.io/photo/writing-drawing-8Y0EDX4VP9"
  },
  "headphones": {
    "src": "assets/art/photo-headphones.jpg",
    "creator": "Burst",
    "license": "CC0",
    "url": "https://stocksnap.io/photo/woman-listening-CXVAJQHIMC"
  },
  "mountain": {
    "src": "assets/art/photo-mountain.jpg",
    "creator": "Unknown",
    "license": "CC0",
    "url": "https://www.rawpixel.com/image/5904011/photo-image-public-domain-tree-green"
  },
  "office": {
    "src": "assets/art/photo-office.jpg",
    "creator": "Helena Lopes",
    "license": "CC0",
    "url": "https://stocksnap.io/photo/businessmeeting-people-AEENLCARXY"
  }
} as const;

export type HeroPhoto = keyof typeof HERO_PHOTOS;
