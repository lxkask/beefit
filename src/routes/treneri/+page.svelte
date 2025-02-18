<script lang="ts">
    import phone from '../../lib/images/phone-icon.svg';
    import instagram from '../../lib/images/instagram-icon-white.svg';
    import user from '../../lib/images/user-icon-white.svg';
    
    import { createDialog, melt } from '@melt-ui/svelte';

    // Create a dialog instance
    const {
        elements: { trigger, portalled, overlay, content, title, close },
        states: { open }
    } = createDialog();

    const trainers = [
        {
            name: 'Trenér 1',
            image: '',
            instagram: '@osobnitrener',
            phone: '+420 777 777 777',
            education: 'Certifikovaný trenér fitness',
            specialization: 'Silový trénink, redukce váhy'
        },
        {
            name: 'Trenér 1',
            image: '',
            instagram: '@osobnitrener',
            phone: '+420 777 777 777',
            education: 'Certifikovaný trenér fitness',
            specialization: 'Silový trénink, redukce váhy'
        },
    ];
</script>

<main>
    <section class="pt-10 bg-black text-white">
        <div class="container mx-auto text-center mb-16">
            <h2 class="text-3xl font-bold font-heading mb-5">Trenéři</h2>
            <p class="text-lg text-white max-w-4xl mx-auto px-4 md:px-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>
    </section>

    <section class="pb-10 bg-grey text-white">
        <div class="container mx-auto space-y-12 md:space-y-24 px-4 bg-grey py-12">
            {#each trainers as trainer}
                <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
                    <div class="w-64 h-64 bg-gray-700 flex justify-center items-center mb-8 md:mb-0">
                        <span class="text-6xl font-bold text-gray-500">?</span>
                    </div>

                    <div class="flex flex-col justify-center text-center md:text-left">
                        <h3 class="text-2xl font-bold text-yellow-500 mb-4">{trainer.name}</h3>
                        <ul class="space-y-4 text-white mx-auto max-w-xs md:mx-0 text-xl">
                            <li class="flex items-center">
                                <img src={user} alt="User icon" class="mr-2 h-6 w-6" />
                                Osobní trenér
                            </li>
                            <li class="flex items-center">
                                <img src={instagram} alt="Instagram icon" class="mr-2 h-5 w-5" />
                                {trainer.instagram}
                            </li>
                            <li class="flex items-center">
                                <img src={phone} alt="Phone icon" class="mr-2 h-5 w-5" />
                                {trainer.phone}
                            </li>
                        </ul>
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
                                <!-- Dialog Title -->
                                <h2 use:melt={$title} class="text-xl font-bold text-center mb-4 text-white">{trainer.name}</h2>
                                
                                <p class="text-white"><strong>Vzdělání:</strong> {trainer.education}</p>
                                <p class="text-white"><strong>Specializace:</strong> {trainer.specialization}</p>

                                <!-- Close Button -->
                                <div class="flex justify-center">
                                    <button 
                                        use:melt={$close} 
                                        class="mt-6 w-1/2 bg-yellow text-dark font-body py-2 rounded hover:bg-yellow_hover"
                                    >
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
