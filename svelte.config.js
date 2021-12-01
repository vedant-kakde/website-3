import adapterNetlify from "@sveltejs/adapter-netlify";
import { mdsvex } from "mdsvex";
import headings from "remark-autolink-headings";
import remarkExternalLinks from "remark-external-links";
import slug from "remark-slug";
import sveltePreprocess from "svelte-preprocess";
import rehypeToc from "@jsdevtools/rehype-toc";
import remarkSetImagePath from "./src/utils/remark-set-image-path.js";
import remarkEmbedVideo from "./src/utils/remark-embed-video.js";
import remarkLinkWithImageAsOnlyChild from "./src/utils/remark-link-with-image-as-only-child.js";
import remarkHeadingsPermaLinks from "./src/utils/remark-headings-permalinks.js";
import { toString } from "mdast-util-to-string";
import { h } from "hastscript";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapterNetlify(),
    amp: false,
    appDir: "_app",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/components",
      routes: "src/routes",
      template: "src/app.html",
    },
    hydrate: true,
    prerender: {
      crawl: true,
      enabled: true,
      onError: "fail",
      entries: ["*"],
    },
    router: true,
    ssr: true,
    target: "#svelte",
    vite: {
      server: {
        hmr: {
          clientPort: process.env.HMR_HOST ? 443 : 3000,
          host: process.env.HMR_HOST
            ? process.env.HMR_HOST.substring("https://".length)
            : "localhost",
        },
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess({ postcss: true, scss: true, preserve: ["ld+json"] }),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "./src/components/blog/blog-content-layout.svelte",
        docs: "./src/components/docs/docs-content-layout.svelte",
        guides: "./src/components/guides/guides-content-layout.svelte",
      },
      rehypePlugins: [
        [
          rehypeToc,
          {
            position: "beforebegin",
          },
        ],
      ],
      remarkPlugins: [
        [
          remarkExternalLinks,
          {
            target: "_blank",
          },
        ],
        slug,
        [
          headings,
          {
            behavior: "append",
            linkProperties: {},
            content: function (node) {
              return [
                h("span.icon.icon-link", {
                  ariaLabel: toString(node) + " permalink",
                }),
              ];
            },
          },
        ],
        remarkSetImagePath,
        remarkLinkWithImageAsOnlyChild,
        remarkHeadingsPermaLinks,
        [
          remarkEmbedVideo,
          {
            width: 800,
            height: 400,
            noIframeBorder: true,
          },
        ],
      ],
    }),
  ],
};

export default config;
