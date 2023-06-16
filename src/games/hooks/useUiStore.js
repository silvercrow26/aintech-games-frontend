import { useDispatch, useSelector } from "react-redux"
import { onSetActiveVideo } from "../../../store";
import { onSetActiveGame } from "../../../store/games/gameSlice";
import { onCloseDateModal, onOpenDateModal, onOpenYoutubeModal, onCloseYoutubeModal } from "../../../store/ui/uiSlice";



export const useUiStore = () => {

    const dispatch = useDispatch();

    //UseSelector permite usar una función del store
    const { isDateModalOpen} = useSelector(state => state.ui);
    const {isYoutubeModalOpen } = useSelector(state => state.ui)

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }



    const closeDateModal = () => {
        dispatch(onSetActiveGame(null));
        dispatch(onCloseDateModal());
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
        ? openDateModal()
        : closeDateModal();
    }


    const openYoutubeModal = () => {
        dispatch(onOpenYoutubeModal())
    }

    const closeYoutubeModal = () => {
        dispatch(onSetActiveVideo(null))
        dispatch(onCloseYoutubeModal())
    }

    const toggleYoutubeModal = () =>  {
        (isYoutubeModalOpen) ? openYoutubeModal() : closeYoutubeModal()
    }

    return {
        //Props
        isDateModalOpen,
        isYoutubeModalOpen,

        //Methods
        openDateModal,
        closeDateModal,
        toggleDateModal,
        openYoutubeModal,
        closeYoutubeModal,
        toggleYoutubeModal,


    }
}
