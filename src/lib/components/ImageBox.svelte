<script>
  import { onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let src = '';
  export let alt = '';
  export let thumbClass = '';
  export let fullClass = '';
  export let closeOnBackdrop = true;

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
  <img class="thumb-image" {src} {alt} loading="lazy" />
</button>

{#if isOpen}
  <div class="lightbox" role="dialog" aria-modal="true" aria-label={alt} on:click={onBackdropClick}>
    <button class="close-button" type="button" on:click={close} aria-label="Close image">×</button>
    <img
      class="full-image {fullClass}"
      {src}
      {alt}
      on:click|stopPropagation
    />
  </div>
{/if}

<style>
  .thumb-button {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: zoom-in;
  }

  .thumb-image {
    display: block;
    max-width: 100%;
    height: auto;
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

  .full-image {
    max-width: min(92vw, 1500px);
    max-height: 80vh;
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