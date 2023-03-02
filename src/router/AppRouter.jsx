import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore, ProfileUser, RegisterPage, UserPageId, LoginPage } from '../auth/index'
import {
    LowRequirementsPage,
    MediumRequirementsPage,
    HighRequirementsPage,
    AdminGameDatabase,
    AdminPanel, AddNewGame, Navbar,
    GameCardWithId, GamesPage, useGameStore
} from '../games/index';

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    const { games, startLoadingGames } = useGameStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    useEffect(() => {
        if (games.length == 0) {
            startLoadingGames();
        }
    }, [games])

    if (status === 'checking') {
        return (
            <>
            </>
        )
    }
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<GamesPage />} />
                <Route path='/juegos/level/altos-requisitos' element={<HighRequirementsPage />} />
                <Route path='/juegos/level/medios-requisitos' element={<MediumRequirementsPage />} />
                <Route path='/juegos/level/bajos-requisitos' element={<LowRequirementsPage />} />
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
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                <Route path='/auth/register' element={<RegisterPage />} />
                                <Route path='/user/configuration/:id' element={<Navigate to="/auth/login" />} />
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                            </>
                        )
                }
            </Routes>
        </>
    )
}

