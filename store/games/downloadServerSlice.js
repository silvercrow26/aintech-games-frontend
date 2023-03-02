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
        onSetActiveDownloadServer: (state, { payload }) => {
            state.activeDownloadServer = payload;
        },
        onAddDownloadServer: (state, { payload }) => {
            state.downloadServers.push(payload);
            state.activeDownloadServer = null;
        },
        onDeleteDownloadServer: (state) => {
            if(state.downloadServers) {
                state.downloadServers = state.downloadServers.filter(server => server.name !== state.activeDownloadServer.name);
            }
        },
        onSetDownloadServer: (state, { payload }) => {
            state.downloadServers = payload;
        },
    }
});

export const { onLoadingDownloadServer, onSetDownloadServer, onAddDownloadServer, onSetActiveDownloadServer, onDeleteDownloadServer } = downloadServerSlice.actions