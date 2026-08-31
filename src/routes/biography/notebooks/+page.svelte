<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/biography/notebooks/tripNotes', label: $t.messages.biography.notebooks.tripNotes },
    { href: '/biography/notebooks/africa', label: $t.messages.biography.notebooks.africa },
    { href: '/biography/notebooks/greeceItaly', label: $t.messages.biography.notebooks.greeceItaly }
  ];
</script>

<Directory {sections} />