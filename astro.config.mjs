// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Keep the old site's doctor page address working.
  redirects: { '/meet-our-doctor': '/dr-sophia-sandhu' },

  vite: {
    plugins: [tailwindcss()]
  }
});