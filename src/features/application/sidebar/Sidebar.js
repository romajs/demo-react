import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import features from '../features'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'

import * as SidebarItems from './SidebarItems'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

export const _Sidebar = ({ classes, isAuthenticated, open, toggleSidebar }) => (
  <Drawer open={open} onClose={() => toggleSidebar(false)}>
    <div role='button' onClick={() => toggleSidebar(false)}>
      <div className={classes.list}>
        <List>
          {features.home && <SidebarItems.Home />}
          {features.bar && <SidebarItems.Bar />}
          {features.baz && <SidebarItems.Baz />}
        </List>
        <Divider />
        <List>
          {features.privateHome && <SidebarItems.PrivateHome />}
          {features.privateBar && <SidebarItems.PrivateBar />}
          {features.privateBaz && <SidebarItems.PrivateBaz />}
        </List>
        <Divider />
        <List>
          {!isAuthenticated && <SidebarItems.Login />}
          {isAuthenticated && <SidebarItems.Logout />}
        </List>
      </div>
    </div>
  </Drawer>
)

_Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export const Sidebar = withStyles(styles)(_Sidebar)
