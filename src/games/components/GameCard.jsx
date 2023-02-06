import React from 'react'

export const GameCard = (game) => {
    return (
        <>
            <div className="card">
                <img src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="">{game.nombre}</h5>
                    </div>
            </div>

        </>
    )
}
