<!-- src/routes/+page.svelte -->
<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import FloatingButtons from '$lib/components/FloatingButtons.svelte';
    import EquipmentCarousel, { type Slide } from '$lib/components/EquipmentCarousel.svelte';
    import ReviewsCarousel from '$lib/components/ReviewsCarousel.svelte';
    import LocationSection from '$lib/components/LocationSection.svelte';

    import equipment1 from '$lib/images/equipment.webp';

    // Provide slide data for the equipment carousel:
    const equipmentSlides: Slide[] = [
        {
        image: '/lib/images/equipment2.webp',
        title: 'Rodinné prostředí',
        altText: 'First equipment photo',
        description: 'U nás se nemusíte bát, že se ztratíte v davu. Každý je u nás vítán, ať už začínáte, nebo cvičíte pravidelně.'
        },
        {
        image: '/lib/images/equipment2.webp',
        title: 'Členství bez závazků a bez poplatků',
        altText: 'Second equipment photo',
        description: 'Transparentnost je pro nás zásadní, proto u nás nenajdete žádné zbytečné poplatky za sprchu; půjčení klíčku ke skříňkám, aj.'
        },
        {
        image: '/lib/images/equipment3.webp',
        title: 'Profesionální trenéři a individuální přístup',
        altText: 'Third equipment photo',
        description: 'Náš tým zkušených trenérů vám pomůže dosáhnout vašich cílů, ať už je to zlepšení kondice, posílení těla nebo regenerace po zranění.'
        },
        {
        image: '/lib/images/equipment4.webp',
        title: 'Moderní vybavení a příjemné prostředí',
        altText: 'Fourth equipment photo',
        description: 'Prostor a vybavení, které vás budou bavit. Ať už máte rádi kardio, posilování nebo funkční trénink, u nás najdete všechno, co potřebujete, a navíc ve stylovém, čistém a komfortním prostředí.'
        },
        {
        image: '/lib/images/equipment5.webp',
        title: 'Dostupné ceny',
        altText: 'Fifth equipment photo',
        description: 'Naším cílem je, aby kvalitní fitness bylo dostupné pro každého, proto u nás najdete ceny nižší než ve většině běžných fitness center.'
        }
    ];

    // Provide review data for the reviews carousel:
    const reviewsData = [
        {
        name: "Kateřina M.",
        text: "Malé útulné fitness, kde se člověk dokáže docela zničit a odchází spokojený se svým výkonem.",
        rating: 5
        },
        {
        name: "Olga P.",
        text: "Byla jsem zde i s dcerou. Hezky jsme si v rodinném fitku zacvičily, bylo zde příjemné denní světlo a velmi dobře fungovala klimatizace. Zase obě přijdem.",
        rating: 5
        },
        {
        name: "Tom Brown",
        text: "Dobré vybavení, relativně menší počet lidí a hlavně mód vstupu, který nenutí ke členství a omezení člověka jen na jedno místo ke cvičení.",
        rating: 5
        }
    ];
</script>

<main>
    <Hero />
    <FloatingButtons />
    <EquipmentCarousel slides={equipmentSlides} />
    <ReviewsCarousel reviews={reviewsData} />
    <LocationSection />
</main>

