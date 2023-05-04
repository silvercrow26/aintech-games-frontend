import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGameHook } from "../../hooks/useGameHook";
import { useGameStore } from "../../hooks/useGameStore";
import { DiscordWidget } from "../DiscordWidget";
import { YoutubeWidget } from "../YoutubeWidget";
export const LastGameUploaded = ({ latestGamesData }) => {
  const { setActiveGame } = useGameStore();
  return (
    <div className="mt-5">
      <h5 className="text-center mb-3  mt-5">Últimos juegos subidos</h5>
      <hr />
      {latestGamesData.map((item) => (
        <Link
          to={`/juegos/${item._id}`}
          onClick={() => setActiveGame(item)}
          key={item._id}
        >
          <div className=" mb-3 bgCard">
            <img src={item.header_image} className="w-100" />
          </div>
        </Link>
      ))}
        <hr />
      <div className="backgroundCard">
      <p className="text-center">
        <b>¡Informate sobre increibles sorteos y ofertas en nuestras redes!</b>
      </p>
        </div>
      <div className="d-flex justify-content-center mb-3 mt-2">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-light"
          size={"lg"}
          />
      </div>
      <div className="d-flex justify-content-center">

        <DiscordWidget />
        <YoutubeWidget />
      </div>

    </div>
  );
};
