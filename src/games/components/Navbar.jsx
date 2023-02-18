import {
  faMagnifyingGlass,
  faRightToBracket,
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
            AINTECH GAMES
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link linka"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Peliculas(Proximamente)</a>
              </li>
              {status === "authenticated" ? (
                <li className="nav-item">
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
                <div>
                  <label className="text-light mx-2">Hi {user.name}!</label>
                  <button onClick={handleLogout} className="buttonLogout">
                    <FontAwesomeIcon icon={faRightToBracket} /> exit
                  </button>
                </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
