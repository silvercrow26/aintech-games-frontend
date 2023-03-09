import { useEffect, useState } from "react";
import { useGenreStore } from "../hooks/useGenreStore";

export const updateGenresData = (state) => {
    const [data, setData] = useState([])
    const { genres } = useGenreStore();
    const arrayTemp = [];

    useEffect(() => {
        state.detail[0].genres.forEach(genre => {
            const exist = genres.some(item => item.name === genre.description);
            const valid = arrayTemp.some(item => item.description === genre.description);
            if (!exist && !valid) {
                arrayTemp.push(genre);
            }
        });
        setData(arrayTemp);

    }, [arrayTemp.length]);

    return data;

}