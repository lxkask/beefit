<script>
    import gym1 from '../../lib/images/gym1.jpg';
    import gym2 from '../../lib/images/gym2.jpg';
    import lounge from '../../lib/images/lounge.jpg';
    import locker from '../../lib/images/locker.jpg';
    import area from '../../lib/images/area-icon.svg';
    import parking from '../../lib/images/parking-icon.svg';
</script>

<main>
    <!-- Gym Info Section -->
    <section class="pt-5 pb-20 bg-black text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold font-heading mb-10">O BeeFIT</h2>
            <div class="flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Info Item 1 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Area Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Rozloha</p>
                            <p class="text-yellow font-bold text-xl">1500 m²</p>
                        </div>
                    </div>
        
                    <!-- Info Item 2 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={parking} alt="Parking Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Parkování</p>
                            <p class="text-yellow font-bold text-xl">V okolí</p>
                        </div>
                    </div>
        
                    <!-- Info Item 3 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Vybavení Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Vybavení</p>
                            <p class="text-yellow font-bold text-xl">Moderní stroje</p>
                        </div>
                    </div>
        
                    <!-- Info Item 4 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Relaxace Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Relaxace</p>
                            <p class="text-yellow font-bold text-xl">Wellness zóna</p>
                        </div>
                    </div>
        
                    <!-- Info Item 5 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Otevírací doba Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Otevírací doba</p>
                            <p class="text-yellow font-bold text-xl">6:00 - 22:00</p>
                        </div>
                    </div>
        
                    <!-- Info Item 6 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Trenéři Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Trenéři</p>
                            <p class="text-yellow font-bold text-xl">Profesionální tým</p>
                        </div>
                    </div>
        
                    <!-- Info Item 7 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Ceník Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Ceník</p>
                            <p class="text-yellow font-bold text-xl">Přehledné ceny</p>
                        </div>
                    </div>
        
                    <!-- Info Item 8 -->
                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="bg-yellow rounded-full p-4 flex items-center justify-center w-16 h-16">
                            <img src={area} alt="Lokalita Icon" class="w-8 h-8" />
                        </div>
                        <div class="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left font-bold text-lg">
                            <p>Lokalita</p>
                            <p class="text-yellow font-bold text-xl">Snadná dostupnost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Equipment Section -->
    <section class="py-20 bg-grey">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold font-heading mb-10 text-white">Vybavení</h2>
            <div class="flex justify-center px-8 md:px-0">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <img src={gym1} alt="Gym Equipment 1" class="rounded" />
                    <img src={gym2} alt="Gym Equipment 2" class="rounded" />
                    <img src={lounge} alt="Lounge Area" class="rounded" />
                    <img src={locker} alt="Locker Room" class="rounded" />
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    :global(img) {
        max-width: 100%;
        height: auto;
    }
</style>