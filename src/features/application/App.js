import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { FullLoading } from '../misc/loading/FullLoading'
import { HomePage } from '../home/HomePage'
import { LoginPageContainer } from '../auth/LoginPageContainer'
import { PageContainer } from './misc/PageContainer'
import { PrivatePageContainer } from '../example/PrivatePageContainer'
import { PrivateRoute } from '../auth/PrivateRoute'
import * as pages from '../../pages'

export const App = ({ history, isAuthenticated, loading }) => (
  <React.Fragment>
    <FullLoading loading={loading} />
    <ConnectedRouter history={history}>
      <PageContainer push={history.push}>
        <Switch>
          <Redirect exact from={pages.ROOT_PATH} to={pages.HOME.url} />
          <Route exact path={pages.HOME.url} component={HomePage} />
          <Route exact path={pages.LOGIN.url} component={LoginPageContainer} />
          <PrivateRoute exact path={pages.PRIVATE.url} component={PrivatePageContainer} isAuthenticated={isAuthenticated} />
        </Switch>
      </PageContainer>
    </ConnectedRouter>
  </React.Fragment>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
}
