import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import astropodConfig from "./.astropod/astropod.config.json";
import dcapConfig from "./decap.config.mjs";

// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  site: astropodConfig.site,
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
    mdx(),
    sitemap(),
    tailwind(),
    NetlifyCMS({
      config: dcapConfig(),
    }),
  ],
});
