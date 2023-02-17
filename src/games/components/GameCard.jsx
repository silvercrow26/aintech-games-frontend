import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../auth/hooks/useAuthStore';
import { useGameStore } from '../hooks/useGameStore';


export const GameCard = (item) => {

    const { [0]: detail } = item.detalle;
    return (
        <>
            {item !== null ? (
                <div className="card">
                    <img src={item.header_image} alt="Card image cap" />
                    <div className="card-body">
                        <p className=''>{item.requerimientos}</p>
                        <h5 className="">{item.nombre}</h5>
                        <button className='btn btn-success'>ver más</button>
                    </div>
                </div>
            ) : (
                <p></p>
            )}

        </>
    )
}
