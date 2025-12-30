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
                { title: 'Семья', path: '/biography/family' },
                { title: 'Письма', path: '/biography/letters' },
                { title: 'Из записных книжек', path: '/biography/notebooks' },
                { title: 'Награды и дипломы', path: '/biography/awards-and-diplomas' }
            ]
        },
        {
            title: 'Наука',
            path: '/research',
            dropdown: [
                { title: 'Основные направления научной и проектной деятельности ', path: '/research/major-aims' },
                { title: 'Список печатных трудов', path: '/research/works-list' },
                { title: 'Советское общество урбанистов (1987-1992)', path: '/research/soviet-urbanists' },
                { title: 'Список аспирантов и соискателей', path: '/research/aspirants&candidates' },
                { title: 'Имитационная модель развития города', path: '/research/city-development-model' },
                { title: 'Список интервью и материалов о Ю.П.', path: '/research/interviews&materials' },
                { title: 'Избранные статьи и интервью Юрия Петровича', path: '/research/starred-articles&interviews' },
                { title: 'Статьи и материалы о Ю.П. Бочарове', path: '/research/articles&materials' }
            ]
        },
        {
            title: 'Проекты',
            path: '/projects',
            dropdown: [
                { title: 'Список проектных работ', path: '/projects/projects-list' },
                { title: 'Диплом 1951 Дом Советов в Воронеже', path: '/projects/diploma-1951' },
                { title: 'Волгоград 1952-1955', path: '/projects/volgograd-1952-1955' },
                { title: 'Тольятти 1964-1966', path: '/projects/tolyatti-1964-1966' },
                { title: 'Набережные Челны 1965-1968', path: '/projects/naberezhnye-chelny-1965-1968' },
                { title: 'Астана Междунар. конкурс 1998', path: '/projects/astana-international-competition-1998' },
                { title: 'ЦДХ Конкурс 2001', path: '/projects/cdh-competition-2001' },
                { title: 'Площадь Федерации Эскиз-идея 2005', path: '/projects/federation-square-sketch-idea-2005' },
                { title: 'Мемориальный комплекс на Поклонной горе Конкурс 1986', path: '/projects/memorial-complex-poklonnaya-hill-competition-1986' },
                { title: 'Новое здание РААСН на Волхонке Конкурс 1997', path: '/projects/new-raasn-building-volkhonka-competition-1997' },
                { title: 'Крестьянская застава Конкурс 1998', path: '/projects/residential-complex-leninsky-avenue-competition-1998' },
                { title: 'Зарядье Конкурс 2012', path: '/projects/zaradye-competition-2012' },
                { title: 'Разное', path: '/projects/miscellaneous' }
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
                { title: 'И.А. Бондаренко', path: '/reviews/3' },
                { title: 'Н.Р. Фрезинская', path: '/reviews/4' },
                { title: 'А.Г. Рапппапорт', path: '/reviews/5' },
                { title: 'Вукан Р. Вучик', path: '/reviews/6' },
                { title: 'Н.Ю. Григорьева', path: '/reviews/7' },
                { title: 'С.Б. Мержанов', path: '/reviews/8' },
                { title: 'Г.А. Лебединская', path: '/reviews/9' },
                { title: 'М.И. Безчастнов', path: '/reviews/10' },
                { title: 'М.Н. Гурари', path: '/reviews/11' },
                { title: 'М.А. Белоногова', path: '/reviews/12' },
                { title: 'А.О. Толстихина', path: '/reviews/13' },
                { title: 'Н.Н. Жеблиенок', path: '/reviews/14' },
                { title: 'О.С. Глозман', path: '/reviews/15' },
                { title: 'Э.А. Сиренко', path: '/reviews/16' },
                { title: 'Р.Ш. Авазов', path: '/reviews/17' },
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
        position: sticky;
        top: 0;
        padding: 1rem;
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
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