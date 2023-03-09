import React from 'react'
import { getGamesByRequirements, useGameStore, Loader, setLastUpdate, GameItem } from '../index'

export const MediumRequirementsPage = () => {
  const { req } = getGamesByRequirements('medios-requisitos');
  const { isLoading } = useGameStore();
  const lastUpdate = setLastUpdate(req);

  return (
    <>
      <div className='container'>
        <h4 className="text-light mt-5">Medios Requisitos</h4>
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
