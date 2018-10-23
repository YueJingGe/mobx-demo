<!-- TOC -->

- [开始](#开始)
- [FAQ](#faq)
  - [SyntaxError: /Users/yuejingge/Desktop/lianxi/mobx-demo/react-mobx/src/stores/TodoStore.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (4:3):](#syntaxerror-usersyuejinggedesktoplianximobx-demoreact-mobxsrcstorestodostorejs-support-for-the-experimental-syntax-decorators-legacy-isnt-currently-enabled-43)
  - [打印出来的store不正确](#打印出来的store不正确)
  - [Attempted import error: 'expr' is not exported from 'mobx'.](#attempted-import-error-expr-is-not-exported-from-mobx)

<!-- /TOC -->

## 开始

```bash
cd react-mobx
npm i
npm run start
```

## FAQ

### SyntaxError: /Users/yuejingge/Desktop/lianxi/mobx-demo/react-mobx/src/stores/TodoStore.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (4:3):

如何让MobX Decorators与Create-React-App v2一起使用？ 

问题原因： 缺少babel插件

解决方法：

```bash
# 安装插件
npm install --save-dev @babel/plugin-proposal-decorators
```

在package.json 中配置(或者webpack 、.babelrc文件，但是配置的格式不太一样)： 

```js
"babel": {
  // 配置插件信息
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
},
"devDependencies": {
  // 安装过文件之后自动生成
  "@babel/plugin-proposal-decorators": "^7.1.2"
}
```

### 打印出来的store不正确

```js
Proxy {0: Proxy, length: 1, Symbol(mobx administration): ObservableArrayAdministration}
  [[Handler]]: Object
  [[Target]]: Array(1)
  [[IsRevoked]]: false
}
```
很奇怪，看不懂。。。

问题原因：打印出来的数据被mobx改造了

解决方法：

```js
import { toJS } from 'mobx';

console.log(toJS(this.props.todoStore));
```

得到的结果就是你想要的：

```js
{todos: Array(1)}
todos: Array(1)
0:
id: 1
task: "吃饭"
__proto__: Object
length: 1
__proto__: Array(0)
__proto__: Object
```

### Attempted import error: 'expr' is not exported from 'mobx'.

使用 import expr from 'mobx'; 报错

Expr 是由 mobx-utils 包提供的。

所以正确的应该是：import expr from 'mobx-utils';