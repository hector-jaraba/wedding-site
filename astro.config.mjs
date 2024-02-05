import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import critters from "astro-critters";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), svelte(), critters()],
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "be"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  experimental: {
    optimizeHoistedScript: true,
  },
});
