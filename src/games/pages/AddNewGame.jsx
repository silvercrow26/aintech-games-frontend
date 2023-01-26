import React, { useState } from 'react'
import Header from '../../components/Header'
import { useForm } from '../../hooks/useForm'


const formFields = {
    nombre: '',
    peso: '',
    plataforma: '',
    sistema: '',
    categoria: '',
    procesador: '',
    graficos: '',
    memoria: '',
    almacenamiento: '',
    googledrive: '',
}



export const AddNewGame = () => {
    const cat = [
        {
            name: 'Accion',
        },
        {
            name: 'Aventura',
        }
    ]



    const { nombre, peso, categoria, plataforma, sistema, procesador,
        graficos, memoria, almacenamiento, googledrive, onInputChange, formState, setFormState } = useForm(formFields);


    const [checkedState, setCheckedState] = useState(
        new Array(cat.length).fill(false)
    );


    const handleOnChange = (position) => {
        
        const updatedCheckedState = checkedState.map((item, index) => {
            if (index === position) {
                const cate = cat[index].name;
                console.log(cate);
                setFormState({
                    ...formState,
                    genre : cat.push(cate)
                });
               
                return !item;
            } else {
                return item;
            }
        });
        setCheckedState(updatedCheckedState);
        console.log(formState);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }



    return (
        <>
            <Header />
            <div className='container'>
                <h3 className='text-center py-3'>Agregar juego nuevo</h3>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>Nombre</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Nombre del videojuego'
                            value={nombre}
                            name='nombre'
                            onChange={onInputChange}
                        />

                    </div>
                    <div className='form row'>
                        <div className='col-md-6'>
                            <label>Peso(GB)</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='15'
                                value={peso}
                                name='peso'
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label>Plataforma</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='PC'
                                value={plataforma}
                                name='plataforma'
                                onChange={onInputChange}
                            />
                        </div>
                    </div>
                    <label>Categoría(s)</label>
                    <div className='form-group'>
                        <ul className="form-group">
                            {cat.map(({ name }, index) => {
                                return (
                                    <li key={index}>
                                        <div className="toppings-list-item">
                                            <div className="left-section">
                                                <input
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={categoria}
                                                    value={name}
                                                    checked={checkedState[index]}
                                                    onChange={() => {handleOnChange(index)}}
                                                />
                                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='form row'>
                        <div className='col-md-6'>
                            <label className='mt-2'>Requisitos mínimos:</label>
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Sistema operativo'
                                value={sistema}
                                name='sistema'
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Procesador'
                                value={procesador}
                                name='procesador'
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Memoria'
                                value={memoria}
                                name='memoria'
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Gráficos'
                                value={graficos}
                                name='graficos'
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Almacenamiento'
                                value={almacenamiento}
                                name='almacenamiento'
                                onChange={onInputChange}
                            />

                        </div>
                        <div className='col-md-6'>
                            <label className='mt-2'>Servidores de descarga:</label>
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Google Drive'
                                name='googledrive'
                                value={googledrive}
                                onChange={onInputChange}
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Mediafire'
                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='Torrent'

                            />
                            <input
                                type='text'
                                className='form-control my-2'
                                placeholder='DDownload'

                            />
                        </div>
                    </div>

                    <input
                        type='submit'
                        className='btn btn-success my-2'
                        value='Agregar'
                    />
                </form>
            </div>
        </>
    )
}
