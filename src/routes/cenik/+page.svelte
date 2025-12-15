<svelte:head>
  <title>Ceník - BeeFIT Praha</title>
  <meta name="description" content="Aktuální ceník fitness BeeFIT Praha. Permanentky od 990 Kč, jednotlivé vstupy, skupinové lekce, osobní tréninky." />
  <link rel="canonical" href="https://fit-fat.cz/cenik" />

  <!-- Open Graph -->
  <meta property="og:title" content="Ceník - BeeFIT Praha" />
  <meta property="og:description" content="Aktuální ceník fitness BeeFIT Praha. Permanentky od 990 Kč, jednotlivé vstupy, skupinové lekce, osobní tréninky." />
  <meta property="og:url" content="https://fit-fat.cz/cenik" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="cs_CZ" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ceník - BeeFIT Praha" />
  <meta name="twitter:description" content="Aktuální ceník fitness BeeFIT Praha. Permanentky od 990 Kč, jednotlivé vstupy, skupinové lekce, osobní tréninky." />
</svelte:head>

<script lang="ts">
  import { sanityClient } from '$lib/sanityClient';
  import { createTooltip, melt } from '@melt-ui/svelte';
  import info from '../../lib/images/info.svg';
  import { fade } from 'svelte/transition';

  console.log('CENIK COMPONENT: Script se spustil');

  // DATA ze Sanity
  let priceTable = $state<any>(undefined);
  let paymentMethods = $state<any>(undefined);
  let isLoading = $state(true);
  let error = $state<string | null>(null);
  let studentPricing = $state({
    singleEntry: 100,
    monthlyPass: 990
  });

  console.log('CENIK COMPONENT: State inicializován, priceTable =', priceTable, 'isLoading =', isLoading);

  // Use $effect instead of onMount for better Svelte 5 compatibility
  $effect(() => {
    console.log('$effect spuštěn - začínám načítat data');
    console.log('sanityClient:', sanityClient);

    async function loadData() {
      try {
        const query = `
          {
            "priceTable": *[_type == "priceTable"][0] {
              title,
              rows[] {
                type,
                allDay,
                workingHours,
                eveningWeekend
              },
              studentPricing {
                singleEntry,
                monthlyPass
              }
            },
            "paymentMethods": *[_type == "paymentMethods"][0] {
              methods
            }
          }
        `;
        console.log('Připravuji fetch s query:', query);
        const result = await sanityClient.fetch(query);
        console.log('Fetch úspěšný, result:', result);
        priceTable = result.priceTable;
        paymentMethods = result.paymentMethods;

        if (priceTable?.studentPricing) {
          studentPricing = priceTable.studentPricing;
        }
      } catch (err) {
        console.error('Chyba při načítání dat ze Sanity:', err);
        console.error('Error detail:', err);
        error = err instanceof Error ? err.message : 'Unknown error';
        priceTable = null;
        paymentMethods = null;
      } finally {
        isLoading = false;
        console.log('Load dokončen, isLoading:', isLoading, 'error:', error);
      }
    }

    loadData();
  });

  // Format currency
  function formatCurrency(amount: number) {
    return `${amount} Kč`;
  }

  // Tooltip 1
  const {
    elements: { trigger: trigger1, content: content1, arrow: arrow1 },
    states: { open: open1 },
  } = createTooltip({
    positioning: {
      placement: 'bottom',
    },
  });

  // Tooltip 2
  const {
    elements: { trigger: trigger2, content: content2, arrow: arrow2 },
    states: { open: open2 },
  } = createTooltip({
    positioning: {
      placement: 'bottom',
    },
  });

  // iOS & touch handling
  $effect(() => {
    document.addEventListener('touchstart', () => {}, { passive: true });
    const handleDblClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-melt-tooltip-trigger]')) {
        e.preventDefault();
      }
    };
    document.addEventListener('dblclick', handleDblClick, { passive: false });

    return () => {
      document.removeEventListener('dblclick', handleDblClick);
    };
  });

  function handleTooltipToggle(openStore: any) {
    setTimeout(() => {
      openStore.update((isOpen: boolean) => !isOpen);
    }, 50);
  }
</script>

