/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        white: '#FFFFFF',
        yellow: '#FFC107',
      },
      
			fontFamily: {
				heading: ["'Oswald'", 'sans-serif'],
				body: ["'Roboto'", 'sans-serif']
			}
    },
  },
  plugins: [],
}

