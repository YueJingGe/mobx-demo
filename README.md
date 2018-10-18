# mobx-demo
学习mobx

# 项目搭建

```bash
# 安装creat-react-app cli
npm install -g create-react-app
# 创建工程
create-react-app react-mobx
# 进入项目
cd react-mobx
# 安装相关依赖
npm install
# 让封装好的配置文件暴露出来
npm run eject
# 本地服务启动
npm run start
```

# 其他集成

## 路由集成

```bash
npm install react-router@3.0.5 --save
```

## 使用todomvc样式 

关于todomvc的知识都在这里： https://github.com/tastejs/todomvc/tree/gh-pages/examples/react

```bash 
npm i todomvc-app-css --save
npm i todomvc-common --save
```

在index.js中引入

```js
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
```
## 按需加载

```js
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading';

// loading组件  引用 react-loading
const LoadingComponent = <ReactLoading type='spokes' color="blue" height={667} width={375} />

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */'../components/Home'),
  loading(){
    return LoadingComponent
  } 
});

const TodoApp = Loadable({
  loader: () => import(/* webpackChunkName: "TodoApp" */'../components/TodoApp'),
  loading(){
    return LoadingComponent
  } 
});
```

# 深入理解mobx

## 概念

mobx的数据流实践的核心概念就是数据模型(model)和数据存储(store)。

### 数据模型

定义数据模型的好处：

- 让数据源变的可控，清晰的了解到定义的数据的类型和含义，通过面向对象的方法，在模型中定义一些属性和方法供创建出来的实例使用。
- 前端数据持久化， 单页应用经常会遇到**多页面数据共享**和**实时更新**的问题，通过定义数据模型，可以避免异步拉取来的数据进行view层渲染之后就被销毁。

### 数据储存

数据储存的主要职责就是将**逻辑**和**状态**从组件中移到一个独立的可测试的单元。

也就是说：Store 就是连接我们的 View 层和 Model 层之间的桥梁，即 ViewModel。

model -> (创建实例) -> store  -> (注入渲染) -> view。