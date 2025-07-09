// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    icon({
      include: {
        mdi: ['instagram', 'email-outline', 'linkedin'],
        ic: ['baseline-tiktok']
      }
    })
  ]
});
