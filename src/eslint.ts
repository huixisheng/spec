// 大部分参考 https://github.com/umijs/fabric/blob/master/src/eslint.ts
const eslint = {
  extends: [
    'react-app',
    'airbnb',
    // "plugin:jsx-a11y/recommended"
    'airbnb-typescript',
    // ~~关闭很多规则，不建议使用~~ https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    // 为保持项目格式统一
    'prettier',
    'prettier/react',
     "prettier/@typescript-eslint",
  ].map(key => require.resolve(`eslint-config-${key}`)),
  plugins: ['jest', 'eslint-comments'],
  "parserOptions": {
    "sourceType": "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  // 部分关闭规则参考 https://github.com/umijs/fabric/blob/master/src/eslint.ts
  // 部分规则结合实际的项目
  rules: {
    // TODO:
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreRegExpLiterals": true,

    }],
    'no-prototype-builtins': 'off',
    'import/no-named-as-default': 'off',
    'array-callback-return': 'off',
    'react/prefer-stateless-function': 'warn',

    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'import/no-cycle': "warn",

    // Conflict with prettier
    // 'arrow-parens': ['error', 'as-needed', { "requireForBlockBody": true }],
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    // 'arrow-body-style': ['error', 'as-needed'],
    'arrow-body-style': 'off',

    'no-param-reassign': 'warn',

    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": false,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }],
    // '@typescript-eslint/no-unused-expressions': 'off',
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      "typescript": {
        "alwaysTryTypes": true,
        // "directory": "./tsconfg.json",
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": ['.js', '.jsx', '.ts', '.tsx']
    },
  }
}

export default eslint;
