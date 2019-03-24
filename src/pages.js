export const ROOT_PATH = '/'

export const BAR = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Bar',
  url: '/bar'
}

export const BAZ = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Baz',
  url: '/baz'
}

export const HOME = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Home',
  url: '/home'
}

export const LOGIN = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  url: '/login',
  title: 'Login'
}

export const PRIVATE_BAR = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Private Bar',
  url: '/private/bar'
}

export const PRIVATE_BAZ = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Private Baz',
  url: '/private/baz'
}

export const PRIVATE_HOME = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  url: '/private/home',
  title: 'Private Home'
}

export const allPages = [
  BAR,
  BAZ,
  HOME,
  LOGIN,
  PRIVATE_BAR,
  PRIVATE_BAZ,
  PRIVATE_HOME
]

export const enabledPages = allPages.filter(page => page.enabled)

export const fromUrl = url => allPages.find(page => page.url === url)
