
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable'; // 按需加载
import ReactLoading from 'react-loading';
import stores from '../stores/index';
import App from '../containers/App';

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

export default function routerConfig() {
  return <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home}/>
        <Route path="/todos" component={TodoApp}/>
      </Route>
    </Router>
  </Provider>
}
