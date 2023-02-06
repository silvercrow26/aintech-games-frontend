import { GameItem } from '../components/GameItem'
import Header from '../components/Header'
import './GamesPage.css';

const GamesPage = () => {

  return (
    <>
      <Header />
      <div className='container d-flex'>
        <GameItem />
      </div>
    </>
  )
}

export default GamesPage