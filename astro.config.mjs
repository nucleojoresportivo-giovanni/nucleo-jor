import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nucleo-ufsc.vercel.app',
  integrations: [tailwind()],
});
