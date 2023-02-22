import axios from 'axios';
import { useEffect, useState } from 'react'
import { useGameStore } from '../hooks/useGameStore';
import { GameCard } from './GameCard';



export const GameItem = () => {

    const { startLoadingGames, games, isLoading} = useGameStore();

    useEffect(() => {
        startLoadingGames();
    }, []);
    
   
    return (
        <>
            <span className="d-flex justify-content-center mt-5 flex-wrap container">{isLoading ? (<div className="text-center w-100 mt-5">

                <div className="loader">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </div>
            
            <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>
            
            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </div>
            <h6 className="text-light small">Cargando juegos...</h6>
            </div>

            ) :
                games.length === 0 ? "No hay juegos disponibles en este momento." : games.map(item => (
                       
                        <GameCard key={item._id}
                            {...item} 
                        />
                ))
            }</span>
        </>
    )
}