<main>
  <div class="flex justify-center">
    <section class="w-4/5 md:w-3/4 lg:w-2/3 justify-center flex flex-col py-10">
      {#if isLoading}
        <!-- Načítání -->
        <p class="text-white text-center">Načítání...</p>
      {:else if error || priceTable === null}
        <!-- Pokud se priceTable nenačetlo (např. chyba ve fetchi) -->
        <p class="text-white text-center">Nepodařilo se načíst ceník. Zkuste to prosím později.</p>
        {#if error}
          <p class="text-red-500 text-center text-sm mt-2">Chyba: {error}</p>
        {/if}
      {:else if priceTable}
        <!-- Úspěšné načtení -->
        <h1 class="text-white text-3xl font-bold mb-6 text-center font-heading">
          {priceTable.title || 'Bez názvu'}
        </h1>

        {#if priceTable.rows?.length > 0}
          <table class="w-full text-left border-collapse border border-yellow table-fixed">
            <thead>
              <tr class="bg-yellow text-black">
                <th scope="col" class="border border-yellow p-2">Typ vstupu</th>
                <th scope="col" class="border border-yellow p-2">Celodenní (7:00 - 22:00)</th>
                <th scope="col" class="border border-yellow p-2">Pracovní (8:00 - 16:00)</th>
                <th scope="col" class="border border-yellow p-2">Večer + víkend (19:30 - 22:00)</th>
              </tr>
            </thead>
            <tbody>
              {#each priceTable.rows as row}
                <tr class="text-white">
                  <td class="border border-yellow p-2">{row.type || 'N/A'}</td>
                  <td class="border border-yellow p-2">{row.allDay || 'N/A'}</td>
                  <td class="border border-yellow p-2">{row.workingHours || 'N/A'}</td>
                  <td class="border border-yellow p-2">{row.eveningWeekend || 'N/A'}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        {:else}
          <p class="text-white text-center">Ceníková tabulka je prázdná.</p>
        {/if}
      {/if}
    
      <!-- First Tooltip -->
      <div class="flex items-center mt-5 ml-2 text-white gap-2 relative">
        <p class="mb-1">
          Studentský/55+ let vstup - {formatCurrency(studentPricing.singleEntry)} / 1 měsíc - {formatCurrency(studentPricing.monthlyPass)}
        </p>

        <!-- First Tooltip Trigger -->
        <button
            class="relative flex items-center justify-center w-6 h-6 bg-yellow rounded-full cursor-pointer"
            style="touch-action: manipulation;"
            use:melt={$trigger1}
            on:touchstart|preventDefault={() => handleTooltipToggle(open1)}
            on:click|preventDefault={() => handleTooltipToggle(open1)}
            aria-label="More information about student entry"
            aria-expanded={$open1}
            aria-describedby="student-tooltip"
          >
            <img src={info} class="w-4 h-4" aria-hidden="true" />
        </button>

        <!-- Tooltip Content -->
        {#if $open1}
          <div
            use:melt={$content1}
            transition:fade={{ duration: 150 }}
            class="absolute left-1/2 top-full mt-1 w-max max-w-[200px] bg-black text-white text-sm px-3 py-2 rounded shadow-lg z-50"
            role="tooltip"
            id="student-tooltip"
          >
            Při platbě předložte platný ISIC/doklad.
            <div use:melt={$arrow1} class="w-3 h-3 bg-black rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
          </div>
        {/if}
      </div>

      <div class="flex items-center mt-2 ml-2 text-white gap-2 relative">
        <p class="mb-1">Vstup do fitness centra osobám mladším 15 let možný jen v doprovodu dospělé osoby.</p>
      </div>

      <!-- Second Tooltip -->
      <div class="flex items-center mt-2 ml-2 text-white gap-2 relative">
        <p class="mb-1">Záloha za permici: 100 Kč</p>
        <!-- Second Tooltip Trigger -->
        <button
          class="relative flex items-center justify-center w-6 h-6 bg-yellow rounded-full cursor-pointer"
          style="touch-action: manipulation;"
          use:melt={$trigger2}
          on:touchstart|preventDefault={() => handleTooltipToggle(open2)}
          on:click|preventDefault={() => handleTooltipToggle(open2)}
          aria-label="More information about locker deposit"
          aria-expanded={$open2}
          aria-describedby="deposit-tooltip"
        >
          <img src={info} class="w-4 h-4" aria-hidden="true" />
        </button>
        <!-- Tooltip Content -->
        {#if $open2}
          <div
            use:melt={$content2}
            transition:fade={{ duration: 150 }}
            class="absolute left-1/2 top-full mt-1 w-max max-w-[200px] bg-black text-white text-sm px-3 py-2 rounded shadow-lg z-50"
            role="tooltip"
            id="deposit-tooltip"
          >
            Při vrácení neponičené permice je částká v hotovosti vrácena
            <div use:melt={$arrow2} class="w-3 h-3 bg-black rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
          </div>
        {/if}
      </div>
    </section>
  </div>
      
  <!-- Payment Methods Section -->
  <div class="flex justify-center bg-grey">
    <section class="pt-10 pb-5 text-white w-4/5 md:w-1/2">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-6 text-center font-heading">Způsob platby</h3>
        {#if paymentMethods?.methods}
          <ul class="list-disc list-inside text-lg space-y-2">
            {#each paymentMethods.methods as method}
              <li>{method}</li>
            {/each}
          </ul>
        {:else}
          <p class="text-center">Žádné dostupné způsoby platby.</p>
        {/if}
      </div>
    </section>
  </div>

  <div class="flex justify-center bg-grey">
    <section class="w-4/5 md:w-3/4 lg:w-2/3 justify-center flex flex-col pb-10">
      <!-- Gift Vouchers Section -->
      <div class="mt-6 p-4 bg-yellow/10 border border-yellow rounded-lg">
        <h3 class="text-yellow text-xl font-bold mb-2">Dárkové poukazy</h3>
        <p class="text-white mb-3">
          Darujte svým blízkým radost z pohybu! Nabízíme dárkové poukazy na vstupy do fitness centra, 
          které jsou ideálním dárkem pro každou příležitost.
        </p>
        <ul class="text-white space-y-2 list-disc list-inside">
          <li>Platné 12 měsíců od data vydání</li>
          <li>Možnost zakoupení na libovolnou částku nebo konkrétní službu</li>
          <li>Elegantní provedení vhodné k předání</li>
          <li>Okamžité vydání na recepci</li>
        </ul>
        <p class="text-white mt-3 font-medium">
          Více informací a zakoupení na recepci fitness centra.
        </p>
      </div>
    </section>
  </div>
</main>

<style>
  @media (max-width: 640px) {
    table {
      font-size: 12px;
      table-layout: fixed;
    }
    th, td {
      word-wrap: break-word;
    }
  }

  /* Enhanced touch targets for mobile */
  @media (pointer: coarse) {
    [data-melt-tooltip-trigger] {
      min-width: 30px !important;  /* Apple recommends at least 44x44 */
      min-height: 30px !important;
    }
    
    /* Make tooltip content more mobile-friendly */
    [data-melt-tooltip-content] {
      font-size: 14px;
      padding: 12px;
      max-width: 250px !important;
    }
  }

  /* Prevent iOS zooming */
  [data-melt-tooltip-trigger] {
    touch-action: manipulation;
  }
</style>
