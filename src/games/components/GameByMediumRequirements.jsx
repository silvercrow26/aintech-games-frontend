import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGameStore } from '../hooks/useGameStore';

export const GameByMediumRequirements = () => {

    const [gameMediumRequirements, setGameMediumRequirements] = useState([]);
    const {games, startLoadingGames} = useGameStore();


    const getMediumRequirements = () => {
        const itemRequeriments = games.filter(
          (item) => item.requirements === "medios-requisitos"
        );
        setGameMediumRequirements(itemRequeriments);
      };
    
      useEffect(() => {
          startLoadingGames();
        getMediumRequirements();
      }, [games]);
    return (
        <div className="container  d-flex justify-content-center flex-wrap mt-5">
        {gameMediumRequirements ? (
          gameMediumRequirements.map(
            ({ name, _id, header_image, requirements }) => (
              <div className="" key={_id}>
                <Link to={`/juegos/${_id}`} className="text-decoration-none">
                  <div className="text-light mb-1 bgCard mb-5 mx-1 ">
                    <img
                      src={header_image}
                      alt="Card image cap"
                      className="imagenCard"
                    />
                    {requirements === "bajos-requisitos" ? (
                      <span className="badge bg-success d-flex justify-content-between">
                        <FontAwesomeIcon icon={faGamepad} /> {requirements.toUpperCase().replace("-", ' ')}
                      </span>
                    ) : (
                      <span className="badge bg-danger d-flex justify-content-between text-center">
                        <FontAwesomeIcon icon={faGamepad} /> {requirements.toUpperCase().replace("-", ' ')}
                      </span>
                    )}
  
                    <div className="mt-2">
                      <h6 className="text-center">{name}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            )
          )
        ) : (
          <h2 className="text-light">Cargando...</h2>
        )}
      </div>
    )
}
