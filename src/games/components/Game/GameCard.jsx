import { faGamepad, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { useGameStore } from "../../index";

export const GameCard = (item) => {
  const requirements = item.requirements.toUpperCase().replace("-", ' ');
  const { setActiveGame, activeGame } = useGameStore();

  const handleSubmit = () => {
    if (activeGame == null || activeGame._id != item._id) {
      setActiveGame(item);
    }
  }

  return (
    <>
      {item !== null ? (

        <Link to={`/juegos/${item.index}`} className="text-decoration-none">
          <div onClick={handleSubmit} className="text-light bgCard mb-2 mx-1 ">
            <img
              src={item.header_image}
              alt="Card image cap"
              className="imagenCard"
            />
            {requirements === "BAJOS REQUISITOS"
              ? (
                <span className="badge bg-success d-flex justify-content-between">
                  <FontAwesomeIcon icon={faGamepad} /> {requirements}
                </span>
              ) : requirements === "MEDIOS REQUISITOS" ? (
                (

                  <span className="badge bg-medium d-flex justify-content-between text-center">
                    <FontAwesomeIcon icon={faGamepad} /> {requirements}
                  </span>
                )
              ) : ((

                <span className="badge bg-danger d-flex justify-content-between text-center">
                  <FontAwesomeIcon icon={faGamepad} /> {requirements}
                </span>
              ))

            }

            <div className="mt-2">
              <h6 className="text-center">{item.name}</h6>
            </div>
          </div>
        </Link>
      ) : (
        <p>Cargando..</p>

      )
      }

    </>

  );
};