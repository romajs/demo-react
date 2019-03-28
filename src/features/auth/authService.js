import axios from 'axios'

const version = 'v1'

export const authService = {
  authenticate: (username, password) => axios.post(`/api/${version}/auth`)
    .then(({ data }) => data)
}
