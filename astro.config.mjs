import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Custom domain deploy (root path). This keeps asset URLs correct on sysaglik.com.tr.
  site: 'https://sysaglik.com.tr',
  integrations: [tailwind()],
});
