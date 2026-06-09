import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://home.to-home.org',
  base: '',

  vite: {
    plugins: [tailwindcss()]
  }
})
