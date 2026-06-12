/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ixporte: {
          black: '#000000',
          white: '#FAF8F5',
          red: '#FF0000',
          crimson: '#D50048',
          magenta: '#A90072',
          purple: '#800080',
          'purple-mid': '#560072',
          'purple-deep': '#2A0048',
        },
      },
      fontFamily: {
        headline: ['"Poppins"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        editorial: ['"Poppins"', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};