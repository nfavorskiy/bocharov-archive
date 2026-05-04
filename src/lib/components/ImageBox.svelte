<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';

  export let src = '';
  export let thumbSrc = '';
  export let alt = '';
  export let thumbClass = '';
  export let fullClass = '';
  export let closeOnBackdrop = true;
  export let squareThumb = false;
  export let caption = '';

  export let gallery = [];
  export let initialIndex = 0;

  let isOpen = false;
  let previousOverflow = '';
  let currentIndex = 0;

  let thumbLoaded = false;
  let fullLoaded = false;

  let thumbImageEl;
  let fullImageEl;

  $: hasGallery = Array.isArray(gallery) && gallery.length > 0;
  $: currentItem = hasGallery
    ? gallery[currentIndex] ?? gallery[0]
    : { src, thumbSrc, alt, caption };

  // Source refs
  $: thumbImageSrc = thumbSrc || src;
  $: fullImageSrc = currentItem?.src || src;

  function markThumbLoaded() {
    thumbLoaded = true;
  }

  function markFullLoaded() {
    fullLoaded = true;
  }

  async function open() {
    if (browser) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    if (hasGallery) {
      currentIndex = Math.min(Math.max(initialIndex, 0), gallery.length - 1);
    }
    // reset full image loaded state for the lightbox
    fullLoaded = false;
    isOpen = true;

    // wait for DOM to render the full image and then check if already loaded (cache)
    await tick();
    if (fullImageEl?.complete && fullImageEl.naturalWidth > 0) {
      fullLoaded = true;
    }
  }

  async function showPrev() {
    if (!hasGallery || gallery.length < 2) return;
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    fullLoaded = false;
    await tick();
    if (fullImageEl?.complete && fullImageEl.naturalWidth > 0) fullLoaded = true;
  }

  async function showNext() {
    if (!hasGallery || gallery.length < 2) return;
    currentIndex = (currentIndex + 1) % gallery.length;
    fullLoaded = false;
    await tick();
    if (fullImageEl?.complete && fullImageEl.naturalWidth > 0) fullLoaded = true;
  }

  function close() {
    isOpen = false;
    if (browser) {
      document.body.style.overflow = previousOverflow;
    }
  }

  function onKeydown(event) {
    if (!isOpen) return;

    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') showPrev();
    if (event.key === 'ArrowRight') showNext();
  }

  function onBackdropClick() {
    if (closeOnBackdrop) close();
  }

  onMount(() => {
    // If the thumbnail is already cached/loaded before handlers attach, clear the throbber.
    if (thumbImageEl?.complete && thumbImageEl.naturalWidth > 0) {
      thumbLoaded = true;
    }

    // If component was rendered with lightbox open (unlikely), check full image too.
    if (isOpen && fullImageEl?.complete && fullImageEl.naturalWidth > 0) {
      fullLoaded = true;
    }

    // Note: we keep onDestroy behavior for body overflow
  });

  onDestroy(() => {
    if (browser) {
      document.body.style.overflow = previousOverflow;
    }
  });
</script>

<button class="thumb-button {thumbClass}" type="button" on:click={open} aria-label="Open image">
  <span class="thumb-frame">
    {#if !thumbLoaded}
      <span class="throbber" aria-hidden="true"></span>
    {/if}

    <img
      bind:this={thumbImageEl}
      class="thumb-image"
      class:thumb-square={squareThumb}
      class:thumb-hidden={!thumbLoaded}
      src={thumbImageSrc}
      {alt}
      loading="lazy"
      decoding="async"
      on:load={markThumbLoaded}
      on:error={markThumbLoaded}
    />
  </span>
</button>

{#if isOpen}
  <div class="lightbox" role="dialog" aria-modal="true" aria-label={currentItem.alt || alt} on:click={onBackdropClick}>
    <button class="close-button" type="button" on:click={close} aria-label="Close image">×</button>

    {#if hasGallery && gallery.length > 1}
      <button class="nav-arrow nav-left" type="button" on:click|stopPropagation={showPrev} aria-label="Previous image">
        ‹
      </button>
      <button class="nav-arrow nav-right" type="button" on:click|stopPropagation={showNext} aria-label="Next image">
        ›
      </button>
    {/if}

    <div class="lightbox-content" on:click|stopPropagation>
      <div class="full-frame">
        {#if !fullLoaded}
          <span class="throbber throbber-lightbox" aria-hidden="true"></span>
        {/if}

        <img
          bind:this={fullImageEl}
          class="full-image {fullClass}"
          class:full-hidden={!fullLoaded}
          src={fullImageSrc}
          alt={currentItem.alt || alt}
          on:load={markFullLoaded}
          on:error={markFullLoaded}
        />
      </div>
      <div class="image-caption">{currentItem.caption || currentItem.alt || alt}</div>
    </div>
  </div>
{/if}

<style>
  .thumb-button {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: zoom-in;
    width: 100%;
  }

  .thumb-frame {
    position: relative;
    display: block;
    width: 100%;
  }

  .thumb-image {
    display: block;
    max-width: 100%;
    height: auto;
    transition: opacity 0.2s ease;
  }

  .thumb-hidden {
    opacity: 0;
  }

  .thumb-square {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
  }

  .throbber {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    z-index: 1;
  }

  .throbber::before {
    content: '';
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    border: 3px solid rgba(255, 255, 255, 0.28);
    border-top-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18);
    animation: spin 0.8s linear infinite;
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 1200;
    background: rgba(0, 0, 0, 0.82);
    display: grid;
    place-items: center;
    cursor: zoom-out;
  }

  .lightbox-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: fit-content;
    max-width: 92vw;
}

  .full-frame {
    position: relative;
    display: grid;
    place-items: center;
    width: fit-content;
    max-width: 92vw;
}

  .throbber-lightbox::before {
    border-color: rgba(255, 255, 255, 0.22);
    border-top-color: rgba(255, 255, 255, 0.98);
  }

  .image-caption {
    max-width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.88);
    color: #f3f3f3;
    font-size: 0.9rem;
    line-height: 1.3;
    text-align: center;
    word-break: break-word;
  }

  .full-image {
    max-width: min(92vw, 1500px);
    max-height: 87vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 6px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
    cursor: default;
    transition: opacity 0.2s ease;
  }

  .full-hidden {
    opacity: 0;
  }

  .close-button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 2.25rem;
    height: 2.25rem;
    border: 0;
    border-radius: 999px;
    font-size: 1.6rem;
    line-height: 1;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.92);
    color: #111;
  }

  .close-button:hover {
    background: #fff;
  }

  .nav-arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.65);
    color: #fff;
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    z-index: 1201;
  }

  .nav-left {
    left: 1rem;
  }

  .nav-right {
    right: 1rem;
  }

  .nav-arrow:hover {
    background: rgba(0, 0, 0, 0.85);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>