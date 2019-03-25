import { configurationService } from './configurationService'
import { featureFlagService } from './featureFlagService'
import * as actions from './actions'
import features from './features'

export const loadApplication = () => async dispatch => {
  dispatch(actions.setWindowLoading(true))

  const configurations = await configurationService.find()
  dispatch(actions.setConfigurations(configurations))

  const featureFlags = await featureFlagService.find()
  dispatch(actions.setFeatureFlags(featureFlags))
  features.set(featureFlags)

  dispatch(actions.setWindowLoading(false))
}
