import { push } from 'connected-react-router'
import { PRIVATE } from '../../pages'

/**
 * This middleware is intent to redirect to PRIVATE.url when user gets authenticated
 * @deprecated
 */
export default ({ dispatch, getState }) => next => action => {
  const { isAuthenticated: wasAuthenticated } = getState().auth

  const result = next(action)

  const { isAuthenticated } = getState().auth

  if (!wasAuthenticated && isAuthenticated) {
    dispatch(push(PRIVATE.url))
  }

  return result
}
