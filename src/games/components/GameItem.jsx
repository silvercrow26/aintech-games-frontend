import { GameCard } from '../index';

export const GameItem = ({ games }) => {

    return (
        <>
            <span className="d-flex mt-5 flex-wrap ">
                {games.map(item => (
                    <div key={item._id} className="w-50 p-2">
                        <GameCard {...item} />
                    </div>
                ))
                }</span>
        </>
    )
}
