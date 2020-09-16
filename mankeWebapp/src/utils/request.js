import axios from 'axios';

const source = axios.CancelToken.source();

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:2003' : '';
// const baseURL = process.env.NODE_ENV === 'development' ? 'http://47.114.155.128:8889' : '';

const request = axios.create({
    baseURL:baseURL+'/api',
    withCredentials:true,
});

request.source = source;

export default request;