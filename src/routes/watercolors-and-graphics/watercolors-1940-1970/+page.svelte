<script>
  import ImageBox from '$lib/components/ImageBox.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<section class="gallery">
  {#each data.images as image}
    <ImageBox src={image.src} alt={image.filename} />
  {/each}
</section>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    align-items: start;
  }
</style>