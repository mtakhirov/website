import type { Config } from "tailwindcss";
import tw from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...tw.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...tw.fontFamily.mono],
      },
      keyframes: {
        shimmer: {
          from: { translateX: "-100%" },
          to: { translateX: "100%" },
        },
        "shimmer-text": {
          from: { backgroundPositionX: "100%" },
          to: { backgroundPositionX: "0%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
