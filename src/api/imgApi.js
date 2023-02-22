import axios from 'axios';


const imgApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL_IMG
});

imgApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
});

export default imgApi;