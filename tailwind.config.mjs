import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mvw: {
          text: '#111111',
          rasp: '#D9043D',
          yellow: '#E5FF1E',
          blue: '#273859',
          neutral1: '#F7F7F7',
          neutral2: '#EAEAEA'
        }
      },
      fontFamily: {
        display: ['"Monument Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Untitled Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lyric: ['"ABC Diatype"', '"Untitled Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        wideish: '0.02em'
      }
    }
  },
  plugins: []
})
