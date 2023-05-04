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
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export const DiscordWidget = () => {
  return (
    <div>
      <button id="bottone1" className="mb-3 mx-2 backgroundCard ">
        <strong className="text-light">
          {" "}
          <FontAwesomeIcon icon={faDiscord} className="text-primary" />
        </strong>
      </button>
    </div>
  );
};
