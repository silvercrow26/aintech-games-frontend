import React, { useEffect } from 'react'
import { useVideoStore } from '../../hooks/useVideoStore';
import { VideoCard } from './VideoCard';

export const VideoItem = () => {
    const { videos } = useVideoStore();

    useEffect(() => {
      console.log(videos);
    }, [videos])
    
    return (
        <div>{videos.map(video => {
            <div className='p-5 text-light' key={video._id}><VideoCard {...video} /></div>
        })}</div>
    )
}
