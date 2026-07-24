import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/photos1920_1950';
const THUMB_URL_BASE = '/imagesThumbs/photos1920_1950';
const FULL_URL_BASE = '/images/photos1920_1950';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}