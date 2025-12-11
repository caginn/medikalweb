import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://caginn.github.io',
  base: '/medikalweb',
  integrations: [tailwind()],
});
