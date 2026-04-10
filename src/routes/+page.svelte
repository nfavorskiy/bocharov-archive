
<div class="container">
    <div class="portrait-column">
        <!-- Add your portrait image here -->
        <img 
            src="/photo_2025-05-22_21-27-56.jpg" 
            alt="Юрий Петрович Бочаров"
            class="portrait-image"
        />
    </div>
    <div class="text-column">
        <h1>Юрий Петрович</h1> 
        <h1 style="letter-spacing: 4px;">БОЧАРОВ</h1>
        <h3 style="margin: 4px 0;">4.05.1926, Харьков – </h3>
        <h3>1.09.2023, Москва</h3>
        <p>Советский и российский архитектор, урбанист, академик РААСН, один из крупнейших учёных в области градостроительной науки. Основоположник теории гибкой планировочной структуры новых промышленных городов. Автор генпланов Тольятти и Набережные Челны</p>     
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