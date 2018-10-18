import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import routerConfig from './router/index';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(routerConfig(), document.getElementById('root'));
serviceWorker.unregister();