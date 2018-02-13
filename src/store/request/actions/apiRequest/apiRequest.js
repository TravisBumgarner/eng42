import axios from 'axios';

const apiRequest = (method, endpoint, data = {}) => {
  return axios.request({
    method,
    url: `http://localhost:8000${endpoint}`,
    data,
  });
};

export default apiRequest;

