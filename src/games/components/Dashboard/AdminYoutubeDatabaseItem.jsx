import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { set } from 'date-fns/esm'
import React from 'react'
import { useVideoStore } from '../../hooks/useVideoStore'
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/useUiStore'
import { VideoModal } from '../Videos/VideoModal'


export const AdminYoutubeDatabaseItem = ({video}) => {

    const {videos, startDeleteVideo, setActiveVideo} = useVideoStore();
    const { openYoutubeModal } = useUiStore();
    const handleDelete = () => {
      setActiveVideo(video)
      Swal.fire({
        title: 'Estas seguro?',
        text: "esta acción no se podra revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            startDeleteVideo(video);
        }
    })

    }

    const handleEdit = () => {
        openYoutubeModal();
        setActiveVideo(video);
    }

    return (
        <tr>
            <td>{video?._id}</td>
        <td>{video?.name}</td>
        <td> <iframe
              className="mt-2 w-100"
              width="200"
              height="100"
              src={video.iframe}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe></td>
             <td className="">
                    <button  className="btn btn-outline-warning text-light" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <br />
                    <button  className="btn btn-outline-danger mt-2" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
           
           <VideoModal />
            
        </tr>
    )
}
