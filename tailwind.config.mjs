/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '2rem',
      },
      screens: {
        '2xl': '80rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
