// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tu-agencia-de-capacitacion.com',
  build: {
    assets: 'static'
  }
});