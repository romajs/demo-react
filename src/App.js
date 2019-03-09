import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { Main } from './component/Main'

const store = configureStore()

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

App.propTypes = {
}

App.defaultProps = {
}
