import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { PageContainer } from './page/PageContainer'
import { routes } from './routes'

export const App = ({ history, isAuthenticated }) => (
  <ConnectedRouter history={history}>
    <PageContainer>
      <Switch>
        {routes.map(([Component, props], index) => (
          <Component
            isAuthenticated={isAuthenticated}
            key={`route=${index}`}
            {...props}
          />
        ))}
      </Switch>
    </PageContainer>
  </ConnectedRouter>
)

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
