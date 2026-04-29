<script>
  import { onMount } from 'svelte';
  import ImageBox from '$lib/components/ImageBox.svelte';

  export let images = [];
  export let captions = {};
  export let pageSize = 9;
  export let squareThumb = true;

  let visibleCount = pageSize;
  let sentinel;
  let observer;

  function fallbackCaption(filename = '') {
    return filename.replace(/\.[^.]+$/, '');
  }

  $: normalizedImages = Array.isArray(images) ? images : [];
  $: captionsMap = captions && typeof captions === 'object' ? captions : {};

  $: galleryItems = normalizedImages.map((img, index) => {
    const caption = captionsMap[img.filename] ?? fallbackCaption(img.filename);

    return {
      index,
      thumbSrc: img.thumbSrc,
      src: img.fullSrc,
      alt: caption,
      caption
    };
  });

  $: visibleItems = galleryItems.slice(0, visibleCount);
  $: hasMore = visibleCount < galleryItems.length;

  function loadMore() {
    if (!hasMore) return;
    visibleCount = Math.min(visibleCount + pageSize, galleryItems.length);
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) loadMore();
      },
      {
        root: null,
        rootMargin: '300px 0px',
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
      thumbSrc={image.thumbSrc}
      alt={image.alt}
      caption={image.caption}
      squareThumb={squareThumb}
      gallery={galleryItems}
      initialIndex={image.index}
    />
  {/each}

  {#if hasMore}
    <div class="sentinel" bind:this={sentinel} aria-hidden="true"></div>
  {/if}
</section>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .sentinel {
    height: 1px;
    grid-column: 1 / -1;
  }

  @media (max-width: 900px) {
    .gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
</style>