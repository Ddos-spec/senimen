import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const numericPart = (name: string) => Number(name.match(/(\d+)/)?.[1] ?? 0);

export const carouselSlides = Array.from({ length: 193 }, (_, index) => ({
  src: `images/carousel_all/slide_${index + 1}.jpg`,
  label: `SLIDE ${String(index + 1).padStart(3, '0')}`,
  alt: `Dokumentasi arsip SENIMEN — frame ${String(index + 1).padStart(3, '0')}`,
}));

export const featuredSlides = [20, 23, 29, 49, 83, 108, 109, 110, 112, 113].map((number, index) => ({
  src: `images/carousel_all/slide_${number}.jpg`,
  label: `SELECTED / ${String(index + 1).padStart(2, '0')}`,
  alt: `Pilihan dokumentasi SENIMEN ${String(index + 1).padStart(2, '0')}`,
}));

export async function getReels() {
  const directory = join(process.cwd(), 'public', 'videos', 'reels');
  try {
    const files = (await readdir(directory))
      .filter((file) => /\.(mp4|webm|mov)$/i.test(file))
      .sort((a, b) => numericPart(a) - numericPart(b) || a.localeCompare(b));

    return files.map((file, index) => ({
      src: `videos/reels/${file}`,
      file,
      label: `REEL ${String(index + 1).padStart(3, '0')}`,
    }));
  } catch {
    return [];
  }
}
