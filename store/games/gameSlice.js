import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    games: [],
    isLoading: false,
}



export const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        onLoadingGames: (state) => {
            state.isLoading = true;
        },
        onSetGames: (state, { payload }) => {
            state.isLoading = false;
            payload.forEach(element => {
                const exist = state.games.some(game => game._id === element._id);
                if(!exist){
                    state.games.push(element);
                }
            });
        },
        onAddGame: (state, {payload}) => {
            state.games.push(payload);
        },

    }
});

export const { onLoadingGames, onSetGames, onAddGame } = gameSlice.actions

