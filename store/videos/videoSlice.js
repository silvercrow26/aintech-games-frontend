import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: [],
    isLoading: false,
    activeVideo: null,
    errorMessage: undefined,

};

export const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        onLoadingVideos: (state,) => {
            state.isLoading = true;
        },
        onSetVideos: (state, { payload }) => {
            state.isLoading = false;
            payload.forEach(element => {
                const exist = state.videos.some(video => video._id === element._id);
                if (!exist) {
                    state.videos.push(element);
                }
            })
        },
        onSetActiveVideo: (state, { payload }) => {
            state.activeVideo = payload;
        },
        onAddVideo: (state, { payload }) => {
            state.videos.push(payload);
            state.activeVideo = null;
        },
        onUpdateVideo: (state, { payload }) => {
            state.videos = state.videos.map(video => {
                if (video._id === payload._id) {
                    return payload
                }
                return game;
            })
        },
        onDeleteVideo: (state) => {
            if (state.activeVideo) {
                state.videos = state.videos.filter(video => video._id !== state.activeVideo._id);
            }
        },
        onSetError: (state, { payload }) => {
            state.errorMessage = payload;
        },
        onClearError: (state) => {
            state.errorMessage = undefined;
        },
    },
});

export const { onLoadingVideos, onSetVideos, onSetActiveVideo, onAddVideo,
    onUpdateVideo, onDeleteVideo, onSetError, onClearError } = videoSlice.actions;