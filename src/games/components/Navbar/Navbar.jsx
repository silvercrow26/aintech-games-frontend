import {
  faGear,
  faMagnifyingGlass,
  faRightToBracket,
  faScrewdriver,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../auth/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarGenre } from "../../index";
import { useGameStore } from "../../hooks/useGameStore";
import { useGameHook } from "../../hooks/useGameHook";
import logosinfondo from '../../../assets/logosinfondo.png'

export const Navbar = () => {
  const { status, startLogout, user } = useAuthStore();
  const { games, setActiveGame, activeGame } = useGameStore();
  const {getSearchGame, setInputSearch} = useGameHook();


  useEffect(() => {
    getSearchGame();

  }, [])



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
          <a
            className="navbar-brand "
            aria-current="page"
            href="#"
            to="/"
          >
            <img src={logosinfondo} className="logoNavbar"/>
          </a>
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

            <div className="d-flex searchMobileQuery me-4 " >
              <div className="input-group">
                <input
                  type="text"
                  className="input"
                  id="search"
                  name="search"
                  placeholder="Buscar..."
                  autoComplete="off"
                  onChange={(e) => setInputSearch(e.target.value)}
                  />
                  <Link to='/juegos/busqueda' className="text-decoration-none">
                <a
                  className="text-light text-decoration-none button--submit pt-3 pb-3"
                  href="#"
                  role="button"
                  
                  aria-expanded="false"
                  onClick={getSearchGame}
                  >
                  <FontAwesomeIcon icon={faMagnifyingGlass}  />
                </a>
                  </Link>
              </div>
            </div>
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
