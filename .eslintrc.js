const path = require('path');

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  // extends: [require.resolve(path.join(__dirname, 'dist/eslint.js'))],
  rules: {
    'no-console': 'off',
  }
};
