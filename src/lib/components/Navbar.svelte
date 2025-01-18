<script lang="ts">
    const links = [
        { href: '/posilovna', label: 'Posilovna' },
        { href: '/cenik', label: 'Ceník' },
        { href: '/treneri', label: 'Trenéři' },
        { href: '/rozvrh', label: 'Rozvrh lekcí' },
        { href: '/kontakt', label: 'Kontakt' },
    ];
    import logo from '../images/logo.png';
    let isMenuOpen = false;

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<nav class="bg-black text-white p-5">
    <div class="container mx-auto flex items-center justify-between w-5/6">
        <!-- Logo -->
        <a href="/">
            <img src={logo} alt="Logo" class="h-14" />
        </a>

        <!-- Hamburger Menu Icon -->
        <button
        class="lg:hidden text-white focus:outline-none"
        on:click={() => (isMenuOpen = !isMenuOpen)}
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

        <!-- Navigation Links -->
        <ul
            class={`lg:flex space-y-5 lg:space-y-0 lg:space-x-14 font-heading text-xl ${
                isMenuOpen ? 'block' : 'hidden'
            } lg:block absolute lg:static bg-black w-full lg:w-auto left-0 top-20 lg:top-auto p-5 lg:p-0`}
        >
            {#each links as link}
                <li>
                    <a 
                        href={link.href} 
                        class="block lg:inline-block hover:text-yellow text-center lg:text-left"
                        on:click={closeMenu}>
                        {link.label}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
