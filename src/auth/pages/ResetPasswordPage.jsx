import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import gamesApi from '../../api/gamesApi';


export const ResetPasswordPage = () => {

    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tokenDecode = atob(token);
        console.log(tokenDecode);

        if (password !== confirmPassword) {
            console.log('Las contraseñas no coinciden');
            return;
        }

        const data = await gamesApi.post('/auth/reset-password', { password:password, token:tokenDecode });
        console.log(data);
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">Cambiar Contraseña</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="password">Nueva Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Ingresa tu nueva contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirma tu nueva contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
