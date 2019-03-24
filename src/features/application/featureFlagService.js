import axios from 'axios'

const version = 'v1'

export const featureFlagService = {
  find: () => axios.get(`/api/${version}/featureFlags`)
    .then(({ data }) => data)
}
