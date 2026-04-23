<script>
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
                { key: 'mainDates', path: '/biography/main-dates' },
                { key: 'biographicalNotes', path: '/biography/biographical-notes' },
                { key: 'firstSteps', path: '/biography/first-steps' },
                { key: 'family', path: '/biography/family' },
                { key: 'letters', path: '/biography/letters' },
                { key: 'notebooks', path: '/biography/notebooks' },
                { key: 'awardsAndDiplomas', path: '/biography/awards-and-diplomas' }
            ]
        },
        {
            key: 'research',
            titleKey: 'research',
            path: '/research',
            dropdownGroup: 'researchDropdown',
            dropdown: [
                { key: 'majorAims', path: '/research/major-aims' },
                { key: 'worksList', path: '/research/works-list' },
                { key: 'sovietUrbanists', path: '/research/soviet-urbanists' },
                { key: 'aspirantsCandidates', path: '/research/aspirants&candidates' },
                { key: 'cityDevelopmentModel', path: '/research/city-development-model' },
                { key: 'interviewsMaterials', path: '/research/interviews&materials' },
                { key: 'starredArticlesInterviews', path: '/research/starred-articles&interviews' },
                { key: 'articlesMaterials', path: '/research/articles&materials' }
            ]
        },
        {
            key: 'projects',
            titleKey: 'projects',
            path: '/projects',
            dropdownGroup: 'projectsDropdown',
            dropdown: [
                { key: 'list', path: '/projects/projects-list' },
                { key: 'diploma1951', path: '/projects/diploma-1951' },
                { key: 'volgograd', path: '/projects/volgograd-1952-1955' },
                { key: 'tolyatti', path: '/projects/tolyatti-1964-1966' },
                { key: 'naberezhnyeChelny', path: '/projects/naberezhnye-chelny-1965-1968' },
                { key: 'astana', path: '/projects/astana-international-competition-1998' },
                { key: 'cdh', path: '/projects/cdh-competition-2001' },
                { key: 'federationSquare', path: '/projects/federation-square-sketch-idea-2005' },
                { key: 'memorialComplex', path: '/projects/memorial-complex-poklonnaya-hill-competition-1986' },
                { key: 'newRaasnBuilding', path: '/projects/new-raasn-building-volkhonka-competition-1997' },
                { key: 'residentialComplex', path: '/projects/residential-complex-leninsky-avenue-competition-1998' },
                { key: 'zaradye', path: '/projects/zaradye-competition-2012' },
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
                { key: 'kuzmin', path: '/reviews/0' },
                { key: 'shubenkov', path: '/reviews/1' },
                { key: 'blinkin', path: '/reviews/2' },
                { key: 'bondarenko', path: '/reviews/3' },
                { key: 'frezinskaya', path: '/reviews/4' },
                { key: 'rappaport', path: '/reviews/5' },
                { key: 'vuchik', path: '/reviews/6' },
                { key: 'grigoryeva', path: '/reviews/7' },
                { key: 'merzhanov', path: '/reviews/8' },
                { key: 'lebedinskaya', path: '/reviews/9' },
                { key: 'bezchastnov', path: '/reviews/10' },
                { key: 'gurari', path: '/reviews/11' },
                { key: 'belonogova', path: '/reviews/12' },
                { key: 'tolstikhina', path: '/reviews/13' },
                { key: 'zheblyenok', path: '/reviews/14' },
                { key: 'glozman', path: '/reviews/15' },
                { key: 'sirenko', path: '/reviews/16' },
                { key: 'avazov', path: '/reviews/17' },
                { key: 'samaraAcademy', path: '/reviews/18' },
                { key: 'samaraUnion', path: '/reviews/19' }
            ]
        },
        {
            key: 'photoAndVarious',
            titleKey: 'photoAndVarious',
            path: '/photo-and-various',
            dropdownGroup: 'photoAndVariousDropdown',
            dropdown: [
                { key: 'tripsMeetings', path: '/photo-and-various/trips&meetings' },
                { key: 'familyChronicle', path: '/photo-and-various/family-chronicle' },
                { key: 'congratulations', path: '/photo-and-various/congratulations' }
            ]
        }
    ];

    let activeDropdown = null;

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
                <a href={item.path}>{navLabel(item)}</a>
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
        padding: 1rem;
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
        background-color: var(--bg-color);
        border: 1px solid var(--text-color);
        border-radius: 4px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 100;
        min-width: 200px;
        max-width: 1100px;
    }

    .dropdown.multi-column {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1.5rem;
        padding: 1rem;
        max-width: 900px;
        align-content: flex-start;
    }

    .reviews-dropdown {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        max-width: 900px;
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
        padding: 0.5rem 1rem;
        color: var(--text-color);
        text-decoration: none;
        white-space: nowrap;
        flex-shrink: 0;
    }

    .dropdown-item:hover {
        text-decoration: none;
        background-color: var(--button-bg);
        border-radius: 2px;
    }
</style>