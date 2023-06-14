import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useVideoStore } from "../../hooks/useVideoStore";
import { DiscordWidget } from "../DiscordWidget";
import { YoutubeWidget } from "../YoutubeWidget";
import { VideoCard } from "./VideoCard";

export const VideoItem = () => {
  const { videos } = useVideoStore();

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-8">
        {videos.map((video) => (
          <div className="p-5 text-light" key={video._id}>
            <VideoCard {...video} />
          </div>
        ))}
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="backgroundCard">
          <p className="text-center">
            <b>
              ¡Informate sobre increibles sorteos y ofertas en nuestras redes!
            </b>
          </p>
        </div>
        <div className="d-flex justify-content-center mb-3 mt-2">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-light"
          size={"lg"}
        />
      </div>
        <YoutubeWidget />
        <div className="d-flex justify-content-center mb-3 mt-2">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-light"
          size={"lg"}
        />
      </div>
      <DiscordWidget/>
      </div>
    </div>
  );
};
