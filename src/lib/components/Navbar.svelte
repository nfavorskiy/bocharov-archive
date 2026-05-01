<script>
    import { browser } from '$app/environment'; 
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
    import LangToggle from '$lib/components/LangToggle.svelte';
    import { t } from '$lib/i18n';

    const navItems = [
        {
            key: 'home',
            titleKey: 'home',
            path: '/'
        },
        {
            key: 'biography',
            titleKey: 'biography',
            path: '/biography',
            dropdownGroup: 'biographyDropdown',
            dropdown: [
                { key: 'mainDates', path: '/biography/mainDates' },
                { key: 'briefBiography', path: '/biography/briefBiography' },
                { key: 'firstSteps', path: '/biography/firstSteps' },
                { key: 'family', path: '/biography/family' },
                { key: 'letters', path: '/biography/letters' },
                { key: 'awardsAndDiplomas', path: '/biography/awardsAndDiplomas' },
                { key: 'notebooks', path: '/biography/notebooks' }
            ]
        },
        {
            key: 'research',
            titleKey: 'research',
            path: '/research',
            dropdownGroup: 'researchDropdown',
            dropdown: [
                { key: 'majorAims', path: '/research/majorAims' },
                { key: 'worksList', path: '/research/worksList' },
                { key: 'sovietUrbanists', path: '/research/sovietUrbanists' },
                { key: 'aspirantsCandidates', path: '/research/aspirantsCandidates' },
                { key: 'cityDevelopmentModel', path: '/research/cityDevelopmentModel' },
                { key: 'doctoralDissertation', path: '/research/doctoralDissertation' },
                { key: 'defenseAnnouncement', path: '/research/defenseAnnouncement' },
                { key: 'interviewsMaterials', path: '/research/interviewsMaterials' },
                { key: 'starredArticlesInterviews', path: '/research/starredArticlesInterviews' },
                { key: 'articlesMaterials', path: '/research/articlesMaterials' }
            ]
        },
        {
            key: 'projects',
            titleKey: 'projects',
            path: '/projects',
            dropdownGroup: 'projectsDropdown',
            dropdown: [
                { key: 'list', path: '/projects/list' },
                { key: 'diploma1951', path: '/projects/diploma1951' },
                { key: 'volgograd', path: '/projects/volgograd' },
                { key: 'tolyatti', path: '/projects/tolyatti' },
                { key: 'naberezhnyeChelny', path: '/projects/naberezhnyeChelny' },
                { key: 'memorialComplex', path: '/projects/memorialComplex' },
                { key: 'astana', path: '/projects/astana' },
                { key: 'cdh', path: '/projects/cdh' },
                { key: 'federationSquare', path: '/projects/federationSquare' },
                { key: 'newRaasnBuilding', path: '/projects/newRaasnBuilding' },
                { key: 'residentialComplex', path: '/projects/residentialComplex' },
                { key: 'zaradye', path: '/projects/zaradye' },
                { key: 'miscellaneous', path: '/projects/miscellaneous' }
            ]
        },
        {
            key: 'watercolorsGraphics',
            titleKey: 'watercolorsGraphics',
            path: '/watercolorsGraphics',
            dropdownGroup: 'watercolorsGraphicsDropdown',
            dropdown: [
                { key: 'watercolors1940_1970', path: '/watercolorsGraphics/watercolors1940_1970' },
                { key: 'watercolors1980_2010', path: '/watercolorsGraphics/watercolors1980_2010' },
                { key: 'pencilPastelMarker', path: '/watercolorsGraphics/pencilPastelMarker' },
                { key: 'sketches', path: '/watercolorsGraphics/sketches' }
            ]
        },
        {
            key: 'reviews',
            titleKey: 'reviews',
            path: '/reviews',
            dropdownGroup: 'reviewsDropdown',
            dropdown: [
                { key: 'kuzmin', path: '/reviews/kuzmin' },
                { key: 'shubenkov', path: '/reviews/shubenkov' },
                { key: 'blinkin', path: '/reviews/blinkin' },
                { key: 'bondarenko', path: '/reviews/bondarenko' },
                { key: 'frezinskaya', path: '/reviews/frezinskaya' },
                { key: 'rappaport', path: '/reviews/rappaport' },
                { key: 'vuchik', path: '/reviews/vuchik' },
                { key: 'grigoryeva', path: '/reviews/grigoryeva' },
                { key: 'nashchokina', path: '/reviews/nashchokina' },
                { key: 'gurari', path: '/reviews/gurari' },
                { key: 'merzhanov', path: '/reviews/merzhanov' },
                { key: 'lebedinskaya', path: '/reviews/lebedinskaya' },
                { key: 'bezchastnov', path: '/reviews/bezchastnov' },
                { key: 'mescheryakova', path: '/reviews/mescheryakova' },
                { key: 'belonogova', path: '/reviews/belonogova' },
                { key: 'tolstikhina', path: '/reviews/tolstikhina' },
                { key: 'zheblyenok', path: '/reviews/zheblyenok' },
                { key: 'glozman', path: '/reviews/glozman' },
                { key: 'sirenko', path: '/reviews/sirenko' },
                { key: 'avazov', path: '/reviews/avazov' },
                { key: 'samaraAcademy', path: '/reviews/samaraAcademy' },
                { key: 'samaraUnion', path: '/reviews/samaraUnion' }
            ]
        },
        {
            key: 'photoAndVarious',
            titleKey: 'photoAndVarious',
            path: '/photoAndVarious',
            dropdownGroup: 'photoAndVariousDropdown',
            dropdown: [
                { key: 'photos', path: '/photoAndVarious/photos' },
                { key: 'tripsMeetings', path: '/photoAndVarious/trips&meetings' },
                { key: 'familyChronicle', path: '/photoAndVarious/family-chronicle' },
                { key: 'congratulations', path: '/photoAndVarious/congratulations' }
            ]
        }
    ];

    let activeDropdown = null;

    const NAV_TYPE_DURATION = 700; // ms; every top nav label completes in 700ms

    function retype(node, params) {
        let rafId = 0;

        function normalize(input) {
            if (typeof input === 'string') {
                return { text: input, duration: NAV_TYPE_DURATION };
            }

            return {
                text: String(input?.text ?? ''),
                duration: Math.max(1, Number(input?.duration ?? NAV_TYPE_DURATION))
            };
        }

        function run(input) {
            cancelAnimationFrame(rafId);
            const { text, duration } = normalize(input);

            if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                node.textContent = text;
                return;
            }

            const chars = Array.from(text);
            const total = chars.length;

            if (total === 0) {
                node.textContent = '';
                return;
            }

            node.textContent = '';
            const startedAt = performance.now();

            const tick = (now) => {
                const elapsed = now - startedAt;
                const progress = Math.min(1, elapsed / duration);
                const count = Math.ceil(total * progress);

                node.textContent = chars.slice(0, count).join('');

                if (progress < 1) {
                    rafId = requestAnimationFrame(tick);
                }
            };

            rafId = requestAnimationFrame(tick);
        }

        run(params);

        return {
            update(newParams) {
                run(newParams);
            },
            destroy() {
                cancelAnimationFrame(rafId);
            }
        };
    }

    function navTyping(item) {
        return {
            text: navLabel(item),
            duration: NAV_TYPE_DURATION
        };
    }

    function handleMouseEnter(index) {
        activeDropdown = index;
    }

    function handleMouseLeave() {
        activeDropdown = null;
    }

    function navLabel(item) {
        return $t.messages.nav[item.titleKey] ?? item.titleKey;
    }

    function dropLabel(item, dropItem) {
        const group = item.dropdownGroup;
        return $t.messages.nav[group]?.[dropItem.key] ?? dropItem.key;
    }
