import defineConfig from "@antfu/eslint-config";

/** Plugins */
import next from "@next/eslint-plugin-next";
import tailwindcss from "eslint-plugin-tailwindcss";

const twOptions = {
  callees: ["clsx", "cva", "cn"],
  classRegex: "^class(Name)?$",
};

export default defineConfig(
  {
    jsx: true,
    jsonc: false,
    test: true,
    gitignore: true,

    markdown: true,
    regexp: true,
    react: true,
    typescript: true,

    formatters: {
      css: true,
      svg: true,
      markdown: true,
    },

    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
      overrides: {
        "style/arrow-parens": "off",
        "style/brace-style": "off",
        "style/jsx-one-expression-per-line": "off",
      },
    },

    rules: {
      "antfu/if-newline": "warn",
    },
  },
  {
    name: "tailwindcss:recommended",
    plugins: { tailwindcss },

    rules: {
      "tailwindcss/classnames-order": ["error", twOptions],
      "tailwindcss/enforces-negative-arbitrary-values": ["error", twOptions],
      "tailwindcss/enforces-shorthand": ["error", twOptions],
      "tailwindcss/migration-from-tailwind-2": ["error", twOptions],
      "tailwindcss/no-contradicting-classname": ["error", twOptions],
      "tailwindcss/no-custom-classname": ["error", twOptions],
      "tailwindcss/no-unnecessary-arbitrary-value": ["error", twOptions],
    },
  },
  {
    name: "next:recommended",
    plugins: { next },

    rules: {
      // warnings
      "next/google-font-display": "warn",
      "next/google-font-preconnect": "warn",
      "next/next-script-for-ga": "warn",
      "next/no-async-client-component": "warn",
      "next/no-before-interactive-script-outside-document": "warn",
      "next/no-css-tags": "warn",
      "next/no-head-element": "warn",
      "next/no-html-link-for-pages": "warn",
      "next/no-img-element": "warn",
      "next/no-page-custom-font": "warn",
      "next/no-styled-jsx-in-document": "warn",
      "next/no-sync-scripts": "warn",
      "next/no-title-in-document-head": "warn",
      "next/no-typos": "warn",
      "next/no-unwanted-polyfillio": "warn",
      // errors
      "next/inline-script-id": "error",
      "next/no-assign-module-variable": "error",
      "next/no-document-import-in-page": "error",
      "next/no-duplicate-head": "error",
      "next/no-head-import-in-document": "error",
      "next/no-script-component-in-head": "error",
    },
  },
);
