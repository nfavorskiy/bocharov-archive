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
    list-style: none;
    padding: 1rem 0 3rem 0;
    gap: 1rem;
    justify-content: center;
  }

  .section-list li {
    display: flex;
    justify-content: center;
  }

  .section-button {
    display: inline-block;
    width: 90%;
    padding: 0.75rem;
    border: 1px solid var(--button-bg);
    background: var(--button-bg);
    color: var(--button-text);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .section-button:hover {
    opacity: 0.7;
  }
</style>