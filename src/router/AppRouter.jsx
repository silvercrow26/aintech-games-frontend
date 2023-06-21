import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore, ProfileUser, RegisterPage, UserPageId, LoginPage } from '../auth/index'
import { Footer } from '../games/components/Footer';
import {
    LowRequirementsPage,
    MediumRequirementsPage,
    HighRequirementsPage,
    AdminGameDatabase,
    AdminPanel, NewGame, Navbar,
    GameCardWithId, GamesPage, useGameStore, GenrePage, ErrorPage, useGenreStore, PrivacyPolicy, TermsAndConditions, DMCA, FAQPage
} from '../games/index';
import '../App.css';
import { Wrapper } from '../Wrapper';
import { SearchPage } from '../games/pages/SearchPage';
import { AdminYoutubeDatabase } from '../games/components/Dashboard/AdminYoutubeDatabase';
import { AdminNewVideo } from '../games/components/Dashboard/AdminNewVideo';
import { useVideoStore } from '../games/hooks/useVideoStore';
import { ForgotPasswordPage } from '../auth/pages/ForgotPasswordPage';
import { ResetPasswordPage } from '../auth/pages/ResetPasswordPage';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    const { games, startLoadingGames } = useGameStore();
    const { genres, startLoadingGenres } = useGenreStore();
    const {videos, startLoadingVideos} = useVideoStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    useEffect(() => {
        if (games.length === 0) {
            startLoadingGames();
        }
        if (genres.length === 0) {
            startLoadingGenres();
        }
        if (videos.length === 0) {
            startLoadingVideos();
        }
    }, [games])

    if (status === 'checking') {
        return (
            <>
                <Navbar />
                <div className='container mt-3 authloader'>
                    <div className="spinner"></div>
                    <div>Cargando</div>
                </div>
            </>
        )
    };
    return (
        <>
        <Wrapper>
            <Navbar />
            <Routes>
                <Route path='/' element={<GamesPage />} />
                <Route path='/ayuda' element={<FAQPage />} />
                <Route path='/politica-de-privacidad' element={<PrivacyPolicy />} />
                <Route path='/dmca' element={<DMCA />} />
                <Route path='/terminos-y-condiciones' element={<TermsAndConditions />} />

                <Route path='/juegos/generos/:genero' element={<GenrePage />} />
                <Route path='/juegos/nivel/altos-requisitos' element={<HighRequirementsPage />} />
                <Route path='/juegos/nivel/medios-requisitos' element={<MediumRequirementsPage />} />
                <Route path='/juegos/nivel/bajos-requisitos' element={<LowRequirementsPage />} />
                <Route path='/juegos/:index' element={<GameCardWithId />} />
                <Route path='/juegos/busqueda' element={<SearchPage />} />    
                <Route path="/*" element={<ErrorPage />} />

                {
                    (status === 'authenticated') ?
                        (
                            <>
                                <Route path='/' element={<GamesPage />} />
                                <Route path='/admin/newgame' element={<NewGame />} />
                                <Route path='/admin/hub' element={<AdminPanel />} />
                                <Route path='/admin/gamedatabase' element={<AdminGameDatabase />} />
                                <Route path='/user/configuration/:id' element={<UserPageId />} />
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                                <Route path='/auth/login' element={<Navigate to="/" />} />
                                <Route path='/admin/youtubedatabase' element={<AdminYoutubeDatabase />}  />
                                <Route path='/admin/newvideo' element={<AdminNewVideo />} />
                            </>
                        ) : (
                            <>
                                <Route path='/auth/login' element={<LoginPage />} />
                                <Route path='/auth/forgot-password' element={<ForgotPasswordPage/>}></Route>
                                <Route path='/auth/reset-password/:token' element={<ResetPasswordPage/>}></Route>
                                <Route path='/auth/register' element={<RegisterPage />} />
                                <Route path='/user/configuration/:id' element={<Navigate to="/auth/login" />} />
                                <Route path='/user/profile/:name' element={<ProfileUser />} />
                            </>
                        )
                }
            </Routes>
            <Footer />
            </Wrapper>
        </>
    )
}

