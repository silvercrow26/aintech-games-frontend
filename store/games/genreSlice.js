import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    genres: [],
    isLoading: false,
    activeImage: null,
    errorMessage: undefined,
}

export const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        onSetActiveImage: (state, { payload }) => {
            state.activeImage = payload;
        },
        onSetGenres: (state, { payload }) => {
            state.loadingGenres = false;
            payload.forEach(element => {
                const exist = state.genres.some(genre => genre._id === element._id);
                if (!exist) {
                    state.genres.push(element);
                }
            });
        },
        onLoadingGenres: (state) => {
            state.loadingGenres = true;
        },
        onAddGenre: (state, { payload }) => {
            state.genres.push(payload);
        },
    }
});

export const { onSetActiveImage, onSetGenres, onLoadingGenres, onAddGenre } = genreSlice.actions
