import PropTypes from 'prop-types'
import React from 'react'

import { Header } from '../header/Header'
import { LinearLoading } from '../../misc/loading/LinearLoading'
import { Navbar } from '../header/Navbar'
import { Sidebar } from '../sidebar/Sidebar'

export const Page = ({
  children,
  isAuthenticated,
  page,
  pageLoading,
  sidebarOpen,
  toggleSidebar
}) => (
  <React.Fragment>
    <Header>
      <div style={{ position: 'absolute', top: '0', width: '100%' }}>
        <LinearLoading loading={pageLoading} />
      </div>
      <Navbar
        isAuthenticated={isAuthenticated}
        showNavbar={page.showNavbar} // TODO: CSSTransition
        title={page.title}
        toggleSidebar={toggleSidebar}
      />
    </Header>
    <Sidebar
      isAuthenticated={isAuthenticated}
      open={sidebarOpen}
      showSidebar={page.showSidebar} // TODO: CSSTransition
      toggleSidebar={toggleSidebar}
    />
    {children}
  </React.Fragment>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  page: PropTypes.shape({
    title: PropTypes.string,
    showNavbar: PropTypes.bool,
    showSidebar: PropTypes.bool
  }),
  pageLoading: PropTypes.bool.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

Page.defaultProps = {
  page: {}
}
