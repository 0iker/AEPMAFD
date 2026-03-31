// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://aepmafd.es",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@styles": path.resolve("./src/styles"),
        "@assets": path.resolve("./src/assets"),
        "@icons": path.resolve("./src/icons"),
      },
    },
  },
});
