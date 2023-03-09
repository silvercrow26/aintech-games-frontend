import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { downloadServerSlice } from "./games/downloadServerSlice";
import { gameSlice } from "./games/gameSlice";
import { genreSlice } from "./games/genreSlice";
import { uiSlice } from "./ui/uiSlice";



export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    reducer: {
        auth: authSlice.reducer,
        game: gameSlice.reducer,
        genre: genreSlice.reducer,
        ui: uiSlice.reducer,
        downloadServer: downloadServerSlice.reducer,
    }
})