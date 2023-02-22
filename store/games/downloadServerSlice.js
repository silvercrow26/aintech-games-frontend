import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    downloadServers: [],
    isLoading: false,
    activeDownloadServer: null,
}



export const downloadServerSlice = createSlice({
    name: 'downloadServer',
    initialState,
    reducers: {
        onLoadingDownloadServer: (state) => {
            state.isLoading = true;
        },
        onSetDownloadServer: (state, { payload }) => {
            state.isLoading = false;
            payload.forEach(element => {
                const exist = state.downloadServers.some(game => game._id === element._id);
                if (!exist) {
                    state.downloadServers.push(element);
                }
            });
        },
        onSetActiveDownloadServer: (state, { payload }) => {
            state.activeDownloadServer = payload;
        },
        onAddDownloadServer: (state, { payload }) => {
            state.downloadServers.push(payload);
            state.activeDownloadServer = null;
        },
    }
});

export const { onLoadingDownloadServer, onSetDownloadServer, onAddDownloadServer, onSetActiveDownloadServer } = downloadServerSlice.actions