import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logoaintech from '../../assets/aintechlogo.png'
import React from "react";
import logosinfondo from '../../assets/logosinfondo.png' 
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="p-3 text-center text-light bgFooter ">
      <div className=" row mb-5 bgFooter w-100">
      <div className="d-flex justify-content-center flex-wrap">
       
        <div className="col-md-6 col-sm-12 ">
          <a className="small mt-5 text-center text-secondary text-decoration-none" target="_blank" href="https://www.aintech.com.ar/">
            <span>Sitio web desarrollado por</span> <img src={logoaintech} className="logoFooter" />
          </a>
          <div className="text-secondary">
            <p className="text-center">Ningún archivo de descarga se encuentra alojado en nuestros servidores.</p>
            <p className="text-center">©2023</p>
          </div>

          <div className="">
            <div >
            <Link to="/dmca" className="text-decoration-none text-secondary">
              <p className="buttonDMCA p-1 text-secondary small text-center">DMCA</p>
              </Link>
            </div>
            <div  >
              <Link to="/politica-de-privacidad" className="text-decoration-none text-secondary">
              <p className="buttonDMCA p-1 text-secondary small text-center">Política de privacidad</p>
              </Link>
            </div>
            <div >
              <Link to="/terminos-y-condiciones" className="text-decoration-none text-secondary">
              <p className="buttonDMCA p-1 text-secondary small text-center">Términos y condiciones</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <p className="small text-center text-secondary">Redes Sociales</p>
          <ul className=" d-flex justify-content-center flex-wrap gap-4 ">
            <a href="https://discord.gg/GYzbx7Q4qa" target="_blank">
          <FontAwesomeIcon icon={faDiscord} className="text-light iconsFooter p-2 rounded-3" />
            </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCArOUELYlLHQYUxJedv8hxg">
            <FontAwesomeIcon
              icon={faYoutube}
              size="1x"
              className=" p-2 rounded-3 text-light iconsFooter"
              />
              </a>
            <a>
            <FontAwesomeIcon
              icon={faSteam}
              size="1x"
              className=" p-2 rounded-3 text-light iconsFooter"
              />
              </a>
          </ul>
          <img src={logosinfondo} alt="Aintech Online Logo" className="w-50" />
        </div>
      </div>
      </div>
    </footer>
  );
};
