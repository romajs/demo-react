import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

import { login } from './actions'
import { LoginForm } from './LoginForm'
import { PRIVATE } from '../../pages'

export const _LoginPageContainer = ({ isAuthenticated, login }) => (
  isAuthenticated ? (
    <Redirect to={PRIVATE.url} />
  ) : (
    <LoginForm
      isAuthenticated={isAuthenticated}
      login={login}
    />
  )
)

_LoginPageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = ({
  login
})

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LoginPageContainer)
