import axios from 'axios';
import { useEffect } from 'react'
import { useGameStore } from '../hooks/useGameStore';
import { GameCard } from './GameCard';



export const GameItem = () => {

    const { games, isLoading, startLoadingGames } = useGameStore();

    useEffect(() => {
        if (games.length == 0) {
            startLoadingGames();
        }
    }, [games]);

    return (
        <>
            <span className="d-flex mt-5 flex-wrap ">{isLoading ? (<div className="text-center w-100 mt-5">
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
                    <div key={item._id} className="w-50 p-2">
                        <GameCard {...item} />
                    </div>
                ))
            }</span>

        </>
    )
}
