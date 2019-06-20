import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const _CircularLoading = ({ classes }) => (
  <CircularProgress className={classes.progress} />
);

_CircularLoading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CircularLoading = withStyles(styles)(_CircularLoading);
