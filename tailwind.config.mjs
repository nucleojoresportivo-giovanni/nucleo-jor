/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nucleo: {
          black: '#0a0a0a',
          gold: '#C9A227',
          white: '#f5f5f0',
          'gold-dark': '#a88620',
        },
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        editorial: ['"Playfair Display"', 'serif'],
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
