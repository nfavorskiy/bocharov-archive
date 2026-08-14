<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/research/starredArticlesInterviews/urbanPlanning/interdisciplinary', 
      label: $t.messages.research.urbanPlanning.interdisciplinary
    },
    { 
      href: '/research/starredArticlesInterviews/urbanPlanning/transdisciplinary', 
      label: $t.messages.research.urbanPlanning.transdisciplinary
    },
    { 
      href: '/research/starredArticlesInterviews/urbanPlanning/knowledgeSystem', 
      label: $t.messages.research.urbanPlanning.knowledgeSystem
    },
    { 
      href: '/research/starredArticlesInterviews/urbanPlanning/trainingCertifiedPlanners', 
      label: $t.messages.research.urbanPlanning.trainingCertifiedPlanners
    },
    { 
      href: '/research/starredArticlesInterviews/urbanPlanning/tolyattiPlanning', 
      label: $t.messages.research.urbanPlanning.tolyattiPlanning
    },
  ];
</script>

<Directory {sections} />