import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({ children }) => (
  <div style={{ margin: 0 }}>
    {children}
  </div>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}
