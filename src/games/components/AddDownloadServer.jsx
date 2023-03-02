import React from 'react'
import { useDownloadServerStore } from '../hooks/useDownloadServerStore';

import { useForm } from '../hooks/useForm'


const formFields = {
  name: '',
  url: '',
}

export const AddDownloadServer = () => {

  const { name, url, onInputChange, formState } = useForm(formFields);
  const { startSavingServer, setActiveDownloadServer, startDeleteServer, downloadServers, activeDownloadServer } = useDownloadServerStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const server = downloadServers.filter(server => server.name == formState.name);
    if (server.length === 0) {
      return startSavingServer(formState);
    }
    console.log('Ya existe.')
  }

  const handleDelete = (server) => {
    setActiveDownloadServer(server);
    startDeleteServer(activeDownloadServer);
  }

  return (
    <div>
      <input
        className='mx-2'
        type='text'
        name='name'
        placeholder='Nombre'
        value={name}
        onChange={onInputChange}
        autoComplete='off'
      />
      <input
        type='text'
        name='url'
        placeholder='URL'
        value={url}
        onChange={onInputChange}
        autoComplete='off'
      />
      <button
        type="button"
        className={`btn btn-primary`}
        onClick={handleSubmit}>
        Agregar servidor
      </button>
      <div>
        {(downloadServers.length == 0) ? (<p></p>) :
          downloadServers.map(server => (
            <div key={server.name}>
              <label>Name: {server.name} URL: {server.url}</label>
              <button type='button' onClick={() => handleDelete(server)}>X</button>
            </div>
          ))}
      </div>
    </div>
  )

}
