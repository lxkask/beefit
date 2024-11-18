<script lang="ts">
    const links = [
    { href: '/posilovna', label: 'Posilovna' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    ];
</script>

<nav class="bg-gray-900 text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold hover:text-yellow-400">
        GymLogo
    </a>

    <!-- Navigation Links -->
    <ul class="flex space-x-6">
        {#each links as link}
        <li>
            <a 
            href={link.href} 
            class="hover:text-yellow-400"
            >
            {link.label}
            </a>
        </li>
        {/each}
    </ul>
    </div>
</nav>