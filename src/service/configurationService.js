import axios from 'axios'

const version = 'v1'

export default {
  loadConfigurations: () => axios.get(`/api/${version}/configurations`)
}
