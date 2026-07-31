<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.tolyattiBooklet?.captions ?? {};
</script>

<p>
  Здесь оцифрован Альбом поиска решения генерального плана Тольятти 
из личного архива Юрия Бочарова. Это первые эскизы вариантов 
генерального плана, которые делали Ю.П. Бочаров с коллегами.
Скорее всего, данные материалы сохранены в единственном экземпляре. 
Альбом может представлять интерес градостроителям и архитекторам, 
занимающимся историей градостроительства советского периода.
</p>

<GalleryGrid images={data.images} {captions} />

<style>
  p {
    margin: 1rem;
  }

</style>