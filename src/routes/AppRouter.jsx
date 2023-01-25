import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage';
import { AddNewGame } from '../games/pages/AddNewGame';
import GamesPage from '../games/pages/GamesPage';

const AppRouter = () => {

    const authStatus = 'non-autehticated';

    return (
        <Routes>
            <Route path='/' element={<GamesPage/>}/>
            <Route path='/auth/login' element={<LoginPage/>}/>
            <Route path='/newgame' element={<AddNewGame/>}/>
        </Routes>
    )
}

export default AppRouter
