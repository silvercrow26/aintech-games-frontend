import React from 'react'
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <div className='container login-form-2 login-container'>
        <h3>Ingreso</h3>
        <form>
          <div className='form-group'>
            <input
              type="email"
              className='form-control'
              placeholder='Correo'
            />
          </div>
          <div className='form-group mt-2'>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
          </div>
          <div className='mt-2 '>
            <input 
              type="submit"
              className='btnSubmit'
              value='login'
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage
