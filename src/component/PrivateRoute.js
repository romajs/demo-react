import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { fakeAuth } from '../auth'
import { LoginRedirect } from './LoginRedirect'

export const PrivateRoute = ({ component, ...props }) => {
  const Component = fakeAuth.isAuthenticated ? component : LoginRedirect
  return <Route render={renderProps => <Component {...renderProps} />} {...props} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}
