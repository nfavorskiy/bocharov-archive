<script>
    import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<nav>
    <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/research">Наука</a></li>
        <li><a href="/projects">Проекты</a></li>
        <li><a href="/graphics">Графика</a></li>
        <li><a href="/reviews">Друзья и Коллеги о Юрии Петровиче</a></li>
        <li><a href="/biography">Биография</a></li>
        <li><a href="/intreviews">Люди и Встречи</a></li>
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
        
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>
