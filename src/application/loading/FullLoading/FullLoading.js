import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FullOverlay } from '../FullOverlay';
import { CircularLoading } from '../CircularLoading';

import './FullLoading.css';

const VerticalAlignHelper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

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
      <CircularLoading />
    </FullOverlay>
  </CSSTransition>
);

FullLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
