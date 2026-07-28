import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/astana';
const THUMB_URL_BASE = '/imagesThumbs/astana';
const FULL_URL_BASE = '/images/astana';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}