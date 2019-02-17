import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class HelloMessage extends Component {
  render () {
    return (
      <div>
          Hello, {this.props.name}!
      </div>
    )
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired
}
