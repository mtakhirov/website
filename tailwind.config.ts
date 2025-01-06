import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";
import tw from "tailwindcss/defaultTheme";
import twTypography from "@tailwindcss/typography";
import twAnimation from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",

  theme: {
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
      red: {
        DEFAULT: colors.red[500],
        ...colors.red,
      },
      green: {
        DEFAULT: colors.green[500],
        ...colors.green,
      },
    },
    extend: {
      maxWidth: ({ theme }) => ({
        ...theme("width"),
      }),
      minWidth: ({ theme }) => ({
        ...theme("width"),
      }),
      maxHeight: ({ theme }) => ({
        ...theme("height"),
      }),
      minHeight: ({ theme }) => ({
        ...theme("height"),
      }),

      fontFamily: {
        sans: ["var(--font-geist-sans)", ...tw.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...tw.fontFamily.mono],
      },
    },
  },

  plugins: [twTypography, twAnimation],
};

export default config;
