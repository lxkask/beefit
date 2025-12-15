<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import "../app.css";
	let { children } = $props();

</script>

<!-- Skip to main content link for keyboard users -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold focus:outline focus:outline-2 focus:outline-yellow"
>
	Přejít na hlavní obsah
</a>

<Navbar />

<main id="main-content" class="mt-20">
	{@render children()}
</main>

<Footer />
