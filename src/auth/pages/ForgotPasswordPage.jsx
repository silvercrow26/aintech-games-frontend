import React from 'react'
import { useForm } from '../../games'
import gamesApi from '../../api/gamesApi';


const ForgotFormFields = {
    email: '',
}

export const ForgotPasswordPage = () => {

    const { email, onInputChange } = useForm(ForgotFormFields);

    const handleForgotPassword = async (event) => {
        event.preventDefault();
        try {
            const { data } = await gamesApi.post('/auth/forgot-password', { email });
            console.log(data);        
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-header text-dark">
                                Recuperar Contraseña
                            </div>
                            <div className="card-body ">
                                <form>
                                    <div className="form-group">
                                        <label>Correo electrónico</label>
                                        <input value={email} onChange={onInputChange} name='email' type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
                                    </div>
                                    <button type="submit" onClick={handleForgotPassword} className="btn btn-primary">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
