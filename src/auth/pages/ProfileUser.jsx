import React, {useEffect} from 'react'
import Particles from '../../Particles';
import portadauser from '../../assets/portadauser.jpeg'
import { useAuthStore } from '../hooks/useAuthStore';
export const ProfileUser = () => {

    const { user } = useAuthStore();
    
 
    return (
        <>
        <section>
        <Particles />
            <div className="p-5 headerDetailUserId text-light">
                <div className="container">
    <h2 className="">{user.name}</h2>
                <h2 className="small text-secondary">{user.email}</h2>
                </div>
            </div>
        </section>
        </>
    )
}
