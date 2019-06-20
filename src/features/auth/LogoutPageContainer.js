import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import { logout } from './actions';
import { LOGIN } from '../../pages';

export class _LogoutPageContainer extends React.Component {
  componentWillMount () {
    this.props.logout();
  }

  render () {
    return (
      <Redirect to={LOGIN.url} />
    );
  }
}

_LogoutPageContainer.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  logout,
});

export const LogoutPageContainer = connect(
  null,
  mapDispatchToProps
)(_LogoutPageContainer);
