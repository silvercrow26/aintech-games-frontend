import { useDispatch, useSelector } from "react-redux"
import { onLoadingGames, onSetGames } from "../../../store/games/gameSlice";
import gamesApi from "../../api/gamesApi";



export const useGameStore = () => {
    const { games, isLoading } = useSelector(state => state.game);
    const dispatch = useDispatch();

    const startLoadingGames = async () => {
        try {
            dispatch(onLoadingGames());
            const { data } = await gamesApi.get('/games');
            console.log(data);
            dispatch(onSetGames(data));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        //Props
        games,
        isLoading,
        //Methods
        startLoadingGames,
    }
}

