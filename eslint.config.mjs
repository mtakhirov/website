import js from "@eslint/js";
import globals from "globals";
import path from "node:path";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";

// Config/Plugins
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const twOptions = {
  callees: ["clsx", "cva", "cn"],
  classRegex: "^class(Name)?$",
};

const config = [
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "next",
      "next/typescript",
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:prettier/recommended",
      "prettier",
    ),
  ),
  {
    plugins: {
      "react-hooks": fixupPluginRules(reactHooks),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "tailwindcss": fixupPluginRules(tailwindcss),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],

      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
        },
      ],
      "tailwindcss/classnames-order": ["error", twOptions],
      "tailwindcss/enforces-negative-arbitrary-values": ["error", twOptions],
      "tailwindcss/enforces-shorthand": ["error", twOptions],
      "tailwindcss/migration-from-tailwind-2": ["error", twOptions],
      "tailwindcss/no-contradicting-classname": ["error", twOptions],
      "tailwindcss/no-custom-classname": ["error", twOptions],
      "tailwindcss/no-unnecessary-arbitrary-value": ["error", twOptions],
    },
  },
];

export default config;
