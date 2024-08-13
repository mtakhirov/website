import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/sections/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
