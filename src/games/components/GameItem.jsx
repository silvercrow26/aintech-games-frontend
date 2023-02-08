import { useEffect } from 'react'
import { useGameStore } from '../hooks/useGameStore';
import { GameCard } from './GameCard';



export const GameItem = () => {
    
    const { startLoadingGames, games, isLoading } = useGameStore();
    
    useEffect(() => {
        startLoadingGames();
    }, [])
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap container mt-5">{isLoading ? "Cargando juegos..." :
                games.length === 0 ? "No hay juegos disponibles en este momento." : games.map(game => (
                    <GameCard key={game._id}
                        {...game}
                    />
                ))
            }</div>
        </>
    )
}
