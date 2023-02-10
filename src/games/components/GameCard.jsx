import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../auth/hooks/useAuthStore';
import { useGameStore } from '../hooks/useGameStore';


export const GameCard = (item) => {

    return (
        <>
            {item !== null ? (
                <div className="card">
                    <img src={item.detail.header_image} alt="Card image cap" />
                    <div className="card-body">
                        <p className=''>{item.requerimientos}</p>
                        <h5 className="">{item.game.nombre}</h5>
                        <h5 className="">{item.detail.steam_appid}</h5>
                        <ul>
                            {
                                item.detail.genres.map(gen => (
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
