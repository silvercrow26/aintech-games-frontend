import { useDispatch, useSelector } from "react-redux"
import { onAddGame, onLoadingGames, onSetGames, onSetActiveGame, onDeleteGame, onUpdateGame, onSetError, onClearError } from "../../../store/games/gameSlice";
import gamesApi from "../../api/gamesApi";

export const useGameStore = () => {
    const { games, isLoading, activeGame, errorMessage } = useSelector(state => state.game);
    const dispatch = useDispatch();

    //Games
    const setActiveGame = (game) => {
        dispatch(onSetActiveGame(game))
    };

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
        try {
            if (game._id) {
                await gamesApi.put(`/games/${game._id}`, game);
                dispatch(onUpdateGame(game));
                return;
            }
            const { data } = await gamesApi.post('/games/new', game);
            dispatch(onAddGame({ ...data, _id: data._id }));
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteGame = async (game) => {
        try {
            await gamesApi.delete(`/games/${game._id}`);
            dispatch(onDeleteGame());
            const steamId = game.steamId;
            await gamesApi.delete(`/images/`, { data: { steamId } });
        } catch (error) {
            dispatch(onSetError(error.response.data.msg));

            setTimeout(() => {
                dispatch(onClearError());
            }, 10);
        }

    }



    return {
        //Props
        games,
        isLoading,
        activeGame,
        errorMessage,

        //Methods
        startLoadingGames,
        startSavingGame,
        startDeleteGame,
        setActiveGame,


    }
}

