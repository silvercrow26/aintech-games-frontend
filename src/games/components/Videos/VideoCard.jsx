import React from 'react'

export const VideoCard = (video) => {

  return (
    <div>{video !== null ? (
        <h1>{video.name}</h1>
    ): (
    <p>cargando...</p>
    )}</div>
  )
}
