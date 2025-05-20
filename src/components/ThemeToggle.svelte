<script>
    import { theme } from '$lib/stores/theme';

    function toggleTheme() {
        $theme = $theme === 'light' ? 'dark' : 'light';
    }
</script>

<button on:click={toggleTheme} style="padding: 8px; border-radius: 4px; background: var(--button-bg);">
    {$theme === 'light' ? '🌙' : '☀️'}
</button>

<style>
    button {
        border: none;
        cursor: pointer;
    }
    button:hover {
        opacity: 0.8;
    }
</style>
