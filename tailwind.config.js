/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        grey: '#1E1E1E',
        white: '#FFFFFF',
        yellow: '#FFC107',
        yellow_hover: '#FFD54F',
      },
      
			fontFamily: {
				heading: ["'Oswald'", 'sans-serif'],
				body: ["'Roboto'", 'sans-serif']
			}
    },
  },
  plugins: [],
}

