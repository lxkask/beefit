<script lang="ts">
    import area from '../../lib/images/area-icon.svg';
    import parking from '../../lib/images/parking-icon.svg';
    import train from '../../lib/images/train-icon.svg';
    import towel from '../../lib/images/towel-icon.svg';
    import lock from '../../lib/images/lock-icon.svg';
    import person from '../../lib/images/person-icon.svg';
    import waterbottle from '../../lib/images/waterbottle-icon.svg';
    import idCard from '../../lib/images/id-card.svg';

    // ===== GYM 1 =====
    import gym1Full from '../../lib/images/gym-images/gym1Full.webp';
    import gym1Large from '../../lib/images/gym-images/gym1Large.webp';
    import gym1Medium from '../../lib/images/gym-images/gym1Medium.webp';
    import gym1Small from '../../lib/images/gym-images/gym1Small.webp';
    import gym1Thumb from '../../lib/images/gym-images/gym1Thumb.webp';

    // ===== GYM 2 =====
    import gym2Full from '../../lib/images/gym-images/gym2Full.webp';
    import gym2Large from '../../lib/images/gym-images/gym2Large.webp';
    import gym2Medium from '../../lib/images/gym-images/gym2Medium.webp';
    import gym2Small from '../../lib/images/gym-images/gym2Small.webp';
    import gym2Thumb from '../../lib/images/gym-images/gym2Thumb.webp';

    // ===== GYM 3 =====
    import gym3Full from '../../lib/images/gym-images/gym3Full.webp';
    import gym3Large from '../../lib/images/gym-images/gym3Large.webp';
    import gym3Medium from '../../lib/images/gym-images/gym3Medium.webp';
    import gym3Small from '../../lib/images/gym-images/gym3Small.webp';
    import gym3Thumb from '../../lib/images/gym-images/gym3Thumb.webp';

    // ===== GYM 4 =====
    import gym4Full from '../../lib/images/gym-images/gym4Full.webp';
    import gym4Large from '../../lib/images/gym-images/gym4Large.webp';
    import gym4Medium from '../../lib/images/gym-images/gym4Medium.webp';
    import gym4Small from '../../lib/images/gym-images/gym4Small.webp';
    import gym4Thumb from '../../lib/images/gym-images/gym4Thumb.webp';

    // ===== GYM 5 =====
    import gym5Full from '../../lib/images/gym-images/gym5Full.webp';
    import gym5Large from '../../lib/images/gym-images/gym5Large.webp';
    import gym5Medium from '../../lib/images/gym-images/gym5Medium.webp';
    import gym5Small from '../../lib/images/gym-images/gym5Small.webp';
    import gym5Thumb from '../../lib/images/gym-images/gym5Thumb.webp';

    // ===== GYM 6 =====
    import gym6Full from '../../lib/images/gym-images/gym6Full.webp';
    import gym6Large from '../../lib/images/gym-images/gym6Large.webp';
    import gym6Medium from '../../lib/images/gym-images/gym6Medium.webp';
    import gym6Small from '../../lib/images/gym-images/gym6Small.webp';
    import gym6Thumb from '../../lib/images/gym-images/gym6Thumb.webp';

    // ===== GYM 7 =====
    import gym7Full from '../../lib/images/gym-images/gym7Full.webp';
    import gym7Large from '../../lib/images/gym-images/gym7Large.webp';
    import gym7Medium from '../../lib/images/gym-images/gym7Medium.webp';
    import gym7Small from '../../lib/images/gym-images/gym7Small.webp';
    import gym7Thumb from '../../lib/images/gym-images/gym7Thumb.webp';

    // ===== GYM 8 =====
    import gym8Full from '../../lib/images/gym-images/gym8Full.webp';
    import gym8Large from '../../lib/images/gym-images/gym8Large.webp';
    import gym8Medium from '../../lib/images/gym-images/gym8Medium.webp';
    import gym8Small from '../../lib/images/gym-images/gym8Small.webp';
    import gym8Thumb from '../../lib/images/gym-images/gym8Thumb.webp';

    // ===== GYM 9 =====
    import gym9Full from '../../lib/images/gym-images/gym9Full.webp';
    import gym9Large from '../../lib/images/gym-images/gym9Large.webp';
    import gym9Medium from '../../lib/images/gym-images/gym9Medium.webp';
    import gym9Small from '../../lib/images/gym-images/gym9Small.webp';
    import gym9Thumb from '../../lib/images/gym-images/gym9Thumb.webp';

    // ===== GYM 10 =====
    import gym10Full from '../../lib/images/gym-images/gym10Full.webp';
    import gym10Large from '../../lib/images/gym-images/gym10Large.webp';
    import gym10Medium from '../../lib/images/gym-images/gym10Medium.webp';
    import gym10Small from '../../lib/images/gym-images/gym10Small.webp';
    import gym10Thumb from '../../lib/images/gym-images/gym10Thumb.webp';

    // ===== GYM 11 =====
    import gym11Full from '../../lib/images/gym-images/gym11Full.webp';
    import gym11Large from '../../lib/images/gym-images/gym11Large.webp';
    import gym11Medium from '../../lib/images/gym-images/gym11Medium.webp';
    import gym11Small from '../../lib/images/gym-images/gym11Small.webp';
    import gym11Thumb from '../../lib/images/gym-images/gym11Thumb.webp';

    // ===== GYM 12 =====
    import gym12Full from '../../lib/images/gym-images/gym12Full.webp';
    import gym12Large from '../../lib/images/gym-images/gym12Large.webp';
    import gym12Medium from '../../lib/images/gym-images/gym12Medium.webp';
    import gym12Small from '../../lib/images/gym-images/gym12Small.webp';
    import gym12Thumb from '../../lib/images/gym-images/gym12Thumb.webp';

    // ===== GYM 13 =====
    import gym13Full from '../../lib/images/gym-images/gym13Full.webp';
    import gym13Large from '../../lib/images/gym-images/gym13Large.webp';
    import gym13Medium from '../../lib/images/gym-images/gym13Medium.webp';
    import gym13Small from '../../lib/images/gym-images/gym13Small.webp';
    import gym13Thumb from '../../lib/images/gym-images/gym13Thumb.webp';

    // ===== GYM 14 =====
    import gym14Full from '../../lib/images/gym-images/gym14Full.webp';
    import gym14Large from '../../lib/images/gym-images/gym14Large.webp';
    import gym14Medium from '../../lib/images/gym-images/gym14Medium.webp';
    import gym14Small from '../../lib/images/gym-images/gym14Small.webp';
    import gym14Thumb from '../../lib/images/gym-images/gym14Thumb.webp';

    // ===== GYM 15 =====
    import gym15Full from '../../lib/images/gym-images/gym15Full.webp';
    import gym15Large from '../../lib/images/gym-images/gym15Large.webp';
    import gym15Medium from '../../lib/images/gym-images/gym15Medium.webp';
    import gym15Small from '../../lib/images/gym-images/gym15Small.webp';
    import gym15Thumb from '../../lib/images/gym-images/gym15Thumb.webp';

    // ===== GYM 16 =====
    import gym16Full from '../../lib/images/gym-images/gym16Full.webp';
    import gym16Large from '../../lib/images/gym-images/gym16Large.webp';
    import gym16Medium from '../../lib/images/gym-images/gym16Medium.webp';
    import gym16Small from '../../lib/images/gym-images/gym16Small.webp';
    import gym16Thumb from '../../lib/images/gym-images/gym16Thumb.webp';

    // ===== GYM 17 =====
    import gym17Full from '../../lib/images/gym-images/gym17Full.webp';
    import gym17Large from '../../lib/images/gym-images/gym17Large.webp';
    import gym17Medium from '../../lib/images/gym-images/gym17Medium.webp';
    import gym17Small from '../../lib/images/gym-images/gym17Small.webp';
    import gym17Thumb from '../../lib/images/gym-images/gym17Thumb.webp';

    // ===== GYM 18 =====
    import gym18Full from '../../lib/images/gym-images/gym18Full.webp';
    import gym18Large from '../../lib/images/gym-images/gym18Large.webp';
    import gym18Medium from '../../lib/images/gym-images/gym18Medium.webp';
    import gym18Small from '../../lib/images/gym-images/gym18Small.webp';
    import gym18Thumb from '../../lib/images/gym-images/gym18Thumb.webp';

    let showGallery = false;
    let currentImage = 0;

    const galleryImages = [
        {
            id: 1,
            thumb: gym1Thumb,
            full: gym1Full,
            large: gym1Large,
            medium: gym1Medium,
            small: gym1Small,
            alt: "Gym equipment overview"
        },
        {
            id: 2,
            thumb: gym2Thumb,
            full: gym2Full,
            large: gym2Large,
            medium: gym2Medium,
            small: gym2Small,
            alt: "Gym equipment overview"
        },
        {
            id: 3,
            thumb: gym3Thumb,
            full: gym3Full,
            large: gym3Large,
            medium: gym3Medium,
            small: gym3Small,
            alt: "Gym equipment overview"
        },
        {
            id: 4,
            thumb: gym4Thumb,
            full: gym4Full,
            large: gym4Large,
            medium: gym4Medium,
            small: gym4Small,
            alt: "Gym equipment overview"
        },
        {
            id: 5,
            thumb: gym5Thumb,
            full: gym5Full,
            large: gym5Large,
            medium: gym5Medium,
            small: gym5Small,
            alt: "Gym equipment overview"
        },
        {
            id: 6,
            thumb: gym6Thumb,
            full: gym6Full,
            large: gym6Large,
            medium: gym6Medium,
            small: gym6Small,
            alt: "Gym equipment overview"
        },
        {
            id: 7,
            thumb: gym7Thumb,
            full: gym7Full,
            large: gym7Large,
            medium: gym7Medium,
            small: gym7Small,
            alt: "Gym equipment overview"
        },
        {
            id: 8,
            thumb: gym8Thumb,
            full: gym8Full,
            large: gym8Large,
            medium: gym8Medium,
            small: gym8Small,
            alt: "Gym equipment overview"
        },
        {
            id: 9,
            thumb: gym9Thumb,
            full: gym9Full,
            large: gym9Large,
            medium: gym9Medium,
            small: gym9Small,
            alt: "Gym equipment overview"
        },
        {
            id: 10,
            thumb: gym10Thumb,
            full: gym10Full,
            large: gym10Large,
            medium: gym10Medium,
            small: gym10Small,
            alt: "Gym equipment overview"
        },
        {
            id: 11,
            thumb: gym11Thumb,
            full: gym11Full,
            large: gym11Large,
            medium: gym11Medium,
            small: gym11Small,
            alt: "Gym equipment overview"
        },
        {
            id: 12,
            thumb: gym12Thumb,
            full: gym12Full,
            large: gym12Large,
            medium: gym12Medium,
            small: gym12Small,
            alt: "Gym equipment overview"
        },
        {
            id: 13,
            thumb: gym13Thumb,
            full: gym13Full,
            large: gym13Large,
            medium: gym13Medium,
            small: gym13Small,
            alt: "Gym equipment overview"
        },
        {
            id: 14,
            thumb: gym14Thumb,
            full: gym14Full,
            large: gym14Large,
            medium: gym14Medium,
            small: gym14Small,
            alt: "Gym equipment overview"
        },
        {
            id: 15,
            thumb: gym15Thumb,
            full: gym15Full,
            large: gym15Large,
            medium: gym15Medium,
            small: gym15Small,
            alt: "Gym equipment overview"
        },
        {
            id: 16,
            thumb: gym16Thumb,
            full: gym16Full,
            large: gym16Large,
            medium: gym16Medium,
            small: gym16Small,
            alt: "Gym equipment overview"
        },
        {
            id: 17,
            thumb: gym17Thumb,
            full: gym17Full,
            large: gym17Large,
            medium: gym17Medium,
            small: gym17Small,
            alt: "Gym equipment overview"
        },
        {
            id: 18,
            thumb: gym18Thumb,
            full: gym18Full,
            large: gym18Large,
            medium: gym18Medium,
            small: gym18Small,
            alt: "Gym equipment overview"
        }
    ];

    function openGallery(index: number) {
        currentImage = index;
        showGallery = true;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
    }

    function closeGallery() {
        showGallery = false;
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    function nextImage() {
        currentImage = (currentImage + 1) % galleryImages.length;
    }

    function prevImage() {
        currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
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
                            <img src={area} alt="Rozloha" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Rozloha</p>
                            <p class="text-yellow font-bold text-xl">1500 m²</p>
                        </div>
                    </div>
        
                    <!-- Info Item 2 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={parking} alt="Parkování" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Parkování</p>
                            <p class="text-yellow font-bold text-xl">V okolí</p>
                        </div>
                    </div>
        
                    <!-- Info Item 3 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={train} alt="Metro" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>MHD</p>
                            <p class="text-yellow font-bold text-xl">200m od vchodu</p>
                        </div>
                    </div>
        
                    <!-- Info Item 4 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={towel} alt="Ručník" class="w-7 h-7" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Ručník</p>
                            <p class="text-yellow font-bold text-xl">Zapůjčení 30 Kč</p>
                        </div>
                    </div>
        
                    <!-- Info Item 5 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={lock} alt="Zámek" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Skříňky</p>
                            <p class="text-yellow font-bold text-xl">Není potřeba zámek</p>
                        </div>
                    </div>
        
                    <!-- Info Item 6 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={person} alt="Osoba" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Trenéři</p>
                            <p class="text-yellow font-bold text-xl">Profesionální tým</p>
                        </div>
                    </div>
        
                    <!-- Info Item 7 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={waterbottle} alt="Voda" class="w-9 h-9" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Voda</p>
                            <p class="text-yellow font-bold text-xl">Od 15 Kč/0,5 L</p>
                        </div>
                    </div>
        
                    <!-- Info Item 8 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={idCard} alt="Permice" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Vstupy</p>
                            <p class="text-yellow font-bold text-xl">Jednorázové vstupy i permice</p>
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
            <div class="px-8 md:px-0">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {#each galleryImages as image, index}
                        <button 
                            class="focus:outline-none group"
                            on:click={() => openGallery(index)}
                        >
                        <img 
                            src={image.thumb} 
                            srcset={`${image.small} 640w, ${image.medium} 1024w, ${image.large} 1280w`}
                            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
                            alt={image.alt} 
                            class="w-full h-48 object-cover rounded transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                            loading="lazy"
                        />
                        </button>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        {#if showGallery}
            <div class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                <button 
                    class="absolute top-4 right-4 text-white text-3xl hover:text-yellow transition-colors" 
                    on:click={closeGallery}
                >
                    &times;
                </button>
                
                <button 
                    class="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-yellow rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow_hover z-10" 
                    on:click={prevImage}
                >
                    ‹
                </button>

                <div class="relative max-h-[90vh] max-w-[90vw]">
                    <img 
                        src={galleryImages[currentImage].full} 
                        srcset={`${galleryImages[currentImage].small} 640w, ${galleryImages[currentImage].medium} 1024w, ${galleryImages[currentImage].large} 1280w, ${galleryImages[currentImage].full} 1920w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 80vw, 70vw"
                        alt={`${galleryImages[currentImage].alt} (${currentImage + 1} of ${galleryImages.length})`} 
                        class="max-h-[90vh] max-w-full object-contain"
                    />
                    <div class="text-white text-center mt-2">
                        {currentImage + 1} / {galleryImages.length}
                    </div>
                </div>

                <button 
                    class="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-yellow rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow_hover z-10" 
                    on:click={nextImage}
                >
                    ›
                </button>
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