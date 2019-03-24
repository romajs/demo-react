import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import sidebarList from '../../../sidebarList'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

export const _Sidebar = ({ classes, push, open, toggleSidebar }) => (
  <Drawer open={open} onClose={() => toggleSidebar(false)}>
    <div
      role='button'
      onClick={() => toggleSidebar(false)}
    >
      <div className={classes.list}>
        {sidebarList.map((list, listIndex) => (
          <List key={`list-${listIndex}`}>
            {list.map((listItem, listItemIndex) => (
              <ListItem button key={`list-item-${listIndex}-${listItemIndex}`}>
                <ListItemIcon>
                  {listItem.icon ? (
                    <listItem.icon />
                  ) : (
                    <React.Fragment />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={listItem.text}
                  onClick={() => push(listItem.url)}
                />
              </ListItem>
            ))}
          </List>
        )).reduce((acc, cur, index) => (
          [acc, <Divider key={`divider-${index}`} />, cur]
        ))}
      </div>
    </div>
  </Drawer>
)

_Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export const Sidebar = withStyles(styles)(_Sidebar)
