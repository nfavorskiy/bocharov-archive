<script>
  import ReviewDisplay from '$lib/components/ReviewDisplay.svelte';
  import { language } from '$lib/stores/language';

  export let data;
  let review = data.review;

  $: if (data.review.id && $language) {
    (async () => {
      try {
        const module = await import(`$lib/data/reviews/${data.review.id}${$language.toUpperCase()}.json`);
        review = module.default;
      } catch (err) {
        try {
          const fallbackModule = await import(`$lib/data/reviews/${data.review.id}RU.json`);
          review = fallbackModule.default;
        } catch (fallbackErr) {
          console.error(`Review not found for either language: ${$language} or RU`);
        }
      }
    })();
  }
</script>

<ReviewDisplay {review} />