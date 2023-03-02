import React from 'react'
import { useForm } from '../../games/hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './LoginPage.css';
import { faArrowLeft, faEnvelope, faLock, faRightToBracket, faShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {


  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const {startLogin} = useAuthStore();

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({email: loginEmail, password: loginPassword});
  }

  return (
    <>
      <div className='container mt-3  border p-5 bgCardLogin'>
        <Link to="/" className="volverInicio">
      <button className="btn btn-outline-light mb-5"><FontAwesomeIcon icon={faArrowLeft}/> Volver al inicio</button>
        </Link>
        <h2 className="mb-3 text-center TituloLogin text-light">Aintech Games</h2>
        <form onSubmit={loginSubmit} >
          <div className='form-group'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faEnvelope} /> Correo:</span>
            <input
              type="email"
              className='borderInputs p-2  bg-dark w-100 text-light'
              placeholder='Correo'
              name='loginEmail'
              value={loginEmail}
              onChange={onInputChange}
              required
            />
          </div>
          <div className='form-group mt-2'>
          <span className="mb-3 text-light"><FontAwesomeIcon icon={faLock} /> Contraseña:</span>
            <input
              type="password"
              className="borderInputs p-2 bg-dark w-100 text-light"
              placeholder="Contraseña"
              name='loginPassword'
              value={loginPassword}
              onChange={onInputChange}
             
              required
            />
          </div>
          <div className='mt-3 text-center'>
    
            <button   type="submit" className='buttonLoginAuth w-50 mx-5 text-center'>Iniciar Sesión</button>
            <div className="mt-3 ">
             <Link className="text-center text-decoration-none" to='/auth/register'><b>Crear una cuenta de aintech.online gratis</b></Link>
            </div>
          </div>
          <p className="text-center small text-secondary mt-3"><FontAwesomeIcon icon={faShield} /> Datos seguros y protegidos</p>
        </form>
      </div>
    </>
  )
}

