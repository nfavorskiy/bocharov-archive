import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const collection = process.argv[2] ?? 'watercolors1940_1970';
const inputDir = `static/watercolorsGraphics/${collection}`;
const outputDir = `static/thumbnails/${collection}`;
const maxWidth = 420;

await mkdir(outputDir, { recursive: true });

const files = await readdir(inputDir);

for (const filename of files) {
  if (!/\.(jpe?g|png|webp)$/i.test(filename)) continue;

  const inputPath = join(inputDir, filename);
  const outputPath = join(outputDir, filename);

  await sharp(inputPath)
    .resize({
      width: maxWidth,
      withoutEnlargement: true,
      fit: 'inside'
    })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(outputPath);

  console.log(`Wrote ${outputPath}`);
}