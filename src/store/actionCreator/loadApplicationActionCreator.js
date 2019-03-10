import { setLoading } from '../actions'
import { configurationService } from '../../service/configurationService'

export default () => async dispatch => {
  dispatch(setLoading(true))
  await configurationService.loadConfigurations()
  dispatch(setLoading(false))
}
