<script>
    import { theme } from '$lib/stores/theme';

    function toggleTheme() {
        $theme = $theme === 'light' ? 'dark' : 'light';
    }
</script>

<button on:click={toggleTheme}>
    {$theme === 'dark' ? '🌙' : '☀️'}
</button>

<style>
    button {
        border: none;
        cursor: pointer;
        padding: 0.35rem;
        border-radius: 0.25rem;
        background-color: var(--button-bg);
        font-family: "Segoe UI", "Noto Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 0.875rem;
        line-height: 1.5;
    }
    button:hover {
        opacity: 0.8;
    }
</style>