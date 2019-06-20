import { createActions } from 'redux-actions';
import { setPageLoading } from '../application/actions';

export const {
  setIsAuthenticated,
} = createActions({
  SET_IS_AUTHENTICATED: isAuthenticated => isAuthenticated,
}, {
  prefix: 'AUTH',
});

export const login = (username, password) => dispatch => {
  dispatch(setPageLoading(true));
  // TODO: await authService.authenticate(username, password)
  setTimeout(() => {
    dispatch(setIsAuthenticated(true));
    dispatch(setPageLoading(false));
  }, 2000);
};

export const logout = () => dispatch => {
  dispatch(setIsAuthenticated(true));
  dispatch(setIsAuthenticated(false));
  dispatch(setPageLoading(false));
};
