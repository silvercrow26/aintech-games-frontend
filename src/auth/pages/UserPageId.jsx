import React from 'react'
import { useAuthStore } from '../hooks/useAuthStore';

export const UserPageId = () => {
    const { user } = useAuthStore();
    console.log(user)
    return (
        <>
        <section className="mt-5 text-light container bgCardConfiguration">
                <div className="text-center">
                    <h3>Detalles de la cuenta</h3>
                    <div className="">
                        <p>Nombre: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>                    
                </div>

        </section>


        </>
    )
}
