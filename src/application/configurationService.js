import axios from 'axios';

const version = 'v1';

export const configurationService = {
  find: () => axios
    .get(`/api/${version}/configurations`)
    .then(({ data }) => data),
};
