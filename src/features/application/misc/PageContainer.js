import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Header } from './Header'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { toggleSidebar } from '../toggleSidebar'
import { fromUrl } from '../../../pages'

export const _PageContainer = ({
  children,
  isAuthenticated,
  location,
  push,
  sidebarOpen,
  toggleSidebar
}) => {
  const page = fromUrl(location.pathname) || {} // TODO: create middleware for this
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
      {children}
    </React.Fragment>
  )
}

_PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  push: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  location: state.router.location,
  sidebarOpen: state.application.sidebarOpen
})

const mapDispatchToProps = ({
  toggleSidebar
})

export const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PageContainer)
