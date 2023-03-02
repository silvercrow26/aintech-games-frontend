import { faPlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useForm, useDownloadServerStore } from '../index'


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
    console.log(formState);
    if (server.length == 0 && formState.name != '' && formState.url != '') {
      return startSavingServer(formState);
    }
    console.log('Ocurrió un error al intentar agrear este servidor de descarga.')
  }

  const handleDelete = (server) => {
    setActiveDownloadServer(server);
    startDeleteServer(activeDownloadServer);
  }

  return (
    <div className='row'>
      <div className='d-flex'>

        <input
          className='form-control w-25'
          type='text'
          name='name'
          placeholder='Nombre'
          value={name}
          onChange={onInputChange}
          autoComplete='off'
        />


        <input
          className='form-control'
          type='text'
          name='url'
          placeholder='URL'
          value={url}
          onChange={onInputChange}
          autoComplete='off'
        />


        <button className='btn' onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPlus} />
        </button>

      </div>

      <div>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>URL</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {(downloadServers.length == 0) ? (<tr><td></td></tr>) :
              downloadServers.map(server => (
                <tr>
                  <td> {server.name} </td>
                  <td> {server.url} </td>
                  <td className="">
                    <button onClick={() => handleDelete(server)} className="btn btn-outline-danger mt-2">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  )

}
