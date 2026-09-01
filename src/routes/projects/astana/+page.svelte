<script>
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import { t } from '$lib/i18n';

  export let data;

  $: captions = $t.messages.galleries?.astana?.captions ?? {};
</script>

<p>
  В 1998 г. коллектив ЦНИИП градостроительства (К. Неустроев, В. Чаадаев, Ю. Бочаров) участвовал в Международном конкурсе на Эскиз-идею генерального плана новой столицы Казахстана Астаны. Проект получил 3-ю премию жюри и Золотую медаль Российской Академии художеств (1999).
</p>

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