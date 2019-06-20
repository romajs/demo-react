import { createActions } from 'redux-actions';

const defaultOp = value => value;

export const {
  setConfigurations,
  setFeatureFlags,
  setPageLoading,
  setSidebarOpen,
  setWindowLoading,
} = createActions({
  SET_CONFIGURATIONS: defaultOp,
  SET_FEATURE_FLAGS: defaultOp,
  SET_PAGE_LOADING: defaultOp,
  SET_SIDEBAR_OPEN: defaultOp,
  SET_WINDOW_LOADING: defaultOp,
}, {
  prefix: 'APPLICATION',
});
