<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.watercolors1980_2010?.captions ?? {};
</script>

<GalleryGrid images={data.images} {captions} />