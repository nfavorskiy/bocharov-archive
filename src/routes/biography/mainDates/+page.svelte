<script>
    import { onMount } from 'svelte';
    import { language } from '$lib/stores/language';
    import titlesRU from '$lib/data/biography/mainDates/titlesRU.json';
    import titlesEN from '$lib/data/biography/mainDates/titlesEN.json';
    import professionalRU from '$lib/data/biography/mainDates/professionalRU.json';
    import scientificRU from '$lib/data/biography/mainDates/scientificExpertPubliсRU.json';

    $: titles = $language === 'en' ? titlesEN : titlesRU;

    let rootFontSize = 16;
    let itemHeights = professionalRU.map(() => 0);
    let bulletEls = [];
    let colBulletsEl;
    let bulletTops = [];

    let sciItemHeights = scientificRU.map(() => 0);

    function measure() {
        if (!colBulletsEl) return;
        rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const containerTop = colBulletsEl.getBoundingClientRect().top;
        bulletTops = bulletEls.map(el =>
            el ? (el.getBoundingClientRect().top - containerTop) / rootFontSize : 0
        );
    }

    onMount(() => {
        measure();
        const obs = new ResizeObserver(measure);
        obs.observe(colBulletsEl);
        return () => obs.disconnect();
    });

    // Reactively recompute top positions in rem
    $: proPositions = (() => {
        const result = [];
        let currentBottomRem = 0;
        for (let i = 0; i < professionalRU.length; i++) {
            const item = professionalRU[i];
            const bulletIdx = titles.bullets.findIndex(b => b === item.dates[0]);
            const desiredTopRem = bulletIdx >= 0 && bulletTops[bulletIdx] != null
                ? bulletTops[bulletIdx]
                : currentBottomRem;
            const topRem = Math.max(desiredTopRem, currentBottomRem);
            result.push(topRem);
            currentBottomRem = topRem + itemHeights[i] / rootFontSize;
        }
        return result;
    })();

    $: sciPositions = (() => {
        const result = [];
        let currentBottomRem = 0;
        for (let i = 0; i < scientificRU.length; i++) {
            const item = scientificRU[i];
            const bulletIdx = titles.bullets.findIndex(b => b === item.dates[0]);
            const desiredTopRem = bulletIdx >= 0 && bulletTops[bulletIdx] != null
                ? bulletTops[bulletIdx]
                : currentBottomRem;
            const topRem = Math.max(desiredTopRem, currentBottomRem);
            result.push(topRem);
            currentBottomRem = topRem + sciItemHeights[i] / rootFontSize;
        }
        return result;
    })();
</script>

<article>
    <div class="two-columns">
        <div class="column">
            <h4><b>{titles.professionalWork}</b></h4>
        </div>
        <div class="column">
            <h4><b>{titles.scientificExpertPublicWork}</b></h4>
        </div>
    </div>
    <div class="three-columns">
        <div class="col-professional">
            {#each professionalRU as item, i}
                <div
                    class="pro-item"
                    style="top: {proPositions[i]}rem"
                    bind:clientHeight={itemHeights[i]}
                >
                    {item.label}
                </div>
            {/each}
        </div>
        <div class="col-bullets" bind:this={colBulletsEl}>
            {#each titles.bullets as bullet, i}
                <div class="bullet" bind:this={bulletEls[i]}>{bullet}</div>
            {/each}
        </div>
        <div class="col-scientific">
            {#each scientificRU as item, i}
                <div
                    class="sci-item"
                    style="top: {sciPositions[i]}rem"
                    bind:clientHeight={sciItemHeights[i]}
                >
                    {item.label}
                </div>
            {/each}
        </div>
    </div>
</article>

<style>
    .two-columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        position: sticky;
        top: 0;
        background-color: var(--bg-color);
        z-index: 10;
    }
    .column {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h4 {
        text-align: center;
        margin: 1rem;
        white-space: pre-wrap;
    }
    .three-columns {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 1rem;
    }
    .col-professional {
        position: relative;
    }
    .pro-item {
        position: absolute;
        left: 0;
        min-width: 100%;
        text-align: right;
        font-size: 0.85rem;
        line-height: 1.3;
        padding-bottom: 1rem;
        width: calc(100% + 5rem)
    }
    .col-bullets {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
    .bullet {
        min-width: 2.3rem;
        white-space: pre-wrap;
        border: 0.2rem solid var(--text-color);
        background-color: var(--bg-color);
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        padding: 0 1rem;
        z-index: 100;
    }
    .col-scientific {
        position: relative;
    }
    .sci-item {
        position: absolute;
        right: 0;
        min-width: 100%;
        text-align: left;
        font-size: 0.85rem;
        line-height: 1.3;
        padding-bottom: 1rem;
        width: calc(100% + 5rem)
    }
</style>