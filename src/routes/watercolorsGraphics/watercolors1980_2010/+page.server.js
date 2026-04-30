import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/watercolors1980_2010';
const THUMB_URL_BASE = '/imagesThumbs/watercolors1980_2010';
const FULL_URL_BASE = '/images/watercolors1980_2010';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}