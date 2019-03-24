import { createActions } from 'redux-actions'

export const {
  setLoading,
  setPage,
  setSidebarOpen
} = createActions({
  SET_LOADING: loading => ({ loading }),
  SET_PAGE: ({ page }) => ({ page }),
  SET_SIDEBAR_OPEN: ({ sidebarOpen }) => ({ sidebarOpen })
}, {
  prefix: 'APPLICATION'
})
