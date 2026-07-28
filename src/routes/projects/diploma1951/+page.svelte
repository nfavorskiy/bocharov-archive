<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.diploma1951?.captions ?? {};
</script>

<GalleryGrid images={data.images} {captions} />