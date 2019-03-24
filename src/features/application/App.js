import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { FullLoading } from '../misc/loading/FullLoading'
import { PageContainer } from './page/PageContainer'
import { routes } from './routes'

export const App = ({ history, isAuthenticated, loading }) => (
  <React.Fragment>
    <FullLoading loading={loading} />
    <PageContainer push={history.push} />
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(([Component, props], index) => (
          <Component
            isAuthenticated={isAuthenticated}
            key={`route=${index}`}
            {...props}
          />
        ))}
      </Switch>
    </ConnectedRouter>
  </React.Fragment>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
}
