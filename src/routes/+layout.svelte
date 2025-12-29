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
        background-image: url('/background.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    main {
        max-width: 80%;
        margin: 0 auto;
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
        min-height: 100vh;
        padding: 2rem;
        box-sizing: border-box;
    }
</style>
