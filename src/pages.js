export const ROOT_PATH = '/'

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

export const PRIVATE = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  url: '/private',
  title: 'Private'
}

export const allPages = [
  HOME,
  LOGIN,
  PRIVATE
]

export const enabledPages = allPages.filter(page => page.enabled)

export const fromUrl = url => allPages.find(page => page.url === url)
