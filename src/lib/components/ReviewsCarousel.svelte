<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import KeenSlider from 'keen-slider';
    import 'keen-slider/keen-slider.min.css';
    
    export let reviews = [
      { name: "Kateřina M.", rating: 5, text: "Malé útulné fitness, kde se člověk dokáže docela zničit a odchází spokojený se svým výkonem." },
      { name: "Olga P.", rating: 5, text: "Byla jsem zde i s dcerou. Hezky jsme si v rodinném fitku zacvičily, bylo zde příjemné denní světlo a velmi dobře fungovala klimatizace. Zase obě přijdem." },
      { name: "Ondřej Z.", rating: 5, text: "Dobré vybavení, relativně menší počet lidí a hlavně možnost vstupů, která nenutí ke členství a neomezuje člověka jen k jednomu místu na cvičení." },
      { name: "Petr B.", rating: 5, text: "Menší, rodinné fitko, ve kterém ale nechybí nic podstatného. Činky, kardio zóna, příjemné recepční, skvělí trenéři :)" },
      { name: "Veronika B.", rating: 5, text: "Fitness centrum má příjemnou atmosféru a ochotný personál, který vždy rád poradí. Ráda se sem vracím díky pohodovému prostředí a všemu, co ke cvičení potřebuji :)" },
    ];
  
    let sliderContainer: HTMLElement;
    let slider;
  
    onMount(() => {
    slider = new KeenSlider(sliderContainer, {
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 1024px)': { slides: { perView: 2, spacing: 10 } },
        '(max-width: 640px)': { slides: { perView: 1, spacing: 5 } },
      },
    });

    // Continuous smooth scrolling using requestAnimationFrame
    let animationId;
    const speed = 0.1; // Adjust this for slower or faster scroll (lower is slower)

    const smoothScroll = () => {
      slider.moveToIdx(slider.track.details.abs + speed, true);
      animationId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll(); // Start the continuous scroll

    onDestroy(() => {
      cancelAnimationFrame(animationId); // Cleanup animation on component destroy
      if (slider) slider.destroy();
    });
  });
</script>
  
<section class="bg-black py-12 relative" id="reviews">
  <div class="container mx-auto px-4 text-white w-full lg:w-5/6 relative">
    <h2 class="text-3xl font-bold text-center mb-8">Reference</h2>

    <!-- Carousel with continuous scroll -->
    <div class="carousel-wrapper">
      <div class="carousel-track">
        {#each reviews.concat(reviews).map((review, index) => ({ ...review, uniqueId: index })) as review (review.uniqueId)}
          <div class="carousel-slide">
            <div class="bg-grey shadow-lg rounded-lg p-6 transition-opacity duration-500 h-60 max-w-sm">
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
              <p class="text-md overflow-hidden text-ellipsis">
                {review.text}
              </p>
            </div>
          </div>
        {/each}
      </div>

      <!-- Fading edges -->
      <div class="fade-left"></div>
      <div class="fade-right"></div>
    </div>
  </div>
</section>
  
<style>
  /* Container setup */
  .carousel-wrapper {
    position: relative;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    width: max-content;
    animation: scroll 25s linear infinite;
  }

  .carousel-slide {
    min-width: 300px; /* Adjust for slide width */
    margin-right: 15px;
  }

  /* Continuous scroll animation */
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  /* Fading effect on edges */
  .fade-left,
  .fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px; /* Adjust width for stronger fade */
    z-index: 2;
    pointer-events: none;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to right, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0));
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(18, 18, 18, 1), rgba(0, 0, 0, 0));
  }
</style>