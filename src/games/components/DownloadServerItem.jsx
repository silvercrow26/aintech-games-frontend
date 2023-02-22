import React, { useEffect } from 'react'
import { useDownloadServerStore } from '../hooks/useDownloadServerStore';
import { getDownloadServersByGame } from '../selectors/getDownloadServersByGame';

export const DownloadServerItem = ({ gameId }) => {

  const { downloadServers, startLoadingDownloadServers } = useDownloadServerStore();

  const element = getDownloadServersByGame(gameId);


  useEffect(() => {
    startLoadingDownloadServers();
  }, [downloadServers]);

  return (
    <div>
      <label>Servidor: </label>
      {element.map((element) => (
          <a className='mx-2' key={element._id} href={element.url}
            target="_blank">
            {element.name}
          </a>
      ))
      }
    </div>
  )
}
