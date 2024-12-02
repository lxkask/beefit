<script>
    import banner from '../lib/images/banner.jpg';
    import equipment from '../lib/images/equipment.png';
    import clock from '../lib/images/clock.svg';
    import person from '../lib/images/person.svg';
    import price_tag from '../lib/images/price_tag.svg';
</script>
<main>
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-[80vh] w-full flex items-end" style="background-image: url({banner});">
        <div class="container mx-auto py-32 px-32">
            <h1 class="text-5xl font-bold text-white font-heading">Fitness BeeFIT</h1>
            <p class="text-xl mt-4 text-white font-body w-full md:w-2/5">
                Lorem ipsum dolor sit 
                <span class="text-yellow">amet</span>,
                consectetuer adipiscing elit. Nullam eget  nisl. Aliquam erat 
                <span class="text-yellow">volutpat</span>. 
                Integer 
                <span class="text-yellow">vulputate</span> 
                sem a nibh rutrum consequat.
            </p>
        </div>
    </section>
    <!-- Floating Button Section -->
    <section class="relative z-10">
        <div class="flex justify-center shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
          <!-- Button with Icon for Trainers -->
          <a href="/trainers" class="btn flex justify-center items-center rounded-l-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 border-r-white border-r-[1px] hover:bg-yellow_hover">
            <img src="{person}" alt="Person Icon" class="w-8 h-8" />
            <span>Trenéři</span>
          </a>
      
          <!-- Button with Icon for Opening Hours -->
          <a href="/opening-hours" class="btn flex justify-center items-center bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
            <img src="{clock}" alt="Clock Icon" class="w-7 h-7" />
            <span>Otevírací doba</span>
          </a>
      
          <!-- Button with Icon for Pricing -->
          <a href="/pricing" class="btn flex justify-center items-center rounded-r-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 border-l-white border-l-[1px] hover:bg-yellow_hover">
            <img src="{price_tag}" alt="Price Tag Icon" class="w-7 h-7" />
            <span>Ceník</span>
          </a>
        </div>
    </section>
    <!-- Equipment Section -->
    <section class="equipment py-28 bg-black">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="mx-auto">
                <img src="{equipment}" alt="Gym equipment" class="rounded">
            </div>
            <div class="flex flex-col justify-center px-16">
                <h2 class="text-3xl font-bold font-heading text-white w-1/2">Posilovna s nejnovějším vybavením</h2>
                <p class="text-xl mt-4 text-white font-body w-1/2">
                    Lorem ipsum dolor sit 
                    <span class="text-yellow">amet</span>,
                    consectetuer adipiscing elit. Nullam eget  nisl. Aliquam erat 
                    <span class="text-yellow">volutpat</span>. 
                    Integer 
                    <span class="text-yellow">vulputate</span> 
                    sem a nibh rutrum consequat.
                </p>
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
            <div>
                <iframe
                    src="https://maps.google.com/maps?q=BeeFIT&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="w-2/3 h-72 rounded"
                    frameborder="0"
                    title="BeeFIT Lokace"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        </section>
</main>

