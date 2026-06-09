<script>
  const sections = [
    { href: '', label: 'Архивные материалы' },
    { href: '', label: 'Поиск решения генерального плана Тольятти. Альбом' },
    { href: '/projects/tolyatti/booklet', label: 'Буклет 1967. Город ТОЛЬЯТТИ Генеральный план новой части города' }
  ];
</script>

<ul class="section-list">
  {#each sections as section}
    <li>
      <a class="section-button" href={section.href}>{section.label}</a>
    </li>
  {/each}
</ul>

<style>
  .section-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .section-button {
    display: inline-block;
    width: fit-content;
    padding: 0.75rem 1.25rem;
    border: 1px solid var(--button-bg);
    background: var(--button-bg);
    color: var(--button-text);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .section-button:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
</style>