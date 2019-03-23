import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Header } from './Header'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { toggleSidebar } from '../toggleSidebar'
import { fromUrl } from '../../../pages'

export const _PageContainer = ({ children, location, sidebarOpen, toggleSidebar }) => {
  const page = fromUrl(location.pathname)
  return (
    <React.Fragment>
      <Header>
        <Navbar
          pageTitle={page.title}
          showNavbar={page.showNavbar} // TODO: CSSTransition
          toggleSidebar={toggleSidebar}
        />
      </Header>
      <Sidebar
        open={sidebarOpen}
        showSidebar={page.showSidebar} // TODO: CSSTransition
        toggleSidebar={toggleSidebar}
      />
      {children}
    </React.Fragment>
  )
}

_PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
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
