import * as icons from '@material-ui/icons'

import * as pages from '../../../pages'

export default [
  [
    {
      text: pages.HOME.title,
      url: pages.HOME.url,
      icon: icons.Home
    },
    {
      text: pages.BAR.title,
      url: pages.BAR.url,
      icon: icons.CropDin
    },
    {
      text: pages.BAZ.title,
      url: pages.BAZ.url,
      icon: icons.CropDin
    }
  ],
  [
    {
      text: pages.PRIVATE_HOME.title,
      url: pages.PRIVATE_HOME.url,
      icon: icons.Security
    },
    {
      text: pages.PRIVATE_BAR.title,
      url: pages.PRIVATE_BAR.url,
      icon: icons.CropDin
    },
    {
      text: pages.PRIVATE_BAZ.title,
      url: pages.PRIVATE_BAZ.url,
      icon: icons.CropDin
    }
  ],
  /**
   * TODO: Dynamic render LOGIN x LOGOUT
   */
  [
    {
      text: pages.LOGIN.title,
      url: pages.LOGIN.url,
      icon: icons.Portrait
    },
    {
      text: pages.LOGOUT.title,
      url: pages.LOGOUT.url,
      icon: icons.ExitToApp
    }
  ]
]
