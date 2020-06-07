## 规范
- create-react-app/index.js at master · facebook/create-react-app [https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)
- airbnb/javascript: JavaScript Style Guide [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- iamturns/eslint-config-airbnb-typescript: Airbnb's ESLint config with TypeScript support [https://github.com/iamturns/eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)


## 参考
- tsconfig.json · TypeScript [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- Compiler Options · TypeScript [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- commitlint - Lint commit messages [https://commitlint.js.org/#/](https://commitlint.js.org/#/)
- Configuration File · Prettier [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)
- 超人气代码格式化工具prettier - 掘金 [https://juejin.im/post/5cc58039f265da03775c5a6f](https://juejin.im/post/5cc58039f265da03775c5a6f)
- 通过阅读 git-config 文档理解 Git 如何使用autocrlf、safecrlf、eol和.gitattributes处理line-ending － 小专栏 [https://xiaozhuanlan.com/topic/4053786912#sectionlfcrlf](https://xiaozhuanlan.com/topic/4053786912#sectionlfcrlf)
- linebreak-style - Rules - ESLint中文 [http://eslint.cn/docs/rules/linebreak-style](http://eslint.cn/docs/rules/linebreak-style)
- EditorConfig [https://editorconfig.org/](https://editorconfig.org/)
- fabric/README.md at master · umijs/fabric [https://github.com/umijs/fabric/blob/master/README.md](https://github.com/umijs/fabric/blob/master/README.md)
- fex-team/styleguide: 文档与源码编写风格 [https://github.com/fex-team/styleguide](https://github.com/fex-team/styleguide)


### eslint
- fabric/eslint.ts at master · umijs/fabric [https://github.com/umijs/fabric/blob/master/src/eslint.ts](https://github.com/umijs/fabric/blob/master/src/eslint.ts)
- create-react-app/index.js at master · facebook/create-react-app [https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)
- 为create-react-app配置ESLint - 掘金 [https://juejin.im/post/5a71b4fbf265da3e2a0de863#heading-8](https://juejin.im/post/5a71b4fbf265da3e2a0de863#heading-8)
- How to integrate Eslint & Prettier in React - Quick Code - Medium [https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4](https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4)
- prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier. [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- react配置eslint+airbnb+Prettier - 掘金 [https://juejin.im/post/5d3da1556fb9a07ed6581b82](https://juejin.im/post/5d3da1556fb9a07ed6581b82)
- ESLint configuration | CodeFlow [https://www.getcodeflow.com/eslint-configuration.html](https://www.getcodeflow.com/eslint-configuration.html)
- Extend “Create React App” with AirBnB’s ESLint config, Prettier, Flow and React Testing Library. [https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672](https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672)
- xojs/xo: ❤️ JavaScript linter with great defaults [https://github.com/xojs/xo](https://github.com/xojs/xo)
- 在Typescript项目中，如何优雅的使用ESLint和Prettier - 掘金 [https://juejin.im/post/5d1d5fe96fb9a07eaf2bae29](https://juejin.im/post/5d1d5fe96fb9a07eaf2bae29)
- Getting Started | eslint-plugin-eslint-comments [https://mysticatea.github.io/eslint-plugin-eslint-comments/](https://mysticatea.github.io/eslint-plugin-eslint-comments/)

0 = off, 1 = warn, 2 = error

### todo
- sindresorhus/eslint-plugin-unicorn: Various awesome ESLint rules [https://github.com/sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## 问题
1、`Parsing error: 'import' and 'export' may appear only with 'sourceType: module'`

```
 "parserOptions": {
      "sourceType": "module"
  }
```
- https://github.com/eslint/eslint/issues/10397


2、输出 eslint 的规则

`npx eslint --print-config rule-config.json > rule-config.json`
- --print-config outputs empty config if called not from config file directory · Issue #6329 · eslint/eslint [https://git.io/JvZfo](https://git.io/JvZfo)
- ESLint 命令行使用 - 简书 [https://www.jianshu.com/p/4133063d1785](https://www.jianshu.com/p/4133063d1785)

3、prettier 会导致部分 eslint 规则失效
- sindresorhus/eslint-plugin-unicorn: Various awesome ESLint rules [https://github.com/sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- Indentation rule conflict with prettier · Issue #372 · typescript-eslint/typescript-eslint [https://git.io/JvZnh](https://git.io/JvZnh)
- eslint-config-prettier/index.js at master · prettier/eslint-config-prettier [https://github.com/prettier/eslint-config-prettier/blob/master/index.js](https://github.com/prettier/eslint-config-prettier/blob/master/index.js)
- 理解 Prettier 并用它统一你的代码风格 | Meteorlxy [https://www.meteorlxy.cn/posts/2019/08/05/understand-and-use-prettier.html](https://www.meteorlxy.cn/posts/2019/08/05/understand-and-use-prettier.html)

3、tsc 生成的文件缩进是4，如何配置2
- tsconfig.json compiler option: indent · Issue #4042 · microsoft/TypeScript [https://git.io/JfM6w](https://git.io/JfM6w)