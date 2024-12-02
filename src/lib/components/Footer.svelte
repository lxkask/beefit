<script>
    import logo from '../images/logo.png';
    import phone from '../images/phone-icon.svg';
    import email from '../images/email-icon.svg';
</script>

<footer class="bg-[#121212] text-white py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo and Slogan -->
      <div class="flex flex-col items-start">
        <img src={logo} alt="BeeFIT Logo" class="w-32 mb-4" />
      </div>
  
      <!-- Contact Info -->
      <div class="flex flex-col space-y-2">
        <div class="flex items-center">
          <img src={phone} alt="Phone Icon" class="w-6 h-6 mr-2" />
          <p><span class="text-yellow-400">Telefon</span> 733 60 60 02</p>
        </div>
        <div class="flex items-center">
          <img src={email} alt="Email Icon" class="w-6 h-6 mr-2" />
          <p><span class="text-yellow-400">Email</span> info@beefit.cz</p>
        </div>
      </div>
  
      <!-- Navigation Links & Social Media -->
      <div class="flex flex-col md:items-end space-y-2">
        <nav class="space-y-1">
          <a href="/gym" class="hover:text-yellow-400">Posilovna</a>
          <a href="/pricing" class="hover:text-yellow-400">Ceník</a>
          <a href="/trainers" class="hover:text-yellow-400">Trenéři</a>
          <a href="/schedule" class="hover:text-yellow-400">Rozvrh lekcí</a>
          <a href="/contact" class="hover:text-yellow-400">Kontakt</a>
        </nav>
        <div class="flex space-x-4 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.svg" alt="Instagram" class="w-6 h-6 hover:opacity-75" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.svg" alt="Facebook" class="w-6 h-6 hover:opacity-75" />
          </a>
        </div>
      </div>
    </div>
</footer>