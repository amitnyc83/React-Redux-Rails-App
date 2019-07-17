import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store.js'




ReactDOM.render(
  <Provider store={store} >
   <App />
  </ Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
