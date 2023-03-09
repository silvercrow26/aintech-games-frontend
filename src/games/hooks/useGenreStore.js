import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import gamesApi from "../../api/gamesApi";

import { onAddGenre, onLoadingGenres, onSetActiveImage, onSetGenres } from '../../../store/games/genreSlice';

export const useGenreStore = () => {
    const { genres, isLoading, activeImage, errorMessage } = useSelector(state => state.genre);
    const dispatch = useDispatch();

    //Image
    const setActiveImage = (image) => {
        dispatch(onSetActiveImage(image))
    };

    const startSavingImage = async (image) => {
        try {
            const { data } = await gamesApi.post(`/images/upload`, image);
            dispatch(onSetActiveImage(data.img));
        } catch (error) {
            console.log(error);
        }
    };

    //Genre
    const startLoadingGenres = async () => {
        dispatch(onLoadingGenres());
        try {
            const { data } = await gamesApi.get('/genres');
            dispatch(onSetGenres(data.msg));
        } catch (error) {
            console.log(error);
        }
    }
    const startSavingGenre = async (genre) => {
        try {
            const { data } = await gamesApi.post('/genres', { name: genre });
            dispatch(onAddGenre({ ...data.genre, _id: data.genre._id, updatedAt: data.genre.updatedAt }));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        setActiveImage,
        startSavingImage,
        startLoadingGenres,
        startSavingGenre,

        genres,
        isLoading,
        activeImage,
        isLoading,
        errorMessage,
    }

}
