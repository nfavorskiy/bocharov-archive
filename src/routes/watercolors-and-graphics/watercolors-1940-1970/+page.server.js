import { readdir } from 'node:fs/promises';

const DIR = 'static/graphics/watercolors/watercolors-1940-1970';
const URL_BASE = '/graphics/watercolors/watercolors-1940-1970';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const files = await readdir(DIR);

  const images = files
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((filename) => ({
      filename,
      src: encodeURI(`${URL_BASE}/${filename}`)
    }));

  return { images };
}