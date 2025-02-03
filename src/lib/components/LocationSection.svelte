<!-- src/components/LocationSection.svelte -->
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
