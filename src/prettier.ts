// Options · Prettier [https://prettier.io/docs/en/options.html#end-of-line](https://prettier.io/docs/en/options.html)
export default {
  // 超过最大值换行
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  // 句尾添加分号
  "semi": true,
  // 使用单引号代替双引号
  "singleQuote": true,
  "jsxSingleQuote": false,
  // 在对象或数组最后一个元素后面是否加逗号
  "trailingComma": "all",
  "bracketSpacing": true,
  /**
      <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
      >
        Click Here
      </button>
   */
  "jsxBracketSameLine": false,
  // "avoid" - Omit parens when possible. Example: x => x
  // "always" - Always include parens. Example: (x) => x
  "arrowParens": "avoid",
  // linebreak-style - Rules - ESLint中文 [http://eslint.cn/docs/rules/linebreak-style](http://eslint.cn/docs/rules/linebreak-style)
  // "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
  "endOfLine": "lf",
}
