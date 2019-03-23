import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import { PrivateRoute } from '../auth/PrivateRoute'
import { HomePage } from '../home/HomePage'
import { LoginPage } from '../auth/LoginPage'
import { PrivatePage } from '../example/PrivatePage'
import { PageContainer } from './misc/PageContainer'

export const App = () => (
  <Router>
    <PageContainer>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/private' component={PrivatePage} />
      </Switch>
    </PageContainer>
  </Router>
)

App.propTypes = {
}

App.defaultProps = {
}
