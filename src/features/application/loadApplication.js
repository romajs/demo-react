import { configurationService } from './configurationService'
import { featureFlagService } from './featureFlagService'
import { setLoading, setFeatureFlags, setConfigurations } from './actions'
import features from './features'

export const loadApplication = () => async dispatch => {
  dispatch(setLoading(true))

  const configurations = await configurationService.find()
  dispatch(setConfigurations({ configurations }))

  const featureFlags = await featureFlagService.find()
  dispatch(setFeatureFlags({ featureFlags }))
  features.set(featureFlags)

  dispatch(setLoading(false))
}
