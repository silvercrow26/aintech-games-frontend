import React from 'react'
import { useForm } from '../../games/hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import './LoginPage.css';

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
      <div className='container login-form-2 login-container'>
        <h3>Ingreso</h3>
        <form onSubmit={loginSubmit}>
          <div className='form-group'>
            <input
              type="email"
              className='form-control'
              placeholder='Correo'
              name='loginEmail'
              value={loginEmail}
              onChange={onInputChange}
            />
          </div>
          <div className='form-group mt-2'>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name='loginPassword'
              value={loginPassword}
              onChange={onInputChange}
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
