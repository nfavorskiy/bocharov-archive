import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/watercolorsGraphics/sketches';
const THUMB_URL_BASE = '/thumbnails/sketches';
const FULL_URL_BASE = '/watercolorsGraphics/sketches';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}