import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { MainContainer } from './container/MainContainer'

const store = configureStore()

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}

App.propTypes = {
}

App.defaultProps = {
}
