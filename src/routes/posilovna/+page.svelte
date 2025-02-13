<script lang="ts">
    import area from '../../lib/images/area-icon.svg';
    import parking from '../../lib/images/parking-icon.svg';
    import train from '../../lib/images/train-icon.svg';
    import towel from '../../lib/images/towel-icon.svg';
    import lock from '../../lib/images/lock-icon.svg';
    import person from '../../lib/images/person-icon.svg';
    import waterbottle from '../../lib/images/waterbottle-icon.svg';

    import gym1 from '../../lib/images/gym1.webp';
    import gym2 from '../../lib/images/gym2.webp';
    import lounge from '../../lib/images/lounge.webp';
    import locker from '../../lib/images/locker.webp';

    let showGallery = false;
    let currentImage = 0;
    const images = [gym1, gym2, lounge, locker];

    function openGallery(index: number) {
        currentImage = index;
        showGallery = true;
    }

    function closeGallery() {
        showGallery = false;
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
    }

    function prevImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
    }
</script>

<main>
    <!-- Gym Info Section -->
    <section class="pt-5 pb-20 bg-black text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold font-heading mb-10">O BeeFIT</h2>
            <div class="flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Info Item 1 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Area Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Rozloha</p>
                            <p class="text-yellow font-bold text-xl">1500 m²</p>
                        </div>
                    </div>
        
                    <!-- Info Item 2 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={parking} alt="Parking Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Parkování</p>
                            <p class="text-yellow font-bold text-xl">V okolí</p>
                        </div>
                    </div>
        
                    <!-- Info Item 3 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={train} alt="Vybavení Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>MHD</p>
                            <p class="text-yellow font-bold text-xl">200m od vchodu</p>
                        </div>
                    </div>
        
                    <!-- Info Item 4 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={towel} alt="Relaxace Icon" class="w-7 h-7" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Ručník</p>
                            <p class="text-yellow font-bold text-xl">Zapůjčení 30 Kč</p>
                        </div>
                    </div>
        
                    <!-- Info Item 5 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={lock} alt="Otevírací doba Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Skříňky</p>
                            <p class="text-yellow font-bold text-xl">Není potřeba zámek</p>
                        </div>
                    </div>
        
                    <!-- Info Item 6 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={person} alt="Trenéři Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Trenéři</p>
                            <p class="text-yellow font-bold text-xl">Profesionální tým</p>
                        </div>
                    </div>
        
                    <!-- Info Item 7 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={waterbottle} alt="Ceník Icon" class="w-9 h-9" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Voda</p>
                            <p class="text-yellow font-bold text-xl">Od 15 Kč/0,5 L</p>
                        </div>
                    </div>
        
                    <!-- Info Item 8 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Lokalita Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Lokalita</p>
                            <p class="text-yellow font-bold text-xl">Snadná dostupnost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Equipment Section -->
    <section class="py-20 bg-grey">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold font-heading mb-10 text-white">Vybavení</h2>
            <div class="flex justify-center px-8 md:px-0">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {#each [gym1, gym2, lounge, locker] as image, index}
                    <button 
                        class="focus:outline-none"
                        on:click={() => openGallery(index)}
                    >
                        <img 
                            src={image} 
                            alt="Gym Equipment {index + 1}" 
                            class="rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-75"
                        />
                    </button>
                    {/each}
                </div>
            </div>
        </div>
    
        <!-- Lightbox Modal -->
        {#if showGallery}
            <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <button class="absolute top-4 right-4 text-white text-3xl" on:click={closeGallery}>×</button>
                <button class="absolute top-1/2 md:left-20 left-2 transform -translate-y-1/2 text-black bg-yellow rounded-3xl px-5 pt-3 pb-5 hover:bg-yellow_hover text-5xl z-10" on:click={prevImage}>‹</button>
    
                <img src={images[currentImage]} alt={`Gallery image ${currentImage + 1} of ${images.length}`} class="max-h-screen max-w-screen w-1/2" />
    
                <button class="absolute top-1/2 md:right-20 right-2 transform -translate-y-1/2 text-black bg-yellow rounded-3xl px-5 pt-3 pb-5 hover:bg-yellow_hover text-5xl z-10" on:click={nextImage}>›</button>
            </div>
        {/if}
    </section>
</main>

<style>
    :global(img) {
        max-width: 100%;
        height: auto;
    }
</style>