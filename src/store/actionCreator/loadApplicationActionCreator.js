import { setLoading } from '../actions'

export default () => async dispatch => {
  dispatch(setLoading(true))
  dispatch(setLoading(false))
}
