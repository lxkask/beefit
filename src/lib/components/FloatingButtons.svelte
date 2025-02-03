<script lang="ts">
    import { createDialog, melt } from '@melt-ui/svelte';
    import clock from '$lib/images/clock-icon.svg';
    import person from '$lib/images/person-icon.svg';
    import pricetag from '$lib/images/pricetag-icon.svg';
    
    export let onPrev: () => void;
    export let onNext: () => void;

    const {
        elements: { trigger, portalled, overlay, content, title, description, close },
        states: { open }
    } = createDialog();
</script>

<section class="relative z-10">
    <div class="flex justify-center shadow-lg absolute -top-12 left-1/2 transform -translate-x-1/2 md:w-full w-5/6 max-w-xl">
        <a href="/treneri" class="btn flex justify-center items-center rounded-l-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
            <img src="{person}" alt="Person Icon" class="md:w-8 md:h-8 w-6 h-6" />
            <span class="md:text-lg text-sm">Trenéři</span>
        </a>

        <button 
            class="btn flex justify-center items-center bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover" 
            use:melt={$trigger}>
            <img src="{clock}" alt="Clock Icon" class="md:w-7 md:h-7 w-5 h-5" />
            <span class="md:text-lg text-sm">Otevírací doba</span>
        </button>

        <a href="/cenik" class="btn flex justify-center items-center rounded-r-lg bg-yellow text-dark font-body px-2 py-7 flex-grow text-center space-x-2 hover:bg-yellow_hover">
            <img src="{pricetag}" alt="Price Tag Icon" class="md:w-7 md:h-7 w-6 h-6" />
            <span class="md:text-lg text-sm">Ceník</span>
        </a>
    </div>

    {#if $open}
        <div use:melt={$portalled}>
            <div use:melt={$overlay} class="fixed inset-0 bg-black bg-opacity-50"></div>
            <div use:melt={$content} class="fixed inset-0 flex items-center justify-center z-10">
                <div class="bg-black rounded-xl shadow-lg p-6 w-11/12 max-w-md">
                    <h2 use:melt={$title} class="text-xl font-bold text-center mb-4 text-white">Otevírací doba</h2>
                    <p use:melt={$description} class="text-center text-white">
                        Pondělí - Pátek: 7:00 - 22:00<br />
                        Sobota: 15:00 - 21:00<br />
                        Neděle: 15:00 - 22:00
                    </p>
                    <div class="flex justify-center">
                        <button use:melt={$close} class="mt-6 w-1/2 bg-yellow text-dark font-body py-2 rounded hover:bg-yellow_hover">
                            Zavřít
                        </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</section>  