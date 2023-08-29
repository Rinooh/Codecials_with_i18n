import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), compress(), svelte()],
  css: {
    postcss: true
  },
  snowpack: {
    routes: {
      '/*': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable'
        }
      }
    }
  },
});