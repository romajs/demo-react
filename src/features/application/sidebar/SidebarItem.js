import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { withRouter } from 'react-router-dom'

const _SidebarItem = ({ Icon, history, text, url }) => (
  <ListItem button onClick={() => history.push(url)}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

_SidebarItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default withRouter(_SidebarItem)
