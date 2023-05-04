import React from 'react'
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSteam,
    faTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const YoutubeWidget = () => {
    return (
    
             <button id="bottone2" className="mb-5  mx-2 backgroundCard">
        <strong className="text-light"><FontAwesomeIcon icon={faYoutube} className="text-danger" /></strong>
      </button>
        
    )
}
