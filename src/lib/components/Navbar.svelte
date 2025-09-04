<script>
    import ThemeToggle from '../components/ThemeToggle.svelte';

    const navItems = [
        {
            title: 'Главная',
            path: '/',
        },
        {
            title: 'Биография',
            path: '/biography',
            dropdown: [
                { title: 'Основные даты', path: '/biography/main-dates' },
                { title: 'Биографические заметки', path: '/biography/biographical-notes' },
                { title: 'Начало жизненного пути', path: '/biography/first-steps' },
                { title: 'Награды и дипломы', path: '/biography/awards-and-diplomas' },
                { title: 'Семья', path: '/biography/family' },
                { title: 'Письма', path: '/biography/letters' },
                { title: 'Из записных книжек', path: '/biography/notebooks' }
            ]
        },
        {
            title: 'Наука',
            path: '/research',
            dropdown: [
                { title: 'Основные направления научной деятельности', path: '/research/major-aims' },
                { title: 'Список печатных трудов', path: '/research/works-list' },
                { title: 'Список аспирантов и соискателей', path: '/research/aspirants&candidates' },
                { title: 'Список интервью', path: '/research/interviews-list' },
                { title: 'Избранные статьи и интервью', path: '/research/starred-articles&interviews' },
            ]
        },
        {
            title: 'Проекты',
            path: '/projects',
            dropdown: [
                { title: 'Список проектных работ', path: '/projects/projects-list' },
                { title: 'Избранные проекты', path: '/projects/starred-projects' },
                { title: 'Дипломная работа 1951 г.', path: '/projects/diploma-1951' }
            ]
        },
        {
            title: 'Акварели и Графика',
            path: '/watercolors-and-graphics',
            dropdown: [
                { title: 'Акварели 1940-1970-е', path: '/watercolors-and-graphics/watercolors' },
                { title: 'Акварели 1980-2010-е', path: '/watercolors-and-graphics/watercolors' },
                { title: 'Карандаш / пастель / фломастер', path: '/watercolors-and-graphics/pencil&pastel&marker' },
                { title: 'Зарисовки', path: '/watercolors-and-graphics/sketches' }
            ]
        },
        {
            title: 'Друзья и Коллеги о Юрии Петровиче',
            path: '/reviews',
            dropdown: [
                { title: 'А.В. Кузьмин', path: '/reviews/0' },
                { title: 'М.В. Шубенков', path: '/reviews/1' },
                { title: 'М.Я. Блинкин', path: '/reviews/2' },
                { title: 'Н.Р. Фрезинская', path: '/reviews/3' },
                { title: 'В. Вучик', path: '/reviews/4' },
                { title: 'И.А. Бондаренко', path: '/reviews/5' },
                { title: 'А.Г. Рапппапорт', path: '/reviews/6' },
                { title: 'Г.А. Лебединская', path: '/reviews/7' },
                { title: 'С.Б. Мержанов', path: '/reviews/8' },
                { title: 'Н.Ю. Григорьева', path: '/reviews/9' },
                { title: 'М.Н. Гурари', path: '/reviews/10' },
                { title: 'М.А. Белоногова', path: '/reviews/11' },
                { title: 'А.Г. Толстихина', path: '/reviews/12' },
                { title: 'Д.Ю. Ломакина', path: '/reviews/13' },
                { title: 'О.С. Глозман', path: '/reviews/14' },
                { title: 'Э.А. Сиренко', path: '/reviews/15' },
                { title: 'Р.Ш. Авазов', path: '/reviews/16' },
                { title: 'Ю.Г. Страшнова', path: '/reviews/17' },
                { title: 'Самарская академия архитектуры', path: '/reviews/18' },
                { title: 'Самарское отделение Союза архитекторов', path: '/reviews/19' }
            ]
        },
        {
            title: 'Фото и Разное',
            path: '/photo-and-various',
            dropdown: [
                { title: 'Поездки и встречи', path: '/photo-and-various/trips&meetings' },
                { title: 'Семейная хроника', path: '/photo-and-various/family-chronicle' },
                { title: 'Поздравления, посвящения', path: '/photo-and-various/congratulations' },
                { title: 'Статьи и материалы', path: '/photo-and-various/articles-and-materials' },
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
    <ul>
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
        <li><ThemeToggle /></li>
    </ul>
</nav>

<style>
    nav {
        padding: 1rem;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 2rem;
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
        grid-template-columns: repeat(3, 1fr);
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