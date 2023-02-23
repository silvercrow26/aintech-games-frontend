import { faGamepad, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const GameCard = (item) => {

  const requirements = item.requirements.toUpperCase().replace("-", ' ');
  return (
    <>
      {item !== null ? (
        
          <Link to={`juegos/${item._id}`} className="text-decoration-none">
            <div className="text-light mb-1 bgCard mb-5 mx-1 ">
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
                ) : (

                  <span className="badge bg-danger d-flex justify-content-between text-center">
                    <FontAwesomeIcon icon={faGamepad} /> {requirements}
                  </span>
                )}

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