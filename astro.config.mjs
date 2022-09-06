import { defineConfig } from "astro/config";

import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://fdemir.dev",
  integrations: [
    robotsTxt({
      sitemap: false,
    }),
    image(),
    compress(),
  ],
});
