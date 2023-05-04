import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { DiscordWidget } from "../components/DiscordWidget";
import { GameItem } from "../components/Game/GameItem";
import { LastGameUploaded } from "../components/Game/LastGameUploaded";
import { useGameHook } from "../hooks/useGameHook";
import { useGameStore } from "../hooks/useGameStore";

export const SearchPage = () => {
  const {
    searchGame,
    search,
    msgError,
    latestGamesData,
    getLatestGamesUploaded,
  } = useGameHook();

  useEffect(() => {
    getLatestGamesUploaded();
  }, [searchGame, msgError, search, latestGamesData]);

  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">

          <h5 className="mt-3 ">Resultado de la busqueda: {msgError === true ? 'No se encontraron resultados' : search}</h5>
          <div className="col-sm-12 col-md-8 gamesPageCard ">
            <GameItem games={searchGame} style={"w-50"} />
          </div>
          <div className="col-md-4 col-sm-12 mostWanted">
            <LastGameUploaded latestGamesData={latestGamesData} />

          </div>
        </div>
      </div>
    </>
  );
};
