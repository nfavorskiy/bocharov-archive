<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/projects/federationSquare/idea', label: $t.messages.projects.federationSquare.idea },
    { href: '/projects/federationSquare/images', label: $t.messages.projects.federationSquare.images },
    { href: '/projects/federationSquare/article', label: $t.messages.projects.federationSquare.article }
  ];
</script>

<Directory {sections} />