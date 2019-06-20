import * as materialIcons from '@material-ui/icons';
import * as pages from '../../../pages';
import React from 'react';

import SidebarItem from './SidebarItem';

export const Bar = () => (
  <SidebarItem
    Icon={materialIcons.CropDin}
    text={pages.BAR.title}
    url={pages.BAR.url}
  />
);

export const Baz = () => (
  <SidebarItem
    Icon={materialIcons.CropDin}
    text={pages.BAZ.title}
    url={pages.BAZ.url}
  />
);

export const Home = () => (
  <SidebarItem
    Icon={materialIcons.Home}
    text={pages.HOME.title}
    url={pages.HOME.url}
  />
);

export const PrivateBar = () => (
  <SidebarItem
    Icon={materialIcons.CropDin}
    text={pages.PRIVATE_BAR.title}
    url={pages.PRIVATE_BAR.url}
  />
);

export const PrivateBaz = () => (
  <SidebarItem
    Icon={materialIcons.CropDin}
    text={pages.PRIVATE_BAZ.title}
    url={pages.PRIVATE_BAZ.url}
  />
);

export const PrivateHome = () => (
  <SidebarItem
    Icon={materialIcons.Security}
    text={pages.PRIVATE_HOME.title}
    url={pages.PRIVATE_HOME.url}
  />
);

export const Login = () => (
  <SidebarItem
    Icon={materialIcons.Portrait}
    text={pages.LOGIN.title}
    url={pages.LOGIN.url}
  />
);

export const Logout = () => (
  <SidebarItem
    Icon={materialIcons.ExitToApp}
    text={pages.LOGOUT.title}
    url={pages.LOGOUT.url}
  />
);
