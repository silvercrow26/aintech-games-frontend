import { faGamepad, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../auth/hooks/useAuthStore";
import { useGameStore } from "../hooks/useGameStore";

export const GameCard = (item) => {


  return (
    <>
    <div data-aos="fade-up">

      {item !== null ? (
        <Link to={`juegos/${item._id}`} className="text-decoration-none">
        <div className="text-light mb-1 bgCard mb-5 mx-1 ">
          <img
            src={item.header_image}
            alt="Card image cap"
            className="imagenCard"
            />
          {item.requerimientos === "Bajos Requisitos"
          ? (
            <span className="badge bg-success d-flex justify-content-between">
            <FontAwesomeIcon icon={faGamepad}/> {item.requerimientos}
           </span>
          ) : (
            
            <span className="badge bg-danger d-flex justify-content-between text-center">
              <FontAwesomeIcon icon={faGamepad}/> {item.requerimientos}
            </span>
          )}
      
          <div className="mt-2">
            <h6 className="text-center">{item.nombre}</h6>
          </div>
        </div>
        </Link>
      ) : (
        <p>Cargando..</p>
        )}
        </div>
    </>
  );
};
