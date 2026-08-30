<div class="bottom-bar">
    
</div>

<footer>
<table>
    <thead>
        <tr>
            <td>
                <p>Cсылка на материалы сайта обязательна.</p>
            </td>
            <td>
                <p>Александра Бочарова</p>
            </td>
            <td>
                <p>Элина Сиренко</p>
            </td>
            <td>
                <p>Николай Фаворский</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>&copy; {new Date().getFullYear()} Сайт урбаниста Юрия Бочарова.</p>
            </td>
            <td>
                <p>Предоставление и обработка материалов</p>
            </td>
            <td>
                <p>Обработка материалов</p>
            </td>
            <td>
                <p>Дизайн и администрирование</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Все права защищены.</p>
            </td>
        </tr>
    </thead>
</table>
</footer>

<style>
    footer {
        
        bottom: 0;
        width: 100%;
        text-align: left;
        font-size: 0.6rem;
        line-height: 1.2;
        margin: 0 auto;
        z-index: 1000;

        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;

        display: flex;
        justify-content: center;
        align-items: center;     
        width: 100%;
    }
    table {
        width: 65%;
    }
    td {
        padding: 0;
    }
    p {
        margin: 0;
    }

    .bottom-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: -1;

        width: 100vw;
        height: 60px;

        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
    }
</style>