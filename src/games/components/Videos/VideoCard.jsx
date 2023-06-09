import React from 'react'

export const VideoCard = (video) => {

    return (
        <div>{video !== null ? (
            <>
                <h1>{video.name}</h1>
                <div>
                    <iframe width="560" height="315" src={video.iframe} title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

            </>
        ) : (
            <p>cargando...</p>
        )}</div>
    )
}
