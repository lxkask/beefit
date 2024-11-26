<script>
    import banner from '../lib/images/banner.jpg';
</script>
<main>
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-screen" style="background-image: url({banner})">
        <div class="container mx-auto text-center py-32">
            <h1 class="text-4xl font-bold">Fitness BeeFIT</h1>
            <p class="text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span class="text-highlight">Aliquam erat volutpat.</span>
            </p>
            <div class="flex justify-center space-x-4 mt-8">
                <a href="/trainers" class="btn bg-highlight text-dark px-6 py-2">Trenéři</a>
                <a href="/opening-hours" class="btn bg-highlight text-dark px-6 py-2">Otevírací doba</a>
                <a href="/pricing" class="btn bg-highlight text-dark px-6 py-2">Ceník</a>
            </div>
        </div>
    </section>

    <!-- Equipment Section -->
    <section class="equipment py-16">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img src="/path/to/equipment.jpg" alt="Gym equipment" class="rounded">
            </div>
            <div>
            <h2 class="text-3xl font-bold">Posilovna s nejnovějším vybavením</h2>
            <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <span class="text-highlight">Aliquam erat volutpat.</span>
            </p>
            <a href="/join" class="btn bg-highlight text-dark mt-8 px-6 py-2 inline-block">Přidejte se</a>
            </div>
        </div>
    </section>

    <!-- Location Section -->
    <section class="location py-16 bg-dark-light">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Address -->
            <div>
                <h3 class="text-2xl font-bold">Na Hřebenech II 1718/10</h3>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="mt-4">
                    Na Hřebenech II 1718/10<br>
                    Nusle - Praha 4
                </p>
            </div>
            <!-- Map -->
            <div>
                <iframe
                    src="https://maps.google.com/maps?q=BeeFIT&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="w-full h-64 rounded"
                    frameborder="0"
                    title="BeeFIT Lokace"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        </section>
</main>

