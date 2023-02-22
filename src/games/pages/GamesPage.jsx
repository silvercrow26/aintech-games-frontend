import Particles from '../../Particles';
import { Footer } from '../components/Footer';
import { GameCardWithId } from '../components/GameCardWithId';
import { GameItem } from '../components/GameItem'
import Header from '../components/Navbar'
import './GamesPage.css';

const GamesPage = () => {

  

  return (
    <>
  
    <main className="container">
    <Particles />
      <h4 className="text-light mt-5">Ultimos <b>juegos de PC</b> agregados</h4>
      <hr className="text-light"/>
      <div className='container d-flex'>
   
        <GameItem />
      
      </div>
    </main>
    </>
  )
}

export default GamesPage