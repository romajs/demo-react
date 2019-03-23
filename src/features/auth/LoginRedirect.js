import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Redirect } from 'react-router-dom'

export const LoginRedirect = ({ location }) => (
  <Redirect to={{ pathname: '/login', state: { from: location } }} />
)

LoginRedirect.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
}
