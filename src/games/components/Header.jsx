import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../auth/hooks/useAuthStore';


const Header = () => {

  const { status } = useAuthStore();

  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid container">
          <Link className='navbar-brand titles' aria-current="page" href="#" to='/'>
            AINTECH GAMES
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className='nav-link linka' aria-current="page" href="#" to='/'>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Peliculas(Proximamente)</a>
              </li>
              {
                (status === 'authenticated') ? (<li className="nav-item">
                  <Link className='nav-link linka' to='/newgame'>
                    Agregar juego
                  </Link>
                </li>) : null
              }

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
