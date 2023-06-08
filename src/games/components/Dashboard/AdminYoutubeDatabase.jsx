import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
export const AdminYoutubeDatabase = () => {
    return (
        <>
            <section className="container mb-5">
                <h2 className="text-center mt-5 mb-5">Administración de videos</h2>
                <div className="text-center">
                <Link to="/admin/newvideo" className="text-decoration-none" >
            <span className="backgroundAdminButtons p-3"><FontAwesomeIcon icon={faYoutube} /> Agregar Video de Youtube</span>
          </Link>
                </div>
            </section>
        </>
    )
}
