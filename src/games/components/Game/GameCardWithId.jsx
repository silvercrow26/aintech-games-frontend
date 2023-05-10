import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Disqus, useGameStore } from "../../index";
import { useNavigate } from "react-router-dom";
import { LastGameUploaded } from "./LastGameUploaded";
import { useGameHook } from "../../hooks/useGameHook";

export const GameCardWithId = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { games, activeGame, setActiveGame } = useGameStore();
  const { getLatestGamesUploaded, setLatestGameData, latestGamesData } = useGameHook();
  const url = `${import.meta.env.VITE_API_HOST}/juegos/${params.id}`;

  useEffect(() => {
    if (activeGame == null && games.length > 0) {
      const { 0: game } = games.filter((game) => game._id === params.id);
      setActiveGame(game);
      getLatestGamesUploaded();
    }
  }, [games, latestGamesData]);

  const handleClick = (genre) => {
    navigate(`/juegos/generos/${genre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('-')}`);
  }

  return (
    <>
      {activeGame == null ? (
        <div className="text-center w-100 mt-5">
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
      ) : (
        <div
          className="backgroundimage"
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 78%), rgb(181 92 181 / 6%)), url(${activeGame.detail[0].background})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundColor: "#1b2838",

          }}
        >
          {
            <section className="">
              {activeGame.requirements.toUpperCase().replace("-", " ") ===
                "BAJOS REQUISITOS" ? (
                <span className="badge bg-success d-flex justify-content-center p-3">
                  <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                  {activeGame.requirements.toUpperCase().replace("-", " ")}
                </span>
              ) : activeGame.requirements.toUpperCase().replace("-", " ") === "MEDIOS REQUISITOS" ? (
                <span className="badge bg-medium d-flex justify-content-center text-center p-3">
                  <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                  {activeGame.requirements.toUpperCase().replace("-", " ")}
                </span>
              ) : (
                <span className="badge bg-danger d-flex justify-content-center text-center p-3">
                  <FontAwesomeIcon icon={faGamepad} className="mx-3" />{" "}
                  {activeGame.requirements.toUpperCase().replace("-", " ")}
                </span>
              )}
              <div className="container ">
                <div className="row ">
                  <div className="col-md-8 mt-4 col-sm-12  ">
                    <div>
                      <h3 className="text-light text-center">
                        <b>{activeGame.name}</b>
                      </h3>
                      <hr className="text-light" />
                      <div className="cardDetailGame">
                        <div className="">
                          <p className="text-light">
                            <b>Lanzamiento:</b>{" "}
                            {activeGame?.detail[0]?.release_date?.date}
                          </p>
                          <p className="text-light">
                            <b>Desarrolladores:</b> {" "}
                            {activeGame?.detail[0]?.developers.map((dev, i) => {
                              if (activeGame?.detail[0]?.developers.length - 1 <= i) {
                                return <span key={dev} className="text-warning"> {dev}</span>
                              }
                              return <span key={dev} className="text-warning"> {dev}<span className="text-light"> | </span></span>
                            }
                            )}
                          </p>
                        </div>
                        <img
                          src={activeGame.header_image}
                          className="gameCardIdWallpaper w-75"
                        />
                        <p className="text-light  mt-3">
                          <b>Géneros:</b> {" "}
                          {activeGame?.detail[0]?.genres.map((dev, i) => {
                            if (activeGame?.detail[0]?.genres.length - 1 <= i) {

                              return <span key={dev.id} className="text-warning" onClick={() => handleClick(dev.description)}> {dev.description}</span>
                            }
                            return <span key={dev.id} className="text-warning" onClick={() => handleClick(dev.description)}> {dev.description}<span className="text-light"> | </span></span>
                          }
                          )}
                        </p>
                        <div className="text-light mb-5 cardDetailGame">
                          <h4>Descripción del juego: </h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: activeGame?.detail[0]?.short_description,
                            }}
                          ></p>
                        </div>
                      </div>
                      {/* Carousel images */}
                      <div className="mb-5 mt-5 carouselBorder">
                        <div
                          id="carouselIndice"
                          className="carousel slide"
                          data-bs-ride="true"
                        >
                          <div className="carousel-indicators">
                            {activeGame &&
                              activeGame.detail[0]?.screenshots.map((i) => (
                                <button
                                  type="button"
                                  key={i.id}
                                  data-bs-target="#carouselIndice"
                                  data-bs-slide-to={i.id}
                                  className={(i.id === 0) ? `active` : ``}
                                  aria-current="true"
                                  aria-label={`"Slide ${i.id + 1}"`}
                                ></button>
                              ))}
                          </div>
                          <div className="carousel-inner ">
                            {activeGame &&
                              activeGame.detail[0]?.screenshots.map(
                                (item, i) => (
                                  <div
                                    className={
                                      i === 0
                                        ? "carousel-item active"
                                        : "carousel-item"
                                    }
                                    key={item.id}
                                  >
                                    <img
                                      src={item.path_thumbnail}
                                      className="d-block w-100 imgCarousel"
                                      alt={activeGame.name}
                                    />
                                  </div>
                                )
                              )}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselIndice"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselIndice"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div className="cardDetailGame mt-2">
                        <h4 className="text-light">Requisitos del sistema:</h4>
                        <div className="d-flex requirements justify-content-center">
                          <div className="text-light w-50">
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  activeGame?.detail[0]?.pc_requirements
                                    ?.minimum,
                              }}
                            ></p>
                          </div>
                          <div className="text-light w-50">
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  activeGame?.detail[0]?.pc_requirements
                                    ?.recommended,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 mx-1 mb-5 text-center">
                        <a
                          href={activeGame.buyGame}
                          target="_blank"
                          className="text-light btn btn-success p-3 text-decoration-none"
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-light"
                          />{" "}
                          Comprar {activeGame.name}
                        </a>
                      </div>
                      <div className="cardDetailGame">
                        <h4 className="text-light">Observaciones del juego:</h4>
                        <p className="text-light">
                          {activeGame && activeGame.notes}
                        </p>
                      </div>

                      <div className="mt-5">
                        <h4 className="text-center mt-3 mb-3  ">Servidores de descarga</h4>
                        <hr />
                        {activeGame.downloadserver.map((server) => (
                          <div key={server.name}>
                            <button className="btn btn-primary w-100 mb-5">
                              <a
                                target="_blank"
                                className="text-decoration-none text-light mb-5"
                                href={`${server.url}`}
                              >
                                {server.name}
                              </a>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 mt-4">
                    <LastGameUploaded latestGamesData={latestGamesData} />
                  </div>
                </div>
                <Disqus url={url} id={params.id} name={activeGame.name} />
              </div>
            </section>
          }
        </div>
      )}
    </>
  );
};
