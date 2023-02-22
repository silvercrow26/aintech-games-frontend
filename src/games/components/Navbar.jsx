import {
  faGear,
  faMagnifyingGlass,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../auth/hooks/useAuthStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { status, startLogout, user } = useAuthStore();

  const handleLogout = () => {
    startLogout();

  }

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
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
                      className="nav-link linka"
                      aria-current="page"
                      href="#"
                      // to="/juegos/nivel/altos-requisitos"
                      >
                      
                      Altos requisitos
                    </Link>

                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:9001/api/games/level/medios-requisitos">
                      Medios requisitos
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Bajos requisitos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link disabled">Peliculas(Proximamente)</a>
              </li>
              {status === "authenticated" ? (
                <li className="nav-item mx-1">
                  <Link className="nav-link linka" to="/newgame">
                    Agregar juego
                  </Link>
                </li>
              ) : null}
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
                />
                <button className="button--submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
            {
              status === "not-authenticated" ? (
                <Link to="/auth/login">
                  <button className="buttonLogin">
                    <FontAwesomeIcon icon={faRightToBracket} /> Logearse
                  </button>
                </Link>
              ) :

                <li className="nav-item dropdown mb-3 ">
                  <a
                    className="nav-link dropdown-toggle text-light text-decoration-none dropdownUser"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} /> {user.name}
                  </a>
                  <ul className="dropdown-menu text-light">
                    <li className="dropdown-item " href="#">
                      <Link to={`/user/configuration/${user.uid}`} className="text-decoration-none">
                        <FontAwesomeIcon icon={faGear} /> Configuración
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-danger" href="#" onClick={handleLogout} >
                        <FontAwesomeIcon icon={faRightToBracket} /> Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </li>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
