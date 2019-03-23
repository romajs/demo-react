import { setLoading } from './actions'
import { configurationService } from './configurationService'

export const loadApplication = () => async dispatch => {
  dispatch(setLoading(true))
  await configurationService.loadConfigurations()
  dispatch(setLoading(false))
}
