import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact, { rules } from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
      'react/prop-types': 'off',
      // Неиспользуемые переменные запрещены, но разрешены, если начинаются с подчеркивания
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Запрещать неявные `any` типы в TypeScript
      // Иные правила...
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
];
