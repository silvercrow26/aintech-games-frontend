import React, { useEffect } from 'react'
import { useAuthStore } from '../auth/hooks/useAuthStore';
import LoginPage from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { UserPageId } from '../auth/pages/UserPageId';
import { GameCardWithId } from '../games/components/GameCardWithId';
import Navbar from '../games/components/Navbar';
import { AddNewGame } from '../games/pages/AddNewGame';
import GamesPage from '../games/pages/GamesPage';
import { Navigate, Route, Routes } from 'react-router-dom'



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
                <Route path='/juegos/:id' element={<GameCardWithId />} />
                <Route path="/*" element={<Navigate to="/" />} />

                {
                    (status == 'authenticated') ?
                        (
                            <>
                                <Route path='/' element={<GamesPage />} />
                                <Route path='/newgame' element={<AddNewGame />} />
                                <Route path='/user/configuration/:id' element={<UserPageId />} />
                                <Route path='/auth/login' element={<Navigate to="/" />} />
                                <Route path='/auth/register' element={<Navigate to="/" />} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                <Route path='/auth/register' element={<RegisterPage />} />
                                <Route path='/user/configuration/:id' element={<Navigate to="/auth/login" />} />   
                            </>
                        )
                }
            </Routes>
        </>
    )
}

