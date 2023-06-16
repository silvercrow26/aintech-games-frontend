import { faArrowLeft, faEnvelope, faLock, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../games/hooks/useForm'
import { useAuthStore } from '../hooks/useAuthStore'

const loginRegisterFields = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
}

export const RegisterPage = () => {
  const { username, email, password, repeatPassword, onInputChange, formState } = useForm(loginRegisterFields);
  const { startRegister } = useAuthStore();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    try {
      await startRegister(formState);
    } catch (error) {
      console.log(error);
    }

    console.log(formState);
  }

  return (
    <div>
      <div className='container mt-3  border p-5 bgCardLogin mb-5'>
        <Link to="/" className="volverInicio">
          <button className="btn btn-outline-light mb-5"><FontAwesomeIcon icon={faArrowLeft} /> Volver al inicio</button>
        </Link>
        <h2 className="mb-3 text-center TituloLogin text-light">Aintech Games</h2>
        <form autoComplete="off">
          <div className='form-group'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faEnvelope} /> Nombre:</span>
            <input
              type="text"
              className='borderInputs p-2  bg-dark w-100 text-light'
              placeholder='Nombre'
              name='username'
              value={username}
              onChange={onInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faEnvelope} /> Correo:</span>
            <input
              type="email"
              className='borderInputs p-2  bg-dark w-100 text-light'
              placeholder='Correo'
              name='email'
              value={email}
              onChange={onInputChange}

              required
            />
          </div>
          <div className='form-group mt-2'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faLock} /> Contraseña:</span>
            <input
              type="password"
              className="borderInputs p-2  bg-dark w-100 text-light"
              placeholder="Contraseña"
              name='password'
              value={password}
              onChange={onInputChange}

              required
            />
          </div>

          <div className='form-group mt-2'>
            <span className="mb-3 text-light"><FontAwesomeIcon icon={faLock} /> Repetir contraseña:</span>
            <input
              type="password"
              className="borderInputs p-2  bg-dark w-100 text-light"
              placeholder="Contraseña"
              name='repeatPassword'
              value={repeatPassword}
              onChange={onInputChange}
              required
            />
          </div>

          <div className='mt-3 text-center'>

            <button type="submit" className='buttonRegistro w-50 mx-5 text-center' onClick={handleRegister}>Registrarse</button>
            <div className="mt-3 ">
              <Link className="text-center text-light text-decoration-none" to='/auth/login'><b>¿Ya tienes una cuenta? <span className="text-primary">Conectar</span></b></Link>
            </div>
          </div>
          <p className="text-center small text-secondary mt-3"><FontAwesomeIcon icon={faShield} /> Datos seguros y protegidos</p>
        </form>
      </div>
    </div>
  )
}
