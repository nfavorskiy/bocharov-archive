<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { t } from '$lib/i18n';

    let portraitLoaded = false;
    let portraitImageEl;

    function markPortraitLoaded() {
        portraitLoaded = true;
    }

    onMount(() => {
        // catch images that finished loading before hydration attached the listener
        if (portraitImageEl?.complete && portraitImageEl.naturalWidth > 0) {
            portraitLoaded = true;
        }
    });

    function retype(node, params) {
        let timer;

        function normalize(input) {
            if (typeof input === 'string') {
                return { text: input, speed: 22, step: 1 };
            }

            return {
                text: String(input?.text ?? ''),
                speed: Number(input?.speed ?? 22), // ms per tick
                step: Number(input?.step ?? 1) // chars per tick
            };
        }

        function run(input) {
            clearInterval(timer);
            const { text, speed, step } = normalize(input);

            if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                node.textContent = text;
                return;
            }

            const chars = Array.from(text);
            let i = 0;
            node.textContent = '';

            timer = setInterval(() => {
                i += step;
                node.textContent = chars.slice(0, i).join('');
                if (i >= chars.length) clearInterval(timer);
            }, speed);
        }

        run(params);

        return {
            update(newParams) {
                run(newParams);
            },
            destroy() {
                clearInterval(timer);
            }
        };
    }
</script>

<div class="container">
    <div class="portrait-column">
    <span class="portrait-frame">
        {#if !portraitLoaded}
            <span class="portrait-throbber" aria-hidden="true"></span>
        {/if}
        <img
            bind:this={portraitImageEl}
            src="/photo_2025-05-22_21-27-56.jpg"
            alt={$t.messages.home.alt}
            class="portrait-image"
            class:portrait-hidden={!portraitLoaded}
            on:load={markPortraitLoaded}
            on:error={markPortraitLoaded}
        />
    </span>
</div>
    <div class="text-column">
        <h1 style="margin: 0;" use:retype={{ text: $t.messages.home.firstName, speed: 16 }}></h1>
        <h1 style="letter-spacing: 0.31rem; margin: 0 0 1rem 0; font-size: 2.8rem;"
            use:retype={{ text: $t.messages.home.lastName, speed: 20, step: 2 }}></h1>
        <h3 style="margin: 0;" use:retype={{ text: $t.messages.home.born, speed: 14 }}></h3>
        <h3 style="margin: 0;" use:retype={{ text: $t.messages.home.died, speed: 14 }}></h3>
        <p use:retype={{ text: $t.messages.home.bio1, speed: 8, step: 2 }}></p>
        <p use:retype={{ text: $t.messages.home.bio2, speed: 8, step: 2 }}></p>
        <p style="margin: 2rem auto 0 auto; font-style: italic; font-size: 0.85rem; width: fit-content;" 
            use:retype={{ text: $t.messages.home.poem, speed: 12, step: 1 }}></p>        
        <p style="margin: 0; margin-right: 4rem; text-align: right; font-size: 0.8rem;" 
            use:retype={{ text: `— ${$t.messages.home.poemAuthor}`, speed: 12, step: 1 }}></p>
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

    .text-column p { 
        white-space: pre-wrap;
        margin-bottom: 1rem; 
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
        border-radius: 0.25rem;
        height: 85vh;
        
        transition: opacity 0.2s ease;
    }

    .portrait-frame {
        position: relative;
        display: block;
    }

    .portrait-hidden {
        opacity: 0;
    }

    .portrait-throbber {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
    }

    .portrait-throbber::before {
        content: '';
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        border: 3px solid rgba(0, 0, 0, 0.2);
        border-top-color: rgba(0, 0, 0, 0.7);
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
</style>