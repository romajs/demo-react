import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import configureStore from './store/configureStore'
import { AppLoaderContainer } from './container/AppLoaderContainer'
import { HomePage } from './page/HomePage'
import { OtherPage } from './page/OtherPage'

const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <AppLoaderContainer>
      <Router>
        <React.Fragment>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/other' component={OtherPage} />
        </React.Fragment>
      </Router>
    </AppLoaderContainer>
  </Provider>
)

App.propTypes = {
}

App.defaultProps = {
}
