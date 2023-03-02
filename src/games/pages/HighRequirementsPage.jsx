import React from 'react'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getGamesByRequirements, useGameStore, Loader } from '../index'
import { GameItem } from '../index';

export const HighRequirementsPage = () => {
  const { req } = getGamesByRequirements('altos-requisitos');
  const { isLoading } = useGameStore();

  return (
    <>
      <div className='container '>
        <h4 className="text-light mt-5">Altos Requisitos</h4>
        <hr className="text-light" />
        <div className='col-md-8 col-sm-12'>
          {
            (isLoading) ? <Loader /> :
              req.length === 0 ? "No hay juegos disponibles en este momento." : <GameItem games={req} />
          }

        </div>
      </div>
    </>
  )
}
