<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import { page } from '$app/stores';

    onMount(() => {
        document.body.classList.add('transitions-enabled');
    });
</script>

<Navbar />

<main class={$page.url.pathname.startsWith('/reviews') ? 'reviews-layout' : ''}>
  <slot />
</main>


<style>

    :global(html) {
        /* scales with viewport, with sane min/max limits */
        font-size: 2.18vmin;
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
        max-width: 60vw;
        min-width: 50vh;
        margin: 0 auto;
        background-color: var(--bg-color);
        min-height: 10vh;
        box-sizing: border-box;
    }

    :global(main.reviews-layout) {
        min-width: 80vw;
    }

    :global(body.transitions-enabled) main {
        transition: background-color 0.3s, color 0.3s;
    }
</style>