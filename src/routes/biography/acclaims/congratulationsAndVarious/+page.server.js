import { buildGalleryImages } from '$lib/galleryServer';

const PREFIX = 'images/congratulationsAndVarious/';
const THUMB_URL_BASE = '/imagesThumbs/congratulationsAndVarious';
const FULL_URL_BASE = '/images/congratulationsAndVarious';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    prefix: PREFIX,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}