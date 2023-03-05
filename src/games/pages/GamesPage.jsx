import { useEffect } from 'react';
import Particles from '../../Particles';
import { Ads } from '../components/Ads';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/Footer';
import { GameCardWithId } from '../components/Game/GameCardWithId';
import { GameItem } from '../components/Game/GameItem'
import { GamesMostDownloaded } from '../components/Game/GamesMostDownloaded';
import { Loader } from '../components/Loader';
import { useGameStore } from '../hooks/useGameStore';

import './GamesPage.css';

export const GamesPage = () => {
  const { games, isLoading } = useGameStore();

  return (
    <>
      

      <main className="container">
        <Particles />
        <Carousel />
        <h4 className="text-light mt-5">Ultimos <b>juegos de PC</b> agregados</h4>
        <hr className="text-light" />
        <div className='row'>
          <div className="gamesPageCard col-md-8 col-sm-12">
            {
              (isLoading) ? <Loader /> :
                games.length === 0 ? <p className='ms-5'>No hay juegos disponibles en este momento.</p> :
                  <GameItem games={games} style={"w-50"} />
            }

          </div>
          <div className="col-md-4 col-sm-12 mostdownloaded">
            <GamesMostDownloaded />
            <Ads/>
          </div>
        </div>
      </main>
    </>
  )
}
