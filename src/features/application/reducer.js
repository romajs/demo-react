import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = Immutable({
  configurations: [],
  featureFlags: [],
  pageLoading: false,
  sidebarOpen: false,
  windowLoading: false,
});

export default handleActions({
  [actions.setConfigurations]: (state, { payload }) => {
    return Immutable.set(state, 'configurations', payload);
  },
  [actions.setFeatureFlags]: (state, { payload }) => {
    return Immutable.set(state, 'featureFlags', payload);
  },
  [actions.setPageLoading]: (state, { payload }) => {
    return Immutable.set(state, 'pageLoading', payload);
  },
  [actions.setSidebarOpen]: (state, { payload }) => {
    return Immutable.set(state, 'sidebarOpen', payload);
  },
  [actions.setWindowLoading]: (state, { payload }) => {
    return Immutable.set(state, 'windowLoading', payload);
  },
}, initialState);
