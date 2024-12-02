<script>
    import logo from '../images/logo.png';
    import phone from '../images/phone-icon.svg';
    import email from '../images/email-icon.svg';
    import facebook from '../images/facebook-icon.svg';
    import instagram from '../images/instagram-icon.svg';
</script>

<footer class="bg-[#121212] text-white py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo and Slogan -->
      <div class="flex flex-col items-center justify-center">
        <img src={logo} alt="BeeFIT Logo" class="w-32 mb-4" />
      </div>
  
      <!-- Contact Info -->
      <div class="flex flex-col space-y-2 font-body justify-center">
        <div class="flex items-center">
          <img src={phone} alt="Phone Icon" class="w-11 h-11 mr-2" />
          <p class="flex flex-col"><span class="text-yellow">Telefon</span> 733 60 60 02</p>
        </div>
        <div class="flex items-center">
          <img src={email} alt="Email Icon" class="w-10 h-10 mr-3" />
          <p class="flex flex-col"><span class="text-yellow">Email</span> info@beefit.cz</p>
        </div>
      </div>
  
      <!-- Navigation Links & Social Media -->
      <div class="flex md:items-center space-x-20">
        <nav class="space-y-1 flex flex-col">
          <a href="/gym" class="hover:text-yellow-400">Posilovna</a>
          <a href="/pricing" class="hover:text-yellow-400">Ceník</a>
          <a href="/trainers" class="hover:text-yellow-400">Trenéři</a>
          <a href="/schedule" class="hover:text-yellow-400">Rozvrh lekcí</a>
          <a href="/contact" class="hover:text-yellow-400">Kontakt</a>
        </nav>
        <div class="flex space-x-4 mt-4 items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" class="w-12 h-12 hover:opacity-75" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" class="w-8 h-6 hover:opacity-75" />
          </a>
        </div>
      </div>
    </div>
</footer>