import { buildGalleryImages } from '$lib/galleryServer';

const PREFIX = 'images/watercolors1940_1970/';
const THUMB_URL_BASE = '/imagesThumbs/watercolors1940_1970';
const FULL_URL_BASE = '/images/watercolors1940_1970';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    prefix: PREFIX,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}