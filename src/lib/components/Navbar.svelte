<script lang="ts">
    const links = [
    { href: '/posilovna', label: 'Posilovna' },
    { href: '/cenik', label: 'Ceník' },
    { href: '/treneri', label: 'Trenéři' },
    { href: '/rozvrh', label: 'Rozvrh lekcí' },
    { href: '/kontakt', label: 'Kontakt' },
    ];
    import logo from '../images/logo.png';
</script>

<nav class="bg-black text-white p-5">
    <div class="container mx-auto flex items-center justify-between w-5/6">
    <!-- Logo -->
    <a href="/">
        <img src={logo} alt="Logo" class="h-14" />
    </a>

    <!-- Navigation Links -->
    <ul class="flex space-x-14 font-heading text-xl">
        {#each links as link}
        <li>
            <a 
            href={link.href} 
            class="hover:text-yellow"
            >
            {link.label}
            </a>
        </li>
        {/each}
    </ul>
    </div>
</nav>