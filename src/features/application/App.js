import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { PrivateRoute } from '../auth/PrivateRoute'
import { HomePage } from '../home/HomePage'
import { LoginPage } from '../auth/LoginPage'
import { PrivatePage } from '../example/PrivatePage'
import { PageContainer } from './misc/PageContainer'
import { ROOT, HOME, LOGIN, PRIVATE } from '../../pages'

export const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <PageContainer>
      <Switch>
        <Route exact path={ROOT.url} component={HomePage} />
        <Route exact path={HOME.url} component={HomePage} />
        <Route exact path={LOGIN.url} component={LoginPage} />
        <PrivateRoute exact path={PRIVATE.url} component={PrivatePage} />
      </Switch>
    </PageContainer>
  </ConnectedRouter>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}
