import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configureStore from './store/configureStore'
import { AppLoaderContainer } from './container/AppLoaderContainer'
import { PrivateRoute } from './component/PrivateRoute'
import { HomePage } from './page/HomePage'
import { LoginPage } from './page/LoginPage'
import { PrivatePage } from './page/PrivatePage'

const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <AppLoaderContainer>
      <Router>
        <React.Fragment>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRoute exact path='/private' component={PrivatePage} />
        </React.Fragment>
      </Router>
    </AppLoaderContainer>
  </Provider>
)

App.propTypes = {
}

App.defaultProps = {
}
