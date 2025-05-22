
<div class="container">
    <div class="portrait-column">
        <!-- Add your portrait image here -->
        <div class="portrait-placeholder">Portrait</div>
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

    .portrait-placeholder {
        aspect-ratio: 3/4;
        background-color: #eee;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        height: 80vh;
    }
</style>