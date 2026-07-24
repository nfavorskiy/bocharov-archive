<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.photos1920_1950?.captions ?? {};
</script>

<GalleryGrid images={data.images} {captions} />