import config from "@antfu/eslint-config";
import readableTailwind from "eslint-plugin-readable-tailwind";

export default config(
  {
    svelte: true,
    typescript: true,

    formatters: false,
    stylistic: {
      semi: true,
      quotes: "double",
      jsx: false,
    },
  },
  {
    name: "readable-tailwind:recommended",
    plugins: { "readable-tailwind": readableTailwind },
    rules: {
      ...readableTailwind.configs.error.rules,
      "readable-tailwind/multiline": ["error", { group: "emptyLine" }],
    },
  },
);
