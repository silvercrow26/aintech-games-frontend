import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSteam,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logosinfondo from "../../assets/logosinfondo.png";
export const YoutubeWidget = () => {
  return (
    <a
      href="https://www.youtube.com/channel/UCArOUELYlLHQYUxJedv8hxg"
      target="_blank"
      className="text-decoration-none"
    >
      <button id="bottone2" className="mb-5 backgroundCard">
        <strong className="text-light">
          <FontAwesomeIcon icon={faYoutube} className="text-danger" />
          <br />
          <img src={logosinfondo} alt="Logo Aintech Online" className="w-50 " />
        </strong>
        <p className="text-secondary small text-center">4,91 K suscriptores</p>
      </button>
    </a>
  );
};
