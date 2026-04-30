<script>
  import ReviewImageBox from '$lib/components/ReviewImageBox.svelte';

  export let data;
</script>

<article class="review">
  <div class="header">
    <div class="image-column">
      <ReviewImageBox 
        src={data.review.image} 
        thumbSrc={data.review.thumbnail} 
        alt={data.review.author} 
      />
    </div>
    <div class="info-column">
      <h1>{data.review.title}</h1>
      <p class="author">— {data.review.author}</p>
    </div>
  </div>
  
  <p class="content">
    {data.review.text}
  </p>
</article>

<style>
  .review {
    margin: 2rem auto;
    padding: 2rem;
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
  }
  
  .info-column h1 {
    margin: 0 0 1rem 0;
  }
  
  .author {
    font-style: italic;
    color: var(--text-color);
    opacity: 0.8;
    margin: 0;
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