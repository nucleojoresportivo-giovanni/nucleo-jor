import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nucleo-ufsc.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), keystatic()],
});