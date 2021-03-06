import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import { BarPage } from '../features/bar/BarPage';
import { BazPage } from '../features/baz/BazPage';
import { HomePage } from '../features/home/HomePage';
import { LoginPageContainer } from '../features/auth/LoginPageContainer';
import { LogoutPageContainer } from '../features/auth/LogoutPageContainer';
import { NotFoundPage } from './page/NotFoundPage';
import { PageContainer } from './page/PageContainer';
import { PrivateBarPage } from '../features/privateBar/PrivateBarPage';
import { PrivateBazPage } from '../features/privateBaz/PrivateBazPage';
import { PrivateHomePage } from '../features/privateHome/PrivateHomePage';
import { PrivateRoute } from '../features/auth/PrivateRoute';
import * as pages from '../pages';
import features from './features';

export const App = ({ history, isAuthenticated }) => (
  <ConnectedRouter history={history}>
    <PageContainer>
      <Switch>
        <Redirect exact from={pages.ROOT_PATH} to={pages.HOME.url} />
        <Route exact path={pages.LOGIN.url} component={LoginPageContainer} />
        <Route exact path={pages.LOGOUT.url} component={LogoutPageContainer} />
        {features.bar && <Route exact path={pages.BAR.url} component={BarPage} />}
        {features.baz && <Route exact path={pages.BAZ.url} component={BazPage} />}
        {features.home && <Route exact path={pages.HOME.url} component={HomePage} />}
        {features.privateBar && <PrivateRoute
          exact
          path={pages.PRIVATE_BAR.url}
          component={PrivateBarPage}
          isAuthenticated={isAuthenticated}
        />}
        {features.privateBaz && <PrivateRoute
          exact
          path={pages.PRIVATE_BAZ.url}
          component={PrivateBazPage}
          isAuthenticated={isAuthenticated}
        />}
        {features.privateHome && <PrivateRoute
          exact
          path={pages.PRIVATE_HOME.url}
          component={PrivateHomePage}
          isAuthenticated={isAuthenticated}
        />}
        <Route component={NotFoundPage} />
      </Switch>
    </PageContainer>
  </ConnectedRouter>
);

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
