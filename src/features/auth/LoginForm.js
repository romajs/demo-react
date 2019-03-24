import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

export const LoginForm = ({ isAuthenticated, login }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Login</h1>
    <div>
      <p>isAuthenticated={isAuthenticated.toString()}</p>
      <Button color='inherit' onClick={login}>Login</Button>
    </div>
  </div>
)

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
}
