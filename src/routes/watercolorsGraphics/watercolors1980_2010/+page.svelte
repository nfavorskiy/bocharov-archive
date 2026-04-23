<script>
  import { onMount } from 'svelte';
  import ImageBox from '$lib/components/ImageBox.svelte';
  import { t } from '$lib/i18n';

  export let data;

  const PAGE_SIZE = 12;
  let visibleCount = PAGE_SIZE;
  let sentinel;
  let observer;
  let galleryEl;

  function fallbackCaption(filename) {
    return filename.replace(/\.[^.]+$/, '');
  }

  $: galleryItems = data.images.map((img, index) => {
    const localized =
      $t.messages.galleries?.watercolors1980_2010?.captions?.[img.filename];

    const caption = localized ?? fallbackCaption(img.filename);

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
    visibleCount = Math.min(visibleCount + PAGE_SIZE, galleryItems.length);
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) loadMore();
      },
      {
        root: galleryEl,
        rootMargin: '300px 0px', 
        threshold: 0
      }
    );

    if (sentinel) observer.observe(sentinel);

    return () => observer?.disconnect();
  });
</script>

<section class="gallery" bind:this={galleryEl}>
  {#each visibleItems as image}
    <ImageBox
      src={image.src}
      thumbSrc={image.thumbSrc}
      alt={image.alt}
      caption={image.caption}
      squareThumb={true}
      gallery={galleryItems}
      initialIndex={image.index}
    />
  {/each}

  {#if hasMore}
    <div class="sentinel" bind:this={sentinel} aria-hidden="true"></div>
  {/if}
</section>

<style>

  :global(body) {
    overflow: hidden; 
  }

  :root { --nav-h: 5rem; }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    align-items: start;

    height: calc(100dvh - var(--nav-h));
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    -webkit-overflow-scrolling: touch;
  }

  .sentinel {
    height: 1px;
    grid-column: 1 / -1;
  }
</style>