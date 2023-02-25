import React from 'react'
import { useAuthStore } from '../hooks/useAuthStore';

export const UserPageId = () => {
    const { user } = useAuthStore();
    console.log(user)
    
    return (
        <>
        <div className="bg-dark p-5 text-light text-center cardDetailUser w-100 ">
        <h1>Detalles de la cuenta</h1>
        </div>
        <section className="mt-5 text-light container">
                <div className="text-center   w-100 ">
                <table className="table table-dark table-hover text-light ">
                <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Creacion de la cuenta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                        </tr>
                      
                    </tbody>
                </table>
             
                </div>

        </section>


        </>
    )
}
