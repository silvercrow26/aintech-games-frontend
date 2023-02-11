import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const GameCard = (game) => {

    const [steamData, setSteamData] = useState(null);

    const startLoadingGamesDetails = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${game.steamId}`);
            
            setSteamData(data);
            // console.log(data.resp);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        startLoadingGamesDetails();
    }, [])
    return (
        <>
            {steamData !== null ? (
                <div className="card">
                    <img src={steamData.resp.header_image} alt="Card image cap" />
                    <div className="card-body">
                        <p className=''>{game.requerimientos}</p>
                        <h5 className="">{game.nombre}</h5>
                        <ul>
                            {
                                steamData.resp.genres.map(gen => (
                                    <li key={gen.description}>{gen.description}</li>
                                )
                                )}
                        </ul>
                        <button className='btn btn-success'>ver más</button>

                    </div>
                </div>
            ) : (
                <p></p>
            )}

        </>
    )
}
