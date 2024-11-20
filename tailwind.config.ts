import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        '2xl': '2rem',
      },
      screens: {
        '2xl': '80rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        canvas: 'hsl(var(--canvas))',
        panel: 'hsl(var(--panel))',
        fg: {
          DEFAULT: 'hsl(var(--fg-default))',
          muted: 'hsl(var(--fg-muted))',
        },
        accent: 'hsl(var(--accent))',
      },
    },
  },
  plugins: [],
} satisfies Config
