<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/projects/tolyatti/materials', label: $t.messages.projects.tolyatti.materials },
    { href: '/projects/tolyatti/search', label: $t.messages.projects.tolyatti.search },
    { href: '/projects/tolyatti/booklet', label: $t.messages.projects.tolyatti.booklet }
  ];
</script>

<Directory {sections} />