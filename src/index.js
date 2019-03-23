import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './features/application/App'
import { AppContainer } from './features/application/AppContainer'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
