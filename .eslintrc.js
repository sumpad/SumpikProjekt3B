module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    extraFileExtensions: ['.json'],
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', 'react-hooks', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    'simple-import-sort/sort': 'error',
    'import/order': 'off', // to prevent conflicts use simple-import-sort/sort for imports sort instead
    'sort-imports': 'off', // to prevent conflicts use simple-import-sort/sort for imports sort instead
    'import/no-named-as-default': 'off',
    'import/first': 'error',
    'import/default': 'off',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off', // TODO: consider to fix and turn on then
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '__',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
  },
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
