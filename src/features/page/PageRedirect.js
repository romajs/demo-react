import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

export const PageRedirect = ({ pathname }) => (
  <Redirect to={{ pathname }} />
)

PageRedirect.propTypes = {
  pathname: PropTypes.string.isRequired
}
