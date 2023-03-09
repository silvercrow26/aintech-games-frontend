import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    games: [],
    isLoading: false,
    activeGame: null,
    errorMessage: undefined,
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
                if (!exist) {
                    state.games.push(element);
                }
            });
        },
        onSetActiveGame: (state, { payload }) => {
            state.activeGame = payload;
        },
        onAddGame: (state, { payload }) => {
            state.games.push(payload);
            state.activeGame = null;
            state.activeImage = null;
        },
        onUpdateGame: (state, { payload }) => {
            state.games = state.games.map(game => {
                if (game._id === payload._id) {
                    return payload
                }
                return game;
            })
        },
        onDeleteGame: (state) => {
            if (state.activeGame) {
                state.games = state.games.filter(game => game._id !== state.activeGame._id);
            }
        },
        onSetError: (state, { payload }) => {
            state.errorMessage = payload;
        },
        onClearError: (state) => {
            state.errorMessage = undefined;
        },

    }
});

export const { onLoadingGames, onSetGames, onAddGame, onSetActiveGame, onUpdateGame, onDeleteGame, onSetError, onClearError } = gameSlice.actions

