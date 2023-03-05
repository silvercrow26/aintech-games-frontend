import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GameItem, Loader, setLastUpdate, useGameStore } from '../index';
import { getGamesByGenre } from '../selectors/getGamesByGenre';
import './GamesPage.css';

export const GenrePage = () => {
    const params = useParams();
    const { isLoading } = useGameStore();
    const { tempArray, activeGenre } = getGamesByGenre(params.genero);
    const [games, setGames] = useState([]);
    const lastUpdate = setLastUpdate(games);

    useEffect(() => {
        setGames(tempArray);   
    }, [params.genero]);


    return (
        <div className='container'>
            <h4 className="text-light mt-5">{activeGenre.name}</h4>
            <p>Last Update: {lastUpdate}</p>
            <hr className="text-light" />
            <div className='gamesPageCard'>
                {
                    (isLoading) ? <Loader /> :
                        games.length === 0 ? "No hay juegos disponibles en este momento." : <GameItem games={games} style={"w-25"}/>
                }
            </div>
        </div>
    )
}
