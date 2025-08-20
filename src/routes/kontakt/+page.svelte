<script lang="ts">
  import { onMount } from 'svelte';
  import { sanityClient } from '$lib/sanityClient';
  import { PortableText } from '@portabletext/svelte';

  import phone from '../../lib/images/phone-icon.svg';
  import clock from '../../lib/images/clock-icon.svg';
  import email from '../../lib/images/email-icon.svg';
  import map from '../../lib/images/map-marker-icon.svg';
  import gymEntrance480 from '../../lib/images/gym-entrance-480.webp';
  import gymEntrance768 from '../../lib/images/gym-entrance-768.webp';
  import gymEntrance1024 from '../../lib/images/gym-entrance-1024.webp';
  import gymEntrance1280 from '../../lib/images/gym-entrance-1280.webp';

  let hiring = null;
  let isLoading = true;

  onMount(async () => {
    try {
      const result = await sanityClient.fetch(`
        *[_type == "hiring"][0] {
          active,
          title,
          description,
          formLink,
          buttonText
        }
      `);
      hiring = result;
    } catch (error) {
      console.error('Chyba při načítání hiring dat:', error);
    } finally {
      isLoading = false;
    }
  });
</script>

<main>
  <!-- Kontakt Info -->
  <section class="bg-black text-white py-12">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold mb-4 font-heading">Kontakt</h2>
    </div>

    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 sm:text-left text-center w-3/4">
      <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
        <img src={phone} alt="Telefon" class="w-8 h-8" />
        <div>
          <h3 class="text-yellow font-bold">Telefon</h3>
          <p>733 60 60 02</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
        <img src={email} alt="Email" class="w-8 h-8" />
        <div>
          <h3 class="text-yellow font-bold">Email</h3>
          <p>info@beefit.cz</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
        <img src={map} alt="Adresa" class="w-8 h-8 filter invert" />
        <div>
          <h3 class="text-yellow font-bold">Adresa</h3>
          <p>Na Hřebenech II 1718/10<br />140 00 Praha 4 - Nusle</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-0 sm:space-y-0">
        <img src={clock} alt="Otevírací doba" class="w-8 h-8 filter invert" />
        <div class="sm:pl-3">
          <h3 class="text-yellow font-bold">Otevírací doba</h3>
          <p>
            Pondělí - Pátek 7:00 - 22:00<br />
            Sobota 15:00 - 21:00<br />
            Neděle 15:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hiring (if active) -->
  {#if !isLoading && hiring?.active}
    <section class="bg-yellow/10 border-y border-yellow/30 py-12">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold font-heading text-yellow">{hiring.title || 'Hledáme posilu na recepci!'}</h2>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="lg:w-2/3 text-left text-white">
            {#if hiring.description}
              <div class="prose text-white text-lg">
                <PortableText value={hiring.description} />
              </div>
            {:else}
              <p class="mb-4">Hledáme spolehlivého a příjemného kolegu/kolegyni na pozici recepční v našem fitness centru.</p>
              <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-semibold">Náplň práce:</span> obsluha recepce, komunikace s klienty, správa rezervací</li>
                <li><span class="font-semibold">Požadujeme:</span> příjemné vystupování, spolehlivost, základní znalost PC</li>
                <li><span class="font-semibold">Nabízíme:</span> příjemné prostředí, možnost zdarma využívat fitness, firemní benefity</li>
              </ul>
            {/if}
          </div>

          <div class="lg:w-1/3 flex justify-center">
            <a 
              href={hiring.formLink || 'https://docs.google.com/forms/...'} 
              target="_blank" 
              class="w-full">
              <button class="bg-yellow hover:bg-yellow_hover text-black font-bold py-3 px-8 rounded-lg w-full max-w-xs">
                {hiring.buttonText || 'Mám zájem'}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Jak nás najdete -->
  <section class="bg-grey text-white py-12">
    <div class="container mx-auto px-6 lg:w-2/3">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold font-heading">Jak nás najdete</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        <div class="lg:w-1/2 text-left pr-10">
          <p>Fitness se nachází cca 5 minut chůze od metra Pražského povstání / Pankrác.</p>
        </div>

        <div class="lg:w-1/2">
          <img
            src={gymEntrance768}
            srcset={`${gymEntrance480} 480w, ${gymEntrance768} 768w, ${gymEntrance1024} 1024w, ${gymEntrance1280} 1280w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
            alt="Vstup do fitness centra"
            class="w-full h-80 rounded shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Mapa -->
  <section class="bg-black text-white py-12">
    <div class="container mx-auto px-6 lg:w-2/3">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold font-heading">Mapa</h2>
      </div>
      <div class="lg:w-full">
        <iframe
          src="https://maps.google.com/maps?q=BeeFIT&t=&z=13&ie=UTF8&iwloc=&output=embed"
          class="w-full h-64 rounded"
          frameborder="0"
          title="BeeFIT Lokace"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </section>
</main>
