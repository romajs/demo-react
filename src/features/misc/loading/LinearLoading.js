import { CSSTransition } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import React from 'react';

import './Loading.css';

const _LinearLoading = ({ loading }) => (
  <CSSTransition
    in={loading}
    timeout={400}
    classNames='loading'
    mountOnEnter
    unmountOnExit
  >
    <LinearProgress />
  </CSSTransition>
);

_LinearLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export const LinearLoading = withStyles({})(_LinearLoading);
