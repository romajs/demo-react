import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

export const NotFoundPage = ({ location }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Not found</h1>
    <div>
      <p>No match found for: <strong>{location.pathname}</strong></p>
    </div>
  </div>
);

NotFoundPage.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};
