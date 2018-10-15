import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory } from 'react-router';
import * as serviceWorker from './serviceWorker';
import Home from './Pages/Home';
import stores from './stores/index';
import './index.css';

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hashHistory} >
      <Route path="/" component={Home} />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
