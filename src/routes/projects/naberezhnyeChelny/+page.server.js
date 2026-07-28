import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/naberezhnyeChelny';
const THUMB_URL_BASE = '/imagesThumbs/naberezhnyeChelny';
const FULL_URL_BASE = '/images/naberezhnyeChelny';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}