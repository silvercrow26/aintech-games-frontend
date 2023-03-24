import {
  faGear,
  faMagnifyingGlass,
  faRightToBracket,
  faScrewdriver,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../auth/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarGenre } from "../../index";
import { useGameStore } from "../../hooks/useGameStore";

export const Navbar = () => {
  const { status, startLogout, user } = useAuthStore();
  const { games, setActiveGame, activeGame } = useGameStore();
  const [search, setSearch] = useState("");
  const [searchGame, setSearchGame] = useState([]);

  const getSearchGame = (e) => {
    e.preventDefault();
    const filterData = games
      .filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
      .reverse();
    if (search.trim() === "" || !search) {
      setSearchGame("");
    } else {
      setSearchGame(filterData);
    }
  };

  const handleLogout = () => {
    startLogout();
  };

  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary bgNavbar"
        data-bs-theme="dark"
      >
        <div className="container-fluid container">
          <Link
            className="navbar-brand titles"
            aria-current="page"
            href="#"
            to="/"
          >
            AINTECH Online
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <Link
                  className="nav-link linka"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item dropdown mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Requisitos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/juegos/nivel/altos-requisitos"
                      className="text-decoration-none text-light dropdown-item"
                    >
                      Altos Requisitos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/juegos/nivel/medios-requisitos"
                      className="text-decoration-none text-light dropdown-item"
                    >
                      Medios Requisitos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/juegos/nivel/bajos-requisitos"
                      className="text-decoration-none text-light dropdown-item"
                    >
                      Bajos Requisitos
                    </Link>
                  </li>
                </ul>
              </li>
              <NavbarGenre />

              <li className="nav-item mx-1">
                <a className="nav-link disabled">Películas</a>
              </li>
            </ul>

            <form className="d-flex searchMobileQuery me-4 " role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="input"
                  id="search"
                  name="search"
                  placeholder="Buscar..."
                  autoComplete="off"
                  onChange={(e) => setSearch(e.target.value)}
                />

                <a
                  className="nav-link dropdown-toggle text-light text-decoration-none dropdownUser button--submit"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={getSearchGame}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <ul className="dropdown-menu text-light ">
                  {searchGame ? (
                    searchGame.map((item) => (
                      <Link to={`/juegos/${item._id}`} >
                      <li
                        className="dropdown-item my-3 p-1 textNavbarSearch "
                        href="#"
                        >
                        <img src={item.header_image} className="w-25 " />
                        <span classname="mx-2">
                          {item.name.toLowerCase().substring(0, 17)}
                          {item.name.length >= 16 ? "..." : <span></span>}
                        </span>
                      </li>
                        </Link>
                    ))
                  ) : (
                    <li className="dropdown-item  text-danger " href="#">
                      El Juego no se encuentra disponible
                    </li>
                  )}
                </ul>
              </div>
            </form>
            {status === "not-authenticated" ? (
              <Link to="/auth/login">
                <button className="buttonLogin">
                  <FontAwesomeIcon icon={faRightToBracket} /> Logearse
                </button>
              </Link>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light text-decoration-none dropdownUser"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} /> {user.username}
                </a>
                <ul className="dropdown-menu text-light">
                  <Link to={"/admin/hub"} className="text-decoration-none">
                    <li className="dropdown-item  text-warning " href="#">
                      <FontAwesomeIcon icon={faScrewdriver} /> <b>Dashboard</b>
                    </li>
                  </Link>
                  <li className="dropdown-item " href="#">
                    <Link
                      to={`/user/configuration/${user.uid}`}
                      className="text-decoration-none text-light"
                    >
                      <FontAwesomeIcon icon={faGear} /> Configuración
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-danger"
                      href="#"
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon icon={faRightToBracket} /> Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
