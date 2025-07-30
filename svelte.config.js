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
    }
  }
};

export default config;