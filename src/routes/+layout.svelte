<script>
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
    <slot />
</main>


<style>
    :global(body) {
        margin: 0;
        padding: 0;
        transition: background-color 0.3s, color 0.3s;
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
    main {
        max-width: 90%;
        margin: 0 auto;
    }
</style>
