import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/congratulationsAndVarious';
const THUMB_URL_BASE = '/imagesThumbs/congratulationsAndVarious';
const FULL_URL_BASE = '/images/congratulationsAndVarious';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}