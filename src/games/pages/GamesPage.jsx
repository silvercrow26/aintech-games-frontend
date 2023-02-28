import Particles from '../../Particles';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/Footer';
import { GameCardWithId } from '../components/GameCardWithId';
import { GameItem } from '../components/GameItem'
import { GamesMostDownloaded } from '../components/GamesMostDownloaded';
import Header from '../components/Navbar'
import './GamesPage.css';

const GamesPage = () => {



  return (
    <>

      <main className="container">
        <Particles />
        <Carousel />
        <h4 className="text-light mt-5">Ultimos <b>juegos de PC</b> agregados</h4>
        <hr className="text-light" />
        <div className='row'>
          <div className="col-md-8 col-sm-12">


        <div className="">
          <GameItem />
        </div>

          </div>
          <div className="col-md-4 col-sm-12">
          <GamesMostDownloaded />
          </div>
        </div>
      </main>
    </>
  )
}

export default GamesPage