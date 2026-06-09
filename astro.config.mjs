import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://madlenw.github.io/mdef-site/',
  base: '',

  vite: {
    plugins: [tailwindcss()]
  }
})
