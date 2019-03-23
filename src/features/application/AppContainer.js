import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

import { FullLoading } from '../misc/loading/FullLoading'
import { loadApplication } from './loadApplication'

class _AppContainer extends React.Component {
  componentDidMount () {
    this.props.loadApplication()
  }

  render () {
    const { loading } = this.props
    return (
      <React.Fragment>
        <FullLoading loading={loading} />
        {this.props.children}
      </React.Fragment>
    )
  }
}

_AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  loadApplication: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.application.loading
})

const mapDispatchToProps = ({
  loadApplication
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppContainer)
