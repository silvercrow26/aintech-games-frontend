import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../auth/hooks/useAuthStore';
import LoginPage from '../auth/pages/LoginPage';
import { GameCardWithId } from '../games/components/GameCardWithId';
import Navbar from '../games/components/Navbar';
import { AddNewGame } from '../games/pages/AddNewGame';
import GamesPage from '../games/pages/GamesPage';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<GamesPage />} />
                <Route path='/juegos/:id' element={<GameCardWithId />} />

                {
                    (status == 'authenticated') ?
                        (
                            <>
                                <Route path='/' element={<GamesPage />} />
                                <Route path='/*' element={<Navigate to='/' />} />
                                <Route path='/newgame' element={<AddNewGame />} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                <Route path="/newgame" element={<Navigate to="/auth/login" />} />
                            </>
                        )
                }
            </Routes>
        </>
    )
}

