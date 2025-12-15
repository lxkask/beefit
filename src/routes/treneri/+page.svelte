<svelte:head>
  <title>Trenéři - BeeFIT Praha</title>
  <meta name="description" content="Profesionální trenéři BeeFIT Praha. Osobní tréninky, skupinové lekce, individuální tréninkové plány." />
  <link rel="canonical" href="https://fit-fat.cz/treneri" />

  <!-- Open Graph -->
  <meta property="og:title" content="Trenéři - BeeFIT Praha" />
  <meta property="og:description" content="Profesionální trenéři BeeFIT Praha. Osobní tréninky, skupinové lekce, individuální tréninkové plány." />
  <meta property="og:url" content="https://fit-fat.cz/treneri" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="cs_CZ" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trenéři - BeeFIT Praha" />
  <meta name="twitter:description" content="Profesionální trenéři BeeFIT Praha. Osobní tréninky, skupinové lekce, individuální tréninkové plány." />
</svelte:head>

<script lang="ts">
  import { sanityClient } from '$lib/sanityClient';
  import phone from '../../lib/images/phone-icon.svg';
  import instagram from '../../lib/images/instagram-icon-white.svg';
  import user from '../../lib/images/user-icon-white.svg';
  import { createDialog, melt } from '@melt-ui/svelte';

  let trainers = $state([]);
  let isLoading = $state(true);
  let selectedTrainer = $state(null);

  $effect(() => {
    async function loadTrainers() {
      try {
        const query = `
          *[_type == "trainer"] {
            name,
            "photo": photo.asset->url,
            instagram,
            phone,
            education,
            specialization,
            achievements,
            interests
          }`;
        const result = await sanityClient.fetch(query);
        trainers = result || [];
      } catch (error) {
        console.error('Chyba při načítání trenérů ze Sanity:', error);
        trainers = [];
      } finally {
        isLoading = false;
      }
    }

    loadTrainers();
  });

  // Single Melt dialog for all trainers
  const {
    elements: { trigger, portalled, overlay, content, title, close },
    states: { open }
  } = createDialog();

  function openTrainerModal(trainer) {
    selectedTrainer = trainer;
    open.set(true);
  }
</script>

<main>
  <section class="pt-10 bg-black text-white">
    <div class="container mx-auto text-center mb-16">
      <h1 class="text-3xl font-bold font-heading mb-5">Trenéři</h1>
      <p class="text-lg text-white max-w-4xl mx-auto px-4 md:px-8">
        Chcete si zacvičit pod vedením profesionála? Můžete si vybrat mezi individuální lekcí s trenérem nebo skupinovými lekcemi.
      </p>
    </div>
  </section>

  <section class="pb-10 bg-grey text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto bg-black/50 p-6 md:p-8 rounded-lg border border-yellow/30">
        <h3 class="text-3xl font-bold text-white mb-4 text-center font-heading">Individuální lekce</h3>
        <p class="text-lg mb-6 text-center">
          Pokud preferujete osobní přístup, domluvte si individuální lekci s našimi trenéry.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="flex flex-col items-center text-center p-4">
            <div class="text-yellow text-3xl font-bold mb-2">1</div>
            <h4 class="font-bold mb-2">Vyberte trenéra</h4>
            <p>Prohlédněte si naše profesionální trenéry a jejich specializace</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="text-yellow text-3xl font-bold mb-2">2</div>
            <h4 class="font-bold mb-2">Domluvte termín</h4>
            <p>Kontaktujte trenéra a domluvte si vhodný čas pro vaši lekci</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="text-yellow text-3xl font-bold mb-2">3</div>
            <h4 class="font-bold mb-2">Začněte trénovat</h4>
            <p>Při návštěvě fitness uhradíte vstup jakoukoliv formou</p>
            <p class="text-sm mt-2 text-yellow/80">(Multisport, jednorázový vstup, permanentka…)</p>
          </div>
        </div>

        <div class="mt-8 text-center text-sm text-white/80">
          <p>Cena za trénink se řeší přímo s trenérem.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto space-y-12 md:space-y-24 px-4 py-12">
      {#if trainers.length === 0}
        <p class="text-white text-center">Nepodařilo se načíst trenéry.</p>
      {:else}
        {#each trainers as trainer, index}
          <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 {index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
            <div class="w-64 h-64 bg-gray flex justify-center items-center mb-8 md:mb-0">
              {#if trainer.photo}
                <img src="{trainer.photo}" alt="{trainer.name}" class="w-full h-full object-cover rounded-full" />
              {:else}
                <span class="text-6xl font-bold text-gray-500">?</span>
              {/if}
            </div>

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

              <button
                class="mt-6 bg-yellow hover:bg-yellow_hover text-black font-bold py-2 px-6 rounded-lg w-auto mx-auto md:mx-0"
                on:click={() => openTrainerModal(trainer)}>
                Zjistit více
              </button>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </section>

  <!-- Single Modal Outside the Loop -->
  {#if $open && selectedTrainer}
    <div use:melt={$portalled}>
      <div use:melt={$overlay} class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      <div use:melt={$content} class="fixed inset-0 flex items-center justify-center animate-slide-up z-50 p-4">
        <div class="bg-black rounded-xl shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h2 use:melt={$title} class="text-xl font-bold text-center mb-4 text-white">{selectedTrainer.name}</h2>

          <div class="text-white space-y-4">
            {#if selectedTrainer.education?.length}
              <div>
                <h3 class="font-bold">Vzdělání:</h3>
                <ul class="list-disc list-inside pl-4">
                  {#each selectedTrainer.education as edu}
                    <li>{edu}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if selectedTrainer.specialization?.length}
              <div>
                <h3 class="font-bold">Specializace:</h3>
                <ul class="list-disc list-inside pl-4">
                  {#each selectedTrainer.specialization as spec}
                    <li>{spec}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if selectedTrainer.achievements?.length}
              <div>
                <h3 class="font-bold">Sportovní úspěchy:</h3>
                <ul class="list-disc list-inside pl-4">
                  {#each selectedTrainer.achievements as achievement}
                    <li>{achievement}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if selectedTrainer.hobbies?.length}
              <div>
                <h3 class="font-bold">Zájmy:</h3>
                <ul class="list-disc list-inside pl-4">
                  {#each selectedTrainer.hobbies as hobby}
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
</main>