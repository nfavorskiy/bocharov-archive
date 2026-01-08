<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';

    onMount(() => {
        document.body.classList.add('transitions-enabled');
    });
</script>

<Navbar />

<main>
    <slot />
</main>


<style>
    :global(body) {
        margin: 0;
        padding: 0;
        position: relative;
        font-family:
            -apple-system, 
            BlinkMacSystemFont, 
            Segoe UI, 
            Roboto, 
            Oxygen, 
            Ubuntu, 
            Cantarell,
            Fira Sans, 
            Droid Sans, 
            Helvetica Neue, 
            sans-serif;
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
        max-width: min-content;
        min-width: 50vh;
        margin: 0 auto;
        background-color: var(--bg-color);
        min-height: 10vh;
        padding: 0rem 2rem 2rem 2rem;
        box-sizing: border-box;
    }

    :global(body.transitions-enabled) main {
        transition: background-color 0.3s, color 0.3s;
    }
</style>