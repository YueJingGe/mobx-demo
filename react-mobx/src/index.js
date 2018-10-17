import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import TodoApp from './components/TodoApp';
import stores from './stores/index';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(
  <Provider {...stores}>
    <TodoApp/>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
