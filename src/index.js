import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from './features/application/AppContainer';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createBrowserHistory();
const store = configureStore({ history });

ReactDOM.render((
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
