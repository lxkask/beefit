<script>
    import phone from '../../lib/images/phone-icon.svg';
    import clock from '../../lib/images/clock-icon.svg';
    import email from '../../lib/images/email-icon.svg';
    import map from '../../lib/images/map-marker-icon.svg';
    import gymEntrance from '../../lib/images/gym-entrance.jpg';
</script>

<main>
    <section class="bg-black text-white py-12">
        <div class="container mx-auto text-center mb-12">
            <h2 class="text-3xl font-bold mb-4 font-heading">Kontakt</h2>
        </div>

        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 sm:text-left text-center w-3/4">
            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
                <img src={phone} alt="Telefon" class="w-8 h-8" />
                <div>
                    <h3 class="text-yellow font-bold">Telefon</h3>
                    <p>733 60 60 02</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
                <img src={email} alt="Email" class="w-8 h-8" />
                <div>
                    <h3 class="text-yellow font-bold">Email</h3>
                    <p>info@beefit.cz</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
                <img src={map} alt="Adresa" class="w-8 h-8 filter invert" />
                <div>
                    <h3 class="text-yellow font-bold">Adresa</h3>
                    <p>
                        Na Hřebenech II 1718/10<br />
                        140 00 Praha 4 - Nusle
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-0 sm:space-y-0">
                <img src={clock} alt="Otevírací doba" class="w-8 h-8 filter invert" />
                <div class="sm:pl-3">
                    <h3 class="text-yellow font-bold">Otevírací doba</h3>
                    <p>
                        Pondělí - Pátek 7:00 - 22:00<br />
                        Sobota 15:00 - 21:00<br />
                        Neděle 15:00 - 22:00
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- How to Find Us Section -->
    <section class="bg-grey text-white py-12">
        <div class="container mx-auto px-6 lg:w-2/3">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold font-heading">Jak nás najdete</h2>
            </div>

            <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
                <div class="lg:w-1/2 text-left pr-10">
                    <p>Fitness se nachází cca 5 minut chůze od metra Pražského povstání / Pankrác.</p>
                </div>
                
                <div class="lg:w-1/2">
                    <img src={gymEntrance} alt="Vstup do fitness centra" class="w-full h-64 rounded shadow-lg object-cover" />
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="bg-black text-white py-12">
        <div class="container mx-auto px-6 lg:w-2/3">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold font-heading">Mapa</h2>
            </div>
            <div class="lg:w-full">
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
