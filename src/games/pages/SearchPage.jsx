import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useGameHook } from "../hooks/useGameHook";
import { useGameStore } from "../hooks/useGameStore";

export const SearchPage = () => {
  const { isLoading, setActiveGame } = useGameStore();
  const {searchGame, search, msgError} = useGameHook();



  return (
      <>
      <h5 className="mt-3 container">Resultado de la busqueda: {msgError === true ? 'No se encontraron resultados' : search}  </h5>
      <div className="container">
      {searchGame ? (
        searchGame.map((item) => (
            <div className="mb-5 mt-5 d-flex w-50 gamesPageCard" key={item._id}>

              <Link to={`/juegos/${item._id}`} className="text-decoration-none">
            <div
              onClick={() => setActiveGame(item)}
              className="text-light bgCard mb-2 mx-1 "
              >
              <img  
                src={item.header_image}
                alt="Card image cap"
                className="imagenCard"
                />
             

              <div className="mt-2">
                <h6 className="text-center">{item.name}</h6>
              </div>
            </div>
          </Link>
                </div>
        ))
      ) : (
        <span>Ver más</span>
      )}
    </div>
    </>
  );
};
