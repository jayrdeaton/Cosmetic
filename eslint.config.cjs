const { defineConfig } = require('eslint/config')
const base = require('@infinitetoken/eslint-config/npm-package')

module.exports = defineConfig([
  ...base,
  {
    ignores: ['examples/**', '.tsup/**', 'jest.setup.cjs', 'jest.config.cjs', 'src/__tests__/**', 'tsup.config.ts']
  }
])
