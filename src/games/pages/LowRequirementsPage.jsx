import React from 'react'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getGamesByRequirements, useGameStore, Loader, setLastUpdate } from '../index'
import { GameItem } from '../index';

export const LowRequirementsPage = () => {
  const { req } = getGamesByRequirements('bajos-requisitos');
  const { isLoading } = useGameStore();
  const lastUpdate = setLastUpdate(req);
  
  return (
    <>
      <div className='container'>
        <h4 className="text-light mt-5">Bajos Requisitos</h4>
        <p>Last Update: {lastUpdate}</p>
        <hr className="text-light" />
        <div className='gamesPageCard'>
          {
            (isLoading) ? <Loader /> :
              req.length === 0 ? "No hay juegos disponibles en este momento." : <GameItem games={req} style={"w-25"} />
          }
        </div>
      </div>
    </>
  )
}
