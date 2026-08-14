<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/scienceCenters', 
      label: $t.messages.research.urbanStudies.scienceCenters 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/urbanInnovations', 
      label: $t.messages.research.urbanStudies.urbanInnovations 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/territorialDevelopment', 
      label: $t.messages.research.urbanStudies.territorialDevelopment 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/scientificCentersSpace', 
      label: $t.messages.research.urbanStudies.scientificCentersSpace 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/urbanPlanningOrganization', 
      label: $t.messages.research.urbanStudies.urbanPlanningOrganization 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/innovativeActivities', 
      label: $t.messages.research.urbanStudies.innovativeActivities 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/novosibirskScienceCenter', 
      label: $t.messages.research.urbanStudies.novosibirskScienceCenter 
    },
    { 
      href: '/research/starredArticlesInterviews/urbanStudies/scienceInMoscow', 
      label: $t.messages.research.urbanStudies.scienceInMoscow 
    },
  ];
</script>

<Directory {sections} />