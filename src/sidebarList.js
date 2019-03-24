import * as icons from '@material-ui/icons'

import {
  HOME,
  PRIVATE,
  LOGIN
} from './pages'

export default [
  [
    {
      text: HOME.title,
      url: HOME.url,
      icon: icons.Home
    },
    {
      text: PRIVATE.title,
      url: PRIVATE.url,
      icon: icons.Security
    }
  ],
  [
    {
      text: LOGIN.title,
      url: LOGIN.url,
      icon: icons.LockOpen
    }
  ]
]
