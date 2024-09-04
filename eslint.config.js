module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'error',
    'linebreak-style': ['error', 'unix'], // символ(ы) конца строки
    quotes: ['error', 'single'], // использовать одинарные кавычки
    semi: ['error', 'never'], // точка с запятой в конце операторов
    indent: ['error', 4, { SwitchCase: 1 }], // отступы в коде из 4 пробелов с учетом switch...case
    'arrow-parens': ['error', 'as-needed'], // скобки вокруг единственного параметра стрелочной функции
    'object-curly-spacing': ['error', 'always'], // пробелы между скобками в литералах объектов
    'array-bracket-spacing': ['error', 'never'], // пробелы между скобками в массивах
    'quote-props': ['error', 'as-needed'], // свойства объекта в кавычках или без кавычек
    'no-trailing-spaces': 'error', // не должно быть пробелов в конце строки
    'no-tabs': 'error', // символы табуляции в коде запрещена везде
    'comma-dangle': [
      'error',
      {
        // запятая после последнего элемента массива или объекта
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'brace-style': ['error', '1tbs'], // правила для фигурных скобкок для блоков кода
    'keyword-spacing': 'error', // пробел слева и справа для ключевых слов
    'no-multi-spaces': 'error', // не допускается несколько пробелов подряд
    eqeqeq: 'error', // использовать === и !== вместо == и !=
    camelcase: 'error', // имена переменных и функций в стиле camelCase
    'max-len': ['error', 100], // максимальная длина строки
    'no-multiple-empty-lines': 'error', // не больше 2 пустых строк подряд
  },
};
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:prettier/recommended',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['react', 'prettier'],
//   rules: {
//     'no-unused-vars': 'warn', // Предупреждать о неиспользуемых переменных
//     'no-console': 'error', // Предупреждать об использовании console.log()
//     eqeqeq: ['error', 'always'], // Требовать использования === и !==
//     'no-var': 'error', // Запрещать использование var
//     'prefer-const': 'error', // Предпочитать const для переменных, не изменяемых позже
//     'no-multiple-empty-lines': ['error', { max: 1 }], // Запрещать несколько пустых строк подряд
//     quotes: ['error', 'single'], // Использовать одинарные кавычки
//     semi: ['error', 'always'], // Требовать точку с запятой
//     indent: ['error', 2], // Отступ в 2 пробела
//     'linebreak-style': ['error', 'unix'], // Unix-стиль переносов строк (LF)
//     'no-trailing-spaces': 'error', // Запрещать пробелы в конце строк
//     'prettier/prettier': [
//       'error',
//       {
//         singleQuote: true,
//         semi: true,
//         trailingComma: 'all',
//         printWidth: 80,
//         tabWidth: 2,
//         bracketSpacing: true, // Добавляет пробелы внутри фигурных скобок в объектах и импортов
//       },
//     ],
//   },
// };
