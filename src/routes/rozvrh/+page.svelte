<svelte:head>
  <title>Rozvrh - BeeFIT Praha</title>
  <meta name="description" content="Rozvrh skupinových lekcí BeeFIT Praha. Tabata, spinning, yoga a další. Rezervace online." />
  <link rel="canonical" href="https://fit-fat.cz/rozvrh" />

  <!-- Open Graph -->
  <meta property="og:title" content="Rozvrh - BeeFIT Praha" />
  <meta property="og:description" content="Rozvrh skupinových lekcí BeeFIT Praha. Tabata, spinning, yoga a další. Rezervace online." />
  <meta property="og:url" content="https://fit-fat.cz/rozvrh" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="cs_CZ" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rozvrh - BeeFIT Praha" />
  <meta name="twitter:description" content="Rozvrh skupinových lekcí BeeFIT Praha. Tabata, spinning, yoga a další. Rezervace online." />
</svelte:head>

<script lang="ts">
  import { sanityClient } from '$lib/sanityClient';
  import type { GroupSession } from '$lib/types/sanity';

  let groupSessions = $state({ sessions: [] });
  let isLoading = $state(true);

  $effect(() => {
    async function loadSessions() {
      try {
        const query = `
          *[_type == "groupSessions"][0] {
            sessions[] {
              day,
              time,
              title,
              description
            }
          }
        `;
        const result = await sanityClient.fetch(query);
        groupSessions = result || { sessions: [] };
      } catch (error) {
        console.error('Chyba při načítání rozvrhu lekcí ze Sanity:', error);
        groupSessions = { sessions: [] };
      } finally {
        isLoading = false;
      }
    }

    loadSessions();
  });

  // Group sessions by day
  let groupedSessions = $derived<Record<string, GroupSession[]>>(groupSessions?.sessions?.reduce((acc: Record<string, GroupSession[]>, session: GroupSession) => {
    if (!acc[session.day]) acc[session.day] = [];
    acc[session.day].push(session);
    return acc;
  }, {} as Record<string, GroupSession[]>) || {});
</script>

<main>
  <section class="pt-10 pb-5 bg-black text-white">
    <div class="container mx-auto text-left mb-16 font-bold w-3/4">
      <h1 class="text-3xl font-bold font-heading mb-5 text-center">Skupinové lekce s trenéry</h1>
      <div class="flex flex-col gap-5 px-4 md:px-8 max-w-4xl">
        <p class="text-lg font-medium text-white">
          Máte raději cvičení ve skupině? Podívejte se na rozpis našich skupinových lekcí zde:
        </p>

        <div class="text-center flex">
          <a href="https://www.supersaas.cz/schedule/beefit/Beefit_aktivity" target="_blank" rel="noopener noreferrer">
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
      {#if Object.keys(groupedSessions).length === 0}
        <p class="text-center text-white">Žádné lekce nebyly nalezeny.</p>
      {:else}
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
      {/if}
    </div>
  </section>
</main>