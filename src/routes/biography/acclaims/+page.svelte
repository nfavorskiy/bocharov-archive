<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/biography/acclaims/congratulationsAndVarious', 
      label: $t.messages.biography.acclaims.congratulationsAndVarious 
    },
    { 
      href: '/biography/acclaims/britishResponseLetters', 
      label: $t.messages.biography.acclaims.britishResponseLetters
    },
  ];
</script>

<Directory {sections} />