import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { LOGIN } from '../../pages'

export const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => {
  return <Route render={renderProps => isAuthenticated
    ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={LOGIN.url} />
    )} {...props} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
