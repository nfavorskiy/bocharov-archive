<script>
    import { language } from '$lib/stores/language';

    function toggleLanguage() {
        $language = $language === 'ru' ? 'en' : 'ru';
    }
</script>

<button on:click={toggleLanguage}>
    {$language === 'ru' ? 'RU' : 'EN'}
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
        color: var(--text-color);

        min-width: 2.37rem;   /* keeps RU/EN from changing layout width */
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    button:hover {
        opacity: 0.8;
    }
</style>