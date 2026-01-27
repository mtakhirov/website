import pluginBetterTailwindCss from "eslint-plugin-better-tailwindcss";

/** @type {import("eslint").Linter.Config[]} */
const betterTailwindCssConfig = [
  {
    name: "tkhrv/better-tailwindcss",
    plugins: {
      "better-tailwindcss": pluginBetterTailwindCss,
    },
    rules: {
      // Recommended Rules
      ...pluginBetterTailwindCss.configs["recommended"].rules,

      // Stylistic Rules
      "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { preferSingleLine: true }],
      "better-tailwindcss/no-deprecated-classes": ["error"],

      // Correctness Rules
      "better-tailwindcss/no-unregistered-classes": ["error", { ignore: ["dark"], detectComponentClasses: true }],
      "better-tailwindcss/no-restricted-classes": ["error", { restrict: ["^\\*+:.*"] }],
    },
    settings: {
      "better-tailwindcss": {
        rootFontSize: "16px",
        messageStyle: "compact",
        detectComponentClasses: true,
        entryPoint: "src/assets/css/tailwind.css",
      },
    },
  },
];

export default betterTailwindCssConfig;
