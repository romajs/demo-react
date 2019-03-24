import { createActions } from 'redux-actions'

export const {
  setConfigurations,
  setFeatureFlags,
  setLoading,
  setPage,
  setSidebarOpen
} = createActions({
  SET_CONFIGURATIONS: ({ configurations }) => ({ configurations }),
  SET_FEATURE_FLAGS: ({ featureFlags }) => ({ featureFlags }),
  SET_LOADING: loading => ({ loading }),
  SET_PAGE: ({ page }) => ({ page }),
  SET_SIDEBAR_OPEN: ({ sidebarOpen }) => ({ sidebarOpen })
}, {
  prefix: 'APPLICATION'
})
