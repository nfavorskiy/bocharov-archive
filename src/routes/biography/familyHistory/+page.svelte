<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/biography/familyHistory/familyHistoryText', label: $t.messages.biography.familyHistory.familyHistoryText },
    { href: '/biography/familyHistory/familyHistoryGallery', label: $t.messages.biography.familyHistory.familyHistoryGallery }
  ];
</script>

<Directory {sections} />