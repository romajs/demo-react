export const ROOT_PATH = '/';

export const BAR = {
  showSidebar: true,
  showNavbar: true,
  title: 'Bar',
  url: '/bar',
};

export const BAZ = {
  showSidebar: true,
  showNavbar: true,
  title: 'Baz',
  url: '/baz',
};

export const HOME = {
  showSidebar: true,
  showNavbar: true,
  title: 'Home',
  url: '/home',
};

export const LOGIN = {
  showSidebar: true,
  showNavbar: true,
  url: '/login',
  title: 'Login',
};

export const LOGOUT = {
  showSidebar: true,
  showNavbar: true,
  url: '/logout',
  title: 'Logout',
};

export const PRIVATE_BAR = {
  showSidebar: true,
  showNavbar: true,
  title: 'Private Bar',
  url: '/private/bar',
};

export const PRIVATE_BAZ = {
  showSidebar: true,
  showNavbar: true,
  title: 'Private Baz',
  url: '/private/baz',
};

export const PRIVATE_HOME = {
  showSidebar: true,
  showNavbar: true,
  url: '/private/home',
  title: 'Private Home',
};

export const allPages = [
  BAR,
  BAZ,
  HOME,
  LOGIN,
  LOGOUT,
  PRIVATE_BAR,
  PRIVATE_BAZ,
  PRIVATE_HOME,
];

export const fromUrl = url => allPages.find(page => page.url === url);

export default allPages;
