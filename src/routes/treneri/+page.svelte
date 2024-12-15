<script>
    import phone from '../../lib/images/phone-icon.svg';
    import instagram from '../../lib/images/instagram-icon.svg';
    import person from '../../lib/images/person-icon.svg';
</script>

<main>
    <section class="pt-10 pb-20 bg-black text-white">
        <!-- Nadpis sekce -->
        <div class="container mx-auto text-center mb-16">
            <h2 class="text-3xl font-bold font-heading mb-5">Trenéři</h2>
            <p class="text-lg text-gray-400 max-w-4xl mx-auto px-4 md:px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <!-- Layout jednotlivých trenérů -->
        <div class="container mx-auto space-y-24 px-4">
            <!-- První trenér -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-32"> <!-- Vycentrováno a malá mezera -->
                <!-- Obrázek trenéra vlevo -->
                <div class="w-64 h-64 bg-gray-700 flex justify-center items-center mb-4 md:mb-0">
                    <span class="text-6xl font-bold text-gray-500">?</span>
                </div>

                <!-- Informace trenéra vpravo -->
                <div class="flex flex-col justify-center text-center">
                    <h3 class="text-2xl font-bold text-yellow-500 mb-4">Trenér</h3>
                    <ul class="space-y-2 text-gray-300 mx-auto max-w-xs">
                        <li class="flex items-center">
                            <img src={person} alt="Person icon" class="mr-2 h-5 w-5" />
                            Osobní trenér
                        </li>
                        <li class="flex items-center">
                            <img src={instagram} alt="Instagram icon" class="mr-2 h-5 w-5" />
                            @osobnitrener
                        </li>
                        <li class="flex items-center">
                            <img src={phone} alt="Phone icon" class="mr-2 h-5 w-5" />
                            +420 777 777 777
                        </li>
                    </ul>
                    <button class="mt-6 bg-yellow text-white font-bold py-2 px-6 rounded-lg  w-auto mx-auto">
                        Zjistit více
                    </button>
                </div>
            </div>
            
            <!-- Druhý trenér (text vlevo, obrázek vpravo) -->
            <div class="flex flex-col-reverse md:flex-row justify-center items-center gap-32"> <!-- Vycentrováno a malá mezera -->
                <!-- Informace trenéra vlevo -->
                <div class="flex flex-col justify-center text-center mb-4 md:mb-0">
                    <h3 class="text-2xl font-bold text-yellow-500 mb-4">Trenér</h3>
                    <ul class="space-y-2 text-gray-300 mx-auto max-w-xs">
                        <li class="flex items-center">
                            <img src={person} alt="Person icon" class="mr-2 h-5 w-5" />
                            Osobní trenér
                        </li>
                        <li class="flex items-center">
                            <img src={instagram} alt="Instagram icon" class="mr-2 h-5 w-5" />
                            @osobnitrener
                        </li>
                        <li class="flex items-center">
                            <img src={phone} alt="Phone icon" class="mr-2 h-5 w-5" />
                            +420 777 777 777
                        </li>
                    </ul>
                    <button class="mt-6 bg-yellow text-white font-bold py-2 px-6 rounded-lg  w-auto mx-auto">
                        Zjistit více
                    </button>
                </div>

                <!-- Obrázek trenéra vpravo -->
                <div class="w-64 h-64 bg-gray-700 flex justify-center items-center">
                    <span class="text-6xl font-bold text-gray-500">?</span>
                </div>
            </div>
        </div>
    </section>
</main>
















<style>

</style>