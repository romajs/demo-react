import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

import { logout } from '../auth/actions'

export const _PrivatePage = ({ isAuthenticated, logout }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Private</h1>
    <p>isAuthenticated={isAuthenticated.toString()}</p>
    <Button color='inherit' onClick={logout}>Logout</Button>
  </div>
)

_PrivatePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = ({
  logout
})

export const PrivatePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PrivatePage)
