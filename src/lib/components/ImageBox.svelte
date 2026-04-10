<script>
  import { onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let src = '';
  export let alt = '';
  export let thumbClass = '';
  export let fullClass = '';
  export let closeOnBackdrop = true;
  export let squareThumb = false;
  export let caption = '';

  let isOpen = false;
  let previousOverflow = '';

  function open() {
    if (browser) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    isOpen = true;
  }

  function close() {
    isOpen = false;
    if (browser) {
      document.body.style.overflow = previousOverflow;
    }
  }

  function onKeydown(event) {
    if (event.key === 'Escape' && isOpen) close();
  }

  function onBackdropClick() {
    if (closeOnBackdrop) close();
  }

  onDestroy(() => {
    if (browser) {
      document.body.style.overflow = previousOverflow;
    }
  });
</script>

<svelte:window on:keydown={onKeydown} />

<button class="thumb-button {thumbClass}" type="button" on:click={open} aria-label="Open image">
  <img class="thumb-image" class:thumb-square={squareThumb} {src} {alt} loading="lazy" />
</button>

{#if isOpen}
  <div class="lightbox" role="dialog" aria-modal="true" aria-label={alt} on:click={onBackdropClick}>
    <button class="close-button" type="button" on:click={close} aria-label="Close image">×</button>

    <div class="lightbox-content" on:click|stopPropagation>
      <img class="full-image {fullClass}" {src} {alt} />
      <div class="image-caption">{caption || alt}</div>
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

  .thumb-image {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .thumb-square {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
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
    max-width: min(92vw, 1500px);
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
</style>