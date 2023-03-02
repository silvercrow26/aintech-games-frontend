import { useDispatch, useSelector } from "react-redux"
import { onSetActiveGame } from "../../../store/games/gameSlice";
import { onCloseDateModal, onOpenDateModal } from "../../../store/ui/uiSlice";



export const useUiStore = () => {

    const dispatch = useDispatch();

    //UseSelector permite usar una función del store
    const { isDateModalOpen } = useSelector(state => state.ui);


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

    return {
        //*Propiedades
        isDateModalOpen,

        //*Métodos
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}
