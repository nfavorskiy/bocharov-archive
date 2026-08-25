<script>
  import { resolveMediaUrl } from '$lib/mediaConfig.js';

  export let src = '';
  export let title = '';
  export let height = '80vh';

  $: resolvedSrc = resolveMediaUrl(src);
</script>

{#if resolvedSrc}
  <div class="pdf-viewer" data-pdf-viewer style="height: {height}">
    <iframe
      {title}
      src="{resolvedSrc}#navpanes=0&zoom=100"
      width="100%"
      height="100%"
      frameborder="0"
    >
    </iframe>
  </div>
{/if}

<style>
  .pdf-viewer {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    overflow: hidden;
  }
</style>