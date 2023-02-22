
import { useDispatch, useSelector } from "react-redux"
import { onLoadingDownloadServer, onSetActiveDownloadServer, onSetDownloadServer } from "../../../store/games/downloadServerSlice";
import gamesApi from "../../api/gamesApi";



export const useDownloadServerStore = () => {
    const { downloadServers, activeDownloadServers} = useSelector(state => state.downloadServer);

    const dispatch = useDispatch();


    const setActiveDownloadServer = (downloadServer) => {
        dispatch(onSetActiveDownloadServer(downloadServer))
    };

    const startLoadingDownloadServers = async() => {
        try {
            dispatch(onLoadingDownloadServer());
            const {data} = await gamesApi.get('/download');
            dispatch(onSetDownloadServer(data.msg));

        } catch (error) {
            console.log(error);
        }
    }

    // const startLoadingGames = async () => {
    //     try {
    //         dispatch(onLoadingGames());
    //         const { data } = await gamesApi.get('/games');
    //         dispatch(onSetGames(data));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const startSavingGame = async (game) => {
    //     const { data } = await gamesApi.post('/games/new', game);
    //     dispatch(onAddGame({ ...game, _id: data._id }));
    // }


    return {
        //Props
        // games,
        activeDownloadServers,
        downloadServers,

        // //Methods
        // startLoadingGames,
        // startSavingGame,
        setActiveDownloadServer,
        startLoadingDownloadServers
    }
}