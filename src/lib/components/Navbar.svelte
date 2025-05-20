<script>
    import ThemeToggle from '../components/ThemeToggle.svelte';

    const navItems = [
        {
            title: 'Главная',
            path: '/',
        },
        {
            title: 'Наука',
            path: '/research',
            dropdown: [
                { title: 'Основные направления научной деятельности', path: '/research/major-aims' },
                { title: 'Список печатных трудов', path: '/research/works-list' },
                { title: 'Избранные статьи', path: '/research/starred-articles' },
                { title: 'Избранные интервью', path: '/research/starred-insterviews' },
                { title: 'Список аспирантов и соискателей', path: '/research/aspirants&candidates' },
                { title: 'Награды', path: '/research/awards' }
            ]
        },
        {
            title: 'Проекты',
            path: '/projects',
            dropdown: [
                { title: 'Список проектных работ', path: '/projects/projects-list' },
                { title: 'Избранные проекты', path: '/projects/starred-projects' },
                { title: 'Конкурсы', path: '/projects/contests' },
                { title: 'Дипломная работа 1951 г.', path: '/projects/diploma-1951' }
            ]
        },
        {
            title: 'Графика',
            path: '/graphics',
            dropdown: [
                { title: 'Открыть все', path: '/graphics/open-all' },
                { title: 'Акварели', path: '/graphics/watercolors' },
                { title: 'Карандаш / пастель', path: '/graphics/pencil&pastel' }
            ]
        },
        {
            title: 'Друзья и Коллеги о Юрии Петровиче',
            path: '/reviews',
            dropdown: [
                { title: 'А.В. Кузьмин', path: '/reviews/0' },
                { title: 'М.Я. Блинкин', path: '/reviews/1' },
                { title: 'И.А. Бондаренко', path: '/reviews/2' },
                { title: 'В. Вучик и Р. Вучик', path: '/reviews/3' },
                { title: 'Н.Р. Фрезинская', path: '/reviews/4' },
                { title: 'А.Г. Рапппапорт', path: '/reviews/5' },
                { title: 'Н.Ю. Григорьева', path: '/reviews/6' },
                { title: 'М.А. Белоногова (Моргун)', path: '/reviews/7' },
                { title: 'Т.Ф. Давидич', path: '/reviews/8' },
                { title: 'С.Б. Мержанов', path: '/reviews/9' },
                { title: 'А.Г. Толстихина', path: '/reviews/10' },
                { title: 'Г.А. Лебединская', path: '/reviews/11' },
                { title: 'Н.Н. Жеблиенок', path: '/reviews/12' },
                { title: 'Е.Л. Беляева', path: '/reviews/13' },
                { title: 'Р.Ш. Авазов', path: '/reviews/14' },
                { title: 'О.С. Глозман', path: '/reviews/15' },
                { title: 'А.В. Кафтанов', path: '/reviews/16' },
                { title: 'Э.А. Сиренко', path: '/reviews/17' },
                { title: 'Л.Ф. Страшнова и Ю.Г. Страшнова', path: '/reviews/18' }

            ]
        },
        {
            title: 'Биография',
            path: '/biography',
            dropdown: [
                { title: 'Родители', path: '/biography/parents' },
                { title: 'Семья', path: '/biography/family' },
                { title: 'Письма разных лет', path: '/biography/letters' }
            ]
        },
        {
            title: 'Люди и Встречи',
            path: '/people-and-meetings',
            dropdown: [
                { title: 'Открыть все', path: '/people-and-meetings/open-all' },
                { title: 'Интервью', path: '/people-and-meetings/intreviews' },
                { title: 'Поездки', path: '/people-and-meetings/trips' },
                { title: 'С коллегами', path: '/people-and-meetings/colleages' },
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
                {#if item.dropdown && activeDropdown === index}
                    <ul class="dropdown">
                        {#each item.dropdown as dropItem}
                            <li>
                                <a href={dropItem.path}>{dropItem.title}</a>
                            </li>
                        {/each}
                    </ul>
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
    }

    .dropdown li {
        padding: 0;
    }

    .dropdown a {
        display: block;
        width: 100%;
        padding: 0.5rem 1rem;
    }

    .dropdown a:hover {
        text-decoration: none;
        background-color: var(--button-bg);
        border-radius: 2px;
    }
</style>