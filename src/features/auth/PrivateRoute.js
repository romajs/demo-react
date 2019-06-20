import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import { LOGIN } from '../../pages';

export const _PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => (
  <Route render={renderProps => isAuthenticated
    ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={LOGIN.url} />
    )} {...props} />
);

_PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export const PrivateRoute = connect(
  mapStateToProps,
  undefined
)(_PrivateRoute);
