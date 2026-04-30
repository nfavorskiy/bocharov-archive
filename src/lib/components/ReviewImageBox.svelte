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

  let isOpen = false;
  let previousOverflow = '';

  let thumbLoaded = false;
  let fullLoaded = false;

  let thumbImageEl;
  let fullImageEl;

  $: thumbImageSrc = thumbSrc || src;
  $: fullImageSrc = src;

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

    fullLoaded = false;
    isOpen = true;

    await tick();
    if (fullImageEl?.complete && fullImageEl.naturalWidth > 0) {
      fullLoaded = true;
    }
  }

  function close() {
    isOpen = false;
    if (browser) {
      document.body.style.overflow = previousOverflow;
    }
  }

  function onBackdropClick() {
    if (closeOnBackdrop) close();
  }

  function onKeydown(event) {
    if (!isOpen) return;
    if (event.key === 'Escape') close();
  }

  onMount(() => {
    if (thumbImageEl?.complete && thumbImageEl.naturalWidth > 0) {
      thumbLoaded = true;
    }

    if (isOpen && fullImageEl?.complete && fullImageEl.naturalWidth > 0) {
      fullLoaded = true;
    }

    if (browser) {
      window.addEventListener('keydown', onKeydown);
    }

    return () => {
      if (browser) {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', onKeydown);
      }
    };
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
  <div class="lightbox" role="dialog" aria-modal="true" aria-label={alt} on:click={onBackdropClick}>
    <button class="close-button" type="button" on:click={close} aria-label="Close image">×</button>

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
          alt={alt}
          on:load={markFullLoaded}
          on:error={markFullLoaded}
        />
      </div>
      <div class="image-caption">{caption || alt}</div>
    </div>
  </div>
{/if}