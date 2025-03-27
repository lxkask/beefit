<script lang="ts">
    import type { PageData } from './$types';
    import type { GroupSession } from '$lib/types/sanity';

    export let data: PageData;
    const { groupSessions } = data;

    // Group sessions by day
    $: groupedSessions = groupSessions?.sessions?.reduce((acc: Record<string, GroupSession[]>, session: GroupSession) => {
        if (!acc[session.day]) acc[session.day] = [];
        acc[session.day].push(session);
        return acc;
    }, {}) || {};
</script>

<main>
    <!-- Static info section remains unchanged -->
    <section class="pt-10 pb-5 bg-black text-white">
        <div class="container mx-auto text-left mb-16 font-bold w-3/4">
        <h2 class="text-3xl font-bold font-heading mb-5 text-center">Skupinové lekce s trenéry</h2>
            <div class="flex flex-col gap-5 px-4 md:px-8 max-w-4xl">
            <p class="text-lg font-medium text-white">
                Máte raději cvičení ve skupině? Podívejte se na rozpis našich skupinových lekcí zde:
            </p>
    
            <div class="text-center flex">
                <a href="https://www.supersaas.cz/schedule/beefit/Beefit_aktivity" target="_blank">
                <button class="bg-yellow text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow_hover">
                    Online rezervace
                </button>
                </a>
            </div>
    
            <p class="text-lg text-white">
                <span class="text-yellow">Podmínky:</span>
            </p>
    
            <ul class="text-lg text-white ml-2">
                <li>✔️ Přihlášení nejpozději 24 hodin před lekcí</li>
                <li>✔️ Minimální počet účastníků: 2 osoby</li>
            </ul>
            </div>
        </div>
    </section>

    <!-- Dynamic sessions section -->
    <section class="pb-10 bg-grey text-white">
        <div class="container mx-auto px-8 font-bold w-3/4 bg-grey py-12">
        {#each Object.entries(groupedSessions) as [day, sessions]}
            <div class="mt-12 first:mt-0">
            <h3 class="text-2xl text-yellow mb-4">{day}</h3>
            
            {#each sessions as session}
                <div class="mb-8 last:mb-0">
                <ul class="list-disc list-inside text-white space-y-2 text-lg">
                    <li>{session.time}</li>
                    <li>{session.title}</li>
                    {#if session.description}
                    <li>{session.description}</li>
                    {/if}
                </ul>
                </div>
            {/each}
            </div>
        {/each}
        </div>
    </section>
</main>
