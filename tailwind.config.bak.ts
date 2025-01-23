import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'
import tw from 'tailwindcss/defaultTheme'

// const screens: typeof tw.screens = {}

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',

  theme: {
    container: {
      center: true,
      screens: {},
    },
    fontFamily: {
      sans: ['var(--font-body)', ...tw.fontFamily.sans],
      serif: ['var(--font-body)', ...tw.fontFamily.serif],
      mono: ['var(--font-mono)', ...tw.fontFamily.mono],
    },
    extend: {},
  },

  plugins: [typography],
} satisfies Config
