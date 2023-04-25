import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGameHook } from '../../hooks/useGameHook'
import { useGameStore } from '../../hooks/useGameStore';
export const LastGameUploaded = ({latestGamesData}) => {
    const {setActiveGame } = useGameStore();
    return (
        <div className="mt-5">
        <h5 className="text-center mb-3 mt-5">Últimos juegos subidos</h5>
        <hr />
           {latestGamesData.map((item) => (
               <Link to={`/juegos/${item._id}`} onClick={() => setActiveGame(item)} key={item._id} >
               <div  className=" mb-3 bgCard" >
                   <img src={item.header_image} className="w-100"/>
               </div>
               </Link>
           ))}
        </div>
    )
}
