import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

export default function configureStore (preloadedState) {
  const isDevelopment = (process.env.NODE_ENV === 'development')

  const middlewares = [reduxThunk]

  if (isDevelopment) {
    middlewares.push(reduxLogger)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (isDevelopment && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
