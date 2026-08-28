import { buildGalleryImages } from '$lib/galleryServer';

const PREFIX = 'images/astana/';
const THUMB_URL_BASE = '/imagesThumbs/astana';
const FULL_URL_BASE = '/images/astana';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    prefix: PREFIX,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}