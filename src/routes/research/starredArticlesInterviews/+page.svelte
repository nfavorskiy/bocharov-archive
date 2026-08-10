<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { href: '/research/starredArticlesInterviews/interviewsSpeeches', label: $t.messages.research.starredArticlesInterviews.interviewsSpeeches },
    { href: '/research/starredArticlesInterviews/moscowDevelopment', label: $t.messages.research.starredArticlesInterviews.moscowDevelopment },
    { href: '/research/starredArticlesInterviews/urbanPlanning', label: $t.messages.research.starredArticlesInterviews.urbanPlanning },
    { href: '/research/starredArticlesInterviews/urbanStudies', label: $t.messages.research.starredArticlesInterviews.urbanStudies },
    { href: '/research/starredArticlesInterviews/variousArticles', label: $t.messages.research.starredArticlesInterviews.variousArticles },
    ];
</script>

<Directory {sections} />