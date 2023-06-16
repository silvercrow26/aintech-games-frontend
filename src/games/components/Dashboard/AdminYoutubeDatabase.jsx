import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import { useVideoStore } from '../../hooks/useVideoStore';
import { AdminYoutubeDatabaseItem } from './AdminYoutubeDatabaseItem';
export const AdminYoutubeDatabase = () => {
    const { videos } = useVideoStore();

    return (
        <>
            <section className="container mb-5">
                <h2 className="text-center mt-5 mb-5">Administración de videos</h2>
                <div className="text-center">
                <Link to="/admin/newvideo" className="text-decoration-none" >
            <span className="backgroundAdminButtons p-3"><FontAwesomeIcon icon={faYoutube} /> Agregar Video de Youtube</span>
          </Link>
                </div>
                <table className="table table-dark table-hover table-responsive text-light container backgroundAdminSideBar mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Video</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
         {videos.map((video) =>  (
                 <AdminYoutubeDatabaseItem  video={video} key={video._id}/>
         )).reverse()}
        </tbody>
      </table>
            </section>
        </>
    )
}
