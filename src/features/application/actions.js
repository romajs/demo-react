import { createActions } from 'redux-actions'

export const {
  setLoading,
  setSidebarOpen
} = createActions({
  SET_LOADING: loading => ({ loading }),
  SET_SIDEBAR_OPEN: ({ sidebarOpen }) => ({ sidebarOpen })
}, {
  prefix: 'APPLICATION'
})
