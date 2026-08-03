<script>
  export let src = '';
  export let title = '';
  export let height = '80vh';
</script>

{#if src}
  <div class="pdf-viewer" style="height: {height}">
    <iframe
      {title}
      src={src}
      type="application/pdf"
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