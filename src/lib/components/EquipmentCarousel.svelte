<script context="module" lang="ts">
    export interface Slide {
        image: string;
        title: string;
        altText: string;
        description: string;
    }
</script>

<script lang="ts">
    export let slides: Slide[];

    let currentIndex = 0;

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
    }

    function updateSlide(index: number) {
        currentIndex = index;
    }
</script>

<section class="equipment py-24 bg-grey">
    <div class="relative">
    <!-- Slideshow Container -->
    <div class="relative overflow-hidden w-full mx-auto max-w-screen-lg">
        <div 
            class="flex transition-transform duration-500 ease-out" 
            style="transform: translateX(-{currentIndex * 100}%)"
        >
        {#each slides as slide (slide.title)}
            <div class="flex-shrink-0 w-full flex flex-col lg:flex-row items-center gap-8 px-16 mb-10 bg-grey text-white">
                <!-- Image Container -->
                <div class="w-full lg:w-1/2 h-72 lg:h-96">
                <img src={slide.image} alt={slide.altText} class="w-full h-full object-cover rounded" />
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
                aria-label={`Slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
            ></button>
            {/each}
        </div>
        </div>
    </div>
</section>
