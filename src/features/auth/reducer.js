import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = Immutable({
  isAuthenticated: false,
});

export default handleActions({
  [actions.setIsAuthenticated]: (state, { payload }) => {
    return Immutable.set(state, 'isAuthenticated', payload);
  },
}, initialState);
