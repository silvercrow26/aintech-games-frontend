import {
    faDownload,
    faMagnifyingGlass,
  faPencilAlt,
  faPenSquare,
  faPlus,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGameStore } from "../hooks/useGameStore";

export const AdminGameDatabase = () => {
  const { games, startLoadingGames,  activeGame, setActiveGame } = useGameStore();
  const [gameSearch, setGameSearch] = useState("");
  const filterData = games.filter((game) => game.name.toLowerCase().includes(gameSearch.toLowerCase())).reverse();
  return (
    <section className="container">
      <div>
        <h3 className="text-center mt-5 mb-5">Administración de juegos</h3>
        <div className="text-center mb-5">
        <Link to="/newgame" className="text-decoration-none">
        <span className="backgroundAdminButtons p-3"><FontAwesomeIcon  icon={faPlus} /> Agregar Juego</span>
        </Link>
        </div>
        <p className="text-center">Juegos totales: {games.length}</p>
        <div>
<input  type="text" className="w-100 mb-5 p-2 bg-dark borderInputs text-light" placeholder="Buscar juego..." value={gameSearch} name="search" onChange={(e) => setGameSearch(e.target.value)}/>
        </div>
      </div>
      <table className="table table-dark table-hover table-responsive text-light container backgroundAdminSideBar">
        <thead>
          <tr>
            <th>Id</th>
            <th>Juego</th>
            <th>SteamID</th>
            <th>Requisito</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {filterData ? filterData.map((game) => (
            <tr>
              <td>{game._id}</td>
              <td>{game.name}</td>
              <td>{game.steamId}</td>
              <td>{game.requirements.toUpperCase().replace("-", " ")}</td>
              <td className="">
                <button className="btn btn-outline-warning text-light" >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>{" "}
                <br />{" "}
                <button className="btn btn-outline-danger mt-2">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <br />

              </td>
            </tr>
          )) : (<p>Busque el juego que quiera</p>)}
         
        </tbody>
      </table>
    </section>
  );
};
