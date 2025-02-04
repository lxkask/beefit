<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import KeenSlider from 'keen-slider';
    
    export let reviews = [
      { name: "Petr Novák", rating: 5, text: "Skvělé fitko s moderním vybavením!" },
      { name: "Jana Dvořáková", rating: 4, text: "Profesionální trenéři a skvělá atmosféra." },
      { name: "Karel Malý", rating: 5, text: "Velmi čisté a přátelské prostředí." },
      { name: "Lucie Benešová", rating: 5, text: "Doporučuji všem, kdo hledají kvalitní posilovnu." },
      { name: "Marek Svoboda", rating: 4, text: "Skvělá lokalita a moderní stroje!" },
      { name: "Eva Králová", rating: 5, text: "Atmosféra v tomto fitku je nepřekonatelná!" }
    ];
  
    let sliderContainer;
    let slider;
    let autoSlideTimer;
  
    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(() => {
        slider?.next();
      }, 3000);
    }
  
    function stopAutoSlide() {
      clearInterval(autoSlideTimer);
    }
  
    onMount(() => {
        slider = new KeenSlider(sliderContainer, {
            loop: true,
            slides: {
            perView: 3,
            spacing: 15,
            },
            breakpoints: {
            '(max-width: 1024px)': {
                slides: {
                perView: 2,
                },
            },
            '(max-width: 640px)': {
                slides: {
                perView: 1,
                },
            },
            },
            dragStarted: stopAutoSlide,
            slideChanged: startAutoSlide,
        });

        startAutoSlide();

        return () => {
            slider?.destroy();
            stopAutoSlide();
        };
        });
  
    onDestroy(() => {
      stopAutoSlide();
    });
</script>
  
<section class="bg-black py-12" id="reviews">
    <div class="container mx-auto px-4 text-white w-full lg:w-5/6">
      <h2 class="text-3xl font-bold text-center mb-8">Reference</h2>
      
      <div bind:this={sliderContainer} class="keen-slider">
        {#each reviews as review}
          <div class="keen-slider__slide bg-grey shadow-lg rounded-lg p-6">
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
        {/each}
      </div>
    </div>
</section>
  
<style>
    .keen-slider {
        display: flex;
        overflow: hidden;
    }

    .keen-slider__slide {
        min-width: calc(100% / 3 - 15px);
        box-sizing: border-box;
    }
  
    .bg-grey {
      background-color: #1f1f1f;
    }
  
    .bg-yellow {
      background-color: #FFC107;
    }
</style>