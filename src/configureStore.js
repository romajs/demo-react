import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

export default function configureStore (preloadedState) {
  const middlewares = [reduxThunk]

  if (process.env.REACT_APP_USE_REDUX_LOGGER === 'true') {
    middlewares.push(reduxLogger)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
