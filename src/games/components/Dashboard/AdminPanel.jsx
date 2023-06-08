import React, { useState, useEffect } from 'react'
import { faCloudArrowUp, faDatabase, faGamepad, faServer, faSignal, faUsers} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useGameStore } from '../../index';
import logosinfondo from '../../../assets/logosinfondo.png'

export const AdminPanel = () => {

  const [gameHighRequirements, setGameHighRequirements] = useState([]);
  const [gameMediumRequirements, setGameMediumRequirements] = useState([]);
  const [gameLowRequirements, setGameLowRequirements] = useState([]);
  const { games } = useGameStore();

  const getLowRequirements = () => {
    const itemRequeriments = games.filter(
      (item) => item.requirements === "bajos-requisitos"
    );
    setGameLowRequirements(itemRequeriments);
  };

  const getHighRequirements = () => {
    const itemRequeriments = games.filter(
      (item) => item.requirements === "altos-requisitos"
    );
    setGameHighRequirements(itemRequeriments);
  };

  const getMediumRequirements = () => {
    const itemRequeriments = games.filter(
      (item) => item.requirements === "medios-requisitos"
    );
    setGameMediumRequirements(itemRequeriments);
  };

  useEffect(() => {
    getLowRequirements();
    getHighRequirements();
    getMediumRequirements();
  }, [])

  return (
    <section className="container text-center mt-2 p-3 pb-5 mb-5">
      <div>
        <h3 className="text-center text-light mt-3 mb-5 ">Dashboard</h3>

      </div>
      <div className="row">

        <div className="col-md-4 col-sm-12 text-center">
          <p className="text-center">Menu</p>
          <hr className="" />

          <div className="backgroundAdminButtons p-3 mb-3 ">
            <span className=""><FontAwesomeIcon icon={faDatabase} /> Users Database</span>
          </div>

          <Link to='/admin/gamedatabase' className="text-decoration-none">
            <div className="backgroundAdminButtons p-3 mb-3">
              <span><FontAwesomeIcon icon={faGamepad} /> Game Database</span>
            </div>
          </Link>
          <Link to="/admin/youtubedatabase" className="text-decoration-none">
          <div className="backgroundAdminButtons p-3 mb-3">
            <span><FontAwesomeIcon icon={faYoutube} /> Youtube Database</span>
          </div>
          </Link>
          <div className="backgroundAdminButtons p-3 mb-3">
            <span><FontAwesomeIcon icon={faUsers} /> Users Requests</span>
          </div>

          <div>
            <img src={logosinfondo} alt="Logo aintech Online" className="w-50" />
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <span><b> Estadisticas generales</b></span>
          <hr />

          <div className="backgroundCard p-3">
            <p className="text-center"><b className="titles ">Juegos creados:</b></p>
            <p className="small text-center"> {games.length} Juegos <b><FontAwesomeIcon icon={faCloudArrowUp} /></b></p>
          </div>
          <div className="d-flex justify-content-around mt-4">
            <div className="">
              <p className=" text-center"><b>Altos requerimientos</b></p>
              {gameHighRequirements.length} Juegos <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
            <div>
              <p  className=" text-center"><b>Medios requerimientos</b></p>
              {gameMediumRequirements.length} Juegos <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
            <div>
              <p  className=" text-center"><b>Bajos requisitos</b></p>
              {gameLowRequirements.length} Juegos <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
          </div>
          <div className="backgroundCard p-3 mt-3 text-center">
            <p className="titles text-center"><b>Cuentas creadas:</b></p>
            <p className="small text-center"> {games.length} Cuentas <b><FontAwesomeIcon icon={faCloudArrowUp} /></b></p>
          </div>
        </div>
      </div>
    </section>
  )
}
