import axios from 'axios';

const apiGet = (endpoint, data = {}) => {
  return axios.request({
    method: 'GET',
    url: __API__ + endpoint,
    data,
  })
};

export default apiGet;

