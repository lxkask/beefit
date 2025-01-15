<script>
    import { sanityClient } from '$lib/sanityClient';

    export async function load() {
    try {
        const query = `
            *[_type == "priceTable"][0] {
                title,
                rows[] {
                    type,
                    allDay,
                    workingHours,
                    eveningWeekend
                }
            }
        `;
        const priceTable = await sanityClient.fetch(query);
        console.log("Fetched priceTable:", priceTable); // Check what is returned
        if (!priceTable) {
            throw new Error("No priceTable data returned from Sanity.");
        }
        return { props: { priceTable } };
    } catch (error) {
        console.error("Error fetching priceTable:", error);
        throw error;
    }
}

    export let priceTable;
</script>


<main>
    {#if priceTable}
    <h2>{priceTable.title || "No title available"}</h2>
    {#if priceTable.rows && priceTable.rows.length > 0}
        <!-- Render rows -->
    {:else}
        <p>No pricing data available.</p>
    {/if}
    {:else}
        <p>Loading...</p>
    {/if}

    <!-- Pricing Section --> 
      <div class="justify-center flex">
        <section class="py-10 bg-black text-white w-4/5 md:w-3/4 lg:w-1/2 flex items">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold font-heading mb-10">{priceTable.title}</h2>
            <div class="overflow-hidden">
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
                      <td class="border border-yellow p-2">{row.type}</td>
                      <td class="border border-yellow p-2">{row.allDay}</td>
                      <td class="border border-yellow p-2">{row.workingHours}</td>
                      <td class="border border-yellow p-2">{row.eveningWeekend}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      

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
