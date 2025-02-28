<script>
  export let data;
  const { priceTable, paymentMethods } = data;

  import { createTooltip, melt } from '@melt-ui/svelte';
  import info from '../../lib/images/info.svg';
  import { fade } from 'svelte/transition';

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: 'bottom',
    },
    openDelay: 100,
    closeDelay: 100,
  });
</script>

<main>
  <div class="flex justify-center">
    <section class="w-4/5 md:w-3/4 lg:w-2/3 justify-center flex flex-col py-10">
      {#if priceTable}
        <h2 class="text-white text-3xl font-bold mb-6 text-center font-heading">{priceTable.title || 'No title available'}</h2>
        {#if priceTable.rows?.length > 0}
          <table class="w-full text-left border-collapse border border-yellow table-fixed">
            <thead>
              <tr class="bg-yellow text-black">
                <th class="border border-yellow p-2">Typ vstupu</th>
                <th class="border border-yellow p-2">Celodenní</th>
                <th class="border border-yellow p-2">Pracovní</th>
                <th class="border border-yellow p-2">Večer + víkend</th>
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
          <p>No pricing data available.</p>
        {/if}
      {:else}
        <p>Loading...</p>
      {/if}
    
      <div class="flex items-center mt-5 ml-2 text-white gap-2 relative">
        <p class="mb-1">Studentský vstup - 100 Kč</p>
    
        <!-- Tooltip Trigger (Info Icon) -->
        <span 
            class="relative flex items-center justify-center w-4 h-4 bg-yellow rounded-full cursor-pointer"
            use:melt={$trigger}
        >
            <img src={info} alt="Info" class="w-4 h-4" />
        </span>
    
        <!-- Tooltip Content (Only visible when hovered) -->
        {#if $open}
            <div 
                use:melt={$content} 
                transition:fade={{ duration: 150 }}
                class="absolute left-1/2 top-full mt-1 w-max bg-black text-white text-sm px-3 py-2 rounded shadow-lg"
            >
                Studentský vstup lze uplatnit v hodinách <br/>10:00 - 15:00 a 19:00 - 22:00.
                <div use:melt={$arrow} class="w-3 h-3 bg-black rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
        {/if}
      </div>
    </section>
  </div>
      

    <!-- Payment Methods Section -->
    <div class="flex justify-center bg-grey">
      <section class="py-10 text-white w-4/5 md:w-1/2">
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
</style>
