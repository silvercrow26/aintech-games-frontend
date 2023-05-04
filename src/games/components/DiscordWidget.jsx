import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSteam,
  faTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logosinfondo from '../../assets/logosinfondo.png'
export const DiscordWidget = () => {
  return (

      <a href="https://discord.gg/GYzbx7Q4qa" target="_blank">
      <button id="bottone1" className="mb-3 mx-2 backgroundCard ">
        <strong className="text-light">
          <FontAwesomeIcon icon={faDiscord} className="text-primary" />
          <br />
          <img src={logosinfondo} alt="Logo Aintech Online" className="w-75"/>
        </strong>
      </button>
      </a>

  );
};
