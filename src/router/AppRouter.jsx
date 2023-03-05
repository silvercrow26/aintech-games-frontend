import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore, ProfileUser, RegisterPage, UserPageId, LoginPage } from '../auth/index'
import {
    LowRequirementsPage,
    MediumRequirementsPage,
    HighRequirementsPage,
    AdminGameDatabase,
    AdminPanel, NewGame, Navbar,
    GameCardWithId, GamesPage, useGameStore, GenrePage, ErrorPage
} from '../games/index';



export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    const { games, genres, startLoadingGames, startLoadingGenres } = useGameStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    useEffect(() => {
        if (games.length === 0) {
            startLoadingGames();
        }
        if(genres.length === 0){
            startLoadingGenres();
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
                <Route path='/juegos/generos/:genero' element={<GenrePage />} />
                <Route path='/juegos/nivel/altos-requisitos' element={<HighRequirementsPage />} />
                <Route path='/juegos/nivel/medios-requisitos' element={<MediumRequirementsPage />} />
                <Route path='/juegos/nivel/bajos-requisitos' element={<LowRequirementsPage />} />
                <Route path='/juegos/:id' element={<GameCardWithId />} />
                <Route path="/*" element={<ErrorPage/>} />

                {
                    (status === 'authenticated') ?
                        (
                            <>
                                <Route path='/' element={<GamesPage />} />
                                <Route path='/newgame' element={<NewGame />} />
                                <Route path='/admin/hub' element={<AdminPanel />} />
                                <Route path='/admin/gamedatabase' element={<AdminGameDatabase />} />
                                <Route path='/user/configuration/:id' element={<UserPageId />} />
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                                <Route path='/auth/login' element={<Navigate to="/" />} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                {/* <Route path='/auth/register' element={<RegisterPage />} /> */}
                                <Route path='/user/configuration/:id' element={<Navigate to="/auth/login" />} />
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                            </>
                        )
                }
            </Routes>
        </>
    )
}

