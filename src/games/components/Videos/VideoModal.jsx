import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useUiStore } from "../../hooks/useUiStore";
import { useVideoStore } from "../../hooks/useVideoStore";


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


export const VideoModal = () => {
    const {isYoutubeModalOpen, closeYoutubeModal } = useUiStore();
    const {startSavingVideo, activeVideo} = useVideoStore();

    const [formValues, setFormValues] = useState({
        name: '',
        iframe: '',
    })


    const onInputChange = ({ target }) => {
        setFormValues({
          ...formValues,
          [target.name]: target.value,
        });
      };

      const handleSave = async(event) => {
        event.preventDefault();
        await startSavingVideo(formValues);
        closeYoutubeModal()
      };


      useEffect(() => {
        if (activeVideo !== null) {
          setFormValues({ ...activeVideo});
        }
      }, [activeVideo]);

    return (
             <Modal
      isOpen={isYoutubeModalOpen}
      onRequestClose={closeYoutubeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={1000}
    >
         <form>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" value={formValues.name} onChange={onInputChange} className="form-control" name="name" placeholder="Ingresa el nombre del video" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Iframe:</label>
                    <textarea className="form-control" value={formValues.iframe} onChange={onInputChange} name="iframe" rows="3" placeholder="Ingresa el link del video (embed)"></textarea>
                </div>
                <button type="submit" onClick={handleSave} className="btn btn-primary">Enviar</button>
            </form>




    </Modal>
    )
}
