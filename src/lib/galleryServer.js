import { readdir } from 'node:fs/promises';

export async function buildGalleryImages({ dir, thumbBase, fullBase }) {
  const files = await readdir(dir);

  return files
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map((filename) => ({
      filename,
      thumbSrc: thumbBase + '/' + encodeURI(filename),
      fullSrc: fullBase + '/' + encodeURI(filename)
    }));
}