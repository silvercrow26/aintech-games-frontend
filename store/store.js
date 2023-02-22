import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { downloadServerSlice } from "./games/downloadServerSlice";
import { gameSlice } from "./games/gameSlice";



export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    reducer: {
        auth: authSlice.reducer,
        game: gameSlice.reducer,
        downloadServer: downloadServerSlice.reducer
    }
})