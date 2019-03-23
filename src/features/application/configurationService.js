import axios from 'axios'

const version = 'v1'

export const configurationService = {
  loadConfigurations: () => axios.get(`/api/${version}/configurations`)
}
