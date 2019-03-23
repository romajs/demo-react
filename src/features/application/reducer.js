import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = Immutable({
  loading: false
})

export default handleActions({
  [actions.setLoading]: (state, { payload }) => {
    return Immutable.set(state, 'loading', payload.loading)
  }
}, initialState)
