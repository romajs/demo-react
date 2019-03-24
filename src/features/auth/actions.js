import { createActions } from 'redux-actions'

export const {
  setIsAuthenticated
} = createActions({
  SET_IS_AUTHENTICATED: ({ isAuthenticated }) => ({ isAuthenticated })
}, {
  prefix: 'AUTH'
})

export const login = () => dispatch => {
  dispatch(setIsAuthenticated({ isAuthenticated: true }))
}

export const logout = () => dispatch => {
  dispatch(setIsAuthenticated({ isAuthenticated: false }))
}
