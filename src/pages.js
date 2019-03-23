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

export const ROOT = {
  enabled: true,
  showSidebar: true,
  showNavbar: true,
  title: 'Home',
  url: '/'
}

export const allPages = [
  HOME,
  LOGIN,
  PRIVATE,
  ROOT
]

export const fromUrl = url => allPages.find(page => page.url === url)

const pages = allPages.filter(page => page.enabled)

export default pages
