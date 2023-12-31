import axios from 'axios';
import { getCookie } from './cookies';
import { env } from './function';

axios.defaults.baseURL = env('SERVER');

axios.interceptors.request.use(function (config) {
    const accessToken = getCookie('accessToken-hr');

    if (!config.headers.Authorization)
        config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});
