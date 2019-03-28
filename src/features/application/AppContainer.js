import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { App } from './App'
import { FullLoading } from '../misc/FullLoading/FullLoading'
import { loadApplication } from './loadApplication'

class _AppContainer extends React.Component {
  componentDidMount () {
    this.props.loadApplication()
  }

  render () {
    const {
      history,
      isAuthenticated,
      windowLoading
    } = this.props
    return (
      <React.Fragment>
        <FullLoading loading={windowLoading} />
        {!windowLoading && (
          <App
            history={history}
            isAuthenticated={isAuthenticated}
            loading={windowLoading}
          />
        )}
      </React.Fragment>
    )
  }
}

_AppContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loadApplication: PropTypes.func.isRequired,
  windowLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  windowLoading: state.application.windowLoading
})

const mapDispatchToProps = ({
  loadApplication
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppContainer)
