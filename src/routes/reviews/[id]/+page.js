import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const review = await import(`$lib/data/reviews/${params.id}.json`);
    return { review: review.default };
  } catch (err) {
    throw error(404, `Review "${params.id}" not found`);
  }
}