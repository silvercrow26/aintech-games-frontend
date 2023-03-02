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
import { AdminGameDatabaseItem } from "./AdminGameDatabaseItem";

export const AdminGameDatabase = () => {
  const {
    games,
    startLoadingGames,
    activeGame,
    setActiveGame,
  } = useGameStore();
  const [gameSearch, setGameSearch] = useState('');
  const [elementSearch, setElementSearch] = useState([])
  
  
  const getSearchData = () => {
    const filterData = games.filter((game) => game.name.toLowerCase().includes(gameSearch.toLowerCase())).reverse();
    if(gameSearch.trim() === ''){
      setElementSearch([]);
    }else{
      setElementSearch(filterData)
    }
  }

  useEffect(() => {
    getSearchData();
  }, [gameSearch]);

  return (
    <section className="container">
      <div>
        <h3 className="text-center mt-5 mb-5">Administración de juegos</h3>
        <div className="text-center mb-5">
          <Link to="/newgame" className="text-decoration-none">
            <span className="backgroundAdminButtons p-3">
              <FontAwesomeIcon icon={faPlus} /> Agregar Juego
            </span>
          </Link>
        </div>
        <p className="text-center">Juegos totales: {games.length}</p>
        <div>
          <input
            type="text"
            className="w-100 mb-5 p-2 bg-dark borderInputs text-light"
            placeholder="Buscar juego..."
            value={gameSearch}
            name="search"
            onChange={(e) => setGameSearch(e.target.value)}
          />
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
          {elementSearch?.map((game) => (
            <AdminGameDatabaseItem
              key={game._id}
              game={game}
              setElementSearch={setElementSearch}
              elementSearch={elementSearch}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
