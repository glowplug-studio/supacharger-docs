const js = require('@eslint/js');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  js.configs.recommended,
  {
    ignores: [
      // Build and generated directories
      '.docusaurus/**/*',
      'build/**/*',
      
      // Dependencies
      'node_modules/**/*',
      
      // Static assets
      'static/**/*',
      
      // Documentation files (markdown)
      'docs/**/*.md',
      'blog/**/*.md',
      'blog/**/*.mdx',
      'src/pages/**/*.md',
      
      // Configuration files that don't need linting
      'babel.config.js',
      'package-lock.json',
      'pnpm-lock.yaml',
      
      // Generated files
      '*.log',
      '*.lock',
      
      // IDE and system files
      '.DS_Store',
      'Thumbs.db',
      '.vscode/**/*',
      '.idea/**/*',
      
      // Temporary files
      '*.tmp',
      '*.temp',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
