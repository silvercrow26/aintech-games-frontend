import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Loader, useGameStore } from "../../index";
import { DiscussionEmbed } from "disqus-react";

export const GameCardWithId = () => {
  const params = useParams();
  const { games, activeGame, setActiveGame } = useGameStore();
  const url = `http://localhost:5173/juegos/${params.id}`;

  useEffect(() => {
    if (activeGame == null && games.length > 0) {
      const { 0: game } = games.filter(game => game._id === params.id);
      setActiveGame(game);
    }
  }, [games]);


  return (
    <>
      {(activeGame == null) ? <Loader /> :
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
                      {(activeGame.downloadserver.length === 0) ? <></> : <h4>Servidores de descarga</h4>}

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
          {/* <div className="text-light container">
            <DiscussionEmbed
              shortname='aintechonline'
              config={
                {
                  url: url,
                  identifier: params.id,
                  title: activeGame.name,
                  language: 'es_ES', //e.g. for Traditional Chinese (Taiwan)

                }
              }
            />
          </div> */}
        </div>
      }
    </>);
};
