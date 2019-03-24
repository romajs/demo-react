import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

import { LOGOUT } from '../../pages'

export const _PrivateHomePage = ({ isAuthenticated, push }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Private</h1>
    <p>isAuthenticated={isAuthenticated.toString()}</p>
    <Button color='inherit' onClick={() => push(LOGOUT.url)}>Logout</Button>
  </div>
)

_PrivateHomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = ({
  push
})

export const PrivateHomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PrivateHomePage)
