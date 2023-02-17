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

const LoginPage = () => {


  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const {startLogin} = useAuthStore();

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({email: loginEmail, password: loginPassword});
  }

  return (
    <>
      <div className='container  login-container w-50 border p-5 bgCardLogin'>
        <Link to="/" className="volverInicio">
      <button className="btn btn-outline-light mb-5"><FontAwesomeIcon icon={faArrowLeft}/> Volver al inicio</button>
        </Link>
        <h2 className="mb-3 text-center TituloLogin text-light">Aintech Games</h2>
        <form onSubmit={loginSubmit} >
          <div className='form-group'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faEnvelope} /> Correo:</span>
            <input
              type="email"
              className='form-control bg-dark w-100 text-light'
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
              className="form-control bg-dark w-100 text-light"
              placeholder="Contraseña"
              name='loginPassword'
              value={loginPassword}
              onChange={onInputChange}
              required
            />
          </div>
          <div className='mt-3'>
    
            <button   type="submit" className='buttonLoginAuth w-100 text-center'>Iniciar Sesión</button>
             <button className="buttonRegistro w-100 mt-3 text-center">Registrarse</button>
          </div>
          <p className="text-center small text-secondary mt-5"><FontAwesomeIcon icon={faShield} /> Datos seguros y protegidos</p>
        </form>
      </div>
    </>
  )
}

export default LoginPage
