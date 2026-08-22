import { access, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const imageDir = path.join(root, 'public', 'images', 'articles');

const covers = [
  'dokumentasi-proses-seni',
  'artist-statement',
  'brief-kolaborasi-kreatif',
  'arsip-kolektif',
  'dokumentasi-event-seni',
  'portofolio-seniman',
];

await mkdir(imageDir, { recursive: true });

const exists = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

await Promise.all(covers.map(async (name) => {
  const source = path.join(imageDir, `${name}.png`);
  const output = path.join(imageDir, `${name}.webp`);

  if (!(await exists(source))) {
    console.warn(`[covers] source missing: ${path.relative(root, source)}`);
    return;
  }

  if (await exists(output)) {
    const [sourceStat, outputStat] = await Promise.all([stat(source), stat(output)]);
    if (outputStat.mtimeMs >= sourceStat.mtimeMs) return;
  }

  await sharp(source)
    .rotate()
    .resize({ width: 1200, height: 900, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(output);

  console.log(`[covers] generated ${path.relative(root, output)}`);
}));
