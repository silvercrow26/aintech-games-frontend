import React from 'react'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getGamesByRequirements, useGameStore, Loader } from '../index'
import { GameItem } from '../index';

export const LowRequirementsPage = () => {
  const { req } = getGamesByRequirements('bajos-requisitos');
  const { isLoading } = useGameStore();

  return (
    <>
      <div className='container'>
        <h4 className="text-light mt-5">Bajos Requisitos</h4>
        <hr className="text-light" />
        {
          (isLoading) ? <Loader /> :
            req.length === 0 ? "No hay juegos disponibles en este momento." : <GameItem games={req} />
        }
      </div>
    </>
  )
}
