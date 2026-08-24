<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/biography/briefBiography/briefBiographyText', label: $t.messages.biography.briefBiography.briefBiographyText },
    { href: '/biography/briefBiography/briefBiographyGallery', label: $t.messages.biography.briefBiography.briefBiographyGallery }
  ];
</script>

<Directory {sections} />