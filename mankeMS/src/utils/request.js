import axios from 'axios';

const request = axios.create({
    baseURL:'http://47.114.155.128:8888/api',
    whiteCredentials:true
});

export default request;