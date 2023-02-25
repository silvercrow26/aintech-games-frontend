import React, { useEffect } from 'react'
import { useAuthStore } from '../auth/hooks/useAuthStore';
import LoginPage from '../auth/pages/LoginPage';
import { ProfileUser } from '../auth/pages/ProfileUser';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { UserPageId } from '../auth/pages/UserPageId';
import { Footer } from '../games/components/Footer';
import { GameByLowRequirements } from '../games/components/GameByLowRequirements';
import { GameByMediumRequirements } from '../games/components/GameByMediumRequirements';
import { GameCardByRequirements } from '../games/components/GameCardByRequirements';
import { GameCardWithId } from '../games/components/GameCardWithId';
import Navbar from '../games/components/Navbar';
import { AddNewGame } from '../games/pages/AddNewGame';
import GamesPage from '../games/pages/GamesPage';
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPanel } from '../games/components/AdminPanel';
import { AdminGameDatabase } from '../games/components/AdminGameDatabase';



export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    useEffect(() => {
        checkAuthToken();
    }, []);


    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<GamesPage />} />
                <Route path='/juegos/level/altos-requisitos' element={<GameCardByRequirements />} />
                <Route path='/juegos/level/medios-requisitos' element={<GameByMediumRequirements />} />
                <Route path='/juegos/level/bajos-requisitos' element={<GameByLowRequirements />} />
                <Route path='/juegos/:id' element={<GameCardWithId />} />
                <Route path="/*" element={<Navigate to="/" />} />

                {
                    (status === 'authenticated') ?
                    (
                        <>
                                <Route path='/' element={<GamesPage />} />
                                <Route path='/newgame' element={<AddNewGame />} />
                                <Route path='/admin/hub' element={<AdminPanel />} />    
                                <Route path='/admin/gamedatabase' element={<AdminGameDatabase />} />
                                <Route path='/user/configuration/:id' element={<UserPageId />} />
                                <Route path='/user/profile/:name' element={<ProfileUser/>} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                <Route path='/auth/register' element={<RegisterPage />} />
                                <Route path="/newgame" element={<Navigate to="/auth/login" />} />
                                <Route path='/user/configuration/:id' element={<Navigate to="/auth/login" />} />
                                <Route path='/user/profile/:name' element={<ProfileUser/>} />
                            </>
                        )
                }
            </Routes>
        </>
    )
}

