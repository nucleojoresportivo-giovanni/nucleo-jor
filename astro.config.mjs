import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ixporte.vercel.app',
  output: 'server',
  adapter: vercel(),
  security: {
    allowedDomains: [
      { hostname: 'ixporte.vercel.app', protocol: 'https' },
      { hostname: '*.vercel.app', protocol: 'https' },
    ],
  },
  integrations: [tailwind(), react(), keystatic()],
  vite: {
    resolve: {
      dedupe: ['yjs'],
    },
    optimizeDeps: {
      include: ['yjs'],
    },
  },
});