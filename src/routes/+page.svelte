
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
        <h1>Юрий Петрович БОЧАРОВ</h1>
        <h3>4.05.1926, Харьков – 1.09.2023, Москва</h3>
        <p>- советский и российский архитектор, урбанист, теоретик и практик градостроительства, один из крупнейших учёных в области градостроительной науки. Основоположник теории гибкой планировочной структуры новых промышленных городов.  </p>     
        <p>В круг научных интересов входили роль урбанизации в развитии общества, методология градостроительного проектирования; теория расселения; оценка взаимосвязи социальных, экономических и демографических факторов в планировке крупных городов и агломераций; организация городского транспорта; формирование столичных функций Москвы; формирование в России института профессионального градостроительства и образовательного стандарта профессиональных планировщиков. </p>
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
        padding-inline: 0rem;
        padding-top: 1rem;
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
            padding-left: 2rem;
            padding-right: 0rem;
        }
        
        .portrait-column {
            order: 1;
            padding-inline: 2rem;
        }
    }

    .portrait-column {
        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
        padding-inline: 0rem;
        padding-top: 1rem;
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