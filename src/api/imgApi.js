import axios from 'axios';


const imgApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL_IMG
})

export default imgApi;