import PropTypes from 'prop-types'
import React from 'react'

import { Header } from '../header/Header'
import { Navbar } from '../header/Navbar'
import { Sidebar } from '../sidebar/Sidebar'

export const Page = ({
  isAuthenticated,
  page,
  push,
  sidebarOpen,
  toggleSidebar
}) => {
  return (
    <React.Fragment>
      <Header>
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
    title: PropTypes.string.isRequired,
    showNavbar: PropTypes.bool.isRequired,
    showSidebar: PropTypes.bool.isRequired
  }).isRequired,
  push: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}
