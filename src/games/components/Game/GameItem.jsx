import { useEffect, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { GameCard } from '../../index';
import { Pagination } from '../../pages/Pagination';

export const GameItem = ({ games, style }) => {
    const { counter, decrement, increment, reset } = useCounter(1);
    const [gamesReverse, setGamesReverse] = useState([])
    const maxGames = 12;
    const lastPage = Math.ceil(games?.length / maxGames);

    useEffect(() => {
        if (games?.length !== 0) {
            setGamesReverse([...games].reverse());
        }
    }, [games.length])

    return (
        <>
            {gamesReverse?.slice(
                (counter - 1) * maxGames,
                (counter - 1) * maxGames + maxGames
            ).map(item => (
                <div key={item._id} className={`${style} p-2`}>
                    <GameCard {...item} />
                </div>
            ))
            }
            <Pagination
                page={counter}
                decrement={decrement}
                increment={increment}
                lastPage={lastPage}
            />
        </>
    )
}
