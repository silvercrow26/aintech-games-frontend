import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GameItem, Loader, setLastUpdate, useGameStore, getGamesByGenre } from '../index';
import './GamesPage.css';

export const GenrePage = () => {
    const params = useParams();
    const { loadingGenres } = useGameStore();
    const { tempArray, activeGenre } = getGamesByGenre(params.genero);
    const [games, setGames] = useState([]);
    const lastUpdate = setLastUpdate(games);

    useEffect(() => {
        setGames(tempArray);
    }, [tempArray.length, params.genero]);


    return (
        <div className='container'>
            <h4 className="text-light mt-5">{activeGenre && activeGenre.name}</h4>
            <p>Última publicación: {lastUpdate}</p>
            <hr className="text-light" />
            <div className='gamesPageCard'>
                {
                    (loadingGenres) ? <Loader /> :
                        games.length === 0 ? <p>No hay juegos disponibles en este momento.</p> : <GameItem games={games} style={"w-25"} />
                }
            </div>
        </div>
    )
}
