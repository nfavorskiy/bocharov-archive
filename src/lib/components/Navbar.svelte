<script>
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
    import LangToggle from '$lib/components/LangToggle.svelte';

    const navItems = [
        {
            title: 'Главная',
            path: '/',
        },
        {
            title: 'Биография',
            path: '/biography',
            dropdown: [
                { title: 'Основные даты', path: '/biography/mainDates' },
                { title: 'Биографические заметки', path: '/biography/biographicalNotes' },
                { title: 'Начало жизненного пути', path: '/biography/firstSteps' },
                { title: 'Семья', path: '/biography/family' },
                { title: 'Письма', path: '/biography/letters' },
                { title: 'Из записных книжек', path: '/biography/notebooks' },
                { title: 'Награды и дипломы', path: '/biography/awardsAndDiplomas' }
            ]
        },
        {
            title: 'Наука',
            path: '/research',
            dropdown: [
                { title: 'Основные направления научной и проектной деятельности ', path: '/research/majorAims' },
                { title: 'Список печатных трудов', path: '/research/worksList' },
                { title: 'Советское общество урбанистов (1987-1992)', path: '/research/sovietUrbanists' },
                { title: 'Список аспирантов и соискателей', path: '/research/aspirantsCandidates' },
                { title: 'Имитационная модель развития города', path: '/research/cityDevelopmentModel' },
                { title: 'Список интервью и материалов о Юрии Петровиче', path: '/research/interviewsMaterials' },
                { title: 'Избранные статьи и интервью Юрия Петровича', path: '/research/starredArticlesInterviews' },
                { title: 'Статьи и материалы о Юрии Петровиче', path: '/research/articlesMaterials' }
            ]
        },
        {
            title: 'Проекты',
            path: '/projects',
            dropdown: [
                { title: 'Список проектных работ', path: '/projects/list' },
                { title: 'Диплом 1951 Дом Советов в Воронеже', path: '/projects/diploma1951' },
                { title: 'Волгоград 1952-1955', path: '/projects/volgograd' },
                { title: 'Тольятти 1964-1966', path: '/projects/tolyatti' },
                { title: 'Набережные Челны 1965-1968', path: '/projects/naberezhnyeChelny' },
                { title: 'Астана Междунар. конкурс 1998', path: '/projects/astana' },
                { title: 'ЦДХ Конкурс 2001', path: '/projects/cdh' },
                { title: 'Площадь Федерации Эскиз-идея 2005', path: '/projects/federationSquare' },
                { title: 'Мемориальный комплекс на Поклонной горе Конкурс 1986', path: '/projects/memorialComplex' },
                { title: 'Новое здание РААСН на Волхонке Конкурс 1997', path: '/projects/newRaasnBuilding' },
                { title: 'Крестьянская застава Конкурс 1998', path: '/projects/residentialComplex' },
                { title: 'Зарядье Конкурс 2012', path: '/projects/zaradye' },
                { title: 'Разное', path: '/projects/miscellaneous' }
            ]
        },
        {
            title: 'Акварели и Графика',
            path: '/watercolorsGraphics',
            dropdown: [
                { title: 'Акварели 1940-1970-е', path: '/watercolorsGraphics/watercolors1940_1970' },
                { title: 'Акварели 1980-2010-е', path: '/watercolorsGraphics/watercolors1980_2010' },
                { title: 'Карандаш / пастель / фломастер', path: '/watercolorsGraphics/pencilPastelMarker' },
                { title: 'Зарисовки', path: '/watercolorsGraphics/sketches' }
            ]
        },
        {
            title: 'Друзья и Коллеги о Юрии Петровиче',
            path: '/reviews',
            dropdown: [
                { title: 'А.В. Кузьмин', path: '/reviews/kuzmin' },
                { title: 'М.В. Шубенков', path: '/reviews/shubenkov' },
                { title: 'М.Я. Блинкин', path: '/reviews/blinkin' },
                { title: 'И.А. Бондаренко', path: '/reviews/bondarenko' },
                { title: 'Н.Р. Фрезинская', path: '/reviews/frezinskaya' },
                { title: 'А.Г. Рапппапорт', path: '/reviews/rappaport' },
                { title: 'Вукан Р. Вучик', path: '/reviews/vuchik' },
                { title: 'Н.Ю. Григорьева', path: '/reviews/grigoryeva' },
                { title: 'С.Б. Мержанов', path: '/reviews/merzhanov' },
                { title: 'Г.А. Лебединская', path: '/reviews/lebedinskaya' },
                { title: 'М.И. Безчастнов', path: '/reviews/bezchastnov' },
                { title: 'М.Н. Гурари', path: '/reviews/gurari' },
                { title: 'М.А. Белоногова', path: '/reviews/belonogova' },
                { title: 'А.О. Толстихина', path: '/reviews/tolstikhina' },
                { title: 'Н.Н. Жеблиенок', path: '/reviews/zheblyenok' },
                { title: 'О.С. Глозман', path: '/reviews/glozman' },
                { title: 'Э.А. Сиренко', path: '/reviews/sirenko' },
                { title: 'Р.Ш. Авазов', path: '/reviews/avazov' },
                { title: 'Самарская академия архитектуры', path: '/reviews/samaraAcademy' },
                { title: 'Самарское отделение Союза архитекторов', path: '/reviews/samaraUnion' }
            ]
        },
        {
            title: 'Фото и Разное',
            path: '/photoAndVarious',
            dropdown: [
                { title: 'Поездки и встречи', path: '/photoAndVarious/tripsMeetings' },
                { title: 'Семейная хроника', path: '/photoAndVarious/familyChronicle' },
                { title: 'Поздравления, посвящения', path: '/photoAndVarious/congratulations' },
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
</script>

<nav>
    <ul class="nav-list">
        {#each navItems as item, index}
            <li 
                on:mouseenter={() => handleMouseEnter(index)}
                on:mouseleave={handleMouseLeave}
                class="nav-item"
            >
                <a href={item.path}>{item.title}</a>
                {#if item.dropdown && item.dropdown.length > 0 && activeDropdown === index}
                    {#if item.title === 'Друзья и Коллеги о Юрии Петровиче'}
                        <div class="dropdown reviews-dropdown">
                            <div class="reviews-columns">
                                {#each item.dropdown.slice(0, -2) as dropItem}
                                    <a href={dropItem.path} class="dropdown-item">{dropItem.title}</a>
                                {/each}
                            </div>
                            <div class="reviews-bottom-row">
                                {#each item.dropdown.slice(-2) as dropItem}
                                    <a href={dropItem.path} class="dropdown-item">{dropItem.title}</a>
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <div class="dropdown" class:multi-column={item.dropdown.length > 6}>
                            {#each item.dropdown as dropItem}
                                <a href={dropItem.path} class="dropdown-item">{dropItem.title}</a>
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