import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/volgograd';
const THUMB_URL_BASE = '/imagesThumbs/volgograd';
const FULL_URL_BASE = '/images/volgograd';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}