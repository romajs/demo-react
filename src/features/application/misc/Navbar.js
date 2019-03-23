import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

const _Navbar = ({ classes, pageTitle, toggleSidebar }) => (
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
        {/* TODO: verify if user is authenticated */}
        {/* <Button color='inherit'>Login</Button> */}
      </Toolbar>
    </AppBar>
  </div>
)

_Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export const Navbar = withStyles(styles)(_Navbar)
