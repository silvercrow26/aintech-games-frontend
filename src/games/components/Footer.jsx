import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSteam,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="bg-dark p-3 text-center text-light bgFooter">
      <div className=" row mb-5">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="col-md-4 col-sm-12"> 
          <ul className="small">
            <p className="text-light small">Navegación</p>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-secondary">
                Inicio
                
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-secondary ">
                Requisitos
              </Link>
            </li>
            <Link to="/" className="text-decoration-none text-secondary">
            <li className="mb-2">Generos</li>
            </Link>
            <li className="text-secondary mb-2">Peliculas</li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <p className="small mt-5 text-center text-secondary">
            Sitio web desarrollado por AINTECH Online
          </p>
          <div className="gap-2 flex-wrap">
            <div >
              <p className="buttonDMCA p-1 text-secondary small">DMCA</p>
            </div>
            <div  >
              <p className="buttonDMCA p-1 text-secondary small">Política de privacidad</p>
            </div>
            <div >
              <p className="buttonDMCA p-1 text-secondary small">Términos y condiciones</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <p className="small">Redes Sociales</p>
          <ul className=" d-flex justify-content-center flex-wrap gap-4 ">
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              className=" p-2 rounded-3 text-light iconsFooter "
              />
            <FontAwesomeIcon
              icon={faYoutube}
              size="1x "
              className=" p-2 rounded-3 text-light iconsFooter"
            />
            <FontAwesomeIcon
              icon={faSteam}
              size="1x"
              className=" p-2 rounded-3 text-light iconsFooter"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="1x"
              className=" p-2 rounded-3 text-light iconsFooter"
            />
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};
