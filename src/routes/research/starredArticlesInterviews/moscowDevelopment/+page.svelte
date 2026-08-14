<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/demolition', 
      label: $t.messages.research.moscowDevelopment.demolition 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/renovation', 
      label: $t.messages.research.moscowDevelopment.renovation 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/greaterMoscow', 
      label: $t.messages.research.moscowDevelopment.greaterMoscow 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/noDemocracySpace', 
      label: $t.messages.research.moscowDevelopment.noDemocracySpace 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/shrinkingPublicSpace', 
      label: $t.messages.research.moscowDevelopment.shrinkingPublicSpace 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/capitalFunctions', 
      label: $t.messages.research.moscowDevelopment.capitalFunctions 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/unrealizedProjects', 
      label: $t.messages.research.moscowDevelopment.unrealizedProjects 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/centersOfPower', 
      label: $t.messages.research.moscowDevelopment.centersOfPower 
    },
    { 
      href: '/research/starredArticlesInterviews/moscowDevelopment/problems', 
      label: $t.messages.research.moscowDevelopment.problems 
    }
  ];
</script>

<Directory {sections} />