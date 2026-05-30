const { defineConfig } = require('eslint/config')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const tsParser = require('@typescript-eslint/parser')
const tsEslint = require('typescript-eslint')
const packageJson = require('eslint-plugin-package-json')

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'lib/**', 'coverage/**', 'examples/**', '**/*.js', 'jest.setup.cjs', 'jest.config.cjs', 'src/__tests__/**']
  },
  ...tsEslint.configs.recommended,
  prettierRecommended,
  packageJson.configs.recommended,
  {
    extends: [packageJson.configs.recommended],
    files: ['package.json'],
    rules: {
      'package-json/order-properties': 'warn',
      'package-json/sort-collections': 'warn'
    }
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
])
