<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
    import { page } from '$app/stores';

    onMount(() => {
        document.body.classList.add('transitions-enabled');
    });
</script>

<Navbar />

<main
  class:reviews-layout={$page.url.pathname.startsWith('/reviews')}
  class:biography-layout={$page.url.pathname.startsWith('/biography')}
>
  <div class="content">
    {#if $page.url.pathname !== '/'}
        <Breadcrumbs />
    {/if}
    <slot/>
  </div>
</main>


<style>

    :global(html) {
        /* scales with viewport, with sane min/max limits */
        font-size: 2.25vmin;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
    }
    :global(body) {
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        position: relative;
        font-family: "Segoe UI", "Noto Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        display: flex;
        flex-direction: column;
        height: 100dvh;
        overflow: hidden;
    }

    :global(body.transitions-enabled) {
        transition: background-color 0.3s, color 0.3s;
    }
    
    :global(body::before),
    :global(body::after) {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }

    :global(body.transitions-enabled::before),
    :global(body.transitions-enabled::after) {
        transition: opacity 0.3s;
    }
    
    :global(body::before) {
        background-image: url('/background.jpg');
        opacity: 1;
    }
    
    :global(body::after) {
        background-image: url('/background-dark.jpg');
        opacity: 0;
    }
    
    :global(body[data-theme='dark']::before) {
        opacity: 0;
    }
    
    :global(body[data-theme='dark']::after) {
        opacity: 1;
    }
    
    main {
        width: 100%;
        flex: 1 1 auto;
        min-height: 0;
        box-sizing: border-box;
        overflow-y: auto;
    }

    .content {
        width: 60vw;
        background-color: var(--bg-color);
        margin: 0 auto;
    }

    :global(main.reviews-layout) .content {
        width: 70vw;
    }

    :global(body.transitions-enabled) main,
    :global(body.transitions-enabled) .content,
    :global(body.transitions-enabled) nav,
    :global(body.transitions-enabled) .text-column,
    :global(body.transitions-enabled) .portrait-column,
    :global(body.transitions-enabled) .dropdown,
    :global(body.transitions-enabled) .dropdown-item,
    :global(body.transitions-enabled) button,
    :global(body.transitions-enabled) a {
        transition:
            background-color 0.3s,
            color 0.3s,
            border-color 0.3s,
            opacity 0.3s;
    }
</style>