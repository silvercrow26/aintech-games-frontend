import React from 'react'

export const GameCard = () => {

    return (
        <>
            <div className="card w-50">
                <img className="card-img-top" src="https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg?t=1674143992" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
