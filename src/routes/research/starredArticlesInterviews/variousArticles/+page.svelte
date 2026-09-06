<script>
  import { t } from '$lib/i18n';
  import Directory from '$lib/components/Directory.svelte';

  $: sections = [
    { 
      href: '/research/starredArticlesInterviews/variousArticles/lasVegas',               
      label: $t.messages.research.variousArticles.lasVegas 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/princeCharles',          
      label: $t.messages.research.variousArticles.princeCharles 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/housingAccessibility',   
      label: $t.messages.research.variousArticles.housingAccessibility 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/review2017',             
      label: $t.messages.research.variousArticles.review2017 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/review2019',             
      label: $t.messages.research.variousArticles.review2019 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/squareMeters',           
      label: $t.messages.research.variousArticles.squareMeters 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/africaCities',           
      label: $t.messages.research.variousArticles.africaCities 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/copenhagen',             
      label: $t.messages.research.variousArticles.copenhagen 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/newUSCities',            
      label: $t.messages.research.variousArticles.newUSCities 
    },
    { 
      href: '/research/starredArticlesInterviews/variousArticles/tsilina',                
      label: $t.messages.research.variousArticles.tsilina 
    },
    ];
</script>

<Directory {sections} />