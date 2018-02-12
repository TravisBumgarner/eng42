import axios from 'axios';

const apiRequest = (method, endpoint, data = {}) => () => {
  const params = {
    method,
    url: `http://localhost:8000${endpoint}`,
    data,
  };

  return axios(params).then((response) => {
    return response;
  });
};

export default apiRequest;

