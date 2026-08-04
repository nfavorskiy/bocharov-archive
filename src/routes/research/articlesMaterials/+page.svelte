<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/research/articlesMaterials/years100', label: $t.messages.research.articlesMaterials.years100 },
    { href: '/research/articlesMaterials/creator', label: $t.messages.research.articlesMaterials.creator },
    { href: '/research/articlesMaterials/years95', label: $t.messages.research.articlesMaterials.years95 },
    { href: '/research/articlesMaterials/diverseWorld', label: $t.messages.research.articlesMaterials.diverseWorld },
    { href: '/research/articlesMaterials/samaraSchool', label: $t.messages.research.articlesMaterials.samaraSchool },
    { href: '/research/articlesMaterials/collection', label: $t.messages.research.articlesMaterials.collection },
    { href: '/research/articlesMaterials/architecture', label: $t.messages.research.articlesMaterials.architecture },
    { href: '/research/articlesMaterials/drawings', label: $t.messages.research.articlesMaterials.drawings }
  ];
</script>

<Directory {sections} />