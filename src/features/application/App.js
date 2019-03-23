import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { HomePage } from '../home/HomePage'
import { LoginPage } from '../auth/LoginPage'
import { PageContainer } from './misc/PageContainer'
import { PrivatePage } from '../example/PrivatePage'
import { PrivateRoute } from '../auth/PrivateRoute'
import { RootPage } from '../page/RootPage'
import * as pages from '../../pages'

export const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <PageContainer>
      <Switch>
        <Route exact path={pages.ROOT.url} component={RootPage} />
        <Route exact path={pages.HOME.url} component={HomePage} />
        <Route exact path={pages.LOGIN.url} component={LoginPage} />
        <PrivateRoute exact path={pages.PRIVATE.url} component={PrivatePage} />
      </Switch>
    </PageContainer>
  </ConnectedRouter>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}
