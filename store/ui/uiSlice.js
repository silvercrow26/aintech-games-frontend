import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDateModalOpen: false,
    isYoutubeModalOpen: false,
}


export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
        onOpenYoutubeModal: (state) => {
            state.isYoutubeModalOpen = true;
        },
        onCloseYoutubeModal: (state) =>{
            state.isYoutubeModalOpen = false;
        }
    }
});

export const { onCloseDateModal, onOpenDateModal, onOpenYoutubeModal, onCloseYoutubeModal } = uiSlice.actions

