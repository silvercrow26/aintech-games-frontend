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
    onSetGames: (state, {payload}) => {
        state.isLoading = false;
        payload.forEach(game => {
            const exist = state.games.some(dbGame => dbGame._id === game._id);
            if(!exist){
                state.games.push(game);
            }
        });
    }

  }
});

export const {onLoadingGames, onSetGames} = gameSlice.actions

