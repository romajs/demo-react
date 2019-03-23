import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { fakeAuth } from '../../auth'
import { LOGIN } from '../../pages'
import withPageRedirect from '../page/withPageRedirect'

export const PrivateRoute = ({ component, ...props }) => {
  const Component = fakeAuth.isAuthenticated ? component : withPageRedirect(LOGIN.url)
  return <Route render={renderProps => <Component {...renderProps} />} {...props} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}
