import React, { useEffect } from 'react';
import { useForm, useGameStore, AddImage, getGameDetail, AddDownloadServer, useDownloadServerStore, updateGenresData } from '../../index';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const formFields = {
    name: '',
    steamId: '',
    requirements: 'altos-requisitos',
    buyGame: '',
    notes: '',
    mostDownloaded: 'false'
}

export const NewGame = () => {

    const { name, steamId, requirements, notes, buyGame, mostDownloaded, onInputChange, formState, setFormState } = useForm(formFields);
    const { setActiveGame, activeGame } = useGameStore();
    const { detail, validId, handleCheck } = getGameDetail(steamId);
    const { downloadServers } = useDownloadServerStore();
    const { games } = useGameStore();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const game = games.find(game => game.steamId === steamId);
        if (game != undefined) {
            Swal.fire({
                title: '<strong>¡Ya existe!</strong>',
                icon: 'info',
                html:
                    'El <b>videojuego</b>: ' +
                    `<a href="/juegos/${game._id}">${game.name}</a> ` +
                    'ya existe en la base de datos.',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    `Aceptar`,
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i className="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
            return console.log('Ya existe ese juego en la base de datos.')
        }
        if (validId == 'is-invalid' || validId == '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Verifica la ID ingresada!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
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
                        <h4>Servidores de descarga: </h4>
                        <div className='text-light'>
                            <AddDownloadServer color={'table-dark'} />
                        </div>
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
