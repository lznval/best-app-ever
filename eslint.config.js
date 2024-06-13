module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'warn', // Предупреждать о неиспользуемых переменных
    'no-console': 'warn', // Предупреждать об использовании console.log()
    eqeqeq: ['error', 'always'], // Требовать использования === и !==
    'no-var': 'error', // Запрещать использование var
    'prefer-const': 'error', // Предпочитать const для переменных, не изменяемых позже
    'no-multiple-empty-lines': ['error', { max: 1 }], // Запрещать несколько пустых строк подряд
    quotes: ['error', 'single'], // Использовать одинарные кавычки
    semi: ['error', 'always'], // Требовать точку с запятой
    indent: ['error', 2], // Отступ в 2 пробела
    'linebreak-style': ['error', 'unix'], // Unix-стиль переносов строк (LF)
    'no-trailing-spaces': 'error', // Запрещать пробелы в конце строк
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
        bracketSpacing: true, // Добавляет пробелы внутри фигурных скобок в объектах и импортов
      },
    ],
  },
};
