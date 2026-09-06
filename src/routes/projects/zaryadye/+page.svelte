<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/projects/zaryadye/concept', label: $t.messages.projects.zaryadye.concept },
    { href: '/projects/zaryadye/zaryadyeDetails', label: $t.messages.projects.zaryadye.zaryadyeDetails },
    { href: '/projects/zaryadye/contestResults', label: $t.messages.projects.zaryadye.contestResults },
  ];
</script>

<Directory {sections} />