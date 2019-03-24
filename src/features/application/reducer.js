import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = Immutable({
  configurations: [],
  featureFlags: [],
  loading: false,
  sidebarOpen: true
})

export default handleActions({
  [actions.setConfigurations]: (state, { payload }) => {
    return Immutable.set(state, 'configurations', payload.configurations)
  },
  [actions.setFeatureFlags]: (state, { payload }) => {
    return Immutable.set(state, 'featureFlags', payload.featureFlags)
  },
  [actions.setLoading]: (state, { payload }) => {
    return Immutable.set(state, 'loading', payload.loading)
  },
  [actions.setSidebarOpen]: (state, { payload }) => {
    return Immutable.set(state, 'sidebarOpen', payload.sidebarOpen)
  }
}, initialState)
