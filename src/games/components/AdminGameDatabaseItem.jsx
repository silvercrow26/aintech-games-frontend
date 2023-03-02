import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useGameStore } from "../hooks/useGameStore";
import { useUiStore } from "../hooks/useUiStore";
import { useDownloadServerStore } from "../hooks/useDownloadServerStore";
import { AddDownloadServer } from "./AddDownloadServer";

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

Modal.setAppElement("#root");

export const AdminGameDatabaseItem = ({ game, gameSearch }) => {

  const {
    setActiveGame,
    startDeleteGame,
    startSavingGame,
    activeGame,
  } = useGameStore();

  const { isDateModalOpen, closeDateModal, openDateModal } = useUiStore();

  const { setDownloadServers, downloadServers } = useDownloadServerStore();



  const [formValues, setFormValues] = useState({
    name: "",
    requirements: "",
    buyGame: "",
    notes: "",
  });

  const handleEdit = () => {
    openDateModal();
    setActiveGame(game);
    setDownloadServers(game.downloadserver);
  };

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

  const handleDelete = () => {
    setActiveGame(game);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeleteGame(game);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    if (activeGame !== null) {
      setFormValues({ ...activeGame, downloadserver: downloadServers });
    }
  }, [activeGame, downloadServers]);

  return (
    <>
      <tr>
        <td>{game._id}</td>
        <td>{game.name}</td>
        <td>{game.steamId}</td>
        <td>{game.requirements.toUpperCase().replace("-", " ")}</td>
        <td className="">
          <button
            onClick={handleEdit}
            className="btn btn-outline-warning text-light"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>{" "}
          <br />{" "}
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger mt-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>

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
    </>
  );
};
