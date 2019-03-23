import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import sidebarList from '../../../sidebarList'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

export const _Sidebar = ({ classes, history, open, toggleSidebar }) => {
  return (
    <Drawer open={open} onClose={() => toggleSidebar(false)}>
      <div
        role='button'
        onClick={() => toggleSidebar(false)}
      >
        <div className={classes.list}>
          {sidebarList.map((list, listIndex) => (
            <List>
              {list.map((listItem, listItemIndex) => (
                <ListItem button key={`list-item-${listIndex}-${listItemIndex}`}>
                  <ListItemIcon>
                    <listItem.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={listItem.text}
                    onClick={() => history.push(listItem.url)}
                  />
                </ListItem>

              ))}
            </List>
          )).reduce((acc, cur) => [acc, <Divider />, cur])}
        </div>
      </div>
    </Drawer>
  )
}

_Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export const Sidebar = withRouter(withStyles(styles)(_Sidebar))
