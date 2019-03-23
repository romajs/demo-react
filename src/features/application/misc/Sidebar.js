// import Divider from '@material-ui/core/Divider'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import pages from '../../../pages'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

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
          <List>
            {pages.map((page, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText
                  primary={page.title}
                  onClick={() => history.push(page.url)}
                />
              </ListItem>
            ))}
          </List>
          {/* <Divider />
          <List>
            {['About'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
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

// export const Sidebar = withStyles(styles)(_Sidebar)

export const Sidebar = withRouter(withStyles(styles)(_Sidebar))
