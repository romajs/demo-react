import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import { toggleSidebar } from '../sidebar/toggleSidebar';
import { fromUrl } from '../../../pages';
import { Page } from './Page';

export const _PageContainer = ({
  children,
  isAuthenticated,
  location,
  pageLoading,
  sidebarOpen,
  toggleSidebar,
}) => (
  <Page
    isAuthenticated={isAuthenticated}
    location={location}
    page={fromUrl(location.pathname)}
    pageLoading={pageLoading}
    sidebarOpen={sidebarOpen}
    toggleSidebar={toggleSidebar}
  >
    {children}
  </Page>
);

_PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  location: state.router.location,
  pageLoading: state.application.pageLoading,
  sidebarOpen: state.application.sidebarOpen,
});

const mapDispatchToProps = ({
  toggleSidebar,
});

export const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PageContainer);
