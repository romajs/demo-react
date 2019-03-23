import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configureStore from '../../configureStore'
import { AppLoaderContainer } from './AppLoaderContainer'
import { PrivateRoute } from '../auth/PrivateRoute'
import { HomePage } from '../home/HomePage'
import { LoginPage } from '../auth/LoginPage'
import { PrivatePage } from '../example/PrivatePage'

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
