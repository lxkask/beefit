<script lang="ts">
    import equipment from '../lib/images/equipment.webp';
    import equipmentSmall from '../lib/images/equipment-small.webp';
    import equipmentMedium from '../lib/images/equipment-medium.webp';
    import equipmentLarge from '../lib/images/equipment-large.webp';

    import equipment2 from '../lib/images/equipment2.webp';
    import equipment2Small from '../lib/images/equipment2-small.webp';
    import equipment2Medium from '../lib/images/equipment2-medium.webp';
    import equipment2Large from '../lib/images/equipment2-large.webp';

    import equipment3 from '../lib/images/equipment3.webp';
    import equipment3Small from '../lib/images/equipment3-small.webp';
    import equipment3Medium from '../lib/images/equipment3-medium.webp';
    import equipment3Large from '../lib/images/equipment3-large.webp';

    import equipment4 from '../lib/images/equipment4.webp';
    import equipment4Small from '../lib/images/equipment4-small.webp';
    import equipment4Medium from '../lib/images/equipment4-medium.webp';
    import equipment4Large from '../lib/images/equipment4-large.webp';

    import equipment5 from '../lib/images/equipment5.webp';
    import equipment5Small from '../lib/images/equipment5-small.webp';
    import equipment5Medium from '../lib/images/equipment5-medium.webp';
    import equipment5Large from '../lib/images/equipment5-large.webp';

    import clock from '../lib/images/clock-icon.svg';
    import person from '../lib/images/person-icon.svg';
    import pricetag from '../lib/images/pricetag-icon.svg';
    import { createDialog, melt } from '@melt-ui/svelte';
    import bannerVideo from '../lib/videos/bannerVid.webm';
    import ReviewsCarousel from '../lib/components/ReviewsCarousel.svelte';

    import { onMount } from 'svelte';

    const {
        elements: { trigger, portalled, overlay, content, title, description, close },
        states: { open }
    } = createDialog();

    let currentIndex = 0;
    let autoSlideTimer: number | null = null;

    const slides = [
        {
            imageFull: equipment,
            imageLarge: equipmentLarge,
            imageMedium: equipmentMedium,
            imageSmall: equipmentSmall,
            title: 'Rodinné prostředí',
            altText: 'First equipment photo',
            description: 'U nás se nemusíte bát, že se ztratíte v davu...'
        },
        {
            imageFull: equipment2,
            imageLarge: equipment2Large,
            imageMedium: equipment2Medium,
            imageSmall: equipment2Small,
            title: 'Rodinné prostředí',
            altText: 'First equipment photo',
            description: 'U nás se nemusíte bát, že se ztratíte v davu...'
        },
        {
            imageFull: equipment3,
            imageLarge: equipment3Large,
            imageMedium: equipment3Medium,
            imageSmall: equipment3Small,
            title: 'Rodinné prostředí',
            altText: 'First equipment photo',
            description: 'U nás se nemusíte bát, že se ztratíte v davu...'
        },
        {
            imageFull: equipment4,
            imageLarge: equipment4Large,
            imageMedium: equipment4Medium,
            imageSmall: equipment4Small,
            title: 'Rodinné prostředí',
            altText: 'First equipment photo',
            description: 'U nás se nemusíte bát, že se ztratíte v davu...'
        },
        {
            imageFull: equipment5,
            imageLarge: equipment5Large,
            imageMedium: equipment5Medium,
            imageSmall: equipment5Small,
            title: 'Rodinné prostředí',
            altText: 'First equipment photo',
            description: 'U nás se nemusíte bát, že se ztratíte v davu...'
        }
    ];


    const startAutoSlide = () => {
        autoSlideTimer = window.setInterval(() => {
            nextSlide();
        }, 10000); // 10 seconds interval for auto-slide
    };

    const stopAutoSlide = () => {
        if (autoSlideTimer !== null) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        console.log("Previous Slide - Current Index:", currentIndex); // Debugging
        stopAutoSlide();
        startAutoSlide();
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        console.log("Next Slide - Current Index:", currentIndex); // Debugging
        stopAutoSlide();
        startAutoSlide();
    };

    const updateSlide = (index) => {
        stopAutoSlide();
        currentIndex = index;
        console.log("Update Slide - Current Index:", currentIndex); // Debugging
        startAutoSlide();
};

    onMount(() => {
        startAutoSlide();
    }); 
</script>

