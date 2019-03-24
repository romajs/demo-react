import { setLoading, setFeatureFlags, setConfigurations } from './actions'
import { configurationService } from './configurationService'
import { featureFlagService } from './featureFlagService'

export const loadApplication = () => async dispatch => {
  dispatch(setLoading(true))

  const configurations = await configurationService.loadConfigurations()
  dispatch(setConfigurations({ configurations }))

  const featureFlags = await featureFlagService.find()
  dispatch(setFeatureFlags({ featureFlags }))

  dispatch(setLoading(false))
}
