import { useDispatch, useSelector } from "react-redux"
import { onAddDownloadServer, onDeleteDownloadServer, onLoadingDownloadServer, onSetActiveDownloadServer, onSetDownloadServer } from "../../../store/games/downloadServerSlice";

export const useDownloadServerStore = () => {
    const { downloadServers, activeDownloadServers } = useSelector(state => state.downloadServer);

    const dispatch = useDispatch();

    const setActiveDownloadServer = (downloadServer) => {
        dispatch(onSetActiveDownloadServer(downloadServer))
    };

    const setDownloadServers = (downloadServer) => {
        dispatch(onSetDownloadServer(downloadServer))
    }

    const startSavingServer = (downloadServer) => {
        dispatch(onAddDownloadServer({ ...downloadServer }))
    }

    const startDeleteServer = async (game) => {
        dispatch(onDeleteDownloadServer(game));
    }

    return {
        //Props
        // games,
        activeDownloadServers,
        downloadServers,

        // //Methods
        setActiveDownloadServer,
        startSavingServer,
        startDeleteServer,
        setDownloadServers,
    }
}