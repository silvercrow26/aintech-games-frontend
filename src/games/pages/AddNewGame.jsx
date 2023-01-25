import React from 'react'
import Header from '../../components/Header'

export const AddNewGame = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <h3 className='text-center py-4'>Agregar juego nuevo</h3>
                <form>
                    <div className='form-group'>
                        <label>Nombre</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Nombre del videojuego'
                        />

                    </div>
                    <div className='form row'>
                        <div className='col-md-6'>
                            <label>Peso(GB)</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='15'
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Plataforma</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='PC'
                            />
                        </div>
                    </div>
                    <label>Categorías</label>
                    <div className='form-group'>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='Accion'
                            />
                            <label className='form-check-label'>Acción</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='Aventura'
                            />
                            <label className='form-check-label'>Aventura</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='Lucha'
                            />
                            <label className='form-check-label'>Lucha</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='Carrera'
                            />
                            <label className='form-check-label'>Carreras</label>
                        </div>
                                               
                    </div>
                </form>

            </div>


        </>
    )
}
