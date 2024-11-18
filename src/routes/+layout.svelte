<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<Navbar />

<main class="p-4">
	{@render children()}
</main>
