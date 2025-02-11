import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/*.test.js'], // Defina os arquivos/padrões a serem ignorados
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
    },
  }),
]

export default eslintConfig
