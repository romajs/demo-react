import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { FullOverlay } from '../FullOverlay'
import loadingSpinner from './loadingSpinner.svg'

import './loadingTransition.css'

/**
 * Created with https://loading.io
 */

const VerticalAlignImage = styled.img`
  vertical-align: middle;
`

const VerticalAlignHelper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`

export const FullLoading = ({ loading }) => (
  <CSSTransition
    in={loading}
    timeout={400}
    classNames='loading'
    mountOnEnter
    unmountOnExit
  >
    <FullOverlay>
      <VerticalAlignHelper />
      <VerticalAlignImage src={loadingSpinner} />
    </FullOverlay>
  </CSSTransition>
)

FullLoading.propTypes = {
  loading: PropTypes.bool.isRequired
}
