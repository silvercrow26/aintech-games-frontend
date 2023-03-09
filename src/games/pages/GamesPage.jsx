import { useEffect, useState } from 'react';
import Particles from '../../Particles';
import { Ads, Carousel, GameItem, GamesMostDownloaded, Loader, useGameStore } from '../index'
import './GamesPage.css';


export const GamesPage = () => {
  const { games: data, isLoading } = useGameStore();
  const [games, setgames] = useState([])

  useEffect(() => {
    setgames(data);
  }, [data])

  return (
    <>
      <main className="container">
        <Particles />
        <Carousel />
        <h4 className="text-light mt-5">Ultimos <b>juegos de PC</b> agregados</h4>
        <hr className="text-light" />
        <div className='row'>
          <div className="gamesPageCard col mb-5">
            {
              (isLoading) ? <Loader /> :
                data.length === 0 ? <p className='ms-5'>No hay juegos disponibles en este momento.</p> :
                  <GameItem games={games} style={"w-50"} />
            }

          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="col-md-4 mostWanted">
            <GamesMostDownloaded className="mostdownloaded" />
            <Ads />
          </div>
        </div>
      </main>
    </>
  )
}
