import { useEffect, useState } from 'react';

import { DiscordWidget } from '../components/DiscordWidget';
import { SliderAds } from '../components/SliderAds';
import { useGameHook } from '../hooks/useGameHook';
import { Ads, Carousel, GameItem, GamesMostDownloaded, Loader, useGameStore } from '../index'
import './GamesPage.css';
import { VideoItem } from '../components/Videos/VideoItem';


export const GamesPage = () => {
  const { games: data, isLoading } = useGameStore();
  const [games, setgames] = useState([])
  const { getLatestGamesUploaded } = useGameHook();

  useEffect(() => {
    setgames(data);
    getLatestGamesUploaded();
  }, [data])

  return (
    <>
      <Carousel />

      <main className="container">
        <h4 className="text-light mt-4">Últimos <b>juegos de PC</b> agregados</h4>
        <hr className="text-light" />
        

        {
          (isLoading) ? <Loader /> :
          data.length === 0 ? <p className='ms-5'>No hay juegos disponibles en este momento.</p> :
          <div className='row'>
                <div className="gamesPageCard col mb-5"> <GameItem games={games} style={"w-50"} /></div>
                <div className="col-md-4 mostWanted">
                  <GamesMostDownloaded className="mostdownloaded" /></div>
              </div>
        }

      <h4 className="text-light mt-4">Últimos <b>Videos</b> agregados</h4>
      <hr className="text-light" />

        <VideoItem />
      </main>
    </>
  )
}
