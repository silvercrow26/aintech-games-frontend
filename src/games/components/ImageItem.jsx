import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const ImageItem = (item) => {

    const [file, setFile] = useState();
    const [title, setTitle] = useState('Header');


    const handleUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', title);
        formData.append('game', item.game);

        const { data } = await axios.post(`${import.meta.env.VITE_API_URL_IMG}/upload`, formData);

    }
    
    
    const handleChange = (e) => {
        setFile(e.target.files[0]);
        console.log(formState);
    }


    return (
        <>
            <form onSubmit={handleUpload}>

                <label>Título</label>
                <input
                    type="text"
                    placeholder='Header Image'
                    className='form-control'
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Imagen</label>
                <input
                    type="file"
                    className='form-control'
                    onChange={handleChange}
                />
                <input
                    type='submit'
                    className="btn btn-primary form-control my-2"
                    value='Upload'
                />
            </form>
        </>
    )
}
