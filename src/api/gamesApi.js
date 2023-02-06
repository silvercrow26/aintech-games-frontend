import axios from 'axios';


const gamesApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default gamesApi;