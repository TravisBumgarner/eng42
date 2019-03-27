import axios from 'axios'

const apiGet = (endpoint, data = {}) => {
    return axios.request({
        method: 'GET',
        url: `https://eng40api.travisbumgarner.com${endpoint}`,
        data
    })
}

export default apiGet
