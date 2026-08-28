import { buildGalleryImages } from '$lib/galleryServer';

const PREFIX = 'images/diploma1951/';
const THUMB_URL_BASE = '/imagesThumbs/diploma1951';
const FULL_URL_BASE = '/images/diploma1951';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    prefix: PREFIX,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}