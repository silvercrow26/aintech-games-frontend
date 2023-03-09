import { GameCard } from '../../index';

export const GameItem = ({ games, style }) => {

    return (
        <>
            {games.map(item => (
                <div data-aos="fade-up" data-aos-duration="500" key={item._id} className={`${style} p-2`}>
                    <GameCard {...item} />
                </div>
            )).reverse()
            }
        </>
    )
}
