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

  $: authors = Array.isArray(review.title)
    ? review.title
    : review.authorName
      ? [{ authorName: review.authorName, authorInfo: review.authorInfo }]
      : [];

  $: linkedReviewText = (review?.text || '').replace(
    /\[(\d+)\]/g,
    '<a class="fn-link" href="#footnote-$1">[$1]</a>'
  );
</script>

<article class="review">
  <div class="header">

    <div class="image-column">
      {#if review.image}
        <ReviewImageBox
          src={review.image}
          thumbSrc={review.thumbnail}
          alt={review.id}
          caption={review.imageCaption}
        />
      {/if}
    </div>

    <div class="info-column">
      {#each authors as author}
        <h3>{author.authorName}</h3>
        <p class="authorInfo">{author.authorInfo}</p>
      {/each}
      <p class="textSource">{review.textSource}</p>
    </div>

  </div>
  
  <p class="content">
    {@html linkedReviewText}
  </p>

  {#if review.poem}
    <section class="poem">
      <h4>{review.poem.poemTitle}</h4>
      {#if review.poem.poemDate}
        <p class="poem-date">{review.poem.poemDate}</p>
      {/if}
      <p class="poem-text">
        {review.poem.poemText}
      </p>
    </section>
  {/if}

  {#if review.footnotes && review.footnotes.length}
    <hr/>
    <section class="footnotes">
      <h3>Примечания</h3>
      <ol>
        {#each review.footnotes as fn, i}
          <li id={"footnote-" + (i + 1)}>{fn.text}</li>
        {/each}
      </ol>
    </section>
  {/if}
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
    margin-bottom: 1rem;
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

  .info-column h3 {
    margin: 0rem 0 0.5rem 0;
  }
  
  .authorInfo {
    color: var(--text-color);
    opacity: 0.8;
    margin: 0rem 0 2rem 0;
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

  :global(.fn-link) {
    vertical-align: super;
    font-size: 0.75em;
    line-height: 0;
    text-decoration: underline;
    margin-left: 0.08em;
  }

  .poem {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    border-left: 0.2rem solid var(--text-color);
    opacity: 0.9;
  }

  .poem h4 {
    margin: 0;
    font-weight: 600;
  }

  .poem-date {
    font-size: 0.85rem;
    opacity: 0.8;
    margin: 0 0 1rem 0;
    font-style: italic;
  }

  .poem-text {
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0;
    line-height: 1.6;
    columns: 1;
    column-gap: 2rem;
  }

  @media (max-width: 768px) {
    .header {
      grid-template-columns: 1fr;
    }
  }
</style>