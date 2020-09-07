import axios from 'axios';

const request = axios.create({
    baseURL:'http://localhost:2003/api',
    whiteCredentials:true
});

export default request;