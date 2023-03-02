import React, { useEffect, useState } from 'react';
import { useGameStore } from '../index';

export const AddImage = () => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('Header');
    const [header_image, setHeader_image] = useState('');

    const { activeGame, setActiveGame, startSavingGame, startSavingImage, setActiveImage, activeImage } = useGameStore();
    const { steamId, name } = activeGame;

    const types = ['image/png', 'image/jpeg'];

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', title);
        formData.append('game', steamId);
        try {
            await startSavingImage(formData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await startSavingGame(activeGame);
    }

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            console.log('Elige una imagen por favor (png o jpeg).')
        }
    }

    useEffect(() => {
        if (activeImage !== null) {
            if (activeGame.header_image != activeImage.url) {
                setActiveGame({ ...activeGame, header_image: activeImage.url });
            }
            setHeader_image(activeImage.url);
        }
    }, [activeImage]);

    return (
        <div className='container col-md-6'>
            <form>
                <button
                    type="button"
                    className={`btn btn-primary my-2`}
                    onClick={() => { setActiveGame(null); setActiveImage(null) }}> volver
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

                <img src={header_image} />

                <button
                    type="submit"
                    className={`btn btn-primary form-control my-2`}
                    onClick={handleSubmit}> Guardar Juego
                </button>
            </form>
        </div>
    )
}
