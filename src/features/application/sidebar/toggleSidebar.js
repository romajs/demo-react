import { setSidebarOpen } from '../actions'

export const toggleSidebar = sidebarOpen => dispatch => {
  dispatch(setSidebarOpen(sidebarOpen))
}
