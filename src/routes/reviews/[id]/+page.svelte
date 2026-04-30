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
        alt={data.review.id}
        caption={data.review.imageCaption} 
      />
    </div>
    <div class="info-column">
      <h3>{data.review.title}</h3>
      <p class="authorInfo">{data.review.authorInfo}</p>
      <p class="textSource">{data.review.textSource}</p>
    </div>
  </div>
  
  <p class="content">
    {data.review.text}
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