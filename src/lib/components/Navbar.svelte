<script lang="ts">
    const links = [
        { href: '/posilovna', label: 'Posilovna' },
        { href: '/cenik', label: 'Ceník' },
        { href: '/treneri', label: 'Trenéři' },
        { href: '/rozvrh', label: 'Rozvrh lekcí' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    import logo from '../images/logo.webp';
    
    let isMenuOpen = false;

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<nav class="bg-black text-white p-5 fixed top-0 left-0 w-full z-50 shadow-md">
    <div class="container mx-auto flex items-center justify-between w-5/6">
        <!-- Logo -->
        <a href="/">
            <img src={logo} alt="BeeFIT Logo" class="h-14 w-24" />
        </a>

        <!-- Hamburger Menu Icon -->
        <button
            class="lg:hidden text-white z-50 focus-visible:outline-2 focus-visible:outline-yellow focus-visible:outline-offset-2"
            on:click={() => isMenuOpen = !isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
            </svg>
        </button>

        <!-- Navigation Links (Desktop) -->
        <ul class="lg:flex hidden space-x-14 font-heading text-xl">
            {#each links as link}
                <li>
                    <a href={link.href} class="hover:text-yellow">{link.label}</a>
                </li>
            {/each}
        </ul>

        <!-- Mobile Menu -->
        <div class={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
            <ul class="space-y-8 text-2xl">
                {#each links as link}
                    <li>
                        <a href={link.href} class="hover:text-yellow" on:click={closeMenu}>{link.label}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>