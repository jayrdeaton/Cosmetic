// eslint.config.mjs
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  {
    ignores: ['**/dist/*', '**/examples/*', '**/coverage/*', '**/node_modules/*']
  },
  {
    files: ['**/*.ts', '**/*.mjs'],
    languageOptions: {
      parser: tsparser,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
]
