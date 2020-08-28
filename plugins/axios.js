import axios from 'axios'

let Api = axios.create({
    baseURL: 'https://api.moebius.ph/api'
});

Api.defaults.withCredentials = true;

export default Api;
