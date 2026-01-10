import { defineConfig, globalIgnores } from "eslint/config";

import next from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginPerfectionist from "eslint-plugin-perfectionist";

const stylisticConfig = pluginStylistic.configs.customize({
  semi: true,
  indent: 2,
  quotes: "double",
});

const perfectionistRules = {
  "perfectionist/sort-exports": ["error", { order: "asc", type: "natural" }],
  "perfectionist/sort-imports": ["error", {
    groups: [
      "type",
      ["parent-type", "sibling-type", "index-type", "internal-type"],

      "builtin",
      "external",
      "internal",
      ["parent", "sibling", "index"],
      "side-effect",
      "object",
      "unknown",
    ],
    newlinesBetween: "ignore",
    order: "asc",
    type: "natural",
  }],
  "perfectionist/sort-named-exports": ["error", { order: "asc", type: "natural" }],
  "perfectionist/sort-named-imports": ["error", { order: "asc", type: "natural" }],
};

const eslintConfig = defineConfig([
  ...next,
  ...nextTypeScript,

  {
    name: "tkhrv/stylistic",
    plugins: {
      "@stylistic": pluginStylistic,
    },
    rules: {
      ...stylisticConfig.rules,
    },
  },

  {
    name: "tkhrv/perfectionist",
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      ...perfectionistRules,
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
