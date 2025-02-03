<!-- src/components/ReviewsCarousel.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import KeenSlider, { type KeenSliderInstance } from 'keen-slider';
    import 'keen-slider/keen-slider.min.css';

    export let reviews: Array<{
        name: string,
        text: string,
        rating: number
    }>;

    let sliderContainer: HTMLDivElement;
    let slider: KeenSliderInstance;
    let autoSlideTimer: ReturnType<typeof setInterval>;

    function startAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(() => {
        if (slider) slider.next();
        }, 10000);
    }

    onMount(() => {
    slider = new KeenSlider(sliderContainer, {
    loop: true,
    duration: 2000, // This property is allowed at runtime, but not in the type definitions
    slides: {
        perView: 1,
        spacing: 15
    },
    breakpoints: {
        "(min-width: 768px)": {
        slides: {
            perView: 2
        }
        },
        "(min-width: 1024px)": {
        slides: {
            perView: 3
        }
        }
    },
    dragStart() {
        clearInterval(autoSlideTimer);
    },
    dragEnd() {
        startAutoSlide();
    }
  } as any); // Casting the options as any bypasses the type check
    startAutoSlide();

    return () => {
    clearInterval(autoSlideTimer);
    slider.destroy();
    };
});
</script>

<section class="bg-black py-12" id="reviews">
    <div class="container mx-auto px-4 text-white w-full lg:w-5/6">
        <h2 class="text-3xl font-bold text-center mb-8">What Our Members Say</h2>
        <div bind:this={sliderContainer} class="keen-slider">
        {#each reviews as review (review.name)}
            <div class="keen-slider__slide">
            <div class="bg-grey shadow-lg rounded-lg p-6">
                <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-yellow text-black rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                </div>
                <div class="ml-4">
                    <h3 class="font-bold">{review.name}</h3>
                    <p class="text-sm">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </p>
                </div>
                </div>
                <p>{review.text}</p>
            </div>
            </div>
        {/each}
        </div>
    </div>
</section>