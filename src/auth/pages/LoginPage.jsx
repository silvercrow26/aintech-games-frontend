import React, { useEffect } from 'react'
import { useForm } from '../../games/hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LoginPage.css';
import { faArrowLeft, faEnvelope, faLock, faShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logosinfondo from '../../assets/logosinfondo.png'
const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {


  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const { startLogin, errorMessage } = useAuthStore();

  const loginSubmit = async (event) => {
    event.preventDefault();
    await startLogin({ email: loginEmail, password: loginPassword });
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
  }, [errorMessage])

  return (
    <>
      <div className='container mt-3  border p-5 bgCardLogin bg-black mb-3'>
        <Link to="/" className="volverInicio">
          <button className="btn btn-outline-light mb-5"><FontAwesomeIcon icon={faArrowLeft} /> Volver al inicio</button>
        </Link>
        <div className="d-flex justify-content-center align-items-center">
        <img src={logosinfondo} className="w-50" />
        </div>
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

            <button type="submit" className='buttonLoginAuth w-25 mx-5 text-center'>Iniciar Sesión</button>
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

