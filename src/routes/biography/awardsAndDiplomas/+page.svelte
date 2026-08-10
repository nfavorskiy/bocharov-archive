<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.awardsAndDiplomas?.captions ?? {};
</script>

<h2>ОСНОВНЫЕ НАГРАДЫ</h2>

<ul>
  <li>
      Медаль РААСН «За полезные труды» (2021)
  </li>
  <li>
      Медаль Союза архитекторов им. А.В. Щусева «За высокий профессионализм в архитектуре» (2016)
  </li>
  <li>
      Медаль Союза архитекторов им. А.В. Иконникова «За выдающийся вклад в архитектурную науку» (2011)
  </li>
  <li>
      Золотая медаль Российской академии художеств (1999)
  </li>
  <li>
      Медаль «В память 850-летия Москвы» (1997)
  </li>
  <li>
      Бронзовая медаль ВДНХ (1971)
  </li>
  <li>
      Медаль «За доблестный труд. В ознаменование 100-летия со дня рождения В.И. Ленина» (1970)
  </li>
</ul>

<GalleryGrid images={data.images} {captions} />

<style>
  h2 {
    text-align: center;
    margin: 1rem;
  }

  p {
    margin: 1rem;
  }

</style>