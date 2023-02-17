import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { onLoadingGames, onSetDetails, onSetGames } from "../../../store/games/gameSlice";
import gamesApi from "../../api/gamesApi";



export const useGameStore = () => {
    const { games, isLoading } = useSelector(state => state.game);

    const dispatch = useDispatch();

    const startLoadingGames = async () => {
        var arr = [];
        try {
            dispatch(onLoadingGames());
            const { data } = await gamesApi.get('/games');
            
            await Promise.all(data.map(async (element) => {
                const { data: detail } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${element.steamId}`);
                arr.push({ game: element, detail: detail.resp });
            }));
            dispatch(onSetGames(arr));

        } catch (error) {
            console.log(error);
        }
    }

    // const startLoadingDetails = async () => {
    //     const gameDetails = []; 
    //     try {
    //         games.forEach(async (game) => {

    //             const { data } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${game.steamId}`);
    //             const exist = gameDetails.some(dbdetail => dbdetail.steam_appid === data.resp.steam_appid);
    //             if (!exist) {
    //                 gameDetails.push(data.resp);
    //                 console.error(gameDetails)
    //             }

    //         });

            

    //         dispatch(onSetDetails(gameDetails));

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }




    return {
        //Props
        games,
        isLoading,
        //Methods
        startLoadingGames,
        // startLoadingDetails,
    }
}

