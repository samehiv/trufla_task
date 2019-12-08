const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { 'Accept': 'application/json' }
});


export default instance