import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useVideoStore } from '../../hooks/useVideoStore';


const formFields = {
    name: '',
    iframe: '',
}

export const AdminNewVideo = () => {

    const { name, iframe, onInputChange, formState } = useForm(formFields);
    const { videos, activeVideo, setActiveVideo, startSavingVideo } = useVideoStore();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await startSavingVideo(formState);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container my-5">
            <h1>Agregar Video</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" value={name} onChange={onInputChange} className="form-control" name="name" placeholder="Ingresa el nombre del video" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Iframe:</label>
                    <textarea className="form-control" value={iframe} onChange={onInputChange} name="iframe" rows="3" placeholder="Ingresa el link del video (embed)"></textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