<main>
    <!-- Hero Section -->
    <section class="hero relative md:h-[75vh] h-[60vh] w-full flex md:items-end items-end">
        <!-- Video Background -->
        <video autoplay muted loop playsinline disablePictureInPicture class="absolute top-0 left-0 w-full h-full object-cover">
            <source src="{bannerVideo}" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    
        <!-- Black Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
        <!-- Text Content -->
        <div class="container relative z-10 mx-auto md:py-20 md:px-16 py-16 px-16">
            <div class="inline-block bg-black bg-opacity-60 p-4 rounded-lg md:w-1/2">
                <h1 class="md:text-5xl text-3xl font-bold text-white font-heading">Fitness BeeFIT</h1>
                <p class="md:text-xl text-lg mt-4 text-white font-body">
                    Vítejte v BeeFit! Od roku 2015 pomáháme dosáhnout fitness cílů v přátelské atmosféře s moderním vybavením, 
                    skupinovými lekcemi a certifikovanými trenéry.
                </p>
            </div>
        </div>
    </section>    

    <!-- Floating Button Section -->
    <section class="relative z-10">
        <div class="flex justify-center shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2 md:w-full w-5/6 max-w-xl">
            <!-- Button with Icon for Trainers -->
            <a href="/treneri" class="btn flex justify-center items-center rounded-l-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
                <img src="{person}" alt="Person Icon" class="md:w-8 md:h-8 w-6 h-6" />
                <span class="md:text-lg text-sm">Trenéři</span>
            </a>

            <!-- Button with Icon for Opening Hours -->
            <button 
                class="btn flex justify-center items-center bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover" 
                use:melt={$trigger}>
                <img src="{clock}" alt="Clock Icon" class="md:w-7 md:h-7 w-5 h-5" />
                <span class="md:text-lg text-sm">Otevírací doba</span>
            </button>

            <!-- Button with Icon for Pricing -->
            <a href="/cenik" class="btn flex justify-center items-center rounded-r-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
                <img src="{pricetag}" alt="Price Tag Icon" class="md:w-7 md:h-7 w-6 h-6" />
                <span class="md:text-lg text-sm">Ceník</span>
            </a>
        </div>
    </section>

    <!-- Melt UI Dialog -->
    {#if $open} <!-- Dialog opens only when triggered -->
        <div use:melt={$portalled}>
            <!-- Overlay -->
            <div use:melt={$overlay} class="fixed inset-0 bg-black bg-opacity-50"></div>
            
            <!-- Dialog Content -->
            <div use:melt={$content} class="fixed inset-0 flex items-center justify-center animate-slide-up z-10">
                <div class="bg-black rounded-xl shadow-lg p-6 w-11/12 max-w-md">
                    <!-- Dialog Title -->
                    <h2 use:melt={$title} class="text-xl font-bold text-center mb-4 text-white">Otevírací doba</h2>
                    
                    <!-- Dialog Description -->
                    <p use:melt={$description} class="text-center text-white">
                        Pondělí - Pátek: 7:00 - 22:00<br />
                        Sobota: 15:00 - 21:00<br />
                        Neděle: 15:00 - 22:00
                    </p>

                    <!-- Close Button -->
                    <div class="flex justify-center">
                        <button 
                            use:melt={$close} 
                            class="mt-6 w-1/2 bg-yellow text-dark font-body py-2 rounded hover:bg-yellow_hover"
                        >
                            Zavřít
                        </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
    <!-- Equipment Section -->
    <section class="equipment py-24 bg-grey">
        <div class="relative">
            <!-- Slideshow Container -->
            <div class="relative overflow-hidden w-full mx-auto max-w-screen-lg">
                <div 
                    class="flex transition-transform duration-500 ease-out" 
                    style="transform: translateX(-{currentIndex * 100}%); width: {slides.length * 100}%;"
                >
                    {#each slides as slide, index}
                        <div class="flex-shrink-0 w-full flex flex-col lg:flex-row items-center gap-8 px-16 mb-10 bg-grey text-white" style="width: {100 / slides.length}%;">
                            <!-- Image Container -->
                            <div class="w-full lg:w-1/2 h-72 lg:h-96">
                                <img 
                                    src="{slide.imageFull}" 
                                    srcset="{slide.imageSmall} 640w, {slide.imageMedium} 1024w, {slide.imageLarge} 1280w, {slide.imageFull} 1920w"
                                    sizes="(max-width: 640px) 640w, (max-width: 1024px) 1024w, (max-width: 1280px) 1280w, 1920w"
                                    alt="{slide.altText}" 
                                    class="w-full h-full object-cover rounded" 
                                />
                            </div>

                            <!-- Text Content -->
                            <div class="w-full lg:w-1/2 flex flex-col justify-center">
                                <h2 class="text-2xl lg:text-3xl font-bold">{slide.title}</h2>
                                <p class="mt-2 text-lg lg:text-xl">{slide.description}</p>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Arrow Buttons -->
                <button 
                    class="absolute top-1/2 md:left-0 left-2 transform -translate-y-1/2 text-black bg-yellow rounded-3xl px-2 py-6 hover:bg-yellow_hover z-10"
                    on:click={prevSlide}
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    class="absolute top-1/2 md:right-0 right-2 transform -translate-y-1/2 text-black bg-yellow rounded-3xl px-2 py-6 hover:bg-yellow_hover z-10"
                    on:click={nextSlide}
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Navigation Dots -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {#each slides as _, index}
                        <button
                            class="w-5 h-5 bg-white rounded-full cursor-pointer focus:outline-none"
                            class:bg-yellow={index === currentIndex}
                            on:click={() => updateSlide(index)}
                            aria-label="Slide {index + 1}"
                            aria-current={index === currentIndex ? 'true' : 'false'}
                        ></button>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <ReviewsCarousel />

    <!-- Location Section -->
    <section class="py-16 md:pl-6 bg-grey">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Address -->
            <div class="mx-auto flex flex-col justify-center px-10 md:px-0">
                <h3 class="text-3xl text-white font-heading font-bold">Na Hřebenech II 1718/10</h3>
                <p class="mt-4 text-white font-body text-xl">
                    BeeFIT se nachází 12 minut pěšky<br> 
                    od stanice metra Pražského povstání
                </p>
                <p class="mt-4 text-white font-body text-xl">
                    Na Hřebenech II 1718/10<br>
                    Nusle - Praha 4
                </p>
            </div>

            <!-- Map -->
            <div class="flex justify-center mt-8 md:mt-0 px-10 md:px-0">
                <iframe
                    src="https://maps.google.com/maps?q=BeeFIT&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="w-full md:w-2/3 h-72 md:h-72 rounded"
                    frameborder="0"
                    title="BeeFIT Lokace"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </section>
</main>
