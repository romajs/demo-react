import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import { loadApplication } from './loadApplication'
import { FullLoading } from '../misc/loading/FullLoading'

class _Container extends React.Component {
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
