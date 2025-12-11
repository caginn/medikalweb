/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        accent: {
          DEFAULT: '#C41E3A', /* Elegant Crimson Red */
          light: '#E63950',
          dark: '#9A1830',
        },
      },
      fontFamily: {
        serif: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
