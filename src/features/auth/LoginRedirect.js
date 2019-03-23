import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Redirect } from 'react-router-dom'
import { LOGIN } from '../../pages'

export const LoginRedirect = ({ location }) => (
  <Redirect to={{ pathname: LOGIN.url, state: { from: location } }} />
)

LoginRedirect.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
}
