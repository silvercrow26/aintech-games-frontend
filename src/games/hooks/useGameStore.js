import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { onAddGame, onLoadingGames, onSetGames } from "../../../store/games/gameSlice";
import gamesApi from "../../api/gamesApi";



export const useGameStore = () => {
    const { games, isLoading } = useSelector(state => state.game);
    const dispatch = useDispatch();
    
    // const startLoadingGames = async () => {
    //     var arr = [];
    //     try {
    //         dispatch(onLoadingGames());
    //         const { data } = await gamesApi.get('/games');

    //         await Promise.all(data.map(async (element) => {
    //             const { data: detail } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${element.steamId}`);
    //             arr.push({ game: element, detail: detail.resp });
    //         }));
    //         dispatch(onSetGames(arr));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const startLoadingGames = async () => {
        try {
            dispatch(onLoadingGames());
            const { data } = await gamesApi.get('/games');
            dispatch(onSetGames(data));
        } catch (error) {
            console.log(error);
        }
    }

    const startSavingGame = async (game) => {
        const {data} = await gamesApi.post('/games/new', game);
        dispatch(onAddGame({...game, _id: data._id}));
    }


    return {
        //Props
        games,
        isLoading,

        //Methods
        startLoadingGames,
        startSavingGame,
    }
}

