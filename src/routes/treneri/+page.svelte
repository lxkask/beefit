<script lang="ts">
    import phone from '../../lib/images/phone-icon.svg';
    import instagram from '../../lib/images/instagram-icon-white.svg';
    import user from '../../lib/images/user-icon-white.svg';
    
    import { createDialog, melt } from '@melt-ui/svelte';

    export let data;

    // Create a dialog instance
    const {
        elements: { trigger, portalled, overlay, content, title, close },
        states: { open }
    } = createDialog();

    const trainers = data.trainers;
</script>

<main>
    <section class="pt-10 bg-black text-white">
        <div class="container mx-auto text-center mb-16">
            <h2 class="text-3xl font-bold font-heading mb-5">Trenéři</h2>
            <p class="text-lg text-white max-w-4xl mx-auto px-4 md:px-8">
                Chcete si zacvičit pod vedením profesionála? Můžete si vybrat mezi individuální lekcí s trenérem nebo skupinovými lekcemi.
            </p>
        </div>
    </section>

    <section class="pb-10 bg-grey text-white">
        <div class="container mx-auto space-y-12 md:space-y-24 px-4 bg-grey py-12">
            {#each trainers as trainer, index}
                <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 
                    {index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
                    
                    <!-- Trainer Photo -->
                    <div class="w-64 h-64 bg-gray flex justify-center items-center mb-8 md:mb-0">
                        {#if trainer.photo}
                            <img src="{trainer.photo}" alt="{trainer.name}" class="w-full h-full object-cover rounded-full" />
                        {:else}
                            <span class="text-6xl font-bold text-gray-500">?</span>
                        {/if}
                    </div>

                    <!-- Trainer Info -->
                    <div class="flex flex-col justify-center text-center md:text-left">
                        <h3 class="text-2xl font-bold text-yellow-500 mb-4">{trainer.name}</h3>
                        <ul class="space-y-4 text-white mx-auto max-w-xs md:mx-0 text-xl">
                            <li class="flex items-center">
                                <img src={user} alt="User icon" class="mr-2 h-6 w-6" />
                                Osobní trenér
                            </li>
                            {#if trainer.instagram}
                                <li class="flex items-center">
                                    <img src={instagram} alt="Instagram icon" class="mr-2 h-5 w-5" />
                                    {trainer.instagram}
                                </li>
                            {/if}
                            {#if trainer.phone}
                                <li class="flex items-center">
                                    <img src={phone} alt="Phone icon" class="mr-2 h-5 w-5" />
                                    {trainer.phone}
                                </li>
                            {/if}
                        </ul>

                        <!-- Button to Open Dialog -->
                        <button
                            class="mt-6 bg-yellow hover:bg-yellow_hover text-black font-bold py-2 px-6 rounded-lg w-auto mx-auto md:mx-0"
                            use:melt={$trigger}>
                            Zjistit více
                        </button>
                    </div>
                </div>

                <!-- Melt UI Dialog for Trainer Details -->
                {#if $open}
                    <div use:melt={$portalled}>
                        <!-- Overlay -->
                        <div use:melt={$overlay} class="fixed inset-0 bg-black bg-opacity-50"></div>
                        
                        <!-- Dialog Content -->
                        <div use:melt={$content} class="fixed inset-0 flex items-center justify-center animate-slide-up z-10">
                            <div class="bg-black rounded-xl shadow-lg p-6 w-11/12 max-w-md">
                                <h2 use:melt={$title} class="text-xl font-bold text-center mb-4 text-white">{trainer.name}</h2>

                                <div class="text-white space-y-4">
                                    {#if trainer.education?.length}
                                        <div>
                                            <h3 class="font-bold">Vzdělání:</h3>
                                            <ul class="list-disc list-inside pl-4">
                                                {#each trainer.education as edu}
                                                    <li>{edu}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    {/if}

                                    {#if trainer.specialization?.length}
                                        <div>
                                            <h3 class="font-bold">Specializace:</h3>
                                            <ul class="list-disc list-inside pl-4">
                                                {#each trainer.specialization as spec}
                                                    <li>{spec}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    {/if}

                                    {#if trainer.achievements?.length}
                                        <div>
                                            <h3 class="font-bold">Sportovní úspěchy:</h3>
                                            <ul class="list-disc list-inside pl-4">
                                                {#each trainer.achievements as achievement}
                                                    <li>{achievement}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    {/if}

                                    {#if trainer.hobbies?.length}
                                        <div>
                                            <h3 class="font-bold">Zájmy:</h3>
                                            <ul class="list-disc list-inside pl-4">
                                                {#each trainer.hobbies as hobby}
                                                    <li>{hobby}</li>
                                                {/each}
                                            </ul>
                                        </div>
                                    {/if}
                                </div>

                                <div class="flex justify-center">
                                    <button 
                                        use:melt={$close} 
                                        class="mt-6 w-1/2 bg-yellow text-dark font-body py-2 rounded hover:bg-yellow_hover">
                                        Zavřít
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </section>
</main>
