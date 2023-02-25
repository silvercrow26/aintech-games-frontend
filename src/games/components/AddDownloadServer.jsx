import React from 'react'
import { useForm } from '../hooks/useForm'


const formFields = {
  name: '',
  url: '',
}


export const AddDownloadServer = (game) => {

  const { name, url, onInputChange } = useForm(formFields);

  const handleSubmit = () => {
    console.log(game);
  }

  return (
    <>
      <form>
        <label>Nombre:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onInputChange}
          required
        />
        <label>URL:</label>
        <input
          type='text'
          name='url'
          value={url}
          onChange={onInputChange}
          required
        />
        <button
          type="submit"
          className={`btn btn-primary form-control my-2`}
          onClick={handleSubmit}> Save
        </button>
      </form>
    </>
  )

}
