import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex()],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),

    // An object containing zero or more aliases used to replace values in import statements. These aliases are
    // automatically passed to Vite and TypeScript.
    alias: {
      "#/*": "./src/*",

      "$components": "./src/components",
      "$components/*": "./src/components/*",

      "$assets": "./src/assets",
      "$assets/*": "./src/assets/*",
    },
  },

  extensions: [".svelte", ".svx", ".mdx"],
};

export default config;
