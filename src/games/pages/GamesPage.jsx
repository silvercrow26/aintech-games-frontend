import { useEffect } from 'react';
import Particles from '../../Particles';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/Footer';
import { GameCardWithId } from '../components/GameCardWithId';
import { GameItem } from '../components/GameItem'
import { GamesMostDownloaded } from '../components/GamesMostDownloaded';
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
          <div className="col-md-8 col-sm-12">


            {
              (isLoading) ? <Loader /> :
                games.length === 0 ? "No hay juegos disponibles en este momento." : <GameItem games={games} />
            }

          </div>
          <div className="col-md-4 col-sm-12">
          <GamesMostDownloaded />

          </div>
        </div>
      </main>
    </>
  )
}
