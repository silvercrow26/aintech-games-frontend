import React, { useEffect, useState } from 'react'
import imgApi from '../../api/imgApi';
import { useGameStore } from '../hooks/useGameStore';
import { AddDownloadServer } from './AddDownloadServer';

export const AddImage = () => {

    const [file, setFile] = useState();
    const [title, setTitle] = useState('Header');
    const [header_image, setHeader_image] = useState('');

    const { activeGame, setActiveGame, startSavingGame, startLoadingGames } = useGameStore();
    const { steamId, name } = activeGame;

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', title);
        formData.append('game', steamId);
        try {
            const { data } = await imgApi.post(`/upload`, formData);
            setHeader_image(data.img.url);

        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await startSavingGame(activeGame);
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        if (header_image !== '') {
            setActiveGame({ ...activeGame, header_image: header_image });
        }
    }, [header_image]);

    return (
        <div className='container col-md-6'>
            <form>
                <button
                    type="button"
                    className={`btn btn-primary my-2`}
                    onClick={() => setActiveGame(null)}> volver
                </button>
                <div className='text-center'>
                    <h2>Agrega una imagen para: </h2>
                    <h2>{name}</h2>

                </div>
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
                <button
                    type="button"
                    className={`btn btn-primary form-control my-2`}
                    onClick={handleUpload}> Upload
                </button>
                <img src={header_image} className="container" />
                <button
                    type="submit"
                    className={`btn btn-primary form-control my-2`}
                    onClick={handleSubmit}> Guardar Juego
                </button>
            </form>
        </div>
    )
}
