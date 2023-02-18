import axios from 'axios';


const gamesApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

gamesApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
});

export default gamesApi;