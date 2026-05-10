import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://workshop.tonluccas.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dev'),
    }),
    icon({
      // Bundle only the solar icons we actually use — keeps build small.
      // Dynamic icon names in FiveSituations.astro resolve at runtime against
      // this allowlist.
      include: {
        solar: [
          'check-circle-bold',
          'check-circle-linear',
          'user-id-linear',
          'posts-carousel-vertical-linear',
          'gallery-linear',
          'hashtag-circle-linear',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
