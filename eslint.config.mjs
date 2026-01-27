import next from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

import betterTailwindCssConfig from "./.config/eslint/better-tailwindcss.mjs";
import perfectionistConfig from "./.config/eslint/perfectionist.mjs";
import stylisticConfig from "./.config/eslint/stylistic.mjs";

export default defineConfig([
  ...next,
  ...nextTypeScript,

  ...stylisticConfig,
  ...perfectionistConfig,
  ...betterTailwindCssConfig,

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
