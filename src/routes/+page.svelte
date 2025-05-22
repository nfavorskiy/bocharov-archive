
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
        <p>Add text here</p>
    </div>
</div>


<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .text-column {
        padding-inline: 4rem;
        padding-top: 2rem;
    }

    .portrait-column {
        padding-inline: 4rem;
        padding-top: 2rem;
        display: flex;
        align-items: center;
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