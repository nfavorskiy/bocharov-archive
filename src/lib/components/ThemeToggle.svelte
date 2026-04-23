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
        padding: 8px; 
        border-radius: 4px;
        background-color: var(--button-bg);
        font-family: "Segoe UI", "Noto Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
    }
    button:hover {
        opacity: 0.8;
    }
</style>