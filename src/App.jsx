import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../store/store'
import './App.css'
import { GameProvider } from './games/context/GameContext'
import { AppRouter } from "./router/AppRouter"


export const App = () => {
  return (
    <Provider store={store}>
      <GameProvider>

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      

    </GameProvider>
    </Provider>

  )
}