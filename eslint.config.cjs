const tsParser = require('@typescript-eslint/parser')
const localPlugin = require('./eslint-plugin-local')

module.exports = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      '.vercel/**',
      '**/*.d.ts'
    ]
  },
  {
    files: ['app/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser, // lets ESLint understand TS & TSX
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }, // allow JSX in TSX/JSX
        project: false
      }
    },
    plugins: {
      local: localPlugin
    },
    rules: {
      'local/require-page-metadata': 'error'
    }
  }
]
