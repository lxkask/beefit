<script>
    import phone from '../../lib/images/phone-icon.svg';
    import instagram from '../../lib/images/instagram-icon-white.svg';
    import user from '../../lib/images/user-icon-white.svg';
</script>

<main>
    <section class="pt-10 bg-black text-white">
        <!-- Nadpis sekce -->
        <div class="container mx-auto text-center mb-16">
            <h2 class="text-3xl font-bold font-heading mb-5">Trenéři</h2>
            <p class="text-lg text-white max-w-4xl mx-auto px-4 md:px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </section>
    <section class="pb-10 bg-grey text-white">
        <!-- Layout jednotlivých trenérů -->
        <div class="container mx-auto space-y-12 md:space-y-24 px-4 bg-grey py-12">
            <!-- První trenér -->
            <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
                <!-- Obrázek trenéra vlevo -->
                <div class="w-64 h-64 bg-gray-700 flex justify-center items-center mb-8 md:mb-0">
                    <span class="text-6xl font-bold text-gray-500">?</span>
                </div>

                <!-- Informace trenéra vpravo -->
                <div class="flex flex-col justify-center text-center md:text-left">
                    <h3 class="text-2xl font-bold text-yellow-500 mb-4">Trenér</h3>
                    <ul class="space-y-4 text-white mx-auto max-w-xs md:mx-0 text-xl">
                        <li class="flex items-center">
                            <img src={user} alt="User icon" class="mr-2 h-6 w-6" />
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
                    <button class="mt-6 bg-yellow hover:bg-yellow_hover text-black font-bold py-2 px-6 rounded-lg w-auto mx-auto md:mx-0">
                        Zjistit více
                    </button>
                </div>
            </div>

            <!-- Žlutá čára mezi trenéry -->
            <div class="block md:hidden mx-auto w-1/2 h-1 bg-yellow"></div>

            <!-- Druhý trenér -->
            <div class="flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-32">
                <!-- Informace trenéra vlevo -->
                <div class="flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
                    <h3 class="text-2xl font-bold text-yellow-500 mb-4">Trenér</h3>
                    <ul class="space-y-4 text-white mx-auto max-w-xs md:mx-0 text-xl">
                        <li class="flex items-center">
                            <img src={user} alt="User icon" class="mr-2 h-5 w-5" />
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
                    <button class="mt-6 bg-yellow hover:bg-yellow_hover text-black font-bold py-2 px-6 rounded-lg w-auto mx-auto md:mx-0">
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