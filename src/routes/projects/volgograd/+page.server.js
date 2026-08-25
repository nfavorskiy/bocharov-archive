import { buildGalleryImages } from '$lib/galleryServer';

const PREFIX = 'images/volgograd/';
const THUMB_URL_BASE = '/imagesThumbs/volgograd';
const FULL_URL_BASE = '/images/volgograd';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    prefix: PREFIX,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}