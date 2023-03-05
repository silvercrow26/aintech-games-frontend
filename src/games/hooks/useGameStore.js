import { useDispatch, useSelector } from "react-redux"
import { onAddGame, onLoadingGames, onSetGames, onSetActiveGame, onDeleteGame, onUpdateGame, onSetActiveImage, onSetGenres, onAddGenre } from "../../../store/games/gameSlice";
import gamesApi from "../../api/gamesApi";

export const useGameStore = () => {
    const { games, genres, isLoading, activeGame, activeImage } = useSelector(state => state.game);
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
        } catch (error) {
            console.log(error);
        }
    }

    const startDeleteGame = async (game) => {
        try {
            await gamesApi.delete(`/games/${game._id}`);
            dispatch(onDeleteGame());
        } catch (error) {
            console.log(error);
        }
    }
    //Image
    const setActiveImage = (image) => {
        dispatch(onSetActiveImage(image))
    };

    const startSavingImage = async (image) => {
        try {
            const { data } = await gamesApi.post(`/images/upload`, image);
            dispatch(onSetActiveImage(data.img));
        } catch (error) {
            console.log(error);
        }
    };

    //Genre
    const startLoadingGenres = async () => {
        try {
            const { data } = await gamesApi.get('/genres');
            dispatch(onSetGenres(data.msg));
        } catch (error) {
            console.log(error);
        }
    }
    const startSavingGenre = async (genre) => {
        try {
            const { data } = await gamesApi.post('/genres', {name: genre});
            console.log(data);
            dispatch(onAddGenre({...data.genre, _id: data.genre._id, updatedAt: data.genre.updatedAt}));
        } catch (error) {
            console.log(error);
        }
    }


    return {
        //Props
        games,
        genres,
        isLoading,
        activeGame,
        activeImage,

        //Methods
        startLoadingGames,
        startSavingGame,
        startDeleteGame,
        setActiveGame,
        startSavingImage,
        setActiveImage,
        startLoadingGenres,
        startSavingGenre,
    }
}

