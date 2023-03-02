import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { downloadServerSlice } from "./games/downloadServerSlice";
import { gameSlice } from "./games/gameSlice";
import { uiSlice } from "./ui/uiSlice";



export const store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    reducer: {
        auth: authSlice.reducer,
        game: gameSlice.reducer,
        ui: uiSlice.reducer,
        downloadServer: downloadServerSlice.reducer,
    }
})