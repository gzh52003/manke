import axios from 'axios';

const source = axios.CancelToken.source();

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:2003' : '';

const request = axios.create({
    baseURL:baseURL+'/api',
    withCredentials:true,
});

request.source = source;

export default request;