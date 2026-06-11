<script>
  import { page } from '$app/stores';   // ← was $app/state
  import { routeLabels } from '$lib/i18n/routes';
  import { language } from '$lib/stores/language';

  $: labels = routeLabels[$language] ?? routeLabels.ru;
  $: segments = $page.url.pathname.split('/').filter(Boolean);
  $: crumbs = segments.map((segment, index) => ({
    label: labels[segment] ?? decodeURIComponent(segment),
    href: '/' + segments.slice(0, index + 1).join('/')
  }));
</script>

{#if crumbs.length > 1}
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol>
      {#each crumbs as crumb, index}
        <li>
          {#if index < crumbs.length - 1}
            <a href={crumb.href}>{crumb.label}</a>
          {:else}
            <span aria-current="page"><b>{crumb.label}</b></span>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
{/if}

<style>
  .breadcrumbs {
    margin: 0;
    font-size: 0.875rem;
  }

  .breadcrumbs ol {
    list-style: none;
    padding: 0.5rem;
    margin: 0;
    display: flex;
    gap: 0.5rem;
  }

  .breadcrumbs li::after {
    content: '>';
    margin-left: 0.5rem;
    color: var(--text-secondary);
  }

  .breadcrumbs li:last-child::after {
    content: '';
  }

  .breadcrumbs a {
    /* color: var(--link-color); */
    opacity: 0.8;
    color: var(--text-primary);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
  }
</style>