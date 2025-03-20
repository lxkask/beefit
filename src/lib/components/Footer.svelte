<script>
    import logo from '../images/logo.webp';
    import phone from '../images/phone-icon.svg';
    import email from '../images/email-icon.svg';
    import facebook from '../images/facebook-icon.svg';
    import instagram from '../images/instagram-icon.svg';
</script>

<footer class="bg-[#121212] text-white py-10">
    <div class="max-w-screen-xl mx-auto px-4 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col items-center lg:items-start">
            <img src={logo} alt="BeeFIT Logo" class="w-32 h-18 mb-4" />
        </div>

        <div class="flex flex-col items-center lg:items-start space-y-4">
            <div class="flex items-center">
                <img src={phone} alt="Phone Icon" class="w-11 h-11 mr-2" />
                <p class="flex flex-col">
                    <span class="text-yellow">Telefon</span>
                    733 60 60 02
                </p>
            </div>
            <div class="flex items-center">
                <img src={email} alt="Email Icon" class="w-10 h-10 mr-3" />
                <p class="flex flex-col">
                    <span class="text-yellow">Email</span>
                    info@beefit.cz
                </p>
            </div>
        </div>

        <div class="flex flex-col items-center lg:items-start">
            <nav class="space-y-2">
                <a href="/posilovna" class="hover:text-yellow-400 block">Posilovna</a>
                <a href="/cenik" class="hover:text-yellow-400 block">Ceník</a>
                <a href="/treneri" class="hover:text-yellow-400 block">Trenéři</a>
                <a href="/rozvrh" class="hover:text-yellow-400 block">Rozvrh lekcí</a>
                <a href="/kontakt" class="hover:text-yellow-400 block">Kontakt</a>
            </nav>
        </div>

        <div class="flex flex-col items-center lg:items-start">
            <div class="flex space-x-4">
                <a href="https://www.instagram.com/beefit_prague/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" class="w-14 h-14 hover:opacity-75" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100066436970231" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" class="w-10 h-8 hover:opacity-75 mt-3" />
                </a>
            </div>
        </div>
    </div>

    <!-- Statutory Data Section -->
    <div class="text-center text-sm text-white mt-10">
        <p>FIT-FAT s.r.o. | IČ: 29012821</p>
        <p>Na Hřebenech II 1718/10, 140 00 Praha 4</p>
        <p>Email: info@beefit.cz</p>
    </div>
</footer>