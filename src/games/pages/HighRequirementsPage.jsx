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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi,
          sed illo illum minima quas sint. Iusto id delectus non ipsa tenetur!
          Saepe eius quos iusto assumenda distinctio, veniam reiciendis.</p>
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
