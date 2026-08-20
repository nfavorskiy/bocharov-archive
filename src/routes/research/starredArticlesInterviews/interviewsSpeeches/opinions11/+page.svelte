<script>
  import ReviewDisplay from '$lib/components/ReviewDisplay.svelte';
  import { language } from '$lib/stores/language';

  let review;

  $: (async () => {
    try {
      const module = await import(`$lib/data/research/opinions11${$language.toUpperCase()}.json`);
      review = module.default;
    } catch (err) {
      try {
        const fallbackModule = await import('$lib/data/research/opinions11RU.json');
        review = fallbackModule.default;
      } catch (fallbackErr) {
        console.error(`Review not found for either language: ${$language} or RU`);
      }
    }
  })();
</script>

{#if review}
  <ReviewDisplay {review} />
{/if}
