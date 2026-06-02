import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://nucleo-ufsc.vercel.app',
  output: 'server',
  integrations: [tailwind(), keystatic()],
});