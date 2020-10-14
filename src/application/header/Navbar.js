import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { LOGIN } from '../../pages';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const _Navbar = ({ classes, history, isAuthenticated, title, toggleSidebar }) => (
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
          {title}
        </Typography>
        {isAuthenticated ? (
          <AccountCircleIcon />
        ) : (
          <Button color='inherit' onClick={() => history.push(LOGIN.url)}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

_Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  title: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired,
};

_Navbar.defaultProps = {
  title: '',
};

export const Navbar = withRouter(withStyles(styles)(_Navbar));
