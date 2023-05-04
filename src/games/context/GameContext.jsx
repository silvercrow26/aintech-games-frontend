import React from 'react'
import { createContext, useContext, useState} from "react";
import { useGameStore } from '../hooks/useGameStore';

export const GameContext = createContext();

export const GameProvider = ({children}) => {

    const context = useContext(GameContext)
    const { games } = useGameStore();
    const [inputSearch, setInputSearch] = useState("");
    const [search, setSearch] = useState("");
    const [searchGame, setSearchGame] = useState([]);
    const [msgError, setMsgError] = useState(false);


    const [latestGamesData, setLatestGamesData] = useState([]);


    //filtra el juego buscado en el navbar
    const getSearchGame = () => {
        setMsgError(false)
        const filterData = games.filter((game) => game.name.toLowerCase().includes(inputSearch.toLowerCase())).reverse();
        setSearch(inputSearch)
        if (inputSearch.trim() === "" ){ 
            setMsgError(true)
        } else {
            setMsgError(false)
            setSearchGame(filterData);
        }
      
      };


        //funcion que trae los ultimos 5 juegos subidos
      const getLatestGamesUploaded = () => {
        const gamesUploaded = games.map((item) => item ).reverse().slice(0, 5);
        setLatestGamesData(gamesUploaded);
      };


    
    const state = {
        inputSearch,
        setInputSearch,
        search,
        setSearch,
        searchGame,
        setSearchGame,
        msgError,
        setMsgError,
        setLatestGamesData,
        latestGamesData,
    }

    const actions = {
    getSearchGame,
    getLatestGamesUploaded,

    }

    return <GameContext.Provider  value={{state, actions}}>{children}</GameContext.Provider>
}
