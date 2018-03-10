import axios from 'axios';

const apiGet = (endpoint, data = {}) => {
  return axios.request({
    method: 'GET',
    url: `http://localhost:8000${endpoint}`,
    data,
  })
};

export default apiGet;

