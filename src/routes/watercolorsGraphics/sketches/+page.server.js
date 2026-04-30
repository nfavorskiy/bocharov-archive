import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/sketches';
const THUMB_URL_BASE = '/imagesThumbs/sketches';
const FULL_URL_BASE = '/images/sketches';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}