import axios from 'axios';
import { useEffect } from 'react'
import { useGameStore } from '../hooks/useGameStore';
import { GameCard } from './GameCard';



export const GameItem = () => {

    const { startLoadingGames, games, isLoading} = useGameStore();
    console.log(games);
    useEffect(() => {
        startLoadingGames();

    }, []);
    return (
        <>
            <span>{isLoading ? (<h5 className='pt-5 center'>Cargando recursos...</h5>) :
                games.length === 0 ? "No hay juegos disponibles en este momento." : games.map(item => (
                    <GameCard key={item.game._id}
                        {...item}
                    />
                ))
            }</span>
        </>
    )
}
