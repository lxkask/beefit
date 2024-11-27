<script>
    import banner from '../lib/images/banner.jpg';
    import equipment from '../lib/images/equipment.png';
</script>
<main>
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-[80vh] w-full flex items-end" style="background-image: url({banner});">
        <div class="container mx-auto py-32">
            <h1 class="text-5xl font-bold text-white font-heading">Fitness BeeFIT</h1>
            <p class="text-xl mt-4 text-white font-body w-1/3">
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
        <div class="flex justify-center space-x-4 bg-yellow p-6 rounded-lg shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2">
            <a href="/trainers" class="btn bg-yellow text-dark font-body px-6 py-2">Trenéři</a>
            <a href="/opening-hours" class="btn bg-yellow text-dark font-body px-6 py-2">Otevírací doba</a>
            <a href="/pricing" class="btn bg-yellow text-dark font-body px-6 py-2">Ceník</a>
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
    <section class="location py-16 bg-black">
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

