import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { useGameStore } from '../hooks/useGameStore'
import { AddImage } from './AddImage'
import { getGameDetail } from '../helpers/getGameDetail'
import { AddDownloadServer } from './AddDownloadServer'
import { useDownloadServerStore } from '../hooks/useDownloadServerStore'


const formFields = {
    name: '',
    steamId: '',
    requirements: 'altos-requisitos',
    buyGame: '',
    notes: '',
    mostDownloaded: 'false'
}

export const AddNewGame = () => {

    const { name, steamId, requirements, notes, buyGame, mostDownloaded, onInputChange, formState, setFormState } = useForm(formFields);
    const { setActiveGame, activeGame } = useGameStore();
    const { detail, validId, handleCheck } = getGameDetail(steamId);
    const { downloadServers } = useDownloadServerStore();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        if (validId == 'is-invalid') {
            return console.log('Verifica la id ingresada.')
        }
        console.log(formState);
        setActiveGame(formState);
    }

    useEffect(() => {
        setFormState({
            ...formState,
            "detail": [detail],
            "downloadserver": downloadServers,
        })
    }, [detail, downloadServers]);

    return (
        <>
            {(activeGame == null) ? <div className='container text-light'>
                <h3 className='text-center py-3'>Agregar juego nuevo</h3>
                <div className='row'>

                    <form onSubmit={handleSubmit} className="col">
                        <div className='form-group'>
                            <label>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre del videojuego'
                                value={name}
                                name='name'
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
                                    onBlur={handleCheck}
                                    required
                                />

                            </div>
                            <div className='col'>
                                <label>Requisitos:</label>
                                <select className="form-select" aria-label="Default select example"
                                    id="requirements"
                                    value={requirements}
                                    onChange={onInputChange}
                                    name='requirements'
                                >
                                    <option value="altos-requisitos">Altos Requisitos</option>
                                    <option value="medios-requisitos">Medios Requisitos</option>
                                    <option value="bajos-requisitos">Bajos Requisitos</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                        <div className='col'>
                                <label>Mas Descargado:</label>
                                <select className="form-select" aria-label="Default select example"
                                    id="requirements"
                                    value={mostDownloaded}
                                    onChange={onInputChange}
                                    name='mostDownloaded'
                                >
                                    <option value="false">false</option>
                                    <option value="true">true</option>
                                </select>
                            </div>
                            <label className='mt-2'>Comprar juego:</label>
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='https://www.instant-gaming.com/'
                                name='buyGame'
                                value={buyGame}
                                onChange={onInputChange}
                            />
                            <label className='mt-2'>Notas:</label>
                            <textarea
                                type='textarea'
                                className='form-control my-2'
                                name='notes'
                                value={notes}
                                onChange={onInputChange}
                            />
                        </div>
                        <AddDownloadServer />
                        <input
                            type='submit'
                            className={`btn btn-success form-control my-2 `}
                            value='Agregar'
                        />
                    </form>
                </div>
            </div>
                : <AddImage />}
        </>
    )
}
