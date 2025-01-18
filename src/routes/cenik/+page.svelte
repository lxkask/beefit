<script>
  export let priceTable;
</script>

<main>
  {#if priceTable}
    <h2>{priceTable.title || "No title available"}</h2>
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
            <tr>
              <td class="border border-yellow p-2">{row.type || "N/A"}</td>
              <td class="border border-yellow p-2">{row.allDay || "N/A"}</td>
              <td class="border border-yellow p-2">{row.workingHours || "N/A"}</td>
              <td class="border border-yellow p-2">{row.eveningWeekend || "N/A"}</td>
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
      

    <!-- Payment Methods Section -->
    <div class="flex justify-center bg-grey">
        <section class="py-10 text-white w-4/5 md:w-1/2">
            <div class="container mx-auto">
                <h3 class="text-3xl font-bold mb-6 text-center font-heading">Způsob platby</h3>
                <ul class="list-disc list-inside text-lg space-y-2">
                    <li>Hotovost</li>
                    <li>Převodem</li>
                    <li>Platba kartou</li>
                    <li>Dárkové vouchery</li>
                    <li>Benefity (Multisport, Sodexo, Edenred)</li>
                </ul>
            </div>
        </section>
    </div>
</main>

<style>
    /* Na menších obrazovkách uprav velikost a vzhled tabulky */
    @media (max-width: 640px) {
        table {
            font-size: 12px; /* Zmenšení písma pro lepší přehlednost */
            table-layout: fixed; /* Umožní přizpůsobení sloupců */
        }
        th, td {
            word-wrap: break-word; /* Povolí zalamování textu ve sloupcích */
        }
    }
</style>
