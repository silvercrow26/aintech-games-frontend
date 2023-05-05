import React, {useState, useEffect} from "react";
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
import axios from 'axios';
export const DiscordWidget = () => {
  const [discordData, setDiscordData] = useState([])
 const DISCORD_URL = import.meta.env.VITE_API_DISCORD;


  const getMembersOnline = () => {
    axios.get(DISCORD_URL).then((response)=> {
      setDiscordData(response.data)
    })
  }

  useEffect(() => {
    getMembersOnline();
  }, [])


  return (

      <a href="https://discord.gg/GYzbx7Q4qa" target="_blank">
      <button id="bottone1" className="mb-5 mx-2 backgroundCard ">
        <strong className="text-light">
          <FontAwesomeIcon icon={faDiscord} className="text-primary" />
          <br />
          <img src={logosinfondo} alt="Logo Aintech Online" className="w-50"/>
        </strong>
          <p className="text-secondary text-center small">{discordData?.presence_count} Usuarios <span className="text-success">Online</span></p>
      </button>
      </a>

  );
};
