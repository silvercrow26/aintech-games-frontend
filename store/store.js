import { configureStore } from "@reduxjs/toolkit";
import { videoSlice, uiSlice, genreSlice, gameSlice, downloadServerSlice, authSlice } from "./index";

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
    video: videoSlice.reducer,
  }
})