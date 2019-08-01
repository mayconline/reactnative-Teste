import axios from 'axios';

const api = axios.create({
    baseURL:'https://zuzu-back.herokuapp.com/'
    // baseURL:'http://localhost:3000/'
    //'http://10.0.3.2:3000'
})

export default api;