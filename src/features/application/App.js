import { ConnectedRouter } from 'connected-react-router'
import { Redirect, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { BarPage } from '../bar/BarPage'
import { BazPage } from '../baz/BazPage'
import { FullLoading } from '../misc/loading/FullLoading'
import { HomePage } from '../home/HomePage'
import { LoginPageContainer } from '../auth/LoginPageContainer'
import { PageContainer } from './page/PageContainer'
import { PrivateBarPage } from '../privateBar/PrivateBarPage'
import { PrivateBazPage } from '../privateBaz/PrivateBazPage'
import { PrivateHomePageContainer } from '../privateHome/PrivateHomePageContainer'
import { PrivateRoute } from '../auth/PrivateRoute'
import * as pages from '../../pages'

export const App = ({ history, isAuthenticated, loading }) => (
  <React.Fragment>
    <FullLoading loading={loading} />
    <PageContainer push={history.push} />
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from={pages.ROOT_PATH} to={pages.HOME.url} />
        <Route exact path={pages.BAR.url} component={BarPage} />
        <Route exact path={pages.BAZ.url} component={BazPage} />
        <Route exact path={pages.HOME.url} component={HomePage} />
        <Route exact path={pages.LOGIN.url} component={LoginPageContainer} />
        <PrivateRoute
          exact
          path={pages.PRIVATE_BAR.url}
          component={PrivateBarPage}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path={pages.PRIVATE_BAZ.url}
          component={PrivateBazPage}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path={pages.PRIVATE_HOME.url}
          component={PrivateHomePageContainer}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </ConnectedRouter>
  </React.Fragment>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
}
