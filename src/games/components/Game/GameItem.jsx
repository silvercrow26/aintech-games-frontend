import { GameCard } from '../../index';

export const GameItem = ({ games, style }) => {

    return (
        <>

            {games.map(item => (
                <div key={item._id} className={`${style} p-2`}>
                    <GameCard {...item} />
                </div>
            )).reverse()
            }

        </>
    )
}
