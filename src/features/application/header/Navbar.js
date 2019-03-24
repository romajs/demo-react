import { withStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { LOGIN } from '../../../pages'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const _Navbar = ({ classes, isAuthenticated, pageTitle, push, toggleSidebar }) => (
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color='inherit'
          aria-label='Menu'
          onClick={() => toggleSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' className={classes.grow}>
          {pageTitle}
        </Typography>
        { isAuthenticated ? (
          <AccountCircleIcon />
        ) : (
          <Button color='inherit' onClick={() => push(LOGIN.url)}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  </div>
)

_Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export const Navbar = withStyles(styles)(_Navbar)
