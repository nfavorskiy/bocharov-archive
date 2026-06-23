<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '', label: $t.messages.projects.tolyatti.archiveMaterials },
    { href: '', label: $t.messages.projects.tolyatti.generalPlanAlbum },
    { href: '/projects/tolyatti/booklet', label: $t.messages.projects.tolyatti.booklet }
  ];
</script>

<Directory {sections} />