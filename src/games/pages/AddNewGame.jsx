import React, { useEffect, useMemo, useState } from 'react'
import { CheckboxCat } from '../components/CheckboxCat'
import Header from '../components/Header'
import { useForm } from '../hooks/useForm'



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
            order: 0,
            name: 'Accion',
        },
        {
            order: 1,
            name: 'Aventura',
        },
        {
            order: 2,
            name: 'Carreras',
        }
    ]

    const { nombre, peso, plataforma, sistema, procesador,
        graficos, memoria, googledrive, onInputChange, formState, setFormState } = useForm(formFields);

    const [data, setData] = useState(
        cat.sort((a, b) => a.order - b.order)
    );

    const isCheck = () => {
        const categoria = [];

        data.map((cat) => {
            if (cat.checked) {
                categoria.push({ name: cat.name });
                setFormState({
                    ...formState,
                    'categoria': categoria
                })
            }
        })
    }

    const onSubmit = (event) => {
        console.log(formState);
        event.preventDefault();
    }

    useEffect(() => {
        isCheck();
    }, [data])


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
                        {data.map((obj, index) => (
                            <li key={index}>
                                <CheckboxCat
                                    obj={obj}
                                    onChange={(item) => {
                                        setData(data.map((d) => (d.order === item.order ? item : d)));
                                    }}
                                />
                            </li>
                        ))}
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
                                type='number'
                                className='form-control my-2'
                                placeholder='Memoria(GB)'
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
