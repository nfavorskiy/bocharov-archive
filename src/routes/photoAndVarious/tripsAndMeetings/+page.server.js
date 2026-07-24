import { buildGalleryImages } from '$lib/galleryServer';

const DIR = 'static/images/tripsAndMeetings';
const THUMB_URL_BASE = '/imagesThumbs/tripsAndMeetings';
const FULL_URL_BASE = '/images/tripsAndMeetings';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const images = await buildGalleryImages({
    dir: DIR,
    thumbBase: THUMB_URL_BASE,
    fullBase: FULL_URL_BASE
  });

  return { images };
}