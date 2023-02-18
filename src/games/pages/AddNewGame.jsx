import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Navbar'
import { ImageItem } from '../components/ImageItem'
import { useForm } from '../hooks/useForm'
import { useGameStore } from '../hooks/useGameStore'

const formFields = {
    nombre: '',
    steamId: '',
    requerimientos: 'Altos Requisitos',
    googleServ: '',
    mediafireServ: '',
    torrentServ: '',
    ddownloadServ: '',
    comprarJuego: '',
    observaciones: '',
}

const details = {
    genres: "",
    required_age: "",
    detailed_description: "",
    developers: "",
    publishers: "",
    release_date: "",
    pc_requirements: "",
    background: "",
}


export const AddNewGame = () => {

    const { nombre, steamId, requerimientos, observaciones, comprarJuego, googleServ, mediafireServ, torrentServ, ddownloadServ, onInputChange, formState, setFormState } = useForm(formFields);
    const [file, setFile] = useState();
    const [title, setTitle] = useState('Header');
    const [header_image, setHeader_image] = useState('');

    const { startSavingGame } = useGameStore();
    const [validId, setValidId] = useState('');
    const [enabledButton, setEnabledButton] = useState('disabled');
    const [enabledButtonUpload, setEnabledButtonUpload] = useState('disabled');

    const [detalle, setDetalle] = useState(details);
   
    const onSubmit = (event) => {
        event.preventDefault();
        if (detalle.header_image == '' && detalle.genres == []) {
            return console.log('Verifica la id ingresada.')
        }
        startSavingGame(formState);
        console.log('Se ha agregado el juego: ' + nombre);
        setFormState(formFields);
        setDetalle(details);
        setHeader_image('');
        setFile();
    }

    const handleCheck = async () => {
        try {
            setValidId('');
            setEnabledButtonUpload('disabled');
            const { data: detail } = await axios.get(`${import.meta.env.VITE_API_STEAM_URL}=${steamId}`);
            console.log(detail.resp);
            setDetalle({
                genres: detail.resp.genres,
                required_age: detail.resp.required_age,
                short_description: detail.resp.short_description,
                developers: detail.resp.developers,
                publishers: detail.resp.publishers,
                release_date: detail.resp.release_date,
                pc_requirements: detail.resp.pc_requirements,
                background: detail.resp.background,
            });
            setFormState({
                ...formState,
                "detalle": detalle,
            });
            setValidId('is-valid');
            setEnabledButtonUpload('enabled');
        } catch (error) {
            setDetalle(details);
        }
    };
    const handleUpload = async (event) => {
        event.preventDefault();
        setEnabledButton('disabled');
        try {
            
        } catch (error) {
            
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', title);
        formData.append('game', steamId);

        const { data } = await axios.post(`${import.meta.env.VITE_API_URL_IMG}/upload`, formData);
        setHeader_image(data.img.url);
        setEnabledButton('enabled');
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        handleCheck();
    }, [steamId, file]);

    useEffect(() => {
        setFormState({
            ...formState,
            "header_image": header_image,
        })
    }, [header_image]);
    
    return (
        <>
            <div className='container text-light'>
                <h3 className='text-center py-3'>Agregar juego nuevo</h3>
                <div className='row'>

                    <form onSubmit={onSubmit} className="col">
                        <div className='form-group'>
                            <label>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre del videojuego'
                                value={nombre}
                                name='nombre'
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className='form row'>
                            <div className='col-md-3'>
                                <label>Steam ID</label>

                                <input
                                    type='number'
                                    className={`form-control ${validId}`}
                                    placeholder='15'
                                    value={steamId}
                                    name='steamId'
                                    onChange={onInputChange}
                                    required
                                />

                            </div>
                            <div className='col'>
                                <label>Requisitos:</label>
                                <select className="form-select" aria-label="Default select example"
                                    id="requerimientos"
                                    value={requerimientos}
                                    onChange={onInputChange}
                                    name='requerimientos'
                                >
                                    <option value="Altos Requisitos">Altos Requisitos</option>
                                    <option value="Medios Requisitos">Medios Requisitos</option>
                                    <option value="Bajos Requisitos">Bajos Requisitos</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <label className='mt-2'>Comprar juego:</label>
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='https://www.instant-gaming.com/'
                                name='comprarJuego'
                                value={comprarJuego}
                                onChange={onInputChange}
                            />

                            <label className='mt-2'>Servidores de descarga:</label>
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Google Drive (Opcional)'
                                name='googleServ'
                                value={googleServ}
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Mediafire (Opcional)'
                                name='mediafireServ'
                                value={mediafireServ}
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Torrent (Opcional)'
                                name='torrentServ'
                                value={torrentServ}
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Torrent (Opcional)'
                                name='ddownloadServ'
                                value={ddownloadServ}
                                onChange={onInputChange}
                            />
                            <label className='mt-2'>Observaciones:</label>
                            <textarea
                                type='textarea'
                                className='form-control my-2'
                                name='observaciones'
                                value={observaciones}
                                onChange={onInputChange}
                            />
                        </div>

                        <input
                            type='submit'
                            className={`btn btn-success my-2 ${enabledButton}`}
                            value='Agregar'
                        />
                    </form>
                    <div className='col-md-4'>
                        <form onSubmit={handleUpload}>
                            <label>Título</label>
                            <input
                                type="text"
                                placeholder='Header Image'
                                className='form-control'
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                            <label>Imagen</label>
                            <input
                                type="file"
                                className='form-control'
                                onChange={handleChange}
                            />
                            <input
                                type='submit'
                                className={`btn btn-primary form-control my-2 ${enabledButtonUpload}`}
                                value='Upload'
                            />
                            <img src={header_image} className="container" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
