import axios from "axios";
import { useState } from "react";


const details = {
    genres: "",
    required_age: "",
    short_description: "",
    developers: "",
    publishers: "",
    release_date: "",
    pc_requirements: "",
    background: "",
}

export const getGameDetail = (steamId) => {
    //Game usestate
    const [validId, setValidId] = useState('');
    const [detail, setDetail] = useState(details);
    
    
    const handleCheck = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${steamId}`);
        setValidId('');
        try {
            const { resp } = await data;
            setDetail({
                genres: resp.genres,
                required_age: resp.required_age,
                short_description: resp.short_description,
                developers: resp.developers,
                publishers: resp.publishers,
                release_date: resp.release_date,
                pc_requirements: resp.pc_requirements,
                background: resp.background,
            });
            setValidId('is-valid');
        } catch (error) {
            setDetail(details);
            setValidId('is-invalid');
        }
    };

    return {
        detail,
        validId,
        handleCheck,

    }

}