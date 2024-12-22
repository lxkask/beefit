<script lang="ts">
    import banner from '../lib/images/banner.jpg';
    import equipment from '../lib/images/equipment.png';
    import equipment2 from '../lib/images/equipment2.jpg';
    import equipment3 from '../lib/images/equipment3.jpg';
    import equipment4 from '../lib/images/equipment4.jpg';
    import equipment5 from '../lib/images/equipment5.jpg';
    import clock from '../lib/images/clock-icon.svg';
    import person from '../lib/images/person-icon.svg';
    import pricetag from '../lib/images/pricetag-icon.svg';
    import { createDialog, melt } from '@melt-ui/svelte';

    const {
        elements: { trigger, portalled, overlay, content, title, description, close },
        states: { open }
    } = createDialog();

    let currentIndex = 0;
    let autoSlideTimer: number | null = null;
    const slides = [
        {
            image: equipment,
            title: 'Rodinné prostředí',
            description: 'U nás se nemusíte bát, že se ztratíte v davu. Každý je u nás vítán, ať už začínáte, nebo cvičíte pravidelně.'
        },
        {
            image: equipment2,
            title: 'Členství bez závazků a bez poplatků',
            description: 'Transparentnost je pro nás zásadní, proto u nás nenajdete žádné zbytečné poplatky za sprchu; půjčení klíčku ke skříňkám, aj.'
        },
        {
            image: equipment3,
            title: 'Profesionální trenéři a individuální přístup',
            description: 'Náš tým zkušených trenérů vám pomůže dosáhnout vašich cílů, ať už je to zlepšení kondice, posílení těla nebo regenerace po zranění.'
        },
        {
            image: equipment4,
            title: 'Moderní vybavení a příjemné prostředí',
            description: 'Prostor a vybavení, které vás budou bavit. Ať už máte rádi kardio, posilování nebo funkční trénink, u nás najdete všechno, co potřebujete, a navíc ve stylovém, čistém a komfortním prostředí.'
        },
        {
            image: equipment5,
            title: 'Dostupné ceny',
            description: 'Naším cílem je, aby kvalitní fitness bylo dostupné pro každého, proto u nás najdete ceny nižší než ve většině běžných fitness center.'
        }
    ];

    // Start the automatic slide change
    const startAutoSlide = () => {
        autoSlideTimer = setInterval(() => {
            nextSlide();
        }, 10000); // 7 seconds interval for auto-slide
    };

    // Clear the existing timer when manual navigation is used
    const stopAutoSlide = () => {
    if (autoSlideTimer !== null) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null; // Optional: reset the timer to null after clearing
    }
};

    // Manual navigation functions
    const prevSlide = () => {
        stopAutoSlide(); // Clear timer on manual change
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        startAutoSlide(); // Restart the auto-slide after a short delay
    };

    const nextSlide = () => {
        stopAutoSlide(); // Clear timer on manual change
        currentIndex = (currentIndex + 1) % slides.length;
        startAutoSlide(); // Restart the auto-slide after a short delay
    };

    const updateSlide = (index: number) => {
        stopAutoSlide(); // Clear timer on manual change
        currentIndex = index;
        startAutoSlide(); // Restart the auto-slide after a short delay
    };

    // Start the automatic sliding when the component is mounted
    import { onMount } from 'svelte';

    onMount(() => {
        startAutoSlide();
    });
</script>

<main>
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-[80vh] w-full flex items-end" style="background-image: url({banner});">
        <div class="container mx-auto py-32 px-32">
            <h1 class="text-5xl font-bold text-white font-heading">Fitness BeeFIT</h1>
            <p class="text-xl mt-4 text-white font-body w-full md:w-2/5">
                Vítejte v <span class="text-yellow">BeeFit</span>! Od roku 2015 pomáháme dosáhnout fitness cílů v 
                <span class="text-yellow">přátelské</span> atmosféře s <span class="text-yellow">moderním</span> vybavením, 
                <span class="text-yellow">skupinovými</span> lekcemi a <span class="text-yellow">certifikovanými</span> trenéry.
            </p>
        </div>
    </section>

    <!-- Floating Button Section -->
    <section class="relative z-10">
        <div class="flex justify-center shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
            <!-- Button with Icon for Trainers -->
=======
            <a href="/treneri" class="btn flex justify-center items-center rounded-l-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
                <img src="{person}" alt="Person Icon" class="w-8 h-8" />
                <span>Trenéři</span>
            </a>

            <!-- Button with Icon for Opening Hours -->
            <button 
                class="btn flex justify-center items-center bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover" 
                use:melt={$trigger}>
                <img src="{clock}" alt="Clock Icon" class="w-7 h-7" />
                <span>Otevírací doba</span>
            </button>

            <!-- Button with Icon for Pricing -->
            <a href="/cenik" class="btn flex justify-center items-center rounded-r-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
                <img src="{pricetag}" alt="Price Tag Icon" class="w-7 h-7" />
                <span>Ceník</span>
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
    <section class="equipment py-28 bg-black">
        <div class="relative">
            <!-- Slideshow Container -->
            <div class="relative overflow-hidden w-full mx-auto max-w-screen-lg">
                <div 
                    class="flex transition-transform duration-500 ease-out" 
                    style="transform: translateX(-{currentIndex * 100}%)"
                >
                    {#each slides as slide, index}
                        <div class="flex-shrink-0 w-full">
                            <div class="flex items-center justify-between p-6 bg-black text-white px-16 mb-10 gap-8">
                                <!-- Image Container -->
                                <div class="relative w-full h-96">
                                    <img src={slide.image} alt={slide.title} class="absolute inset-0 w-full h-full object-cover rounded" />
                                </div>

                                <!-- Text Content -->
                                <div class="ml-4 flex flex-col justify-center w-2/3">
                                    <h2 class="text-3xl font-bold">{slide.title}</h2>
                                    <p class="mt-2 text-xl">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Arrow Buttons -->
                <button 
                    class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-yellow rounded-3xl px-2 py-6 hover:bg-yellow_hover z-10"
                    on:click={prevSlide}
                    aria-label="Previous slide"
                >
                    <!-- Left Arrow Icon (SVG) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                <button 
                    class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-yellow rounded-3xl px-2 py-6 hover:bg-yellow_hover z-10"
                    on:click={nextSlide}
                    aria-label="Next slide"
                >
                    <!-- Right Arrow Icon (SVG) -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Navigation Dots -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {#each slides as _, index}
                        <button
                            class="w-2.5 h-2.5 bg-white rounded-full cursor-pointer focus:outline-none"
                            class:bg-yellow={index === currentIndex}
                            on:click={() => updateSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                        ></button>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Location Section -->
    <section class="location py-16 bg-grey">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Address -->
            <div class="mx-auto flex flex-col justify-center">
                <h3 class="text-3xl text-white font-heading font-bold">Na Hřebenech II 1718/10</h3>
                <p class="mt-4 text-white font-body text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mt-4 text-white font-body text-xl">
                    Na Hřebenech II 1718/10<br>
                    Nusle - Praha 4
                </p>
            </div>

            <!-- Map -->
            <div class="flex justify-center mt-8 md:mt-0">
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
