import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from './application/AppContainer';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

import './i18n'
import './index.css';
import { FullLoading } from './application/loading/FullLoading/FullLoading';

const history = createBrowserHistory();
const store = configureStore({ history });

ReactDOM.render((
  <React.StrictMode>
    <React.Suspense fallback={<FullLoading loading />}>
      <Provider store={store}>
        <AppContainer history={history} />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
), document.getElementById('root'));

registerServiceWorker();
