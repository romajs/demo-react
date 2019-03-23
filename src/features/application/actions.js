import { createActions } from 'redux-actions'

export const {
  setLoading
} = createActions({
  SET_LOADING: loading => ({ loading })
}, {
  prefix: 'APPLICATION'
})
