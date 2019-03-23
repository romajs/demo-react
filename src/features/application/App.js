import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { PrivateRoute } from '../auth/PrivateRoute'
import { HomePage } from '../home/HomePage'
import { LoginPage } from '../auth/LoginPage'
import { PrivatePage } from '../example/PrivatePage'
import { PageContainer } from './misc/PageContainer'

export const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <PageContainer>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/private' component={PrivatePage} />
      </Switch>
    </PageContainer>
  </ConnectedRouter>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}
