import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDownloadServerStore, useGameStore, AdminGameDatabaseItem } from '../../index';
import { Pagination } from "../../pages/Pagination";
import { useCounter } from "../../hooks/useCounter";

export const AdminGameDatabase = () => {
  const { games, setActiveGame, activeGame } = useGameStore();
  const { setDownloadServers, downloadServers } = useDownloadServerStore();
  const [gameSearch, setGameSearch] = useState('');
  const [elementSearch, setElementSearch] = useState([])
  const { counter, decrement, increment,reset } = useCounter(1);
  const maxGames = 12;
  const lastPage = Math.ceil(games?.length / maxGames);

  const getSearchData = () => {
    const filterData = games.filter((game) => game.name.toLowerCase().includes(gameSearch.toLowerCase())).reverse();
    if (gameSearch.trim() === '') {
      setElementSearch(games);
    } else {
      setElementSearch(filterData)
    }
  }

  useEffect(() => {
    getSearchData();
  }, [gameSearch, games]);

  const handleNewGame = () => {
    if (activeGame !== null){
      setActiveGame(null);
    }
    if(downloadServers.length !== 0){
      setDownloadServers([]);
    }
  }

  return (
    <section className="container">
      <div>
        <h3 className="text-center mt-5 mb-5">Administración de juegos</h3>
        <div className="text-center mb-5">
          <Link to="/admin/newgame" className="text-decoration-none" onClick={handleNewGame}>
            <span className="backgroundAdminButtons p-3"><FontAwesomeIcon icon={faPlus} /> Agregar Juego</span>
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
          {elementSearch?.slice(
            (counter - 1) * maxGames,
            (counter - 1) * maxGames + maxGames
          ).map((game) => (
            <AdminGameDatabaseItem
              key={game._id}
              game={game}
              setElementSearch={setElementSearch}
              elementSearch={elementSearch}
            />
          ))}
          <div className="d-flex justify-content-end">

          <Pagination 
            page={counter}
            decrement={decrement}
            increment={increment}
            lastPage={lastPage}
            />
            </div>
        </tbody>
      </table>
    </section>
  );
};
