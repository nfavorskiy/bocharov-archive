<script>
    import { browser } from '$app/environment';
    import { t } from '$lib/i18n';

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
        <img
            src="/photo_2025-05-22_21-27-56.jpg"
            alt={$t.messages.home.alt}
            class="portrait-image"
        />
    </div>
    <div class="text-column">
        <h1 style="margin: 0;" use:retype={{ text: $t.messages.home.firstName, speed: 16 }}></h1>
        <h1 style="letter-spacing: 4px; margin: 0 0 1rem 0; font-size: 3.5rem;"
            use:retype={{ text: $t.messages.home.lastName, speed: 20, step: 2 }}></h1>
        <h3 style="margin: 0;" use:retype={{ text: $t.messages.home.born, speed: 14 }}></h3>
        <h3 style="margin: 0;" use:retype={{ text: $t.messages.home.died, speed: 14 }}></h3>
        <p use:retype={{ text: $t.messages.home.bio, speed: 8, step: 2 }}></p>
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