import axios from 'axios';


const steamApi = axios.create({
    baseURL: import.meta.env.VITE_API_STEAM_URL
})

export default steamApi;