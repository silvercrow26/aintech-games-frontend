import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { gameSlice } from "./games/gameSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        game: gameSlice.reducer
    }
})