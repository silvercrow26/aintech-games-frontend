import React, { useEffect, useState } from "react";
import {
  AddDownloadServer,
  useDownloadServerStore,
  useGameStore,
  useUiStore,
} from "../index";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "60%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const GameModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { startSavingGame, activeGame } = useGameStore();
  const { downloadServers } = useDownloadServerStore();

  const [formValues, setFormValues] = useState({
    name: "",
    requirements: "",
    buyGame: "",
    mostDownloaded: "",
    notes: "",
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    startSavingGame(formValues);
    closeDateModal();
  };

  useEffect(() => {
    if (activeGame !== null) {
      setFormValues({ ...activeGame, downloadserver: downloadServers });
    }
  }, [activeGame, downloadServers]);

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={1000}
    >
      <h1> Editar juego </h1>
      <hr />
      <form className="container">
        <label>Nombre:</label>
        <input
          type="text"
          className="form-control"
          autoComplete="off"
          name="name"
          onChange={onInputChange}
          value={formValues.name}
        />
        <label>Requerimientos:</label>
        <input
          type="text"
          className="form-control"
          autoComplete="off"
          name="requirements"
          onChange={onInputChange}
          value={formValues.requirements}
        />
        <label>Comprar juego:</label>
        <input
          type="text"
          className="form-control"
          autoComplete="off"
          name="buyGame"
          onChange={onInputChange}
          value={formValues.buyGame}
        />

        <label>Mas Descargado:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={formValues.mostDownloaded}
          onChange={onInputChange}
          name="mostDownloaded"
        >
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
                <div className='col'>
                    <label>Requisitos:</label>
                    <select className="form-select" aria-label="Default select example"
                        id="requirements"
                        value={formValues.requirements}
                        onChange={onInputChange}
                        name='requirements'
                    >
                        <option value="altos-requisitos">Altos Requisitos</option>
                        <option value="medios-requisitos">Medios Requisitos</option>
                        <option value="bajos-requisitos">Bajos Requisitos</option>
                    </select>
                </div>
        <label>Notas:</label>
        <input
          type="text"
          className="form-control"
          autoComplete="off"
          name="notes"
          onChange={onInputChange}
          value={formValues.notes}
        />
        <label className="mt-2"> Server </label>
        <AddDownloadServer />
        <button
          type="submit"
          className={`btn btn-primary form-control my-2`}
          onClick={handleSave}
        >
          {" "}
          Guardar Juego
        </button>
      </form>
    </Modal>
  );
};
