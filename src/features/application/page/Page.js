import PropTypes from 'prop-types'
import React from 'react'

import { Header } from '../header/Header'
import { LinearLoading } from '../../misc/loading/LinearLoading'
import { Navbar } from '../header/Navbar'
import { Sidebar } from '../sidebar/Sidebar'

export const Page = ({
  isAuthenticated,
  page,
  pageLoading,
  push,
  sidebarOpen,
  toggleSidebar
}) => {
  return (
    <React.Fragment>
      <Header>
        <div style={{ position: 'absolute', top: '0', width: '100%' }}>
          <LinearLoading loading={pageLoading} />
        </div>
        <Navbar
          isAuthenticated={isAuthenticated}
          pageTitle={page.title}
          showNavbar={page.showNavbar} // TODO: CSSTransition
          toggleSidebar={toggleSidebar}
          push={push}
        />
      </Header>
      <Sidebar
        open={sidebarOpen}
        push={push}
        showSidebar={page.showSidebar} // TODO: CSSTransition
        toggleSidebar={toggleSidebar}
      />
    </React.Fragment>
  )
}

Page.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  page: PropTypes.shape({
    title: PropTypes.string,
    showNavbar: PropTypes.bool,
    showSidebar: PropTypes.bool
  }),
  pageLoading: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

Page.defaultProps = {
  page: {}
}
