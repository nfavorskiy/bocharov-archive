<script>
  import ImageBox from '$lib/components/ImageBox.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  const galleryItems = data.images.map((img) => ({
    src: img.src,
    alt: img.filename,
    caption: img.filename.replace(/\.[^.]+$/, '')
  }));
</script>

<section class="gallery">
  {#each galleryItems as image, index}
    <ImageBox
      src={image.src}
      alt={image.alt}
      caption={image.caption}
      squareThumb={true}
      gallery={galleryItems}
      initialIndex={index}
    />
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