<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/niitiag2016', 
      label: $t.messages.research.interviewsSpeeches.niitiag2016 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/ogoniok2003', 
      label: $t.messages.research.interviewsSpeeches.ogoniok2003 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/ogoniok2017', 
      label: $t.messages.research.interviewsSpeeches.ogoniok2017 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/entrepreneur2003', 
      label: $t.messages.research.interviewsSpeeches.entrepreneur2003 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/ogoniok2002', 
      label: $t.messages.research.interviewsSpeeches.ogoniok2002 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/kommersantBG2007', 
      label: $t.messages.research.interviewsSpeeches.kommersantBG2007 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/kommersantVlast2010', 
      label: $t.messages.research.interviewsSpeeches.kommersantVlast2010 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/raasnForm2000', 
      label: $t.messages.research.interviewsSpeeches.raasnForm2000 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/karpovka2013', 
      label: $t.messages.research.interviewsSpeeches.karpovka2013 
    },
    { 
      href: '/research/starredArticlesInterviews/interviewsSpeeches/opinions11', 
      label: $t.messages.research.interviewsSpeeches.opinions11
    },
  ];
</script>

<Directory {sections} />