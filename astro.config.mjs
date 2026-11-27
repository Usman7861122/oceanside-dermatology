// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.oceansidederm.com',
  integrations: [react(), sitemap()],
  // Keep the old site's doctor page address working.
  redirects: {
    '/meet-our-doctor': '/dr-sophia-sandhu',
    '/terms-conditions': '/terms',
    '/privacy-policy': '/privacy',
    '/contact-us': '/contact',
    // Old site category pages
    '/medical-dermatology/torrance-ca': '/medical-dermatology',
    '/surgical-dermatology/torrance-ca': '/surgical-dermatology',
    '/cosmetic-dermatology/torrance-ca': '/cosmetic-dermatology',
    '/pediatric-dermatology/torrance-ca': '/pediatric-dermatology',
    '/teledermatology/torrance-ca': '/teledermatology',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});