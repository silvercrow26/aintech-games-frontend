import React, { useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDownloadServerStore, useGameStore, AdminGameDatabaseItem } from '../index';

export const AdminGameDatabase = () => {
  const { games, setActiveGame } = useGameStore();
  const { setDownloadServers } = useDownloadServerStore();

  const handleNewGame = () => {
    setDownloadServers([]);
    setActiveGame(null);
  }

  return (
    <section className="container">
      <div>
        <h3 className="text-center mt-5 mb-5">Administración de juegos</h3>
        <div className="text-center mb-5">
          <Link to="/newgame" className="text-decoration-none" onClick={handleNewGame}>
            <span className="backgroundAdminButtons p-3"><FontAwesomeIcon icon={faPlus} /> Agregar Juego</span>
          </Link>
        </div>
        <p className="text-center">Juegos totales: {games.length}</p>
      </div>
      <table className="table table-dark table-hover text-light container backgroundAdminSideBar">
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
          {games.map((game) => (
            <AdminGameDatabaseItem key={game._id} game={game} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
