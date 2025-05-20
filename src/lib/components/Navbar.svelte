<script>
    import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><ThemeToggle /></li>
    </ul>
</nav>

<style>

    nav {
        background-color: #333;
        padding: 0.5rem;
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
        color: white;
        text-decoration: none;
        
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>
