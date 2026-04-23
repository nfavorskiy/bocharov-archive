<script>
  import { t } from '$lib/i18n';
</script>

<div class="container">
    <div class="portrait-column">
        <img
            src="/photo_2025-05-22_21-27-56.jpg"
            alt={$t.messages.home.alt}
            class="portrait-image"
        />
    </div>
    <div class="text-column">
        <h1 style="margin: 0;">{$t.messages.home.firstName}</h1>
        <h1 style="letter-spacing: 4px; margin: 0 0 1rem 0; font-size: 2.5rem;">{$t.messages.home.lastName}</h1>
        <h3 style="margin: 0;">{$t.messages.home.born}</h3>
        <h3 style="margin: 0;">{$t.messages.home.died}</h3>
        <p>{$t.messages.home.bio}</p>
    </div>
</div>


<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .text-column {
        min-width: 50vh;
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
    }

    @media (min-aspect-ratio: 4/3) {
        .text-column {
            padding-right: 1rem;
        }
    }

    @media (max-aspect-ratio: 4/3) {
        .container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }
        
        .text-column {
            order: 2;
            text-align: center;
        }
        
        .portrait-column {
            order: 1;
        }
    }

    .portrait-column {
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
        display: flex;
        justify-content: center;
    }

    .portrait-image {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        height: 80vh;
        
    }
</style>