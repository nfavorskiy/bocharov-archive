<script>
  import ReviewImageBox from '$lib/components/ReviewImageBox.svelte';
  import { language } from '$lib/stores/language';

  export let data;
  
  let review = data.review;

  // Reactively load the correct language whenever review ID or language changes
  $: if (data.review.id && $language) {
    (async () => {
      try {
        const module = await import(`$lib/data/reviews/${data.review.id}${$language.toUpperCase()}.json`);
        review = module.default;
      } catch (err) {
        // Fallback to Russian if the language version doesn't exist
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

<article class="review">
  <div class="header">
    <div class="image-column">
      <ReviewImageBox 
        src={review.image} 
        thumbSrc={review.thumbnail} 
        alt={review.id}
        caption={review.imageCaption} 
      />
    </div>
    <div class="info-column">
      <h3>{review.title}</h3>
      <p class="authorInfo">{review.authorInfo}</p>
      <p class="textSource">{review.textSource}</p>
    </div>
  </div>
  
  <p class="content">
    {review.text}
  </p>
</article>

<style>
  .review {
    padding: 0rem 2rem 1rem 2rem;
    line-height: 1.8;
  }
  
  .header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: start;
  }

  .image-column {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    min-width: 30vw;
  }

  .info-column {
    text-align: right;
  }
  
  .info-column h1 {
    margin: 0 0 1rem 0;
  }
  
  .authorInfo {
    color: var(--text-color);
    opacity: 0.8;
    margin: 0;
    white-space: pre-wrap;
    font-size: 0.85rem;
  }

  .textSource {
    font-style: italic;
    color: var(--text-color);
    opacity: 0.95;
    margin: 1.5rem 0 0 0;
    white-space: pre-wrap;
    font-size: 0.85rem;
  }
  
  .content {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-indent: 2em each-line;
  }

  @media (max-width: 768px) {
    .header {
      grid-template-columns: 1fr;
    }
  }
</style>