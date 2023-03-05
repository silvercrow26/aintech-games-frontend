import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGameStore } from '../../index'

export const NavbarGenre = () => {

    const { genres } = useGameStore();

    if (genres.length === 0) {
        return (<li className="nav-item dropdown mx-1">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Géneros
            </a>
            <ul className="dropdown-menu">
                <li className='disabled dropdown-item'>
                    No disponible.
                </li>
            </ul>
        </li>
        )
    }

    return (
        <li className="nav-item dropdown mx-1">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Géneros
            </a>
            <ul className="dropdown-menu">
                {[...genres].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map(genre => (
                    <li key={genre._id}>
                        <Link to={`/juegos/generos/${genre.index}`} className="text-decoration-none text-light dropdown-item">
                            {genre.name}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </li>

    )
}
