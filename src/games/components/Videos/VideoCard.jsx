import React from "react";

export const VideoCard = (video) => {
  return (
    <div className="">
      {video !== null ? (
        <>
          <div className="bgCard ">
            <iframe
              className="mt-2 w-100"
              width="460"
              height="315"
              src={video.iframe}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="mt-2">
              <h6 className="text-center mx-2 ">
                <b>{video.name}</b>
              </h6>
            </div>
          </div>
  
        </>
      ) : (
        <p>cargando...</p>
      )}
    
    </div>
  );
};
