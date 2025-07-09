/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pink-50': '#fdf2f8',
        'pink-200': '#fbcfe8',
        'pink-900': '#831843', // Dark pink for text instead of black
        'pink-800': '#9d174d', // Slightly lighter dark pink
      }
    },
  },
  plugins: [],
}