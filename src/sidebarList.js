import * as icons from '@material-ui/icons'

import {
  HOME,
  PRIVATE
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
  ]
]
