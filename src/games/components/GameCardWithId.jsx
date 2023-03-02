import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useGameStore } from "../index";

export const GameCardWithId = () => {
  const params = useParams();
  const { games, activeGame, setActiveGame } = useGameStore();


  useEffect(() => {
    if (activeGame == null && games.length > 0) {
      const { 0: game } = games.filter(game => game._id === params.id);
      setActiveGame(game);
    }
  }, [games]);


  return (
    <>
      {(activeGame == null) ? (<div className="text-center w-100 mt-5">

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
        <h6 className="text-light small">Cargando juego</h6>
      </div>

      ) :
        <div
          style={{
            backgroundImage: `url(${activeGame.detail[0].background})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundColor: "#1b2838",
          }}
        >{
            <section className="">
              {activeGame.requirements.toUpperCase().replace("-", ' ') === "BAJOS REQUISITOS" ? (
                <span className="badge bg-success d-flex justify-content-center p-3">
                  <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                  {activeGame.requirements.toUpperCase().replace("-", ' ')}
                </span>
              ) : (
                <span className="badge bg-danger d-flex justify-content-center text-center p-3">
                  <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                  {activeGame.requirements.toUpperCase().replace("-", ' ')}
                </span>
              )}
              <div className="gameCardIdWallpaper"></div>
              <div className="container">
                <div className="row ">
                  <div className="col-md-9 mt-4 col-sm-12 ">
                    <div>
                      <h3 className="text-light text-center">
                        <b>{activeGame.name}</b>
                      </h3>
                      <hr className="text-light" />
                      <div className="">
                        <div className="">
                          <p className="text-light">
                            <b>Lanzamiento:</b>{" "}
                            {activeGame?.detail[0]?.release_date?.date}
                          </p>
                          <p className="text-light">
                            <b>Desarrolladores:</b>{" "}
                            {activeGame?.detail[0]?.developers}
                          </p>
                        </div>
                        <img
                          src={activeGame.header_image}
                          className=" gameCardIdWallpaper"
                        />
                        <p className="text-light  mt-3">Generos: </p>
                        <div className="text-light mb-5">
                          <h4>Descripción del juego: </h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: activeGame?.detail[0]?.short_description,
                            }}
                          ></p>
                        </div>
                      </div>
                      <h4 className="text-light">Requisitos del sistema:</h4>
                      <div className="d-flex justify-content-center">
                        <div className="text-light">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                activeGame?.detail[0]?.pc_requirements
                                  ?.minimum,
                            }}
                          ></p>
                        </div>
                        <div className="text-light">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                activeGame?.detail[0]?.pc_requirements
                                  ?.recommended,
                            }}
                          ></p>
                        </div>
                      </div>
                      <div className="mt-5 mx-1 mb-5">
                        <a
                          href={activeGame.buyGame}
                          target="_blank"
                          className="text-light gameCardBuy text-decoration-none"
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-light"
                          />{" "}
                          Comprar {activeGame.name}
                        </a>
                      </div>
                      <div>
                        <h4 className="text-light">Observaciones del juego:</h4>
                        <p className="text-light">
                          {activeGame && activeGame.notes}
                        </p>
                      </div>
                      <h4>Servidores de descarga</h4>
                      {activeGame.downloadserver.map(server => (
                        <div key={server.name}>
                          <a target="_blank" href={`${server.url}`}>{server.name}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12 mt-4">
                    <p className="text-light">columna 2</p>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
      }
    </>);
};
