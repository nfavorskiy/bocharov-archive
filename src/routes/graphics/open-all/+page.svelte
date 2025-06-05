<script>
    import { onMount } from 'svelte';
    
    // Configuration
    const IMAGES_PER_PAGE = 9;
    
    // Images will be loaded dynamically from the server
    let allImages = [];
    let isLoading = true;
    
    // Pagination state
    let currentPage = 1;
    let totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
    let currentImages = [];
    let selectedImage = null;
    
    // Calculate current page images
    function updateCurrentImages() {
        const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
        const endIndex = startIndex + IMAGES_PER_PAGE;
        currentImages = allImages.slice(startIndex, endIndex);
    }
    
    // Navigation functions
    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            updateCurrentImages();
        }
    }
    
    function nextPage() {
        goToPage(currentPage + 1);
    }
    
    function previousPage() {
        goToPage(currentPage - 1);
    }
    
    function openLightbox(imageSrc) {
        selectedImage = imageSrc;
    }
    
    function closeLightbox() {
        selectedImage = null;
    }
    
    // Load images from server endpoint
    async function loadImages() {
        try {
            isLoading = true;
            const response = await fetch('/api/graphics');
            const data = await response.json();
            allImages = data.images;
            totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
            updateCurrentImages();
        } catch (error) {
            console.error('Failed to load images:', error);
            allImages = [];
        } finally {
            isLoading = false;
        }
    }
    
    // Initialize on mount
    onMount(() => {
        loadImages();
    });
    
    // Handle keyboard navigation for lightbox
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="gallery-container">
    <h1>Галерея</h1>
    
    {#if isLoading}
        <div class="loading">Загрузка изображений...</div>
    {:else if allImages.length === 0}
        <div class="no-images">Изображения не найдены</div>
    {:else}
        <!-- Gallery Grid -->
        <div class="gallery-grid">
            {#each currentImages as image, index}
                <div class="gallery-item" on:click={() => openLightbox(image)} on:keydown={(e) => e.key === 'Enter' && openLightbox(image)} tabindex="0" role="button">
                    <img src={image} alt="Gallery image {(currentPage - 1) * IMAGES_PER_PAGE + index + 1}" loading="lazy" />
                </div>
            {/each}
            
            <!-- Add empty placeholders for consistent grid on last page -->
            {#if currentPage === totalPages && currentImages.length < IMAGES_PER_PAGE}
                {#each Array(IMAGES_PER_PAGE - currentImages.length).fill(0) as _}
                    <div class="gallery-item-placeholder"></div>
                {/each}
            {/if}
        </div>
        
        <!-- Pagination Controls -->
        {#if totalPages > 1}
            <div class="pagination">
                <button 
                    on:click={previousPage} 
                    disabled={currentPage === 1}
                    class="nav-button"
                >
                    ← Предыдущая
                </button>
                
                <div class="page-numbers">
                    {#each Array(totalPages).fill(0) as _, i}
                        <button 
                            on:click={() => goToPage(i + 1)}
                            class="page-button {currentPage === i + 1 ? 'active' : ''}"
                        >
                            {i + 1}
                        </button>
                    {/each}
                </div>
                
                <button 
                    on:click={nextPage} 
                    disabled={currentPage === totalPages}
                    class="nav-button"
                >
                    Следующая →
                </button>
            </div>
            
            <div class="page-info">
                Страница {currentPage} из {totalPages} ({allImages.length} изображений)
            </div>
        {/if}
    {/if}
</div>

<!-- Lightbox Modal -->
{#if selectedImage}
    <div class="lightbox-overlay" on:click={closeLightbox} role="button" tabindex="0">
        <div class="lightbox-content" on:click|stopPropagation>
            <button class="close-button" on:click={closeLightbox}>×</button>
            <img src={selectedImage} alt="Enlarged view" />
        </div>
    </div>
{/if}

<style>
    .gallery-container {
        max-width: 1200px;
        margin: 0 5rem;
    }
    
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--text-color);
    }
    
    .loading, .no-images {
        text-align: center;
        padding: 2rem;
        color: var(--text-color);
        font-size: 1.1rem;
    }
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .gallery-item {
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        background: var(--button-bg);
    }
    
    .gallery-item:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .gallery-item:focus {
        outline: 2px solid var(--link-color);
        outline-offset: 2px;
    }
    
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .nav-button {
        padding: 0.5rem 1rem;
        border: 1px solid var(--text-color);
        background: var(--button-bg);
        color: var(--text-color);
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }
    
    .nav-button:hover:not(:disabled) {
        background: var(--link-color);
        color: white;
    }
    
    .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .page-numbers {
        display: flex;
        gap: 0.25rem;
    }
    
    .page-button {
        width: 2.5rem;
        height: 2.5rem;
        border: 1px solid var(--text-color);
        background: var(--button-bg);
        color: var(--text-color);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .page-button:hover {
        background: var(--link-color);
        color: white;
    }
    
    .page-button.active {
        background: var(--link-color);
        color: white;
        font-weight: bold;
    }
    
    .page-info {
        text-align: center;
        color: var(--text-color);
        font-size: 0.9rem;
        opacity: 0.8;
    }
    
    /* Lightbox Styles */
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        cursor: default;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 4px;
    }
    
    .close-button {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
        line-height: 1;
    }
    
    .close-button:hover {
        opacity: 0.7;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .gallery-container {
            padding: 1rem;
            margin: 0 1rem;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.5rem;
        }
        
        .pagination {
            flex-direction: column;
            gap: 1rem;
        }
        
        .page-numbers {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>