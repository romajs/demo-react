import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Main } from '../component/Main'
import loadApplicationActionCreator from '../store/actionCreator/loadApplicationActionCreator'

class _MainContainer extends Component {
  componentDidMount () {
    this.props.loadApplication()
  }

  render () {
    const { loading } = this.props
    if (loading) {
      return <p>loading={loading.toString()}</p>
    }
    return <Main {...this.props} />
  }
}

_MainContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadApplication: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.application.loading
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadApplication: loadApplicationActionCreator
}, dispatch)

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(_MainContainer)
