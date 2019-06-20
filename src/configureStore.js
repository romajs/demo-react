
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import createRootReducer from './createRootReducer';

export default ({ history, preloadedState }) => {
  const middlewares = [
    reduxThunk,
    routerMiddleware(history),
  ];

  if (process.env.REACT_APP_USE_REDUX_LOGGER === 'true') {
    middlewares.push(reduxLogger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(createRootReducer(history), preloadedState, composedEnhancers);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./createRootReducer', () => store.replaceReducer(createRootReducer(history)));
  }

  return store;
};
