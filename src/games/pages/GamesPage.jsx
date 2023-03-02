import { useEffect } from 'react';
import Particles from '../../Particles';
import { Loader, GameItem, useGameStore } from '../index';
import './GamesPage.css';

export const GamesPage = () => {
  const { games, isLoading } = useGameStore();

  return (
    <>
      <main className="container">
        <Particles />
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
