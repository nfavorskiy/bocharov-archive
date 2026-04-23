import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/watercolorsGraphics/pencilPastelMarker';
const THUMB_URL_BASE = '/thumbnails/pencilPastelMarker';
const FULL_URL_BASE = '/watercolorsGraphics/pencilPastelMarker';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}