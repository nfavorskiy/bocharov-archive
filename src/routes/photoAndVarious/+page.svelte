<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/photoAndVarious/photos1920_1950', label: $t.messages.photoAndVarious.photoAndVarious.photos1920_1950 },
    { href: '/photoAndVarious/tripsMeetings', label: $t.messages.photoAndVarious.photoAndVarious.tripsMeetings },
    { href: '/photoAndVarious/familyChronicle', label: $t.messages.photoAndVarious.photoAndVarious.familyChronicle }
  ];
</script>

<Directory {sections} />