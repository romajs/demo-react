import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { App } from './App'
import { loadApplication } from './loadApplication'

class _AppContainer extends React.Component {
  componentDidMount () {
    // this.props.loadApplication()
  }

  render () {
    const { history, isAuthenticated, loading } = this.props
    console.log({ history })
    return (
      <App
        history={history}
        isAuthenticated={isAuthenticated}
        loading={loading}
      />
    )
  }
}

_AppContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // loadApplication: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.application.loading
})

const mapDispatchToProps = ({
  loadApplication
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppContainer)
