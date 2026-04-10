<script>
  import { onMount } from 'svelte';
  import ImageBox from '$lib/components/ImageBox.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  const PAGE_SIZE = 12;
  let visibleCount = PAGE_SIZE;
  let sentinel;
  let observer;

  // Keep original index so lightbox arrows stay aligned with full gallery
  const galleryItems = data.images.map((img, index) => ({
    index,
    src: img.src,
    alt: img.filename,
    caption: img.filename.replace(/\.[^.]+$/, '')
  }));

  $: visibleItems = galleryItems.slice(0, visibleCount);
  $: hasMore = visibleCount < galleryItems.length;

  function loadMore() {
    if (!hasMore) return;
    visibleCount = Math.min(visibleCount + PAGE_SIZE, galleryItems.length);
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) loadMore();
      },
      {
        root: null,
        rootMargin: '300px 0px', // start loading before user reaches bottom
        threshold: 0
      }
    );

    if (sentinel) observer.observe(sentinel);

    return () => observer?.disconnect();
  });
</script>

<section class="gallery">
  {#each visibleItems as image}
    <ImageBox
      src={image.src}
      alt={image.alt}
      caption={image.caption}
      squareThumb={true}
      gallery={galleryItems}
      initialIndex={image.index}
    />
  {/each}
</section>

{#if hasMore}
  <div class="sentinel" bind:this={sentinel} aria-hidden="true"></div>
{/if}

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .sentinel {
    height: 1px;
  }
</style>