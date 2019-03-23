import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadApplication } from './loadApplication'

class _Container extends Component {
  componentDidMount () {
    this.props.loadApplication()
  }

  render () {
    const { loading } = this.props
    if (loading) {
      return <p>loading={loading.toString()}</p>
    }
    return this.props.children
  }
}

_Container.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
  loadApplication: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.application.loading
})

const mapDispatchToProps = ({
  loadApplication
})

export const AppLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(_Container)
