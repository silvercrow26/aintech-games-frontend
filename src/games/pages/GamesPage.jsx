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
        <hr className="text-light" />
        <div className='row'>
          <div className="col-md-8 col-sm-12">


        <div className="">
          <GameItem />
        </div>

          </div>
          <div className="col-md-4 col-sm-12">
    <h5 className="text-light text-center backgroundEvent">Los más descargados hasta el momento</h5>
    <div className="backgroundCard  p-5 mb-2">
 
    </div>
    <div className="backgroundCard  p-5 mb-2">

    </div>
    <div className="backgroundCard  p-5 mb-2">

    </div>
    <div className="backgroundCard  p-5 mb-2">

    </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default GamesPage