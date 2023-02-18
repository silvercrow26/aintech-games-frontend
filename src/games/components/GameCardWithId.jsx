import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


export const GameCardWithId = () => {

    const [gameCardId, setGameCardId] = useState([])
    const params = useParams();

    const getGameCardWithId = async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/games/${params.id}`)
        setGameCardId(data.msg);
    }

    useEffect(() => {
        getGameCardWithId();
    }, []);


    return (
       
        <div>
            {gameCardId && (
                <section>
                    <span className="badge bg-danger d-flex justify-content-center text-center w-100 p-3">
              <FontAwesomeIcon icon={faGamepad} className="mx-3"/> {gameCardId.requerimientos}
            </span>
                <div className="container">
                    <img src={gameCardId.header_image} className="" />
                    <h6 className="text-light">{gameCardId.nombre}</h6>
                    <div className="">
                    <a  className="btn btn-outline-primary mx-3" href={gameCardId.googleServ}>Google Server</a>
                    <a  className="btn btn-outline-primary" href={gameCardId.mediafireServ}>Mediafire</a>
                    </div>

                </div>

                <div id='container'>${element}</div>
                </section>
            )}
        </div>
    )
}
