import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGamepad } from '@fortawesome/free-solid-svg-icons'


export const GameCardWithId = () => {

    const [background, setBackground] = useState('');
    const params = useParams();
    const [gameCardId, setGameCardId] = useState({
        nombre: "",
        requerimientos: "",
        header_image: "",
        googleServ: "",
        mediafireServ: "",
        observaciones: "",
        detalle: {
            background: "",
        },
    });

    const getGameCardWithId = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/games/${params.id}`);
        setGameCardId(res.data.msg);

    };
    
    useEffect(() => {
        getGameCardWithId();
        console.log(gameCardId?.observaciones)

    }, []);

    useEffect(() => {
        if (gameCardId.detalle) {
            setBackground(gameCardId?.detalle[0]?.background);
        }
    }, [gameCardId]);

    return (
        <div style={{
            "backgroundImage": `url(${background})`,
            "backgroundSize": '100%',
            "backgroundRepeat": 'no-repeat',
            "backgroundAttachment": 'fixed'
        }}>
            {gameCardId !== undefined && (
                <section className="">
                    <span className="badge bg-danger d-flex justify-content-center text-center w-100 p-3">
                        <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                        {gameCardId.requerimientos}
                    </span>
                    <div className="gameCardIdWallpaper">
                    </div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-9 mt-4 col-sm-12 ">
                                <div>
                                    <h3 className="text-light text-center"><b>{gameCardId.name}</b></h3>
                                    <hr className="text-light" />
                                    <div className="">
                                        <div className="">
                                        <p className="text-light"><b>Lanzamiento:</b> {gameCardId?.detail[0]?.release_date?.date}</p>
                                        <p className="text-light"><b>Desarrolladores:</b> {gameCardId?.detail[0]?.developers}</p>
                                        </div>
                                        <img
                                            src={gameCardId.header_image}
                                            className=" gameCardIdWallpaper"
                                        />
                                        <p className="text-light  mt-3">
                                            Generos:{" "}
                                            {gameCardId?.detail[0]?.genres.map((genres) => (
                                                <span key={genres.id} className="text-light">
                                                    <b>{genres.description + " | "}</b>
                                                </span>
                                            ))}
                                        </p>
                                        <div className="text-light mb-5">
                                            <h4>Descripción del juego: </h4>
                                            <p dangerouslySetInnerHTML={{ __html: gameCardId?.detalle[0]?.short_description }}></p>
                                        </div>
                                    </div>
                                    <h4 className="text-light">Requisitos del sistema:</h4>            
                                    <div className="d-flex justify-content-center">
                                    <div className='text-light'>
                                    <p dangerouslySetInnerHTML={{ __html: gameCardId?.detail[0]?.pc_requirements.minimum }}></p>
                                    </div>
                                    <div className='text-light'>
                                    <p dangerouslySetInnerHTML={{ __html: gameCardId?.detail[0]?.pc_requirements.recommended}}></p>
                                    </div>
                                    </div>
                                    <div className="mt-5 mx-1 mb-5">
                                            <a href={gameCardId.comprarJuego} target="_blank" className="text-light gameCardBuy text-decoration-none"><FontAwesomeIcon icon={faCartShopping} className="text-light" /> Comprar {gameCardId.nombre}</a>
                                    </div>
                                    <div>
                                        <h4 className="text-light">Observaciones del juego:</h4>
                                        <p className="text-light">{gameCardId && gameCardId.observaciones}</p>
                            
                                     </div>
                                    <div className="">
                                        <a
                                            className="btn btn-outline-primary mx-3"
                                            href={gameCardId.googleServ}
                                            target="_blank"
                                        >
                                            Google Server
                                        </a>
                                        <a
                                            className="btn btn-outline-primary"
                                            href={gameCardId.mediafireServ}
                                            target="_blank"
                                        >
                                            Mediafire
                                        </a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 mt-4">
                                <p className="text-light">columna 2</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
