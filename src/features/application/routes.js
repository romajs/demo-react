import { Redirect, Route } from 'react-router-dom'

import { BarPage } from '../bar/BarPage'
import { BazPage } from '../baz/BazPage'
import { HomePage } from '../home/HomePage'
import { LoginPageContainer } from '../auth/LoginPageContainer'
import { PrivateBarPage } from '../privateBar/PrivateBarPage'
import { PrivateBazPage } from '../privateBaz/PrivateBazPage'
import { PrivateHomePageContainer } from '../privateHome/PrivateHomePageContainer'
import { PrivateRoute } from '../auth/PrivateRoute'
import * as pages from '../../pages'
import { LogoutPageContainer } from '../auth/LogoutPageContainer'

export const routes = [
  [Redirect, {
    exact: true,
    from: pages.ROOT_PATH,
    to: pages.HOME.url
  }],
  [Route, {
    exact: true,
    path: pages.BAR.url,
    component: BarPage
  }],
  [Route, {
    exact: true,
    path: pages.BAZ.url,
    component: BazPage
  }],
  [Route, {
    exact: true,
    path: pages.HOME.url,
    component: HomePage
  }],
  [Route, {
    exact: true,
    path: pages.LOGIN.url,
    component: LoginPageContainer
  }],
  [Route, {
    exact: true,
    path: pages.LOGOUT.url,
    component: LogoutPageContainer
  }],
  [PrivateRoute, {
    exact: true,
    path: pages.PRIVATE_BAR.url,
    component: PrivateBarPage
  }],
  [PrivateRoute, {
    exact: true,
    path: pages.PRIVATE_BAZ.url,
    component: PrivateBazPage
  }],
  [PrivateRoute, {
    exact: true,
    path: pages.PRIVATE_HOME.url,
    component: PrivateHomePageContainer
  }]
]
