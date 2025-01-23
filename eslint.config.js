import config from '@antfu/eslint-config'

export default config({
  svelte: true,
  typescript: true,

  formatters: false,
  stylistic: { jsx: false },
})
