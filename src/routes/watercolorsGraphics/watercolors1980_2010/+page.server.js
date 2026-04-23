import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/watercolorsGraphics/watercolors1980_2010';
const THUMB_URL_BASE = '/thumbnails/watercolors1980_2010';
const FULL_URL_BASE = '/watercolorsGraphics/watercolors1980_2010';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}