</script>

<nav>
    <ul class="nav-list">
        {#each navItems as item, index}
            <li
                on:mouseenter={() => handleMouseEnter(index)}
                on:mouseleave={handleMouseLeave}
                class="nav-item"
            >
                <a href={item.path}>
                    <span use:retype={navTyping(item)}></span>
                </a>
                {#if item.dropdown && item.dropdown.length > 0 && activeDropdown === index}
                    {#if item.key === 'reviews'}
                        <div class="dropdown reviews-dropdown">
                            <div class="reviews-columns">
                                {#each item.dropdown.slice(0, -2) as dropItem}
                                    <a href={dropItem.path} class="dropdown-item">{dropLabel(item, dropItem)}</a>
                                {/each}
                            </div>
                            <div class="reviews-bottom-row">
                                {#each item.dropdown.slice(-2) as dropItem}
                                    <a href={dropItem.path} class="dropdown-item">{dropLabel(item, dropItem)}</a>
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <div class="dropdown" class:multi-column={item.dropdown.length > 6}>
                            {#each item.dropdown as dropItem}
                                <a href={dropItem.path} class="dropdown-item">{dropLabel(item, dropItem)}</a>
                            {/each}
                        </div>
                    {/if}
                {/if}
            </li>
        {/each}
    </ul>
    <ul class="toggles">
        <li><ThemeToggle /></li>
        <li><LangToggle /></li>
    </ul>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        z-index: 1100;
        padding: 0.5rem;
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
        display: flex;
        justify-content: center;
    }
    
    ul.nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 2rem;
        justify-content: center;
        font-size: 1rem;
    }

    ul.toggles {
        list-style: none;
        margin: 0 0 0 2rem;
        padding: 0;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    li {
        align-items: center; 
        display: flex;
    }
    
    a {
        color: var(--text-color);
        text-decoration: none;
        white-space: nowrap;
    }
    
    a:hover {
        text-decoration: underline;
    }

    .nav-item {
        position: relative;
    }

    .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1100;
        background-color: var(--bg-color);
        border: 0.075rem solid var(--text-color);
        border-radius: 0.25rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 10rem;
        max-width: 20rem;
    }

    .dropdown.multi-column {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1.5rem;
        padding: 1rem;
        max-width: 56rem;
        align-content: flex-start;
    }

    .reviews-dropdown {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        max-width: 56rem;
    }

    .reviews-columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem 2rem;
        align-items: start;
    }

    .reviews-bottom-row {
        display: flex;
        gap: 1rem;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .dropdown-item {
        display: inline-block;
        padding: 0.2rem 0.2rem;
        color: var(--text-color);
        text-decoration: none;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .dropdown-item:hover {
        text-decoration: none;
        background-color: var(--button-bg);
        border-radius: 0.125rem;
    }
</style>