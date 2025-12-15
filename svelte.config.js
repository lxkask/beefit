import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'; // ← zde

import { preprocessMeltUI, sequence } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sequence([
    sveltePreprocess(),
    preprocessMeltUI()
  ]),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),

    typescript: {
      config: (config) => {
        config.include.push('../src/lib/types/**/*.ts');
        return config;
      }
    },

    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['self'],
        'script-src': ['self', 'https://fonts.googleapis.com'],
        'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
        'img-src': ['self', 'data:', 'https://cdn.sanity.io', 'https://maps.google.com', 'https://maps.gstatic.com'],
        'font-src': ['self', 'https://fonts.gstatic.com'],
        'connect-src': ['self', 'https://*.sanity.io', 'https://*.sanity.io'],
        'frame-src': ['https://maps.google.com', 'https://www.google.com'],
        'media-src': ['self']
      }
    }
  }
};

export default config;