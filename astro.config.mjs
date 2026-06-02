import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://nucleo-ufsc.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), keystatic()],
});